import React, { useEffect, useState } from 'react'
import './Nav.css'
const Nav = () => {
    const[show, setHandleShow]=useState(false)

    const transitionNavBar=()=>{
        if(window.scrollY>100)
            setHandleShow(true)
        else
            setHandleShow(false)
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar)
        return ()=>{
            window.addEventListener('scroll',transitionNavBar)
        }
    },[])

  return (
    <div className={`nav ${show&&'nav__black'}`}>
        <div className='nav__contents'>
            <img 
            className='nav__logo'
            src="https://www.logolynx.com/images/logolynx/47/475d1347c9edb2c7aee523875f09f2f0.png"
            alt="logo"
            />

            <img 
            className='nav__avatar'
            src='https://www.bing.com/th?id=OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa&w=98&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
            alt="avatar"
            />
        </div>
    </div>
  )
}

export default Nav