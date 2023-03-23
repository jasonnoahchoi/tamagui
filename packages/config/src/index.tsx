export * from './media'
export * from './createGenericFont'
export { animations } from './animations'

import { animations } from './animations'
import { createTamaguiConfig } from './createTamaguiConfig'

export const config = createTamaguiConfig(animations)
