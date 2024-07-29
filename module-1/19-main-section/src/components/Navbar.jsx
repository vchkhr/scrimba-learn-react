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
