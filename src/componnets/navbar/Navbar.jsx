import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className='container'>
        <ul className='menu-opciones'>
          <li className='opciones'>
            <a className='opc' href='#'>
              ABOUT
            </a>
            <a className='opc' href='#'>
              PROJECTS
            </a>
            <a className='opc' href='#'>
              KNOWLEDGE
            </a>
            <a className='opc' href='#'>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
