import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
       

        </div>
        <ul
          tabIndex="0"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Home</a></li>
        <li>
          Product
        </li>
        <li><a>About</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li>
          Product
        </li>
        <li><a>About</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Login</a>
    </div>
  </div>
  )
}

export default Navbar