import React from "react"
import profileimg from "../IMG/user_1177568.png";
import NavbarCustom from "../Home componets/Navbar_custom";


export default function Profile() {
    return(
        <div className="profile">
            <NavbarCustom />
            <div className="profile-container">
                <div className="profile-head" style={{width: '100%', height: '20%', background: 'linear-gradient(87deg, #0047FF 0%, rgba(0, 239.70, 255, 0.80) 100%)', borderRadius: 20}}>
                        <h1>Abhiram Patankar</h1>
                        <img src={profileimg} alt="loading" />
                </div>
                <div className="info-container">
                    <div className="prn-year">
                        <h3 className="main">PRN</h3>
                        <h3 className="main-info">22010abc</h3>
                        <h3 className="main">Year</h3>
                        <h3 className="main-info">B.Tech</h3>
                        
                    </div>
                    <div className="mail-mob">
                        <h3 className="main">Email ID</h3>
                        <h3 className="main-info">xyz.22010abcg@viit.ac.in</h3>
                        <h3 className="main">Department</h3>
                        <h3 className="main-info">Computer Engineering</h3>
                        {/* <h3 className="main">Mobile No</h3>
                        <h3 className="main-info">7709946xyz</h3> */}
                    </div>
                    {/* <div className="dep">
                        <h3 className="main">Department</h3>
                        <h3 className="main-info">Computer Engineering</h3>
                    </div> */}
                </div>
            </div>
        </div>
    )
}