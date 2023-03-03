import React, { useState } from "react";
import { Grid, Select, MenuItem, Input } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { BarChart, Bar } from "recharts";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";

export default function BigStat(props) {
  var { product, total, color, registrations, bounce } = props;
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [value, setValue] = useState("daily");

  return (
    <div className={classes.bottomStatsContainer}>
      <div className={classnames(classes.statCell, classes.borderRight)}>
        <Grid container alignItems="center">
          <Typography variant="h6">{registrations[value].value}</Typography>
          <ArrowForwardIcon
            className={classnames(classes.profitArrow, {
              [!registrations[value].profit]: classes.profitArrowDanger,
            })}
          />
        </Grid>
        <Typography size="sm" color="text" colorBrightness="secondary">
          Registrations
        </Typography>
      </div>
    </div>
  );
}

// #######################################################################

function getRandomData() {
  return Array(7)
    .fill()
    .map(() => ({ value: Math.floor(Math.random() * 10) + 1 }));
}
