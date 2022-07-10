// Starter Code - https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js
import Tindercard from "react-tinder-card";
import MatchingCard from '../../components/MatchingCard';
import FilterBar from '../../components/FilterBar';
import './MatchingScreen.css';
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useMemo,useRef, useEffect } from 'react';
import { getUsersAsync } from "../../redux/users/thunks";


function MatchingScreen() {

    const users = useSelector((state) => state.users.list);

    const [currentIndex, setCurrentIndex] = useState(users.length - 1)
    const [lastDirection, setLastDirection] = useState()

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getUsersAsync());
    }, []);
  
    const currentIndexRef = useRef(currentIndex)
  
    const childRefs = useMemo(
      () =>
        Array(users.length)
          .fill(0)
          .map((i) => React.createRef()),
      []
    )
  
    const updateCurrentIndex = (val) => {
      setCurrentIndex(val)
      currentIndexRef.current = val
    }
  
    const canSwipe = currentIndex >= 0
  
    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
      setLastDirection(direction)
      updateCurrentIndex(index - 1)
    }
  
    const outOfFrame = (name, idx) => {
      console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
      // handle the case in which go back is pressed before card goes outOfFrame
      currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
      // TODO: when quickly swipe and restore multiple times the same card,
      // it happens multiple outOfFrame events are queued and the card disappear
      // during latest swipes. Only the last outOfFrame event should be considered valid
    }
    
  
     const swipe = async (dir) => {
      if (canSwipe && currentIndex < users.length) {
        await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
      }
    }
    
    return (
        <div className="matchingScreen">
          <FilterBar />
          <div className="matchingCardsContainer">
            {users.map((user,index) => (
              <Tindercard
                ref={childRefs[index]}
                className="swipe"
                key={user.firstName}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, user.firstName,index)}
                onCardLeftScreen={() => outOfFrame(user.firstName,index)}
              >
                <MatchingCard 
                    firstName={user.firstName}
                    lastName={user.lastName}
                    skillLevel={user.skillLevel}
                    age={user.age}
                    height={user.height}
                    gender={user.gender}
                    swipe={swipe}
                />
              </Tindercard>
            ))}
          </div>
        </div>
      );
}

export default MatchingScreen;

