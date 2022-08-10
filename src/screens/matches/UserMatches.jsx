import React, { useState, useEffect } from "react";
import UserMatchCard from "../../components/UserMatchCard/UserMatchCard";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync } from "../../redux/users/thunks";
import { getMatches } from "./useMatches";

const UserMatches = () => {
  const [matches, setMatches] = useState([]);

  const users = useSelector((state) => state.users.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
    const fetchData = async () => {
      const matches = await getMatches();
      setMatches(matches);
    };
    fetchData();
  }, []);

  let content = matches.map((user) => (
    <UserMatchCard
      firstName={user.firstName}
      lastName={user.lastName}
      age={user.age}
      height={user.height}
      skillLevel={user.skillLevel}
      phoneNumber={user.phoneNumber}
      image={user.image}
    />
  ));

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <h1 className="h1-text">
        <i className="fa fa-group fa-lg"></i>Your Matches
      </h1>
      <div className="container">{content}</div>
    </div>
  );
};

export default UserMatches;
