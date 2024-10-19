import React from 'react'
import Link from 'next/link'

const Aboutpage = () => {
  return (
    <div>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='about'>About</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
        <li><Link href='/service'>Service</Link></li>
      </ul>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  )
}

export default Aboutpage
