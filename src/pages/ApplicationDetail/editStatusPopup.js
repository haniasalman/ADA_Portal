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

export default function EditStatusPopup({ handleClose, content }) {
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
            Select Updated Status{" "}
          </Typography>
          <div className={classes.EditStatus}>
            <Typography>
              Approve
              <Checkbox style={{ float: "right", paddingTop: "0px" }} />
            </Typography>
          </div>
          <div className={classes.EditStatus}>
            <Typography>
              Reject
              <Checkbox style={{ float: "right", paddingTop: "0px" }} />
            </Typography>
          </div>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-label">
              Reason of Rejetion
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Reason of Rejection"
            >
              <MenuItem value={1}>
                1. Source of income, occupation and purpose of account not
                defined
              </MenuItem>
              <MenuItem value={2}>2. Incorrect father name mentioned</MenuItem>
              <MenuItem value={3}>3. Incorrect mother name mentioned</MenuItem>
              <MenuItem value={4}>
                4. Incorrect place of birth mentioned
              </MenuItem>
              <MenuItem value={5}>
                5. Incorrect CNIC issuance date mentioned
              </MenuItem>
              <MenuItem value={6}>6. CNIC is expired</MenuItem>
              <MenuItem value={7}>
                7. Father and mother name can’t be same
              </MenuItem>
              <MenuItem value={8}>
                8. Place of birth and mother name can’t be same
              </MenuItem>
              <MenuItem value={9}>9. Account is in dormant state</MenuItem>
              <MenuItem value={10}>10. Account is in blocked state</MenuItem>
              <MenuItem value={11}>
                11. Customer has changed his MSISDN after applying for ADA, so
                PMD not checked
              </MenuItem>
              <MenuItem value={12}>
                12. Customer has changed his profile to Biometric digital
                merchant after applying for ADA
              </MenuItem>
              <MenuItem value={13}>
                13. Customer has closed his account after applying for ADA
              </MenuItem>
              <MenuItem value={14}>14. Account is Non-BVS</MenuItem>
              <MenuItem value={15}>
                15. Branch Lending Connect L2 profile assigned
              </MenuItem>
              <MenuItem value={16}>
                16. Subscriber Blacklist CB BVS profile assigned
              </MenuItem>
              <MenuItem value={17}>
                17. Debit Block Expired CNIC BVS profile assigned
              </MenuItem>
              <MenuItem value={18}>18. N/A</MenuItem>
            </Select>
          </FormControl>
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
