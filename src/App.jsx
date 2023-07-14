import './App.css'
import HomeSection from './componnets/home-section/HomeSection'
import Navbar from './componnets/navbar/Navbar'
function App() {
  return (
    <>
      <div className='principal'>
        <div className='nav'>
          <Navbar></Navbar>
        </div>
        <div className='section-1'>
          <HomeSection></HomeSection>
        </div>
      </div>
    </>
  )
}

export default App
