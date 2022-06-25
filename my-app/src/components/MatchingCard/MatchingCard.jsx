import {
    Card,
    CardContent,
    CardActions,
    IconButton,
    Typography,
    CardMedia
} from '@mui/material';
import './MatchingCard.css';
import ProfilePicture from './testProfilePic.jpg';
import { CheckCircleOutline, HighlightOff } from '@mui/icons-material';

function MatchingCard({ name, height, age, level, intro }) {

    return (
        <Card variant="outlined" className="matchingCard">
            <div className="userInfo">
                <Typography variant="h6" color="text.primary">
                    Name
                </Typography>
                <Typography variant="h6" color="text.primary">
                    Height
                </Typography>
                <Typography variant="h6" color="text.primary">
                    Age
                </Typography>
                <Typography variant="h6" color="text.primary">
                    Level
                </Typography>
            </div>
            <CardContent className="cardContent">
                <CardMedia
                    className="profilePicture"
                    sx={{ width: '10rem' }}
                    component="img"
                    image={ProfilePicture}
                    alt="Profile"
                />
                <Typography variant="body1" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam non nulla tincidunt, viverra felis quis, ornare
                    magna. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia curae; Curabitur eget massa
                    lectus. Integer dictum pharetra sem, in blandit eros ornare
                    lacinia. Donec sit amet facilisis odio. Etiam at sodales
                    tellus, quis pulvinar massa. Etiam ultrices dui ipsum, vel
                    sollicitudin mi interdum ut. Nulla non elit neque.
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="Reject">
                    <HighlightOff />
                </IconButton>
                <IconButton aria-label="Accept">
                    <CheckCircleOutline />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default MatchingCard;
