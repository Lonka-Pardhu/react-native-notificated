import type { DefaultKeys, defaultVariants } from './defaultConfig'
import type { ImageSourcePropType } from 'react-native'

export type DefaultVariants = typeof defaultVariants
export type NotificationVariants = keyof DefaultVariants
export type IconVisualStyle = 'color' | 'monochromatic' | 'no-icon'
export type Theme = 'regular' | 'dark'
export type BorderType = 'border' | 'accent' | 'no-border'

export type IconsLinksTypes = {
  [key in DefaultKeys]: {
    color: ImageSourcePropType
    white: ImageSourcePropType
    black: ImageSourcePropType
  }
}

export type NotificationOwnProps = {
  title?: string
  description: string
  onPress?: () => void | undefined
}

export type NotificationStyleConfig = Partial<{
  titleSize: number
  titleColor: string
  descriptionSize: number
  descriptionColor: string
  bgColor: string
  borderRadius: number
  accentColor: any
  borderWidth: number
  multiline: number
  defaultIconType: IconVisualStyle
  leftIconSource: ImageSourcePropType
  borderType: BorderType
}>