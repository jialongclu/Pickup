import React from 'react'
import UserMatchCard from '../UserMatchCard/UserMatchCard'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync } from "../../redux/users/thunks";

const UserMatches = () => {

  const users = useSelector((state) => state.users.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);
  

  let content = users.map(user => (
    <UserMatchCard 
      firstName={user.firstName} 
      lastName={user.lastName}
      age={user.age}
      height={user.height}
      skillLevel={user.skillLevel}
      phoneNumber={user.phoneNumber}
      />
  ))
  
  return (
    <div>
    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'/>
  <h1 className="h1-text">
      <i className="fa fa-group fa-lg"></i>Your Matches
  </h1>
  <div className="container">
    {content}
  </div>
</div>
    
  )
}

export default UserMatches