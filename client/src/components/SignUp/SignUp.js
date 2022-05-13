import React from 'react';

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@mui/styles";

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import signup from '../../assets/signin.png';

import './SignUp.css';

const theme = createTheme();

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black"
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "blue"
      },
      "&:hover fieldset": {
        borderColor: "black"
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue"
      }
    }
  }
})(TextField);

const SignUp = () => {

  
  
  return (
    <>
      <Navbar />
        <div className="signup-container">
          <div className="signup-content">
            <h1>Sign Up</h1>
          </div>        

          <ThemeProvider theme={theme}>
            <Container component="main">
              <CssBaseline />

              <form style={{ marginTop: "5vh" }}>
                <div className="registrationForm" style={{ display: "flex" }}>                  
                    <Grid container style={{ flex: "6" }}>
                      <img src={signup} alt=""  />
                    </Grid>
                  <div className="registrationFormContainer" style={{ flex: "6" }}>
                    
                    <Grid container spacing={2}  >
                      <Grid item md={12} xs={8}>
                        <CssTextField label="Username*" variant="outlined" fullWidth autoFocus 
                          InputProps={{ style: {color: "black"}}}
                          type="text"
                        />
                      </Grid>

                      <Grid item md={12} xs={8}>
                        <CssTextField label="Email*" variant="outlined" fullWidth autoFocus 
                          InputProps={{ style: {color: "black"}}}
                          type="email"
                        />
                      </Grid>

                      <Grid className="location" item md={11} xs={8}>
                        <CssTextField label="Latitude*" variant="outlined" fullWidth autoFocus
                          InputProps={{ style: {color: "black"}}}
                          type="latitude"
                        />
                        <CssTextField label="Longitude*" variant="outlined" fullWidth  autoFocus style={{ marginLeft: "10px" }}
                          InputProps={{ style: {color: "black"}}}
                          type="longitude"
                        />
                        <Button type="location"  className='locationbutton' href="https://gps-coordinates.org/" variant="contained" style={{ marginLeft: "30px" }}>
                          Location
                        </Button>
                      </Grid>

                      <Grid item md={12} xs={8}>
                        <CssTextField label="Password*" variant="outlined" fullWidth  autoFocus 
                          InputProps={{ style: {color: "black"}}}
                          type="password"
                        />
                      </Grid>

                      <Grid item md={12} xs={8}>
                        <CssTextField label="Confirm Password*" variant="outlined" fullWidth  autoFocus 
                          InputProps={{ style: {color: "black"}}}
                          type="confirm password"
                        />
                      </Grid>
                      
                      <Grid item md={12} xs={8}>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                          Sign Up
                        </Button>
                      </Grid>

                    </Grid>

                    <Grid container justifyContent="center">
                      <Grid item>
                        <Link href="/signin" variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>

                  </div>
                </div>
              </form>
            </Container>
          </ThemeProvider>  

        </div>  
      <Footer />
    </>
  )
}

export default SignUp
