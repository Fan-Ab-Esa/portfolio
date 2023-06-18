import './contacts.css'
import {GiRotaryPhone}from 'react-icons/gi'
import {BsGithub,BsLinkedin} from 'react-icons/bs'
const Contacts = () => {
  return (
    <div className='contactContainer ' id='contactId'>
      <div className='textCenter'><GiRotaryPhone className='phoneIcon'/></div>
      <div className='  font_size_2' >Contact me</div>
      <div className='textCenter'>DISCUSS A SUBJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</div>
      <div className='textCenter'>+1 (___) ___ ____</div>
      <div className='textCenter'>Email</div>
      <div className='textCenter '>
       <a href="" target='_blank'> <BsGithub className='linkIcon'/></a> 
       <a href="" target='_blank'><BsLinkedin className='linkIcon'/></a>
       <a href="" target='_blank'><button className=' resumeBtn'>Resume</button></a>
       <a href="" target='_blank'><button className=' resumeBtn'>Certificates</button></a>
      </div>

    </div>
  )
}

export default Contacts
