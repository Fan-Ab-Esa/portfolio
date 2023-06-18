import tmu from '../../assets/TMU-rgb.png'
import './education.css'
const Education = () => {
  return (
    <div className='educationContainer '  data-aos="fade-right">
           <h1 className='ps-4'>Education</h1>
        <div className=' educationImgTxtBox'>
            <img className='tmuImg' src={tmu} alt="TMU" />
            <div className='fw-bold'>Toronto Metropolitan University</div>
            <div>Computer Engineering</div>
            <div>Sep 2014 - May 2019</div>
            <div>Graduated with a degree</div>
        </div>
        
    </div>
    
  )
}

export default Education
