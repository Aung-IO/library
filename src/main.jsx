import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthContextProvider from './contexts/AuthContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import './index.css'
import router from './router'


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
<ThemeContextProvider>
    
    <RouterProvider router={router} />
</ThemeContextProvider>
    </AuthContextProvider>

)
