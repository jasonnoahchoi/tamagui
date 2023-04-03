import { ThemeTint } from '@tamagui/logo'
import { Timer, Waves } from '@tamagui/lucide-icons'
import {
  AnimationDriverTogglerContextProvider,
  useAnimationDriverToggler,
} from 'hooks/useAnimationDriverToggler'
import React from 'react'
import { Theme, TooltipSimple, XStack, YStack, styled } from 'tamagui'
import { Switch } from 'tamagui'

import { ErrorBoundary } from './ErrorBoundary'

export function HeroContainer({
  children,
  demoMultiple,
  smaller,
  noPad,
  noScroll,
  alignItems,
  minimal,
  tinted,
  showAnimationDriverControl = false,
}: {
  minimal?: boolean
  demoMultiple?: boolean
  children?: React.ReactNode
  smaller?: boolean
  noPad?: boolean
  noScroll?: boolean
  alignItems?: any
  tinted?: boolean
  showAnimationDriverControl?: boolean
}) {
  const contents = (
    <YStack
      className={(minimal ? '' : 'hero-gradient') + (noScroll ? '' : ' hero-scroll')}
      boc="$borderColor"
      bw={0.5}
      mt="$4"
      mb="$4"
      position="relative"
      display="flex"
      alignItems={alignItems || 'center'}
      justifyContent="center"
      py={70}
      pos="relative"
      minHeight={300}
      y={0}
      borderRadius="$4"
      {...(noPad && {
        py: 0,
      })}
      $gtMd={{
        mx: smaller ? 0 : '$-4',
      }}
    >
      <AnimationDriverTogglerContextProvider>
        <ErrorBoundary>
          {demoMultiple ? (
            <XStack maxHeight="100%" maxWidth="100%" justifyContent="flex-start">
              <XStack space="$3" px="$8">
                <Theme reset>
                  <Card>{children}</Card>
                </Theme>
                <Theme name="blue">
                  <Card>{children}</Card>
                </Theme>
                <Theme name="red">
                  <Card>{children}</Card>
                </Theme>
                <Theme name="pink">
                  <Card>{children}</Card>
                </Theme>
                <Theme name="orange">
                  <Card>{children}</Card>
                </Theme>
                <Theme name="green">
                  <Card>{children}</Card>
                </Theme>
                <Theme name="yellow">
                  <Card>{children}</Card>
                </Theme>
              </XStack>
            </XStack>
          ) : (
            children
          )}
        </ErrorBoundary>
        <XStack
          position="absolute"
          display="inline-flex"
          alignItems="center"
          justifyContent="space-between"
          top={16}
          l="$3"
          $gtMd={{
            l: '$4',
          }}
        >
          {showAnimationDriverControl && <AnimationControl />}
        </XStack>
      </AnimationDriverTogglerContextProvider>
    </YStack>
  )

  if (tinted) {
    return <ThemeTint>{contents}</ThemeTint>
  }

  return contents
}

const Card = styled(YStack, {
  ai: 'center',
  jc: 'center',
  elevation: '$1',
  y: 0,
  ov: 'hidden',
  minWidth: 180,
  bc: '$background',
  minHeight: 220,
  br: '$4',
})

const AnimationControl = () => {
  const animationDriverToggler = useAnimationDriverToggler()

  return (
    <TooltipSimple label={`${animationDriverToggler.driverName} animation driver`}>
      <XStack zIndex={100000000} space="$2" ai="center">
        <Timer size={14} opacity={0.6} />
        <Switch
          size="$1"
          theme="Switch"
          checked={animationDriverToggler.driverName === 'react-native'}
          onCheckedChange={(val) =>
            animationDriverToggler.setDriverName(val ? 'react-native' : 'css')
          }
        >
          <Switch.Thumb />
        </Switch>
        <Waves size={14} opacity={0.6} />
      </XStack>
    </TooltipSimple>
  )
}