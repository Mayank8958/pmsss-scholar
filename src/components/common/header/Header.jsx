import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/docsub'>Submit application</Link>
            </li>
            <li>
              <Link to='/'>Help</Link>
            </li>
            <li>
              <Link to='/'>College Assistance</Link>
            </li>
            <li>
              <Link to='/'>Alum Connection</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'><Link className="abcd" to='/adhaarv'>ADHAAR VERIFICATION</Link></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
