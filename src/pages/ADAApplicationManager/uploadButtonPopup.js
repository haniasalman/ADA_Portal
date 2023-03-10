import React from "react";
import PropTypes from "prop-types";
import { Typography } from "../../components/Wrappers/Wrappers";
import { useState, useRef } from "react";
import { ProgressBar } from "react-bootstrap";
import {
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";
import upload_icon from "../../assets/images/UploadIcon.png";

export default function UploadButtonPopup({ handleClose, content }) {
  var classes = useStyles();

  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedName(file.name);
    // Additional validation logic
  };

  const uploadFile = ({ target: { files } }) => {
    let data = new FormData();
    data.append("file", files[0]);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;

        let percent = Math.floor((loaded * 100) / total);

        if (percent < 100) {
          setUploadPercentage(percent);
        }
      },
    };
  };

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
              marginLeft: "100px",
              marginBottom: "23px",
            }}
          >
            {" "}
            Upload File{" "}
          </Typography>
          <div
            className={classes.EditStatus}
            style={{ backgroundColor: "#F8F8FF" }}
          >
            <div style={{ marginLeft: "100px" }}>
              <img src={upload_icon} alt="upload" />
            </div>
            <label
              htmlFor="fileInput"
              className={classes.uploadButton}
              style={{ marginLeft: "85px" }}
            >
              Select File
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              accept=".csv"
              onChange={handleFileChange}
            />
            <p style={{ marginLeft: "10px" }}>
              Supported formats: Only CSV file is allowed{" "}
            </p>
            {selectedName && (
              <p style={{ marginLeft: "10px" }}>{selectedName}</p>
            )}

            {uploadPercentage > 0 && (
              <div className="row mt-3">
                <div className="col pt-1">
                  <ProgressBar
                    now={uploadPercentage}
                    striped={true}
                    label={`${uploadPercentage}%`}
                  />
                </div>
              </div>
            )}
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
            marginLeft: "20px",
            marginRight: "10px",
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
