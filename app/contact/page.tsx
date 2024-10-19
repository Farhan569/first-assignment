import React from 'react'
import Link from 'next/link'

const Contactpage = () => {
  return (
    <div>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='about'>About</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
        <li><Link href='/service'>Service</Link></li>
      </ul>
      <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet nesciunt deleniti officia, iste rem sunt sed voluptate reprehenderit sint aut error, nulla neque magni quae, enim maiores aperiam qui!</p>
    </div>
  )
}

export default Contactpage
