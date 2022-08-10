import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FileBase64 from "react-file-base64";
import "./SignUp.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://blogs.ubc.ca/cpsc4552022s/">
        Pickup
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [validation, setValidation] = useState({
    isValidFirst: true,
    isValidLast: true,
    isValidAge: true,
    isValidHeight: true,
    isValidBio: true,
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  });

  // validating sign in fields
  useEffect(() => {
    if (!validation.isValidFirst) {
      console.log("Invalid First Name");
      alert("Invalid First Name");
    }
    if (!validation.isValidLast) {
      console.log("Invalid Last Name");
      alert("Invalid Last Name");
    }
    if (!validation.isValidEmail) {
      console.log("Invalid Email");
      alert("Invalid Email Address");
    }
    if (!validation.isValidAge) {
      console.log("Invalid Age");
      alert("Invalid Age");
    }
    if (!validation.isValidHeight) {
      console.log("Invalid Height");
      alert("Invalid Height");
    }
    if (!validation.isValidBio) {
      console.log("Invalid Bio");
      alert("Invalid Bio");
    }
    if (!validation.isValidPhone) {
      console.log("Invalid Phone");
      alert("Invalid Phone");
    }
    if (!validation.isValidPassword) {
      console.log("Invalid Password");
      alert("Invalid Password");
    }
    if (!validation.isValidConfirmPassword) {
      console.log("Passwords dont Match");
      alert("Passwords don't Match");
    }
  }, [validation]);

  const navigate = useNavigate();

  // validation logic
  const validateField = (fieldName, value, validator) => {
    switch (fieldName) {
      case "firstName":
        validator.isValidFirst = value.length !== 0;
        break;
      case "lastName":
        validator.isValidLast = value.length !== 0;
        break;
      case "email":
        validator.isValidEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
          value
        );
        break;
      case "age":
        validator.isValidAge = /\-?\d*\.?\d{1,2}/.test(value);
        break;
      case "height":
        validator.isValidHeight = /\-?\d*\.?\d{1,2}/.test(value);
        break;
      case "bio":
        validator.isValidBio = value.length !== 0;
        break;
      case "phoneNumber":
        validator.isValidPhone = /\-?\d*\.?\d{1,2}/.test(value);
        break;
      case "password":
        validator.isValidPassword = value.length !== 0;
        break;
      default:
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("image", inputs.image);
    const userData = {};
    let validator = { ...validation };
    for (var field of formData) {
      let name = field[0];
      let value = field[1];
      userData[name] = value;
      validateField(name, value, validator);
      if (name === "confirmPassword") {
        validator.isValidConfirmPassword = userData["password"] === value;
      }
    }

    const response = await fetch(`http://localhost:3001/signUp`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (response.status === 200) {
      navigate("/signIn");
    }
  };

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    skillLevel: "",
    age: "",
    height: "",
    gender: "",
    email: "",
    password: "",
    phoneNumber: "",
    bio: "",
    confirmPassword: "",
    image: "",
  });

  function handleImageInput(base64) {
    setInputs({ ...inputs, image: base64 });
  }

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(inputs);
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
          <Avatar sx={{ m: 1, bgcolor: "#ff8540" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={inputs.firstName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
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
                  required
                  fullWidth
                  id="age (in cm)"
                  label="Age"
                  name="age"
                  value={inputs.age}
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="height"
                  label="Height (cm)"
                  name="height"
                  value={inputs.height}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  id="bio"
                  label="Short Bio"
                  I
                  name="bio"
                  value={inputs.bio}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} value={inputs.image}>
                <div className="upload-picture">
                  <FileBase64
                    multiple={false}
                    onDone={({ base64 }) => handleImageInput(base64)}
                  />
                </div>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="phoneNumber"
                  id="phoneNumber"
                  value={inputs.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={inputs.password}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={inputs.confirmPassword}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="termsAndConditions" color="primary" />
                  }
                  label="By ticking, you are confirming that you have read, understood and agree to Pickup's terms and conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#ff8540" }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={() => navigate("/signIn")} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
