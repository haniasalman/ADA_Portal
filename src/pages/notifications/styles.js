import { makeStyles } from "@material-ui/styles";
import tinycolor from "tinycolor2";

export default makeStyles((theme) => ({
  layoutContainer: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(2),
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    position: "relative",
  },
  layoutText: {
    color: tinycolor(theme.palette.background.light).darken().toHexString(),
  },
  layoutButtonsRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  layoutButton: {
    backgroundColor: theme.palette.background.light,
    width: 125,
    height: 50,
    outline: "none",
    border: "none",
  },
  layoutButtonActive: {
    backgroundColor: tinycolor(theme.palette.background.light)
      .darken()
      .toHexString(),
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: theme.spacing(2),
  },
  notificationCallButton: {
    color: "white",
    marginBottom: theme.spacing(1),
    textTransform: "none",
  },
  codeContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
  },
  codeComponent: {
    flexGrow: 1,
  },
  notificationItem: {
    marginTop: theme.spacing(2),
  },
  notificationCloseButton: {
    position: "absolute",
    right: theme.spacing(2),
  },
  toastsContainer: {
    width: 400,
    marginTop: theme.spacing(6),
    right: 0,
  },
  progress: {
    visibility: "hidden",
  },
  notification: {
    display: "flex",
    alignItems: "center",
    background: "transparent",
    boxShadow: "none",
    overflow: "visible",
  },
  notificationComponent: {
    paddingRight: theme.spacing(4),
  },
  widgetHeader: {
    paddingBottom: 8,
  },
  root: {
    paddingTop: "5px",
    // backgroundColor: "white",
  },
  input: {
    color: "white",

    "&:hover $notchedOutline": {
      border: "1px solid #C9C9C9",
    },
    "&$focused $notchedOutline": {
      border: "1px solid #C9C9C9",
    },
  },
  notchedOutline: {
    border: "1px solid #C9C9C9",
  },
  adornedStart: {
    // color: "#2D343CDE",
    backgroundColor: "#FFFFFF",
    borderRadius: "9px",
    width: "433px",
    height: "58px",
    fontFamily: "SF Compact Display",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: " 89.34%",
    letterSpacing: "-0.04em",
    color: "#989898",
    paddingLeft: "20px",
  },
  typo: {
    fontFamily: "SF Compact Display",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "150%",
    // display: flex;
    // align-items: center;

    color: "#525252",
    paddingTop: "29px",
    paddingLeft: "10px",
  },
  formButtons: {
    width: "39%",
    marginTop: "44px",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    float: "right",
  },
  updateButton: {
    background: "#504C5B",
    borderRadius: "9px",
    fontFamily: "SF Compact Display",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "150%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    width: "237px",
    height: "57px",
    boxShadow: "none",
    textTransform: "none",
  },
}));
