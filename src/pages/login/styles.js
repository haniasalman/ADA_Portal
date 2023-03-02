import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    background: "linear-gradient(144.72deg, #FAFAFA 26.59%, #CED8DF 85.56%)",
  },
  logotypeContainer: {
    // backgroundColor: theme.palette.primary.main,
    width: "40%",
    height: "100%",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  // logotypeImage: {
  //   width: 165,
  //   marginBottom: theme.spacing(4),
  // },
  // logotypeText: {
  //   color: "white",
  //   fontWeight: 500,
  //   fontSize: 84,
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: 48,
  //   },
  // },
  formContainer: {
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
  },
  form: {
    width: "596px",
    display: "flex",
    flexDirection: "column",
  },
  tab: {
    width: "340px",
    height: "71px",
  },
  greeting: {
    // fontWeight: 500,
    // textAlign: "center",
    marginTop: theme.spacing(4),
    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "50px",
    lineHeight: "60px",
  },
  // subGreeting: {
  //   fontWeight: 500,
  //   textAlign: "center",
  //   marginTop: theme.spacing(2),
  // },
  // googleButton: {
  //   marginTop: theme.spacing(6),
  //   boxShadow: theme.customShadows.widget,
  //   backgroundColor: "white",
  //   width: "100%",
  //   textTransform: "none",
  // },
  // googleButtonCreating: {
  //   marginTop: 0,
  // },
  // googleIcon: {
  //   width: 30,
  //   marginRight: theme.spacing(2),
  // },
  // creatingButtonContainer: {
  //   marginTop: theme.spacing(2.5),
  //   height: 46,
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // createAccountButton: {
  //   height: 46,
  //   textTransform: "none",
  // },
  formDividerContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  formDividerWord: {
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2),
    fontFamily: "SF Compact Display",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "89.34%",
    letterSpacing: "-0.04em",
  },
  // formDivider: {
  //   flexGrow: 1,
  //   height: 1,
  //   backgroundColor: theme.palette.text.hint + "40",
  // },
  errorMessage: {
    textAlign: "center",
  },
  // textFieldUnderline: {
  //   "&:before": {
  //     borderBottomColor: theme.palette.primary.light,
  //   },
  //   "&:after": {
  //     borderBottomColor: theme.palette.primary.main,
  //   },
  //   "&:hover:before": {
  //     borderBottomColor: `${theme.palette.primary.light} !important`,
  //   },
  // },
  textField: {
    borderBottomColor: theme.palette.background.light,
  },
  formButtons: {
    width: "100%",
    marginTop: "57px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginButton: {
    background: "#504C5B",
    borderRadius: "20px",
    fontFamily: "SF Compact Display",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "25.4118px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.03em",
    color: "#FFFFFF",
    width: "288.78px",
    height: "64px",
    boxShadow: "none",
  },
  signupButton: {
    background: "#2DB45F",
    borderRadius: "20px",
    fontFamily: "SF Compact Display",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "25.4118px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.03em",
    color: "#FFFFFF",
    width: "288.78px",
    height: "64px",
    boxShadow: "none",
  },
  forgetButton: {
    textTransform: "none",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "23.0233px",
    lineHeight: "27px",
    color: "#424A51",
    paddingTop: "40px",
    textDecoration: "underline",
  },
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
  copyright: {
    marginTop: theme.spacing(4),
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: theme.spacing(2),
    },
  },
  username: {
    width: "32.62px",
    height: "31.87px",
  },

  root: {
    paddingTop: "31px",
    // backgroundColor: "white",
  },
  input: {
    color: "white",

    "&:hover $notchedOutline": {
      border: "1.86px solid #D8D8D8",
    },
    "&$focused $notchedOutline": {
      border: "1.86px solid #D8D8D8",
    },
  },
  notchedOutline: {
    border: "1.86px solid #D8D8D8",
  },
  focused: {},
  adornedStart: {
    // color: "#2D343CDE",
    backgroundColor: "#FFFFFF",
    borderRadius: "14px",
    width: "596px",
    height: "72px",
    fontFamily: "SF Compact Display",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: " 89.34%",
    letterSpacing: "-0.04em",
    color: "#9B9B9B",
  },
}));
