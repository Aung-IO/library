import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeContextProvider } from './contexts/ThemeContext'
import './index.css'
import router from './router'


ReactDOM.createRoot(document.getElementById('root')).render(
<ThemeContextProvider>
    
    <RouterProvider router={router} />
</ThemeContextProvider>

)
