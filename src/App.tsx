import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import AboutAnim from './components/aboutAnim/AboutAnim'
import Contacts from './components/contacts/Contacts'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import NavBar from './components/navbar/NavBar'
import Skills from './components/skills/Skills'
import { useEffect } from 'react'


function App() {
  const handelNavClick=(navId:string)=>{
    document.getElementById(navId)?.scrollIntoView({behavior:'smooth'})
  }

  const [show, setShow] = useState(true);
  const [previousY, setPrevY] = useState(0);

 const navbarFunc = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > previousY) { // if scroll down hide the navbar
        setShow(false); //hide
      } else { 
        setShow(true)  //show
        
      }
      setPrevY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', navbarFunc);
      return () => {
        window.removeEventListener('scroll', navbarFunc);
      };
    }
  }, [previousY]);
 /** Credit https://stackoverflow.com/questions/69473259/how-to-show-or-hide-navbar-when-scroll-use-react-js */
  
  return (
    <div className='bg-dark fullHeight' > 

      <div  style={{zIndex:'2' ,position:'fixed',width:'100%'}} className={show?'navShow':'navHide'}>
        <NavBar  han={handelNavClick} />
      </div>

    <div className='d-sm-flex flex-wrap' style={{paddingTop:'80px'}}>
        <AboutMe/>
        <AboutAnim/>
    </div>
    <Experience />
 
    <Education/>
    <Skills/>
    <Contacts/>
  
   
    </div>
  )
}

export default App
