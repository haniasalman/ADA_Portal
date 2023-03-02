import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import Input from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

import * as Icons from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";
// import google from "../../images/google.svg";
import login_img from "../../assets/images/login.png";
import ep_logo from "../../assets/images/Easypaisa long logo.png";
import username from "../../assets/images/username.png";
import password from "../../assets/images/password.png";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

function Login(props) {
  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("admin@flatlogic.com");
  var [passwordValue, setPasswordValue] = useState("password");

  return (
    <Grid container className={classes.container}>
      <img src={login_img} alt="logo" className={classes.logotypeContainer} />
      {/* <img src={login_img} alt="logo" className={classes.logotypeImage} /> */}
      {/* <Typography className={classes.logotypeText}>Material Admin</Typography> */}
      {/* </div> */}
      <div className={classes.formContainer}>
        <div className={classes.form}>
          {/* <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs> */}
          {/* {activeTabId === 0 && ( */}
          <img src={ep_logo} className={classes.tab} />
          <React.Fragment>
            <Typography className={classes.greeting}>
              Asan Digital Account Portal
            </Typography>
            {/* <Button size="large" className={classes.googleButton}>
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button> */}
            <div className={classes.formDividerContainer}>
              {/* <div className={classes.formDivider} /> */}
              <Typography className={classes.formDividerWord}>
                Login to your account
              </Typography>
              {/* <div className={classes.formDivider} /> */}
            </div>
            {/* <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade> */}
            {/* <TextField
              id="email"
              InputProps={{
                classes: {
                  // underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
                startAdornment: (
                  // <InputAdornment position="start">
                  <Icons.AcUnit />
                  // </InputAdornment>
                ),
              }}
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
              margin="normal"
              placeholder="Username"
              type="email"
              // fullWidth
            /> */}
            <div className={classes.root}>
              <Input
                id="email"
                classes={{
                  root: classes.input,
                  notchedOutline: classes.notchedOutline,
                  focused: classes.focused,
                  adornedStart: classes.adornedStart,
                }}
                name="username"
                type="text"
                placeholder="User Name"
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <img src={username} classes={classes.username} />
                  </InputAdornment>
                }
              />
            </div>

            <div className={classes.root}>
              <Input
                id="password"
                classes={{
                  root: classes.input,
                  notchedOutline: classes.notchedOutline,
                  focused: classes.focused,
                  adornedStart: classes.adornedStart,
                  input: classes.textField,
                }}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <img src={password} classes={classes.username} />
                  </InputAdornment>
                }
              />
            </div>

            {/* <TextField
              id="password"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              margin="normal"
              placeholder="Password"
              type="password"
              fullWidth
            /> */}

            {/* <TextField
              // label="With normal TextField"
              id="outlined-adornment-amount"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={username} classes={classes.username} />
                  </InputAdornment>
                ),
              }}
            /> */}
            {/* <div className={classes.root}>
              <Input
                classes={{
                  root: classes.input,
                  notchedOutline: classes.notchedOutline,
                  focused: classes.focused,
                  adornedStart: classes.adornedStart,
                }}
                name="username"
                type="text"
                placeholder="User Name"
                startAdornment={
                  <InputAdornment position="start">
                    <img src={username} classes={classes.username} />
                  </InputAdornment>
                }
              />
            </div> */}

            <div className={classes.formButtons}>
              {isLoading ? (
                <CircularProgress size={26} className={classes.loginLoader} />
              ) : (
                <Button
                  disableFocusRipple
                  disableRipple
                  style={{ backgroundColor: "#504C5B" }}
                  className={classes.loginButton}
                  disabled={
                    loginValue.length === 0 || passwordValue.length === 0
                  }
                  onClick={() =>
                    loginUser(
                      userDispatch,
                      loginValue,
                      passwordValue,
                      props.history,
                      setIsLoading,
                      setError,
                    )
                  }
                  variant="contained"
                  color="primary"
                  // size="large"
                >
                  Sign Up
                </Button>
              )}
              <Button
                disableFocusRipple
                disableRipple
                style={{ backgroundColor: "#2DB45F" }}
                className={classes.signupButton}
                disabled={loginValue.length === 0 || passwordValue.length === 0}
                onClick={() =>
                  loginUser(
                    userDispatch,
                    loginValue,
                    passwordValue,
                    props.history,
                    setIsLoading,
                    setError,
                  )
                }
                variant="contained"
                color="primary"
                // size="large"
              >
                Login
              </Button>
            </div>
            <Button
              // color="primary"
              // size="large"
              className={classes.forgetButton}
              disableFocusRipple
              disableRipple
              style={{ backgroundColor: "transparent" }}
            >
              Forgot Password?
            </Button>
          </React.Fragment>
          {/* )} */}
          {/* {activeTabId === 1 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Welcome!
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
                Create your account
              </Typography>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <TextField
                id="name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                margin="normal"
                placeholder="Full Name"
                type="text"
                fullWidth
              />
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    }
                    disabled={
                      loginValue.length === 0 ||
                      passwordValue.length === 0 ||
                      nameValue.length === 0
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button
                size="large"
                className={classnames(
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
            </React.Fragment>
          )} */}
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
