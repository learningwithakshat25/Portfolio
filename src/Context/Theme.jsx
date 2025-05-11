import React, { createContext, useEffect, useState } from 'react'
export const ThemeContext = createContext();

const Theme = ({children}) => {
    const[theme, setTheme] = useState('light');

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove('dark');
        }

    },[theme]);

    const toggle = ()=>{
        setTheme(theme === "light" ? 'dark' : 'light');
        
    }

  return (
   <ThemeContext.Provider value={{theme,toggle}}>
        {children}
   </ThemeContext.Provider>
  )
}

export default Theme