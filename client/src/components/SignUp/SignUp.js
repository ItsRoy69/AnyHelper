import React from 'react';

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
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

  const mediaLessthanmd = useMediaQuery(theme.breakpoints.down("md")); 
  
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
                  {!mediaLessthanmd && (
                    <Grid container style={{ flex: "6" }}>
                      <img src={signup} alt=""  />
                    </Grid>
                  )}
                  <div className="registrationFormContainer" style={{ flex: "6" }}>
                    <Typography component="h1" variant="h5" sx={{ mb: "20" }}>
                      SIGN UP
                    </Typography>

                    <Grid container spacing={2}  >
                      <Grid item md={12} xs={8}>
                        <CssTextField label="Username" variant="outlined" fullWidth required autoFocus 
                          InputProps={{ style: {color: "black"}}}
                          type="text"
                        />
                      </Grid>

                      <Grid item md={12} xs={8}>
                        <CssTextField label="Email" variant="outlined" fullWidth required autoFocus 
                          InputProps={{ style: {color: "black"}}}
                          type="email"
                        />
                      </Grid>

                      <Grid className="location" item md={11} xs={8}>
                        <CssTextField label="Latitude" variant="outlined" fullWidth required autoFocus
                          InputProps={{ style: {color: "black"}}}
                          type="latitude"
                        />
                        <CssTextField label="Longitude" variant="outlined" fullWidth required autoFocus style={{ marginLeft: "10px" }}
                          InputProps={{ style: {color: "black"}}}
                          type="longitude"
                        />
                        <Link href="https://gps-coordinates.org/">
                          <Button type="location"  className='locationbutton' variant="contained" style={{ marginLeft: "30px" }}>
                            Location
                          </Button>
                        </Link>
                      </Grid>

                      <Grid item md={12} xs={8}>
                        <CssTextField label="Password" variant="outlined" fullWidth required autoFocus 
                          InputProps={{ style: {color: "black"}}}
                          type="password"
                        />
                      </Grid>

                      <Grid item md={12} xs={8}>
                        <CssTextField label="Confirm Password" variant="outlined" fullWidth required autoFocus 
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
