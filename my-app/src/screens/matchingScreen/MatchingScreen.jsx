import Tindercard from "react-tinder-card";
import MatchingCard from '../../components/MatchingCard';
import './MatchingScreen.css';
import { selectAllUsers } from "../../redux/users/reducer";
import { useSelector } from "react-redux";

function MatchingScreen() {
    
    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };

    const users = useSelector(selectAllUsers);
    
    return (
        <div className="matchingScreen">
          <div className="matchingCardsContainer">
            {users.map((user) => (
              <Tindercard
                className="swipe"
                key={user.firstName}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, user.firstName)}
                onCardLeftScreen={() => outOfFrame(user.firstName)}
              >
                <MatchingCard 
                    firstName={user.firstName}
                    lastName={user.lastName}
                    skillLevel={user.skillLevel}
                    age={user.age}
                    height={user.height}
                    gender={user.gender}
                />
              </Tindercard>
            ))}
          </div>
        </div>
      );
}

export default MatchingScreen;

