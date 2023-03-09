import React, { useState } from "react";
import { Grid, Button, TextField, InputBase } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { useHistory } from "react-router-dom";
import { Search as SearchIcon } from "@material-ui/icons";
// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";
import useStyles from "./styles";
import classNames from "classnames";
import girl_icon from "../../assets/images/girl_icon.jpg";
import UploadButtonPopup from "./uploadButtonPopup";

const datatableData = [
  [
    "Joe James",
    "1234562223",
    "61101-1816234-9",
    "Approved",
    "ID not valid",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "John Walsh",
    "1234562223",
    "61101-1816234-9",
    "Rejected",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Bob Herm",
    "1234562223",
    "61101-1816234-9",
    "In Process",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "James Houston",
    "1234562223",
    "61101-1816234-9",
    "Approved",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Prabhakar Linwood",
    "1234562223",
    "61101-1816234-9",
    "Rejected",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Kaui Ignace",
    "1234562223",
    "61101-1816234-9",
    "Approved",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Esperanza Susanne",
    "1234562223",
    "61101-1816234-9",
    "Rejected",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Christian Birgitte",
    "1234562223",
    "61101-1816234-9",
    "In Process",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Meral Elias",
    "1234562223",
    "61101-1816234-9",
    "Rejected",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Deep Pau",
    "1234562223",
    "61101-1816234-9",
    "Approved",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Sebastiana Hani",
    "1234562223",
    "61101-1816234-9",
    "Approved",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Marciano Oihana",
    "1234562223",
    "61101-1816234-9",
    "Approved",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Brigid Ankur",
    "1234562223",
    "61101-1816234-9",
    "Approved",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Anna Siranush",
    "1234562223",
    "61101-1816234-9",
    "Approved",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Avram Sylva",
    "1234562223",
    "61101-1816234-9",
    "Rejected",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Serafima Babatunde",
    "1234562223",
    "61101-1816234-9",
    "In Process",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
  [
    "Gaston Festus",
    "1234562223",
    "61101-1816234-9",
    "In Process",
    "CNIC Expired",
    <img
      src={girl_icon}
      alt="UserImage"
      style={{
        width: "50px",
        height: "50px",
        // marginBottom: "10px",
        borderRadius: "25px",
      }}
    />,
    "Pass",
    "12:00/ 1/03/2023",
    "12:00/ 1/03/2023",
    "2 Day",
    "12:00/ 1/03/2023",
  ],
];

// const useStyles = makeStyles((theme) => ({
//   tableOverflow: {
//     overflow: "auto",
//   },
// }));

export default function Tables() {
  var classes = useStyles();

  const history = useHistory();

  const handleRowClick = (rowData) => {
    const [name, company, city, state] = rowData;
    history.push("/app/typography"); // Navigate to the new page
  };

  const columns = [
    "Name",
    "Application ID",
    "CNIC Number",
    "Account Status",
    "Rejection Reason",
    "Picture",
    "PDM Check",
    "Receiving Date",
    "Application Decision",
    "TAT",
    "Status change date",
  ];
  const options = {
    filter: true, // Enable filtering of the data
    search: true, // Enable search box for the entire table
    filterType: "checkbox",
    onRowClick: handleRowClick, // Call the handleRowClick function when a row is clicked
  };

  var [isSearchOpen, setSearchOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleUploadButtonPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <PageTitle title="ADA Application Manager" />
        </Grid>
        <Grid item xs={9} style={{ display: "flex" }}>
          <div className={classes.formButtons}>
            <Button
              disableFocusRipple
              disableRipple
              style={{ border: "1px solid #4379EE", background: "#FFFFFF" }}
              className={classes.tblButton}
              variant="contained"
              color="primary"
              onClick={toggleUploadButtonPopup}
            >
              Upload
            </Button>
            {isOpen && (
              <UploadButtonPopup handleClose={toggleUploadButtonPopup} />
            )}
            <Button
              disableFocusRipple
              disableRipple
              style={{ border: "1px solid #1C882A", background: "#FFFFFF" }}
              className={classes.tblButton}
              variant="contained"
              color="primary"
              // size="large"
            >
              Download
            </Button>
            <Button
              disableFocusRipple
              disableRipple
              style={{ background: "#27AE60", color: "#FFFFFF" }}
              className={classes.tblButton}
              variant="contained"
              color="primary"
              // size="large"
            >
              Approve
            </Button>
            <Button
              disableFocusRipple
              disableRipple
              style={{ background: "#FC6D5E", color: "#FFFFFF" }}
              className={classes.tblButton}
              variant="contained"
              color="primary"
              // size="large"
            >
              Reject
            </Button>
            <TextField
              variant="outlined"
              id="date"
              type="date"
              style={{ width: "141px", borderRadius: "8.42px" }}
              className={classes.root}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div
              className={classNames(classes.search, {
                [classes.searchFocused]: isSearchOpen,
              })}
            >
              <div
                className={classNames(classes.searchIcon, {
                  [classes.searchIconOpened]: isSearchOpen,
                })}
                onClick={() => setSearchOpen(isSearchOpen)}
              >
                <SearchIcon classes={{ root: classes.headerIcon }} />
              </div>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            // title="Employee List"
            data={datatableData}
            columns={columns}
            options={options}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Widget title="Material-UI Table" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <Table data={mock.table} />
          </Widget>
        </Grid> */}
      </Grid>
    </>
  );
}
