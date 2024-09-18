import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import Head from "../../common/header/Header";
import { Link } from "react-router-dom"; 

function dashinp() {
  document.getElementById("bttttn").innerText = "Dashboard work is in Progress";
}

const Hero = () => {
  return (
    <>
      <Head />
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO THE PORTAL' title='Scholarship to SUCCESS' />
            <p>The digital way to fund the education of students.</p>
          </div>
          
          {/* Keep .shift outside of .row but inside .container */}
         
        </div>
      </section>
      <div className="shift">
            <button className='primary-btn' onClick={dashinp} id="bttttn">
              TRACK YOUR PROGRESS<i className='fa fa-long-arrow-alt-right'></i>
            </button>
            <Link to='/docsub'>
              <button >SUBMIT APPLICATION<i className='fa fa-long-arrow-alt-right'></i></button>
            </Link> 
          </div> 
      <div className='margin'></div>
    </>
  );
}

export default Hero;
