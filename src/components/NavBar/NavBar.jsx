import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { actionTypes } from '../../redux/users/actionTypes';


const NavBar = () => {
  const dispatch = useDispatch();

  const settings = [
    { name: "Profile", link: <Link to="/EditProfile">Profile</Link> },
    { name: "Matches", link: <Link to="/userMatches">Matches</Link> },
    { name: "Keep swiping", link: <Link to="/matchingScreen">Keep Swiping</Link> },
    { name: "Logout", link: <Link to="/signIn" onClick={() => dispatch({type: actionTypes.LOGOUT})}>Logout</Link>}
  ];

  const currentUser = useSelector((state) => state.users.user);
  
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#ff8540" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => {}}
          >
            <Link
              to="/matchingScreen"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </Link>
          </Typography>

          { currentUser ? 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Jia" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name}>{setting.link}</MenuItem>
              ))}
            </Menu>
          </Box>
          : <></>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
