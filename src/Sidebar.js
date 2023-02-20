import React from 'react'
import { Link } from 'react-scroll'

const Sidebar = () => {
  return (
    <div className='li2'>
        <ul>
          <li><Link activeClass="active" to="home" spy={true} smooth={true}>Profile</Link></li>
          <li><Link  to="about" spy={true} smooth={true}>Education</Link></li>
          <li><Link  to="contact" spy={true} smooth={true}>Technical-Skills</Link></li>
          <li><Link  to="service" spy={true} smooth={true}>Experience</Link></li>
          <li><Link  to="hobbies" spy={true} smooth={true}>Hobbies</Link></li>

            </ul>
    </div>
  )
}

export default Sidebar
