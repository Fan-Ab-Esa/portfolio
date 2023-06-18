
import mysqlImg from '../../assets/mysql.jpg'
import awsImg from '../../assets/aws_logo.png'
import map from '../../assets/map.jpg'
import stripe from '../../assets/Stripe wordmark - slate.png'
import './experience.css'
const Experience = () => {
  return (
    <div className='container-xxl' id='experienceId'>
      <h1 className='ms-4 ps-4 text-white' style={{fontSize:'5vw',fontWeight:'700'}}>Experience</h1>
      <div className=' expHolder'>
        <div className='expPSContainerDiv'>
           <h2 className="" style={{fontSize:'4vw',fontWeight:'600'}}>Startup</h2>
         
        </div>
       
        <div className="experienceJobDiv">
         <h1 className='fullStackDeveloper'>Full Stack Developer </h1> 
         <h3 className='workDuration'>June 2019 - present</h3>
          </div>
        
        <ul className='ms-1 pb-4' >
          <li>I worked on the website of a startup company</li>
          <li>Front end development</li>
          <li>Back-end development with node and express</li>
          <li>Database management</li>
          <li>Developing demo android app with java</li>
      
        </ul>
      </div>
      
    <div className='d-flex flex-wrap' style={{backgroundColor:'rgb(19, 17, 17)'}}>
        <div className=' moreWorkContainer bg-dark text-white '>
          <div className=' work-title'>Database</div>
          <div className='card-text  moreWorkText '>MySql databse security update</div>
          <img src={mysqlImg} alt="MySql"  className='card-img moreWorkImg' />
        </div>
        <div className=' moreWorkContainer bg-dark text-white '>
          <div className=' work-title'>Aws</div>
          <div className='card-text moreWorkText'>Aws buckets and automatic file storage</div>
          <img src={awsImg } alt="aws"  className='card-img moreWorkImg' />
        </div>
        <div className=' moreWorkContainer  bg-dark text-white '>
          <div className=' work-title'>Google api</div>
          <div className=' moreWorkText d-block'>Map interface and distance calculation</div>
          <img src={map} alt="map"  className='card-img moreWorkImg' />
        </div>
        <div className=' moreWorkContainer bg-dark text-white'>
          <div className=' work-title'>Payment</div>
          <div className=' moreWorkText'>Stripe payment system integration</div>
          <img src={stripe} alt="stripe"  className='card-img moreWorkImg' style={{backgroundColor:'whitesmoke'}} />
        </div>
      </div>
      

      
    </div>
  )
}

export default Experience
