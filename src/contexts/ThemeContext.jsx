// ThemeContext

import { createContext } from "react";

const ThemeContext = createContext();

// ThemeContextProvider Component

const ThemeContextProvider = ({children}) => {
    return(
        <ThemeContext.Provider value={{theme : 'light'}}>
{children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider };
