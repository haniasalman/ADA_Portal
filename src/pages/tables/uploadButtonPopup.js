import React from "react";
import PropTypes from "prop-types";
import { Typography } from "../../components/Wrappers/Wrappers";
import {
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";

export default function UploadButtonPopup({ handleClose, content }) {
  var classes = useStyles();
  return (
    <div
      style={{
        position: "fixed",
        background: "#00000080",
        width: "100%",
        height: "100vh",
        top: "0",
        left: "0",
        zIndex: "999",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "343px",
          margin: "0 auto",
          height: "auto",
          marginTop: "220px",
          background: "#fff",
          borderRadius: "30px",
          padding: "20px",
          overflow: "auto",
        }}
      >
        <Grid>
          <Typography
            varient="h2"
            className={classes.heading}
            style={{
              fontWeight: "bold",
              marginTop: "10px",
              marginLeft: "65px",
              marginBottom: "23px",
            }}
          >
            {" "}
            Upload File{" "}
          </Typography>
          <div className={classes.EditStatus}>
            <Typography>Approve</Typography>
          </div>
        </Grid>
        <button
          className="close-icon"
          type="button"
          style={{
            color: "#FFFFFF",
            border: "none",
            width: "120px",
            height: "40px",
            borderRadius: "40px",
            lineHeight: "20px",
            fontFamily: "Inter",
            textAlign: "center",
            marginTop: "10px",
            marginLeft: "10px",
            marginRight: "20px",
            background: "#0AA539",
            fontSize: "15px",
          }}
          // onClick={handleClose}
        >
          Done
        </button>
        <button
          className="close-icon"
          type="button"
          style={{
            color: "#FFFFFF",
            border: "none",
            width: "120px",
            height: "40px",
            borderRadius: "40px",
            lineHeight: "20px",
            fontFamily: "Inter",
            textAlign: "center",
            marginTop: "10px",
            marginLeft: "10px",
            marginRight: "20px",
            background: "#0AA539",
            fontSize: "15px",
          }}
          onClick={handleClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
