import React from 'react'
import Link from 'next/link'
import Style from './page.module.css'

const Homepage = () => {
  return (
    <div>
      <ul className={Style.header}>
        <li><Link href='/'><b>Home</b></Link></li>
        <li><Link href='about'><b>About</b></Link></li>
        <li><Link href='/contact'><b>Contact</b></Link></li>
        <li><Link href='/service'><b>Service</b></Link></li>
      </ul>
      <h1>Welcome to Homepage</h1>
    </div>
  )
}

export default Homepage
