import React from 'react'
import ReactDOM from 'react-dom/client'

import AuthContextProvider from './contexts/AuthContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import './index.css'
import Router from './router'



ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
<ThemeContextProvider>
    
<Router/>
</ThemeContextProvider>
    </AuthContextProvider>

)
