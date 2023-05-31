import './aboutAnim.css'
import computers from '../../assets/computers.jpg'
import developer from '../../assets/developer.jpg'
import easygo from '../../assets/easygo.jpg'
import work from '../../assets/work.jpg'
const AboutAnim = () => {
  return (
    <>
      <div  className='aboutAnimParent'>
        <div className="aboutAnimationfirstChild">
        <div  className='handImgDiv'>
        <div className='bg-dark hand-wrist'  />
        </div>
        </div> 
        <div className='screenDiv'> 
          <div className='screenDataOne screenData'>
            <h2 className='ps-3' style={{position: 'absolute',width:'100%' ,color:'blue',backgroundColor:'yellow',opacity:'70%'}}> 
              Easy Going 
            </h2> 
            <img src={easygo} style={{width:'100%', height:"100%"}} alt="computers"  />
          </div> 
          <div className='screenDataTwo screenData bg-white'>
            <h5 style={{position: 'absolute',left:'5%',top:'5%'}}>
              3+ years of experience
              </h5>
            <img src={computers} style={{height:'100%'}} alt="computers"  />
          </div>
         
          <div className='screenDataThree screenData'>
          <h3 style={{position: 'absolute',left:'3%',top:'0%'}}>
            Hard Worker
            </h3>
            <img src={work} style={{width:'100%',height:'100%' }} alt="computers"  />
          </div>
          <div className='screenDataFour screenData bg-white'>
            <h4 className='ps-3' style={{position: 'absolute',left:'0%',top:'0%'}}>
            Full stack developer
            </h4>
            <img src={developer} style={{width:'100%',height:'80%',position:'absolute',top:'30%'}} alt="computers"/>
          </div>
        
        </div>
        </div>
     </>
  )
}

export default AboutAnim
