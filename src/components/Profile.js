import React from 'react'
import Footer from './Footer'

const Profile = (props) => (
    <div className ="profile">
        <div className="image-cropper">
             <img width="auto" height="100rem" src={props.profiles.img_src} alt="" className="profile-pic"/>
        </div>
       
        <h1>
            <span className="name">
                {props.profiles.name}
            </span>
        </h1>
        
        <h4>California, LA</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        
        <Footer />
   
    </div>
)

// function Profile() {
//     return (
//         <div>
            
//         </div>
//     )
// }

export default Profile
