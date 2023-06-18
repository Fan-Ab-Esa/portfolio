import image from '../../assets/user.jpg'
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useState} from 'react'
interface handelInterface{
    han:(navId:string)=>void;
    
}
const NavBar = ({han}: handelInterface) => {

    const [theme,setTheme]=useState(true)
    const [expand,setExpand]=useState(false)
    const classText=" navbar navbar-collapse navbar-expand-md"
  return (
    
 <div className={ theme? "my-navbar-div-dark"+classText:"my-navbar-div-light"+classText} >
  
    <ul className={ "navbar-nav d-flex justify-content-centerS "} style={{width:'100%'}}>
     <div className='ms-4 fs-4 text-white d-flex  justify-content-between pe-4'>
        <div className= {theme?'text-white':'text-dark'}>
            Name
            <img src={image} alt="logo" width={'20px'} style={{borderRadius:'50%'}} className='d-none'/>
        </div> 
        <div className='d-md-none'>
        <GiHamburgerMenu style={{color:theme?'white':'black'}} onClick={()=>setExpand(!expand)}/> 
        </div>
            
      </div>
    <div style={{width:'calc(100% - 700px)'}}></div>
        <li onClick={()=>han('skillsId')}
            className={expand?"d-none nav-item ms-4  d-md-inline mt-2": " nav-item ms-4 pt-2  d-md-inline" }>
           <span className={ theme?'text-white':'text-dark'}> Skills</span>
        </li>
        <li onClick={()=>han('experienceId')}
            className={expand?"d-none nav-item ms-4  d-md-inline mt-2": " nav-item ms-4 pt-2  d-md-inline" }>
            <span className={ theme?'text-white':'text-dark'}> Work Experience</span>
        </li>
        <li onClick={()=>han('contactId')}
            className={expand?"d-none nav-item ms-4  d-md-inline mt-2": " nav-item ms-4 pt-2  d-md-inline" }>
            <span className={ theme?'text-white':'text-dark'}> Contact</span>
        </li>
     
        <div className={expand?"d-none nav-item ms-4  d-md-inline  pt-2": " nav-item ms-4 pt-2 d-md-inline" } >
        <div className="form-check form-switch d-inline-block  switch-wrap ">
            <input type="checkbox" className="form-check-input switch-btn d-none" id='lightDark' onChange={()=>setTheme(!theme)} />
            <label htmlFor="lightDark " className={theme?'text-light d-none':'text-dark'}>{theme?'dark':'light'}</label>
        </div>
        </div>
      
        
    
    </ul>
    
</div>


  )
}

export default NavBar
