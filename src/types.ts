interface Theme {
  [key: string]: string | null
}

export interface UseThemeProps {
  /** The first prop  update the theme, the second prop which is optional provides the name for the attribute, so it doesn't overwrite other themes  */
  setTheme: (theme: string, attribute?: string) => void
  /** Current themes */
  themes?: Theme
}

export interface ThemeProviderProps {
  children?: React.ReactNode
}
