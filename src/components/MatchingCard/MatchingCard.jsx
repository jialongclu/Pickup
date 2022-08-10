import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  CardMedia,
} from "@mui/material";
import "./MatchingCard.css";
import ProfilePicture from "./testProfilePic.jpg";
import { CheckCircleOutline, HighlightOff } from "@mui/icons-material";

function MatchingCard(props) {
  return (
    <Card variant="outlined" className="matchingCard">
      <div className="userInfo">
        <Typography variant="h6" color="text.primary">
          Name: {props.firstName}
        </Typography>
        <Typography variant="h6" color="text.primary">
          Height: {props.height}
        </Typography>
        <Typography variant="h6" color="text.primary">
          Age: {props.age}
        </Typography>
        <Typography variant="h6" color="text.primary">
          Level: {props.skillLevel}
        </Typography>
      </div>
      <CardContent className="cardContent">
        <CardMedia
          className="profilePicture"
          sx={{ width: "10rem" }}
          component="img"
          image={props.image || ProfilePicture}
          alt="Profile"
        />
        <Typography variant="body1" color="text.secondary">
          {props.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="Reject"
          onClick={() => {
            props.swipe("left", props.userId);
          }}
        >
          <HighlightOff />
        </IconButton>
        <IconButton
          aria-label="Accept"
          onClick={() => props.swipe("right", props.userId)}
        >
          <CheckCircleOutline />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default MatchingCard;
