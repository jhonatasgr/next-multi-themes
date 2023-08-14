import {
  Fragment,
  FunctionComponent,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ThemeProviderProps, UseThemeProps } from './types'

export const isServer = typeof window === 'undefined'
export const ThemeContext = createContext<UseThemeProps | undefined>(undefined)
export const defaultContext: UseThemeProps = { setTheme: () => {} }

export const useTheme = () => useContext(ThemeContext) ?? defaultContext

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = (props) => {
  const context = useContext(ThemeContext)

  if (context) return <Fragment>{props.children}</Fragment>
  return <Theme {...props} />
}

function Theme({ children }: ThemeProviderProps) {
  const [attribute, setAtribute] = useState('')
  const [themes, setThemes] = useState(() => getTheme())

  const setTheme = useCallback((theme: string, attribute: string = 'theme') => {
    setThemes((prev) => ({ ...prev, [attribute]: theme }))
    try {
      setToStorage(attribute, theme)
      setAtribute(attribute)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const applyTheme = useCallback(
    (theme: ThemeProviderProps | undefined, attribute: string) => {
      const name = theme
      const doc = document.documentElement

      if (name) {
        if (typeof name === 'object' && name !== null) {
          Object.entries(name).forEach(([key, value]) => {
            return doc.setAttribute('data-' + key, value)
          })
        } else {
          doc.setAttribute('data-' + attribute, name)
        }
      } else {
        doc.removeAttribute(attribute)
      }
    },
    [],
  )

  useEffect(() => {
    return applyTheme(themes, attribute)
  }, [applyTheme, attribute, themes, setThemes])

  const providerValue = useMemo(
    () => ({
      themes,
      setTheme,
    }),
    [themes, setTheme],
  )

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )
}

// functions

export function setToStorage(attribute: string, theme: string) {
  localStorage.setItem('data-' + attribute, theme)
}
export function getTheme() {
  if (isServer) return undefined

  const matchingItems: { [key: string]: string | null } = {}
  const searchTerms = ['data-', 'theme']

  Object.keys(localStorage).forEach((key) => {
    const value = localStorage.getItem(key)

    const matchFound = searchTerms.some(
      (term) => key.includes(term) || (value && value.includes(term)),
    )

    if (matchFound) {
      const transformedKey = key.replace(
        new RegExp(`(${searchTerms.join('|')})`),
        '',
      )
      matchingItems[transformedKey] = value
    }
  })
  return matchingItems
}
