import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Anim from './components/Anim/Anim'
import AnimTwo from './components/AnimTwo/AnimTwo'
import Nav from './components/Nav/Nav'
import Transition from './components/Transition/Transition'
import NavBar from './components/navbar/NavBar'
function App() {
  return (
    <div className='bg-secondary full-height' > 
    <NavBar/>
    <AboutMe/>
      <Anim/>
      <AnimTwo/>
      <Transition/>
      <Nav/>
     
    </div>
  )
}

export default App
