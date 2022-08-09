// Starter Code - https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js
import Tindercard from "react-tinder-card";
import MatchingCard from "../../components/MatchingCard";
import FilterBar from "../../components/FilterBar";
import "./MatchingScreen.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useMemo, useRef, useEffect } from "react";
import { getUsersAsync } from "../../redux/users/thunks";
import { createInteraction } from "./useMatching";
import { useNavigate } from "react-router-dom";

function MatchingScreen() {
  const users = useSelector((state) => state.users.list);
  const currentUser = useSelector((state) => state.users.user);
  const filters = useSelector((state) => state.filters);
  const [filteredUsers, setfilteredUsers] = useState([]);
  const navigate = useNavigate();

  const filterUserAge = (filterVal, user, filteredUsers) => {
    switch (filterVal) {
      case "any":
        return true;
      case "10-15":
        return (user.age >= 10) & (user.age <= 15);
      case "16-28":
        return (user.age >= 16) & (user.age <= 28);
      case "29+":
        return user.age >= 29;
      default:
    }
  };

  useEffect(() => {
    if (Object.keys(currentUser).length === 0) {
      navigate('/')
    }
  }, [currentUser])

  const filterUserHeight = (filterVal, user, filteredUsers) => {
    switch (filterVal) {
      case "any":
        return true;
      case "under 165cm":
        return user.height <= 165;
      case "165cm-185cm":
        return (user.height >= 165) & (user.height <= 185);
      case "over 185cm":
        return user.height >= 185;
      default:
    }
  };

  const filterUserLevel = (filterVal, user) => {
    return (
      user.skillLevel.toLowerCase() === filterVal.toLowerCase() ||
      filterVal.toLowerCase() === "any"
    );
  };

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  useEffect(() => {
    var filusers = [];
    for (var user of users) {
      if (
        filterUserHeight(filters.heightFilter, user) &&
        filterUserAge(filters.ageFilter, user) &&
        filterUserLevel(filters.skillLevelFilter, user)
      ) {
        filusers.push(user);
      }
    }
    setfilteredUsers((prevState) => filusers);
  }, [filters, users]);

  const [currentIndex, setCurrentIndex] = useState(users.length - 1);
  const [lastDirection, setLastDirection] = useState();

  const dispatch = useDispatch();

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = async (direction, nameToDelete, index, userIdSwiped) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    if (direction === "left") {
      await createInteraction(false, userIdSwiped);
    } else if (direction === "right") {
      await createInteraction(true, userIdSwiped);
    }
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir, userId) => {
    console.log("fwfw");
    if (dir === "left") {
      await createInteraction(false, userId);
    } else if (dir === "right") {
      await createInteraction(true, userId);
    }
    if (canSwipe && currentIndex < users.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };
  return (
    <div className="matchingScreen">
      <FilterBar />
      <div className="matchingCardsContainer">
        {filteredUsers.length === 0 && <div>No Users Found</div>}
        {filteredUsers.map((user, index) => (
          <Tindercard
            ref={childRefs[index]}
            className="swipe"
            key={user.firstName}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, user.firstName, index, user._id)}
            onCardLeftScreen={() => outOfFrame(user.firstName, index)}
          >
            <MatchingCard
              userId={user._id}
              firstName={user.firstName}
              lastName={user.lastName}
              skillLevel={user.skillLevel}
              age={user.age}
              height={user.height}
              gender={user.gender}
              swipe={swipe}
              bio={user.bio}
              image={user.image}
            />
          </Tindercard>
        ))}
      </div>
    </div>
  );
}

export default MatchingScreen;
