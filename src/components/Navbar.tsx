import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="link">
                <Link className='link' to="/?cat=java">
                    <h6>Java</h6>
                </Link>
                <Link className='link' to="/?cat=plsql">
                    <h6>Oracle PL/SQL</h6>
                </Link>
                <Link className='link' to="/?cat=apex">
                    <h6>Oracle Apex</h6>
                </Link>
                <Link className='link' to="/?cat=node">
                    <h6>NodeJS</h6>
                </Link>
                <Link className='link' to="/?cat=react">
                    <h6>ReactJS</h6>
                </Link>
                <span>Cuong Tran</span>
                <span>Logout</span>
                <span className='write'> 
                    <Link className='link' to="/write">
                        Write
                    </Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar