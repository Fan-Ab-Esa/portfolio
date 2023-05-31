import ps from '../../assets/ps_logo.png'
import mysqlImg from '../../assets/mysql.jpg'
import './experience.css'
const Experience = () => {
  return (
    <>
      <h1 className='ms-4 ps-4 '>Experience</h1>
      <div className='text-bg-dark expHolder'>
        <div className='expPSContainerDiv'>
           <h2 className="card-title" style={{fontSize:'4vw',fontWeight:'600'}}>Pollen Silk Technology Inc.</h2>
           <img src={ps} alt="Pollen Silk"  className='w-25 pollenSilkLogo mt-2' />
        </div>
       
        <div className="experienceJobDiv">
         <h1 className='fullStackDeveloper'>Full Stack Developer </h1> 
         <h3 className='workDuration'>June 2019 - present</h3>
          </div>
        
        <ul className='ms-2 pb-4'>
          <li>I worked on the website of pollen silk startup company</li>
          <li>Front end development</li>
          <li>Back-end development with node and express</li>
          <li>Database management</li>
          <li>Developing demo android app with java</li>
      
        </ul>
      </div>

      <div className='card moreWorkContainer'>
        <h3>Database</h3>
        <p>MySql databse mentainence and security update</p>
        <img src={mysqlImg} alt="MySql"  className='card-img moreWorkImg' />
      </div>
    </>
  )
}

export default Experience
