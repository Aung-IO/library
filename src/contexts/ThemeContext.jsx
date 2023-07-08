// ThemeContext

import { createContext, useEffect, useReducer } from "react";

const ThemeContext = createContext();


let ThemeReducer = (state , action) => {
switch (action.type) {
    case "CHANGE_THEME":
        return{...state, theme : action.payload}  // ...state -> theme : light, action.payload -> theme : dark
        

    default: return state // theme : light
        
}
}
// ThemeContextProvider Component

const ThemeContextProvider = ({children}) => {



    let [state, dispatch] = useReducer(ThemeReducer, {
        theme : localStorage.getItem("theme") || "light" // Retrieve the theme from localStorage, or default to "light"
    })

let changeTheme = (theme) => {
    // action -> type + payload -> {type , payload}
    dispatch({ type : "CHANGE_THEME" , payload : theme})
}

const isDark = state.theme === 'dark';

useEffect( () => {
    localStorage.setItem("theme", state.theme) // Save the current theme
} , [state.theme])

    return(
        <ThemeContext.Provider value={{...state, changeTheme , isDark}}>
{children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider };
