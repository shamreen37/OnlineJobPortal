import React, { useState } from "react";
import "../components/CompanyComponents/CompanyCss/companyDashboard.css";
import logo from "../img/logo.png"
// Components to be displayed in the middle column
import Dashboard from "../components/CompanyComponents/Dashboard";
import PostJob from "../components/CompanyComponents/PostJob";
import CompanyProfile from "../components/CompanyComponents/CompanyProfile";
import ManageJobs from "../components/CompanyComponents/ManageJobs";
import Settings from "../components/CompanyComponents/Settings";
import Home from "./Home";
const CompanyDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const handleItemClick = (name) => {
    setActiveComponent(name);
  };

  return (
   <section className="profile-section">
    
     <div className="profile-container">
      {/* Side Navigation Bar */}
      <div className="com-sidebar">
      <img className="company-dash-logo mx-auto" src={logo}/>
          <h4 className="my-3">Company Name</h4>
          <div></div>
        <div
          className={activeComponent === "Dashboard" ? "active item" : "item"}
          onClick={() => handleItemClick("Dashboard")}
        >
        <i class="fa-solid fa-house company-nav-icon"></i>  Company Dashboard
        </div>
        <div
          className={activeComponent === "Profile" ? "active item" : "item"}
          onClick={() => handleItemClick("Profile")}
        >
        <i class="fa-solid fa-users company-nav-icon"></i> Company  Profile
        </div>
        <div
          className={activeComponent === "Post Job" ? "active item" : "item"}
          onClick={() => handleItemClick("Post Job")} >
         <i class="fa-solid fa-paper-plane company-nav-icon"></i> Post a new Job
        </div>
        <div
          className={activeComponent === "Manage Jobs" ? "active item" : "item"}
          onClick={() => handleItemClick("Manage Jobs")}
        >
         <i class="fa-solid fa-briefcase company-nav-icon"></i> Manage Jobs
        </div>
        <div
          className={activeComponent === "Settings" ? "active item" : "item"}
          onClick={() => handleItemClick("Settings")}
        >
        <i class="fa-solid fa-gear company-nav-icon"></i>  Settings
        </div>


        <div className={activeComponent === "Logout" ? "active item" : "item"}>
        <i class="fa-solid fa-right-from-bracket company-nav-icon"></i>  Logout
        </div>

      </div>

      {/* Middle Column */}
      <div className="middle-column">
        {activeComponent === "Dashboard" && <Dashboard/>}
        {activeComponent === "Profile" && <CompanyProfile/>}
        {activeComponent === "Post Job" && <PostJob/>}
        {activeComponent === "Manage Jobs" && <ManageJobs/>}
        {activeComponent === "Settings" && <Settings/>}
        {/* {activeComponent === "Logout" && <Home/>} */}
      </div>

      {/* Right Column */}
      <div className="right-column">
        {/* <p>Some content for the right column</p> */}
       <p> <i class="fa-solid fa-house company-home-logo"></i> Home </p> 
      </div>
    </div>
   </section>
  );
};

export default CompanyDashboard;