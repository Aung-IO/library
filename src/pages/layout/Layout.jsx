import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Navbar from "../../components/Navbar";
import './Style.css';


export default function Layout() {
  
  const location = useLocation();
 


  return (
    <>
      <Navbar />

      <SwitchTransition>
        <CSSTransition timeout={200} classNames='fade'  key={location.pathname}>

      <div className="max-w-6xl mx-auto p-6">
        <Outlet />
      </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}
