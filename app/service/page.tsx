import React from 'react'
import Link from 'next/link'

const Servicepage = () => {
  return (
    <div>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='about'>About</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
        <li><Link href='/service'>Service</Link></li>
      </ul>
      <h1>This is Servicepage</h1>
    </div>
  )
}

export default Servicepage
