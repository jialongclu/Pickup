import React from 'react'
import './UserMatchCard.css';
import ProfilePicture from './testProfilePic.jpg';

const UserMatchCard = (props) => {
  
  
  return (
    <div className="box">
     
      <div className="content">
        <img src={ProfilePicture} />
        <p className="userName">{props.firstName} {props.lastName}</p>
        <div className="contactInformation">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <p>{props.phoneNumber}</p>
        </div>
      </div>
      <div className="userStats">
        <p>Age: {props.age} </p> 
        <p>{props.skillLevel}</p>
      </div>
</div>
  )
}

export default UserMatchCard