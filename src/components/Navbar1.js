
import React,{useState} from 'react'
import { Link } from 'react-router-dom'


export default function Navbar1(props) {
  

 
  return (
    <>
      <nav className={`navbar navbar-expand-lg  ${props.theme} `}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">about</Link>
              </li>


            </ul>
            <div className={`form-check form-switch ${props.theme} mx-5`}>
              <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">{`${props.mode.theme === 'Enable' ? 'Disable' : 'Enable'} Theme`}</label>
            </div>
            <span id='red'className='th-red' onClick={props.chngTheme}></span>
            <span id='blue' className='th-blue' onClick={props.chngTheme}></span>
            <span id='green' className='th-green' onClick={props.chngTheme}></span>
            <span id='black' className='th-black' onClick={props.chngTheme}></span>
          </div>
        </div>
      </nav>
          
    
    </>
  )
}
