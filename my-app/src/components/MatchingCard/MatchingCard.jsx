import './MatchingCard.css'; 
import ProfilePicture from './testProfilePic.jpg';
import acceptIcon from './acceptIcon.svg'
import rejectIcon from './rejectIcon.svg'

function MatchingCard({name, height, age, level, intro}) {
  return (
    <>
    <div className="matchingCard">
      <div className="userInfo">
        <p>Name</p>
        <p>Height</p>
        <p>Age</p>
        <p>Level</p>
      </div>
      <div className="userIntro"> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nulla tincidunt, viverra felis quis, ornare magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eget massa lectus. Integer dictum pharetra sem, in blandit eros ornare lacinia. Donec sit amet facilisis odio. Etiam at sodales tellus, quis pulvinar massa. Etiam ultrices dui ipsum, vel sollicitudin mi interdum ut. Nulla non elit neque. Morbi sed bibendum ex, vitae porttitor sapien. Quisque in tristique nibh. Suspendisse eros libero, suscipit in imperdiet sed, tempus quis ante.
      </div>
      <img src={ProfilePicture} className="profilePicture"/>
    </div>
    <div className="matchActions">
     <input type="image" src={rejectIcon}/>
     <input type="image" src={acceptIcon}/>
    </div>
    </>
  );
}

export default MatchingCard;
