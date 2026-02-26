import React, {useState, useMemo, useContext, createContext, useCallback} from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    
    const themeChange = useCallback(() => {
        setTheme(prev => prev=="light"?"dark":"light")
    }, [])
    const value = useMemo (() => { return {theme, themeChange}}, [theme])
    
    return (
    <div>
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    </div>
    )
}
