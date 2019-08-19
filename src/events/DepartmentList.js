import React from 'react';
import "../res/events.css";
import department from '../data/dept.json';
import {Link} from 'react-router-dom';
class DepartmentList extends React.Component{
	render(){
		return (
			<div  className="events">
			<div
				data-aos="fade-zoom-in"
				data-aos-offset="100"
				data-aos-easing="ease-in-sine"
				data-aos-duration="1000"
			  >
			<div>        
				<div align="center">
				  <h6 className="top">Events</h6>
				  <img
				  className="headline"
					style={{width:"80%"}}
					src={require("../images/Heading_Line.svg")}
					alt={""}
				  />

				<h6 style={{color:"#ff9800",marginTop:"5%"}}>Departments</h6>
				</div>
				<div className="card-set">
				{Object.keys(department).map((x) => (
					 <Link to={`/events/${x}`} className="card-set-child" >
					<div align="center">
						<div className="customdiv">
                      <img
					  src={require("../images/Capsule.svg")}  alt={x}/>
					  </div>
					  <p className="dept-name">
					  {department[x].displayName}
					  </p>
					</div>
					 </Link>
				  ))}
				</div>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			  </div>
			  </div>
			</div>
		  );
		// return(
		// 	<div>
		// 	<Helmet>
		// 	<title>Organizers | Invente 4.0 </title>
		//   </Helmet>
		//   <Navigator title={"Invente"} />
		// <div  className="organisers">
        // <div
        //     data-aos="fade-zoom-in"
        //     data-aos-offset="100"
        //     data-aos-easing="ease-in-sine"
        //     data-aos-duration="1000"
        //   >     
        //     <div align="center">
        //       <h6>Events</h6>
        //       <img
        //       className="headline"
        //         style={{width:"80%"}}
        //         src={require("../images/Heading_Line.svg")}
        //         alt={""}
        //       />
        //     </div>
        //     <div className="card-set">
        //       {Object.keys(department).map(x=><Link  to={`/events/${x}`}>
        //         <div className="card-set-child " align="center" >
        //           <img className="img" src={require("../images/organisers/fac-BME.jpg")} alt={""}/>
        //           <p className="staff-name">
		// 		  {department[x].displayName}
        //             <br />
        //             <h3 className="dept-name">{department[x].displayName}</h3>
        //           </p>
        //         </div>
		// 		</Link>)}
        //     </div>
            
        //   </div>
        //   </div>
		//   </div>
		// // return <div className={'whatsapp'}>
		// // 			<div  style={{minHeight:'100vh',margin:'auto'}} className='row wrap centerify maxi960'>
		// // 				{Object.keys(department).map(x=><Link  to={`/events/${x}`} className='transywhite x-center 8m-8m 8p-8p department-link'>
		// // 				<ProgressiveImage
		// // 					preview={`https://images.ssninvente.com/small/${x}.png`}
		// // 					src={`https://images.ssninvente.com/designericons/department/${x}.png`}
		// // 					render={(src, style) => <img src={src} style={{width:'150px',height:'150px'}} />}
		// // 				/>
		// // 				{/*	<img  style={{width:'150px',height:'150px'}}   src={`https://images.ssninvente.com/designericons/department/${x}.png`}/>*/}
		// // 					<div className='8p-
							
		// // 					16p text-center'>
		// // 						{department[x].displayName}
		// // 						</div>
		// // 				</Link>)}
		// // 			</div>;
		// // 		</div>
		// );};
}
}

export default DepartmentList;
