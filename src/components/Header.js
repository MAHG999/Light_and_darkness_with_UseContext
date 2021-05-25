import React from 'react';
import { useTheme } from '../context/ThemeProviders';
import logo from '../../src/logo.svg';

const Header = ( ) =>{
    const {theme, toggleTheme, ThemeName} = useTheme();
    return(
        <header className="App-header" style={{backgroundColor: theme.backgrround, color: theme.textColor}}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Current Theme is "{ThemeName}"
            </p>
            <button onClick={toggleTheme}>
                Toggle Button
            </button>
        </header>
    )
}

export default Header;