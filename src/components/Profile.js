import React from 'react'

const Profile = (props) => (
    <div className ="profile">
        <div>
        <img src={props.profiles.img_src} alt="" />
        </div>
        <h1><span className="name"></span></h1>
        <h4>California, LA</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>
            <h4>projects</h4>
            <h3>200</h3>
        </button>
    </div>
)

// function Profile() {
//     return (
//         <div>
            
//         </div>
//     )
// }

export default Profile
