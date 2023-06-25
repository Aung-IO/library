import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './Style.css'


export default function Layout() {
  
  const location = useLocation();
  console.log(location.pathname);


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
