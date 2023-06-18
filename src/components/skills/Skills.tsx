import './skils.css'
import vidio from '../../assets/laptop_-_61037 (540p).mp4'
import {AiFillHtml5,AiOutlineConsoleSql} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import{IoLogoJavascript} from 'react-icons/io'
import {FaReact,FaNodeJs,FaJava,FaNpm,FaBootstrap} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'

const Skills = () => {
    const arr=[{icon:AiFillHtml5,name:'HTM5'},
                {icon:DiCss3,name:'CSS 3'},
                {icon:FaBootstrap,name:'Bootstrap'},
                {icon:IoLogoJavascript,name:'JavaScript'},
                {icon:FaReact,name:'React.js'},
                {icon:FaNodeJs,name:'Node.js'},
                 {icon:SiExpress,name:'Express.js'},  
                {icon:FaNpm,name:'npm'},
                {icon:AiOutlineConsoleSql,name:'SQL'},
                 {icon:FaJava,name:'Java'}, 
               
            ]


         

  return (
    <div id='skillsId'
      className='m-1 m-md-2 m-lg-3 m-xl-4 skillContainer text-white'>
 
      <div className='h1'>What I do</div>
      <div className='d-flex flex-wrap'>
          <div className='videoContainer  w_md_50'>
              <video  loop src={vidio}  autoPlay muted className='vidioClass' />
          </div>
          <div className=' w_md_50'>
            <div className='h3'>A full stack developer with proven track record of getting the job done.</div>
            <div className='d-flex flex-wrap'>
              {
                  arr.map((item)=>{
                      return <div  key={item.name} className=" skillCard ">
                                  <item.icon className="skillIcon "/>
                                  <p className="skillName ">{item.name}</p>    
                              </div>
                  })
              }
            </div>
            <ul>
                <li> Develop highly interactive Front end / User Interfaces for web and mobile applications</li>
                <li>Progressive Web Applications ( PWA ) in normal and SPA Stacks</li>
                <li>Integration of third party services such as mysql/ AWS / heroku</li>
            </ul>
          </div>
        </div>

        
       
    
    </div>
  )
}

export default Skills
