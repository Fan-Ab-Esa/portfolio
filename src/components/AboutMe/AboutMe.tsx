import './aboutMe.css'
import comp from '../../assets/comp.jpg'
const AboutMe = () => {
  return (
    <div>
      <div className=' aboutHolder'>
        <div>
            <h1>Hi I am Fanuel</h1>
            Hardworking full stack developer with more than 3 years of experience on web and mobile apps. 
            I started web debelopment while working on a start up company called pollen silk. The journey
             has led me to use many frameworks. My tech stack is Mysql, Express,React, Node. Howeer 
            I am a serial learner and I have several other skills  such as java, aws, autocad, google api etc.
            Additionaly I can prgram android apps using java. 

        </div>
        <div className='codeImgHolder'>
        <img className='codeImg' src={comp} alt="Code" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
