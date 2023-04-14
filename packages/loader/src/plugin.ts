import { TamaguiOptions, watchTamaguiConfig } from '@tamagui/static'
import type { Compiler, RuleSetRule } from 'webpack'

type PluginOptions = TamaguiOptions & {
  commonjs?: boolean
  exclude?: RuleSetRule['exclude']
  test?: RuleSetRule['test']
  jsLoader?: any
  disableEsbuildLoader?: boolean
  disableModuleJSXEntry?: boolean
  disableWatchConfig?: boolean
}

export class TamaguiPlugin {
  pluginName = 'TamaguiPlugin'

  constructor(
    public options: PluginOptions = {
      components: ['@tamagui/core'],
    }
  ) {}

  apply(compiler: Compiler) {
    if (!this.options.disableWatchConfig) watchTamaguiConfig(this.options)

    // mark as side effect
    compiler.hooks.normalModuleFactory.tap(this.pluginName, (nmf) => {
      nmf.hooks.createModule.tap(
        this.pluginName,
        // @ts-expect-error CreateData is typed as 'object'...
        (createData: { matchResource?: string; settings: { sideEffects?: boolean } }) => {
          if (createData.matchResource?.endsWith('.tamagui.css')) {
            createData.settings.sideEffects = true
          }
        }
      )
    })

    compiler.options.resolve.extensions = [
      ...new Set([
        '.web.tsx',
        '.web.ts',
        '.web.js',
        '.ts',
        '.tsx',
        '.js',
        ...(compiler.options.resolve.extensions || []),
      ]),
    ]

    // look for compiled js with jsx intact as specified by module:jsx
    const mainFields = compiler.options.resolve.mainFields
    if (mainFields) {
      compiler.options.resolve.mainFields = Array.isArray(mainFields)
        ? mainFields
        : [mainFields]
      if (!this.options.disableModuleJSXEntry) mainFields.unshift('module:jsx')
    }

    if (!compiler.options.module) {
      return
    }

    const { jsLoader } = this.options

    const existing = compiler.options.module.rules as any[]

    const rules =
      (existing.find((x) => (typeof x === 'object' && 'oneOf' in x ? x : null))
        ?.oneOf as any[]) ?? existing

    const nextJsRules = rules.findIndex(
      (x) => x?.use && x.use.loader === 'next-swc-loader' && x.issuerLayer !== 'api'
    )

    const startIndex = nextJsRules ? nextJsRules + 1 : 0
    const existingLoader = nextJsRules ? rules[startIndex] : undefined

    if (!this.options.disableEsbuildLoader)
      rules.splice(startIndex, 0, {
        test: this.options.test ?? /\.m?[jt]sx?$/,
        exclude: this.options.exclude,
        resolve: {
          fullySpecified: false,
        },
        use: [
          ...(jsLoader ? [jsLoader] : []),
          ...(existingLoader && nextJsRules ? [].concat(existingLoader.use) : []),
          ...(!(jsLoader || existingLoader)
            ? [
                {
                  loader: require.resolve('esbuild-loader'),
                  options: {
                    target: 'es2021',
                    keepNames: true,
                    loader: {
                      '.tsx': 'tsx',
                      '.png': 'copy',
                      '.jpg': 'copy',
                      '.gif': 'copy',
                    },

                    tsconfigRaw: {
                      module: this.options.commonjs ? 'commonjs' : 'esnext',
                      isolatedModules: true,
                      jsx: 'preserve',
                      resolveJsonModule: true,
                    },
                  },
                },
              ]
            : []),
          {
            loader: require.resolve('tamagui-loader'),
            options: {
              ...this.options,
            },
          },
        ],
      })
  }
}