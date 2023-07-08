// ThemeContext

import { createContext, useReducer } from "react";

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
        theme : 'light' // default state
    })

let changeTheme = (theme) => {
    // action -> type + payload -> {type , payload}
    dispatch({ type : "CHANGE_THEME" , payload : theme})
}



    return(
        <ThemeContext.Provider value={{...state, changeTheme}}>
{children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider };
