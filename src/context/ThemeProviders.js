import React, {createContext, useContext, useState} from 'react';

const ThemesStyles = {
    dark:{
      backgrround:'#282c34',
      textColor: 'white'
    },
    ligh:{
      backgrround:'white',
      textColor: '#282c34'
    }
  }


const ThemeContext = createContext();


function ThemeProvider(props) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => theme === 'dark' ? setTheme('ligh') : setTheme('dark');
    const value = { theme: ThemesStyles[theme], toggleTheme, ThemeName: theme };
    return <ThemeContext.Provider value={value} {...props}/>
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider as default, useTheme };