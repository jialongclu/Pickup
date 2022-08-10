import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import ProfilePicture from "./testProfilePic.jpg";
import "./MatchingCard.css";

function MatchingCard(props) {
  return (
    <Card variant="outlined" className="matchingCard">
      <CardContent className="cardContent">
        <CardMedia
          className="profilePicture"
          sx={{ width: "10rem" }}
          component="img"
          image={props.image || ProfilePicture}
          alt="Profile"
        />
        <Typography className="bio" variant="body1">
          {props.bio}
        </Typography>
      </CardContent>
      <div className="userInfo">
        <Typography className="fieldLabel" variant="h8" color="text.primary">
          Name: {props.firstName}
        </Typography>
        <Typography variant="h8" color="text.primary">
          Height: {props.height} cm
        </Typography>
        <Typography variant="h8" color="text.primary">
          Age: {props.age}
        </Typography>
        <Typography variant="h8" color="text.primary">
          Level: {props.skillLevel}
        </Typography>
      </div>
    </Card>
  );
}

export default MatchingCard;
