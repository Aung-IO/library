import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import darkIcon from "../assets/dark.svg";
import lightIcon from "../assets/light.svg";
import { AuthContext } from "../contexts/AuthContext";
import useSignOut from "../hooks/useSignOut";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  let [search, setSearch] = useState('');
  let navigate = useNavigate();
  let {user} = useContext(AuthContext);
  console.log(user);

  let handleSearch = (e) => {

    navigate ('/?search='+search);
  }

  let handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }
  
  let {logOut} = useSignOut();
  let signOutUser = async () => {
await logOut()
navigate('/login');
  }

  let {isDark, changeTheme} = useTheme()

  return (
    <div>
      <nav  className={`border border-b-1 ${isDark ? 'bg-dbg border-primary' : 'bg-white'}`}>
        <ul className="flex justify-between items-center p-3 max-w-6xl mx-auto">
          {/* search */}
          <li className="flex item-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill='none'
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={`${isDark ? 'white' : 'currentcolor'}`}
              className="w-6 h-5 my-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={handleKeyPress}
              type="text"
              placeholder="Search book..."
              className="outline-none hidden md:block px-2 py-1 rounded-lg"
            />
           
            <button
             onClick={handleSearch}
              className="text-white bg-primary px-3 py-1 rounded-2xl flex items-center gap-2"
            >
             
              <span className="hidden md:block">Search</span>
            </button>
          </li>
          {/* Logo */}
          <Link
            to="/"
            className="flex item-center gap-3 md:-ml-32 cursor-pointer"
          >
            <svg
              cla
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={`${isDark ? 'white' : 'currentcolor'}`}
              className="w-6 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>

            <span className="text-2xl font-bold text-primary hidden md:block">
              BookStore
            </span>
          </Link>
          
          {/* create book and profile */}
          <li className="flex gap-3 items-center">
            {/* create book */}

            <Link
              to="/create"
              className="text-white bg-primary px-3 py-2 rounded-2xl flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="hidden md:block">Add Book</span>
            </Link>
            {/* profile image */}

            <div className="w-11">
              <img
                src="https://d27v83ov1up738.cloudfront.net/user-profiles/zZR327gfuRcilZzkHjPyRIam50MpjeUoyVnGpy4W.jpg"
                alt=""
                className="w-full rounded-full"
              />
            </div>

            <div className="cursor-pointer">
              {isDark && <img src={lightIcon} alt="" className="w-8" onClick={() => { changeTheme('light')}}/>}
              {!isDark && <img src={darkIcon} alt="" className="w-8" onClick={() => {changeTheme('dark')}}/>}
            </div>

        <div className="space-x-3">
        {!user && <>
            <Link to={'/login'} className="border-2 border-primary rounded-lg px-2 py-1">SignIn</Link>
            <Link to={'/register'} className="bg-primary text-white rounded-lg px-2 py-1">Register</Link>
          </>}
           {!!user &&  <Link onClick={signOutUser} className="bg-red-500 text-white rounded-lg px-2 py-1">SignOut</Link>}
        </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
