import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { toast } from "react-toastify";
import back_btn from "../../assets/images/back_btn.png";
import Input from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";

// components

import PageTitle from "../../components/PageTitle/PageTitle";
import Notification from "../../components/Notification";
import { Typography, Button } from "../../components/Wrappers/Wrappers";
import { useHistory } from "react-router-dom";

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT,
];

export default function NotificationsPage(props) {
  var classes = useStyles();

  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push("/app/dashboard"); // Navigate to the hardcoded link
  };

  // local
  var [notificationsPosition, setNotificationPosition] = useState(2);
  var [errorToastId, setErrorToastId] = useState(null);

  return (
    <>
      <PageTitle
        title="Change Password"
        button={
          <IconButton aria-label="back_button" onClick={handleBackButtonClick}>
            <img
              src={back_btn}
              alt={"back_button"}
              className={classes.back_button}
            />
          </IconButton>
        }
      />
      <Grid container style={{ flexDirection: "column", paddingLeft: "25px" }}>
        <Typography className={classes.typo}>Email ID</Typography>

        <div className={classes.root}>
          <Input
            id="email"
            classes={{
              root: classes.input,
              notchedOutline: classes.notchedOutline,
              focused: classes.focused,
              adornedStart: classes.adornedStart,
            }}
            name="username"
            type="text"
            placeholder="Enter Email ID Here"
            startAdornment={<InputAdornment position="start" />}
          />
        </div>
        <Typography className={classes.typo}>User ID</Typography>

        <div className={classes.root}>
          <Input
            id="email"
            classes={{
              root: classes.input,
              notchedOutline: classes.notchedOutline,
              focused: classes.focused,
              adornedStart: classes.adornedStart,
            }}
            name="username"
            type="text"
            placeholder="Enter User ID Here"
            startAdornment={<InputAdornment position="start" />}
          />
        </div>
        <Typography className={classes.typo}>New Password</Typography>

        <div className={classes.root}>
          <Input
            id="email"
            classes={{
              root: classes.input,
              notchedOutline: classes.notchedOutline,
              focused: classes.focused,
              adornedStart: classes.adornedStart,
            }}
            name="username"
            type="text"
            placeholder="Enter New Password Here"
            startAdornment={<InputAdornment position="start" />}
          />
        </div>
        <Typography className={classes.typo}>Confirm New Password</Typography>

        <div className={classes.root}>
          <Input
            id="email"
            classes={{
              root: classes.input,
              notchedOutline: classes.notchedOutline,
              focused: classes.focused,
              adornedStart: classes.adornedStart,
            }}
            name="username"
            type="text"
            placeholder="Enter Confirm New Password Here"
            startAdornment={<InputAdornment position="start" />}
          />
        </div>

        <div className={classes.formButtons}>
          <Button
            disableFocusRipple
            disableRipple
            style={{ backgroundColor: "#2DB45F" }}
            className={classes.updateButton}
            // disabled={loginValue.length === 0 || passwordValue.length === 0}
            variant="contained"
            color="primary"
            // size="large"
          >
            Update
          </Button>
        </div>
      </Grid>
      {/* <Widget disableWidgetMenu>
        <Grid container item xs={12}>
          <Grid item>
            <Widget
              title="Layout Options"
              noWidgetShadow
              disableWidgetMenu
              noBodyPadding
              noHeaderPadding
              style={{ paddingRight: 15 }}
              headerClass={classes.widgetHeader}
            >
              <Typography>Email ID</Typography>

              <div className={classes.root}>
                <Input
                  id="email"
                  classes={{
                    root: classes.input,
                    notchedOutline: classes.notchedOutline,
                    focused: classes.focused,
                    adornedStart: classes.adornedStart,
                  }}
                  name="username"
                  type="text"
                  placeholder="User Name"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                />
              </div>
            </Widget>
          </Grid>
        </Grid>
      </Widget> */}
      {/* </Grid> */}
      {/* <Grid item xs={12} md={6} lg={4}>
          <Widget title="Notification Types Examples" disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              shadowless
              type="message"
              message="Thanks for Checking out Messenger"
              variant="contained"
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="feedback"
              message="New user feedback received"
              variant="contained"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="customer"
              message="New customer is registered"
              variant="contained"
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="shipped"
              message="The order was shipped"
              variant="contained"
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="delivered"
              message="The order was delivered"
              variant="contained"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="defence"
              message="5 Defence alerts"
              variant="contained"
              color="info"
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="Notification Types Examples" disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              type="report"
              message="New report has been received"
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              type="feedback"
              message="New user feedback received"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="shipped"
              message="The item was shipped"
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              type="message"
              message="The new message from user @nahawaii"
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              type="upload"
              message="Your file is ready to upload"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="disc"
              message="The disc is full"
              color="info"
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="Notification Types Examples" disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              type="report"
              message="New report has been received"
              variant="rounded"
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              type="feedback"
              message="New user feedback received"
              variant="rounded"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="shipped"
              message="The item was shipped"
              variant="rounded"
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              type="message"
              message="The new message from user @nahawaii"
              variant="rounded"
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              type="upload"
              message="Your file is ready to upload"
              variant="rounded"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="disc"
              message="The disc is full"
              variant="rounded"
              color="info"
            />
          </Widget>
        </Grid> */}
      {/* </Grid> */}
    </>
  );

  // #############################################################
  function sendNotification(componentProps, options) {
    return toast(
      <Notification
        {...componentProps}
        className={classes.notificationComponent}
      />,
      options,
    );
  }

  function retryErrorNotification() {
    var componentProps = {
      type: "message",
      message: "Message was sent successfully!",
      variant: "contained",
      color: "success",
    };
    toast.update(errorToastId, {
      render: <Notification {...componentProps} />,
      type: "success",
    });
    setErrorToastId(null);
  }

  function handleNotificationCall(notificationType) {
    var componentProps;

    if (errorToastId && notificationType === "error") return;

    switch (notificationType) {
      case "info":
        componentProps = {
          type: "feedback",
          message: "New user feedback received",
          variant: "contained",
          color: "primary",
        };
        break;
      case "error":
        componentProps = {
          type: "message",
          message: "Message was not sent!",
          variant: "contained",
          color: "secondary",
          extraButton: "Resend",
          extraButtonClick: retryErrorNotification,
        };
        break;
      default:
        componentProps = {
          type: "shipped",
          message: "The item was shipped",
          variant: "contained",
          color: "success",
        };
    }

    var toastId = sendNotification(componentProps, {
      type: notificationType,
      position: positions[notificationsPosition],
      progressClassName: classes.progress,
      onClose: notificationType === "error" && (() => setErrorToastId(null)),
      className: classes.notification,
    });

    if (notificationType === "error") setErrorToastId(toastId);
  }

  function changeNotificationPosition(positionId) {
    setNotificationPosition(positionId);
  }
}

// #############################################################
function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}
