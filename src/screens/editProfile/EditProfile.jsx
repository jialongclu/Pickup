import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import { updateUserAsync } from "../../redux/users/thunks";
import Alert from "@mui/material/Alert";

const theme = createTheme();

export default function EditProfile() {
  const userInfo = useSelector((state) => state.users.user);
  const updateUserAsyncStatus = useSelector((state) => state.users.updateUserAsync);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (updateUserAsyncStatus === 'FULFILLED') {
      setShowAlert(true)
    }
  }, [updateUserAsyncStatus])
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    skillLevel: "",
    age: "",
    height: "",
    gender: "",
  });

  useEffect(() => {
    if (userInfo) {
      setInputs({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        skillLevel: userInfo.skillLevel,
        age: userInfo.age,
        height: userInfo.height,
        gender: userInfo.gender,
      });
    }
  }, [userInfo]);

  const getUpdatedFields = (obj1, obj2) => {
    const ret = {};
    Object.keys(obj1).forEach((key) => {
      if (obj1[key] !== obj2[key]) {
        ret[key] = obj1[key];
      }
    });
    return ret;
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={inputs.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="lastName"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoFocus
                  value={inputs.lastName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Skill Level</InputLabel>
                  <Select
                    name="skillLevel"
                    label="Skill Level"
                    value={inputs.skillLevel}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Beginner"}>Beginner</MenuItem>
                    <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                    <MenuItem value={"Advanced"}>Advanced</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  value={inputs.age}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="height"
                  label="Height (cm)"
                  name="height"
                  value={inputs.height}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    label="Gender"
                    value={inputs.gender}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() =>
                dispatch(
                  updateUserAsync({
                    id: userInfo.id,
                    updatedFields: getUpdatedFields(inputs, userInfo),
                  })
                )
              }
              sx={{ mt: 3, mb: 2 }}
            >
              Update Profile
            </Button>
            {showAlert && <Alert severity="success">You have successfully updated your profile!</Alert>}
            <Grid container justifyContent="flex-end"></Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
