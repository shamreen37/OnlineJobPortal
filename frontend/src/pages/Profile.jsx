import React, { useState } from "react";
import "../css/profile.css";
import profile from "../img/profile-img.png"

// Components to be displayed in the middle column
import Profile1 from "../components/Profile1";
import Profile2 from "../components/Profile2";
import Profile3 from "../components/Profile3";
import Profile4 from "../components/Profile4";
import Profile5 from "../components/Profile5";
import NavbarInner from "../components/NavbarInner";

const Profile = () => {
  const [activeComponent, setActiveComponent] = useState("Basic Details");

  const handleItemClick = (name) => {
    setActiveComponent(name);
  };

  return (
   <section className="profile-section">
    <NavbarInner/>
     <div className="profile-container">
      {/* Side Navigation Bar */}
      <div className="sidebar">
<h3 className="text-center mb-3">User Profile</h3>

        <img src={profile} alt="" className="side-nav-profile m-auto"/>
        <h5 className="mt-2 text-center">Angela McConnel</h5>
        <p className="text-center">Developer | Coder | Learner </p>
                 
        <div
          className={activeComponent === "Basic Details" ? "active item" : "item"}
          onClick={() => handleItemClick("Basic Details")}
        >
         <i class="fa-solid fa-user profile-side-icon"></i> Basic Details
        </div>
        <div
          className={activeComponent === "skills" ? "active item" : "item"}
          onClick={() => handleItemClick("skills")}
        >
         <i class="fa-solid fa-diagram-project profile-side-icon"></i>  Skills
        </div>
        <div
          className={activeComponent === "posts" ? "active item" : "item"}
          onClick={() => handleItemClick("posts")}
        >
         <i class="fa-solid fa-laptop-file profile-side-icon"></i> Work Experience
        </div>
        <div
          className={activeComponent === "friends" ? "active item" : "item"}
          onClick={() => handleItemClick("friends")}
        >
        <i class="fa-regular fa-folder-open profile-side-icon"></i>  Projects
        </div>
        <div
          className={activeComponent === "Resume" ? "active item" : "item"}
          onClick={() => handleItemClick("Resume")}
        >
        <i class="fa-regular fa-file-lines profile-side-icon"></i>  Resume
        </div>

      </div>

      {/* Middle Column */}
      <div className="middle-column">
        {activeComponent === "Basic Details" && <Profile1/>}
        {activeComponent === "skills" && <Profile5/>}
        {activeComponent === "posts" && <Profile2/>}
        {activeComponent === "friends" && <Profile3 />}
        {activeComponent === "Resume" && <Profile4 />}
      </div>

      {/* Right Column */}
      <div className="right-column">
        {/* <p>Some content for the right column</p> */}
      </div>
    </div>
   </section>
  );
};

export default Profile;