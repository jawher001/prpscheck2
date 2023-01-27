import React from "react";
import PropTypes from "prop-types";
import ProfPic from "./ProfilePic";

const Profile = (props,) => {
  return (
    <div>
      {props.children}
      <h1 style={{color:"white"}}>FullName:{props.fullName}</h1>
      <h4 style={{color:"white"}}>Bio:{props.Bio}</h4>
      <h4 style={{color:"white"}}>Profession:{props.Profession}</h4>
      <button  style={{backgroundColor:"black",color:"white"}} onClick={() => props.handlclick(props.fullName)} >
        <h3>click me bro</h3>
      </button>
    </div>
  );
};
Profile.defaultProps = {
  fullName:"AY BRO PUT YOUR NAME",
  bio:"YOUR Bio TOO",
  profession:"AY WHAT DO YOU WORK"
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  
}
export default Profile;
