import { useState ,createContext } from "react"

export const ThemeContext = createContext()

export const themes = {
    light: {
        color: '#484B6A',
        primaryColor: '#CFCFD9',
        secondaryColor: '#9394A5',
        moldureColor: '#D2D3DB',
        backgroundColor: '#FAFAFA'
    },
    dark: {
        color: '#F5F5DC',
        primaryColor: '#2E3239',
        secondaryColor: '#484B5D',
        moldureColor: '#696D7A',
        backgroundColor: '#26292B'
    }
}

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {props.children}
    </ThemeContext.Provider>
    )
}