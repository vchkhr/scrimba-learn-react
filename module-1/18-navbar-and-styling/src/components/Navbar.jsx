/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import logo from '../assets/react.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div class="logo-title">
        <img src={logo} />
        <h1 className="title">ReactFacts</h1>
      </div>

      <div class="nav-links">
        <a href="#">React Course - Project 1</a>
      </div>
    </nav>
  )
}
