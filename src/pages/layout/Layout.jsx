import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <nav>

 
    <ul>
      <li>Home</li>
      <li>Create</li>
      <li>Search</li>
    </ul>

    </nav>
    <Outlet/>
  
    </>
  )
}
