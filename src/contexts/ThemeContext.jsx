// ThemeContext

import { createContext } from "react";

const ThemeContext = createContext();

// ThemeContextProvider Component

const ThemeContextProvider = ({children}) => {
    return(
        <ThemeContext.Provider value={{theme : 'dark'}}>
{children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider };
