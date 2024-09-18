import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>PMSSS</h1>
            <span>Scholarship Portal</span>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This template is made <i className='fa fa-heart'></i> by team runtime_error
        </p>
      </div>
    </>
  )
}

export default Footer
