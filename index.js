import React from 'react';
import Calculator from "./src/Calculator";
import { ThemeContextProvider } from './src/ThemeContext';


export default ({showLiveResult, scientific, customize, theme}) => {
    return (
        <ThemeContextProvider>
            <Calculator showLiveResult={showLiveResult} scientific={scientific} customize={customize} theme={theme}/>
        </ThemeContextProvider>
    );
}