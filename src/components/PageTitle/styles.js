import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  pageTitleContainer: {
    display: "flex",
    justifyContent: "start",
    marginBottom: theme.spacing(4),
    marginTop: "34px",
  },
  typo: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "26px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5px",
  },
  button: {
    width: "39.38px",
    height: "39.38px",

    // boxShadow: theme.customShadows.widget,
    // textTransform: "none",
    // "&:active": {
    //   boxShadow: theme.customShadows.widgetWide,
    // },
  },
}));
