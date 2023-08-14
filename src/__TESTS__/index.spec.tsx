import { render, screen } from '@testing-library/react'
import { ThemeProvider, getTheme, setToStorage } from '..'
import React from 'react'

describe('ThemeProvider', () => {
  it('should render children when theme context is available', () => {
    const mockContextValue = { themes: {}, setTheme: jest.fn() }
    jest.spyOn(React, 'useContext').mockReturnValue(mockContextValue)

    render(
      <ThemeProvider>
        <div>Child Component</div>
      </ThemeProvider>,
    )
    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })

  it('should renders Theme component when context does not exis', () => {
    jest.spyOn(React, 'useContext').mockReturnValue(undefined)

    render(
      <ThemeProvider>
        <div>Theme Component</div>
      </ThemeProvider>,
    )
    expect(screen.getByText('Theme Component')).toBeInTheDocument()
  })
})
describe('setToStorage', () => {
  it('should set item in localStorage', () => {
    const attribute = 'test-attribute'
    const theme = 'test-theme'

    localStorage.clear()

    setToStorage(attribute, theme)

    expect(localStorage.getItem('data-' + attribute)).toBe(theme)
  })
})
describe('getTheme', () => {
  it('should returns matching theme items from localStorage', () => {
    localStorage.clear()

    localStorage.setItem('data-attribute1', 'theme1')
    localStorage.setItem('data-attribute2', 'theme2')

    const result = getTheme()
    expect(result).toEqual({
      attribute1: 'theme1',
      attribute2: 'theme2',
    })
  })
  it('should return an empty object no matching theme items exist', () => {
    localStorage.clear()

    const result = getTheme()

    expect(result).toEqual({})
  })
})
