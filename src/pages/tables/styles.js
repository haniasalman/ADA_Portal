import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
  form: {
    width: "596px",
    display: "flex",
    flexDirection: "column",
  },
  formButtons: {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  tblButton: {
    // background: "#FFFFFF;",
    borderRadius: "43.3779px",
    fontFamily: "SF Compact Display",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18.9474px",
    lineHeight: "150%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.03em",
    color: "#313D4F",
    width: "173px",
    height: "40px",
    boxShadow: "none",
    backgroundColor: "#FFFFFF",
    textTransform: "none",
    // border: "1px solid #4379EE",
    marginRight: "10px",
  },
  root: {
    paddingTop: "31px",
    // backgroundColor: "white",
  },
  search: {
    position: "relative",
    borderRadius: 9,
    paddingLeft: theme.spacing(2.5),
    width: 36,
    border: "2px solid",
    borderColor: "rgba(0,0,0,0.2)",
    backgroundColor: "white",
    transition: theme.transitions.create(["background-color", "width"]),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "white",
    },
  },
  searchFocused: {
    marginLeft: "10px",
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "rgba(0,0,0,0.2)",
    width: "141px",
    [theme.breakpoints.up("md")]: {
      width: "141px",
    },
  },
  searchIcon: {
    width: 36,
    right: 0,
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: theme.transitions.create("right"),
    "&:hover": {
      cursor: "pointer",
    },
  },
  searchIconOpened: {
    right: theme.spacing(1.25),
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    height: 36,
    padding: 0,
    paddingRight: 36 + theme.spacing(1.25),
    width: "100%",
  },
  messageContent: {
    display: "flex",
    flexDirection: "column",
  },
  root: {
    "& label.Mui-focused": {
      color: "#C7C7C7",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "8.4px",
      height: "38.68px",
      border: "1.05263px solid #C7C7C7",
      "& fieldset": {
        borderColor: "#C7C7C7",
      },
      // "&:hover fieldset": {
      //   borderColor: "#C7C7C7",
      // },
      "&.Mui-focused fieldset": {
        borderColor: "#C7C7C7",
      },
    },
  },

  main: {
    display: "flex",
    flex: "1 0 auto",
  },
  searchText: {
    flex: "0.8 0",
  },
  clearIcon: {
    "&:hover": {
      color: theme.palette.error.main,
    },
  },
}));
