import React from 'react'
import logo from '../images/Logo@1x.png';
import gif from '../images/loading.gif';
import { Link } from 'react-router-dom';
export default function Loading() {

let screenHeight = window.screen.height;

  return (
    <div className='loading' style={{height: `${screenHeight}px `}}>
        <img src={logo} alt='logo' />
        <Link to={'/app'}> 👉 Enter the world of Fruits </Link>
        <img src={gif} alt='gif' />
    </div>
  )
}
