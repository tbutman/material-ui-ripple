import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export function SingleButtonExample() {
  const classes = useStyles2();
  const [displayedButton, setDisplayedButton] = useState(1);
  const toggleDisplayedButton = () =>
    setDisplayedButton(displayedButton === 1 ? 2 : 1);

  const button1 = (
    <Button variant="contained" color="primary" onClick={toggleDisplayedButton}>
      Show Button 2
    </Button>
  );

  const button2 = (
    <Button
      variant="contained"
      color="secondary"
      onClick={toggleDisplayedButton}
    >
      Show Button 1
    </Button>
  );

  return (
    <div className={displayedButton === 1 ? classes.button1 : classes.button2}>
      {displayedButton === 1 ? button1 : button2}
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  buttonGroup1: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  buttonGroup2: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export function MultiButtonExample() {
  const classes = useStyles();
  const [buttonGroup, setButtonGroup] = useState(1);
  const toggleButtonGroup = () => setButtonGroup(buttonGroup === 1 ? 2 : 1);

  const buttonGroup1 = (
    <Fragment id="button-group-1">
      <Button variant="contained" color="primary" onClick={toggleButtonGroup}>
        Show Group 2
      </Button>
      <Button variant="contained" color="secondary" disabled>
        Disabled
      </Button>
    </Fragment>
  );

  const buttonGroup2 = (
    <Fragment id="button-group-2">
      <Button variant="contained" color="secondary" onClick={toggleButtonGroup}>
        Show Group 1
      </Button>
    </Fragment>
  );

  return (
    <div
      className={
        buttonGroup === 1 ? classes.buttonGroup1 : classes.buttonGroup2
      }
    >
      {buttonGroup === 1 ? buttonGroup1 : buttonGroup2}
    </div>
  );
}

const useStyles2 = makeStyles(theme => ({
  button1: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  button2: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
