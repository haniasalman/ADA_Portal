import React, { useState } from "react";
import { Grid, Button, TextField, InputBase } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Search as SearchIcon } from "@material-ui/icons";
// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";
import useStyles from "./styles";
import classNames from "classnames";

const datatableData = [
  ["Joe James", "Example Inc.", "Yonkers", "NY"],
  ["John Walsh", "Example Inc.", "Hartford", "CT"],
  ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ["James Houston", "Example Inc.", "Dallas", "TX"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
  ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
  ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
  ["Meral Elias", "Example Inc.", "Hartford", "CT"],
  ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
  ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
  ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
  ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
  ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
  ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
  ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
  ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

// const useStyles = makeStyles((theme) => ({
//   tableOverflow: {
//     overflow: "auto",
//   },
// }));

export default function Tables() {
  var classes = useStyles();

  var [isSearchOpen, setSearchOpen] = useState(true);

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
              // size="large"
            >
              Upload
            </Button>
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
            title="Employee List"
            data={datatableData}
            columns={["Name", "Company", "City", "State"]}
            options={{
              filterType: "checkbox",
            }}
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
