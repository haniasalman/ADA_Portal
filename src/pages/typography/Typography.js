import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import { IconButton } from "@material-ui/core";
import back_btn from "../../assets/images/back_btn.png";
import ApplicationDetailImg from "../../assets/images/ApplicationDetailImg.png";
import { useHistory } from "react-router-dom";
import { Divider } from "@material-ui/core";
import { useState } from "react";
import EditStatusPopup from "./editStatusPopup";

export default function TypographyPage() {
  var classes = useStyles();

  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const handleBackButtonClick = () => {
    history.push("/app/tables"); // Navigate to the hardcoded link
  };

  const toggleEditButtonPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <PageTitle
        title="ADA Application manager"
        button={
          <IconButton aria-label="back_button" onClick={handleBackButtonClick}>
            <img
              src={back_btn}
              alt={"back-botton"}
              className={classes.back_button}
            />
          </IconButton>
        }
      />
      {
        <Grid>
          <div className={classes.dashedBorder}>
            <div style={{ display: "flex" }}>
              <img
                src={ApplicationDetailImg}
                alt={"back-botton"}
                className={classes.back_button}
              />
              <div style={{ marginTop: "20px" }}>
                <Typography
                  variant="h3"
                  className={classes.heading}
                  style={{ fontWeight: "bold" }}
                >
                  Ayesha Malik
                </Typography>
                <Typography className={classes.text}>
                  Application ID : 875435
                </Typography>
              </div>
              <Divider
                orientation="vertical"
                flexItem
                style={{
                  background: "#979797",
                  borderRadius: "103.023px",
                  width: "70px",
                  height: "2px",
                  transform: "rotate(-90deg)",
                  marginTop: "56px",
                }}
              />
              <div style={{ display: "flex" }}>
                <div style={{ marginTop: "20px" }}>
                  <Typography varient="h4" className={classes.heading}>
                    Current Status :Approved
                  </Typography>
                  <Typography className={classes.text}>
                    BET ID : 567829
                  </Typography>
                </div>
                <Typography>
                  <button
                    className={classes.editButton}
                    onClick={toggleEditButtonPopup}
                  >
                    Edit Status
                  </button>
                  {isOpen && (
                    <EditStatusPopup handleClose={toggleEditButtonPopup} />
                  )}
                </Typography>
              </div>
            </div>
            <Divider
              orientation="horizontal"
              flexItem
              style={{
                background: "#979797",
                borderRadius: "103.023px",
                width: "980px",
                height: "2px",

                marginTop: "20px",
              }}
            />
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "20px" }}>
                <Typography className={classes.text}>
                  Date of Lending : 12th March,2023
                </Typography>
                <Typography className={classes.text}>
                  BET ID : 567829
                </Typography>
              </div>
              <Divider
                orientation="vertical"
                flexItem
                style={{
                  background: "#979797",
                  borderRadius: "103.023px",
                  width: "40px",
                  height: "2px",
                  transform: "rotate(-90deg)",
                  marginTop: "30px",
                }}
              />
              <div style={{ marginTop: "20px" }}>
                <Typography className={classes.text}>
                  Date of Resolution : 12th March,2023
                </Typography>
              </div>
            </div>
            <div className={classes.dashedBorder}>
              <div style={{ display: "flex" }}>
                <div style={{ marginTop: "20px" }}>
                  <Typography
                    variant="h4"
                    className={classes.heading}
                    style={{ fontWeight: "bold" }}
                  >
                    Personal Details
                  </Typography>
                  <Typography className={classes.text}>
                    Name : Ayesha Malik
                  </Typography>
                  <Typography className={classes.text}>
                    Gender : Female
                  </Typography>
                  <Typography className={classes.text}>
                    Date of CNIC Expiry : 24 march,2030
                  </Typography>
                </div>
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{
                    background: "#979797",
                    borderRadius: "103.023px",
                    width: "70px",
                    height: "2px",
                    transform: "rotate(-90deg)",
                    marginTop: "70px",
                  }}
                />
                <div style={{ marginTop: "20px" }}>
                  <Typography className={classes.text}>
                    Mother’s Maiden Name: Ayesha Malik
                  </Typography>
                  <Typography className={classes.text}>
                    Father’s/ Spouse Name: Ali Shah
                  </Typography>
                  <Typography className={classes.text}>
                    Date of Birth: 24, Mar 2023
                  </Typography>
                  <Typography className={classes.text}>
                    Place Of Birth: Rawalpindi
                  </Typography>
                </div>
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{
                    background: "#979797",
                    borderRadius: "103.023px",
                    width: "70px",
                    height: "2px",
                    transform: "rotate(-90deg)",
                    marginTop: "70px",
                  }}
                />
                <div style={{ marginTop: "20px" }}>
                  <Typography className={classes.text}>
                    Occupation: Business
                  </Typography>
                  <Typography className={classes.text}>
                    Purpose of Account: Personal Business
                  </Typography>
                  <Typography className={classes.text}>
                    Source of Funds: Easypaisa
                  </Typography>
                  <Typography className={classes.text}>
                    Issuance Date: 13, Mar, 1019
                  </Typography>
                </div>
              </div>
            </div>
            <div className={classes.dashedBorder}>
              <div style={{ display: "flex" }}>
                <div style={{ marginTop: "20px" }}>
                  <Typography
                    variant="h4"
                    className={classes.heading}
                    style={{ fontWeight: "bold" }}
                  >
                    Additional Details
                  </Typography>
                  <Typography className={classes.text}>
                    Are you a U.S. Citizen, a U.S. green card holder or a U.S.
                    resident? / NO
                  </Typography>
                  <Typography className={classes.text}>
                    Do you have a U.S. address or telephone number? / NO
                  </Typography>
                  <Typography className={classes.text}>
                    Were you born in the U.S.? / NO
                  </Typography>
                  <Typography className={classes.text}>
                    Are you giving standing instructions to transfer funds to an
                    account maintained in USA? / NO
                  </Typography>
                  <Typography className={classes.text}>
                    Do you hold tax residency of any country/jurisdiction other
                    than Pakistan? / NO
                  </Typography>
                  <Typography className={classes.text}>
                    Are you assigning signatory authority / mandate to a person
                    with a U.S. address? / NO
                  </Typography>
                </div>
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{
                    background: "#979797",
                    borderRadius: "103.023px",
                    width: "70px",
                    height: "2px",
                    transform: "rotate(-90deg)",
                    marginTop: "70px",
                  }}
                />
                <div style={{ marginTop: "20px" }}>
                  <Typography className={classes.text}>
                    Country/Jurisdiction of Tax Residence:
                  </Typography>
                  <Typography className={classes.text}>
                    Tax Identification Number:
                  </Typography>
                  <Typography className={classes.text}>Reason:</Typography>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      }
    </>
  );
}
