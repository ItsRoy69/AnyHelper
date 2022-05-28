import React from 'react';

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { withStyles } from "@mui/styles";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import signup from '../assets/signin.png';

import '../styles/SignUp.css';

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
            <h1>Sign In</h1>
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

                      <Grid item md={12} xs={8}>
                        <CssTextField label="Password" variant="outlined" fullWidth required autoFocus
                          InputProps={{ style: {color: "black"}}}
                          type="password"
                        />
                      </Grid>                      
                      
                      <Grid item md={12} xs={8}>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                          Sign In
                        </Button>
                      </Grid>

                    </Grid>

                    <Grid container justifyContent="center">
                      <Grid item>
                        <Link href="/signup" variant="body2">
                          Don't have an account? Sign up
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
