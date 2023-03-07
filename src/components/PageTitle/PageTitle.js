import React from "react";
import { IconButton } from "@material-ui/core";
// styles
import useStyles from "./styles";
import back_btn from "../../assets/images/back_btn.png";

// components
import { Typography } from "../Wrappers";

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
      {props.button}
      <Typography className={classes.typo}>{props.title}</Typography>
    </div>
  );
}
