import React from 'react'
import Sidebar from './sidebar'
import {Helmet} from 'react-helmet'
class Registration extends React.Component{


    render(){
        return <div  align="">
               <Sidebar />
            <div className="register-area">
                 <Helmet>
                     <title>Registration | Invente 4.0</title>
                 </Helmet>
                 <br/><br/><br/><br/>
               <div align="center" className="register-instructions" style={{alignContent:"center"}}>
                 <span style={{fontSize:"20px",color:"#ff9800"}}> Instructions to be followed:</span> 
                   <ul className="register-points">
                       <br/>
                     <li>All Students must bring their college ID Card</li>
                     <li>The entry fee for different events are as follows:
                       <div algin="center" className="align-center" style={{textAlign:"left"}}>
                     <ul >
                     <br/>
                        <li>• General registration – 120 / person</li>
                        <li>• Deep learning and Computer Vision workshop – 300 / person </li>
                        <li>• Artificial Intelligence and Machine learning – 350 / person </li>
                        <li>• 3D printing – 300 / person </li>
                        <li>• Civil Workshop – 250 / person </li>
                        <li>• Virtual Reality – 600 / person or 800 / team of 2 or 1200 / team of 3 </li>
                        <li>• Ex log – 200 / team of 3 </li>
                      </ul>
                      <br/>
                      </div>
                      <li>Payment must be made on spot </li>
                      <li> Workshop participants must be at the venue 30 mins prior the scheduled time.</li>
                      <li> Students who have registered can take part in the events on both days, 21</li>
                      <li> September and 22nd September 2018 (Applicable only for General Registration)</li>
                      </li>
                       </ul>
               </div>
               <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div>
            {/* <iframe style={{height:'1000px',width:'100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLSf0onykh03arSsorpFzBKQ_WW3kuEyOzbHRYzd1twm9Fqv_sQ/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> */}
            {/*<iframe id="formdata" src="https://docs.google.com/forms/d/e/1FAIpQLSecQVbxa6NGzCmZrSp9-Gyqb1Tu1b435rVcRm73_6Aomn6yCg/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>*/}
            </div>
            </div>
            </div>
    }
}
export default Registration
