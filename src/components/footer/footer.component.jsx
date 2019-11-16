import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import Settings from "@material-ui/icons/Settings";
import DirectionsRun from "@material-ui/icons/DirectionsRun";

const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "space-between"
  },
  actions: {
    paddingLeft: 0,
    paddingRight: 0
  }
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/profile"
        label="Profile"
        value="profile"
        className={classes.actions}
        icon={<AccountCircle />}
      />
      <BottomNavigationAction
        component={Link}
        to="/workout"
        label="Workout"
        value="workout"
        className={classes.actions}
        icon={<DirectionsRun />}
      />
      <BottomNavigationAction
        component={Link}
        to="/exercises"
        label="Exercises"
        value="exercises"
        className={classes.actions}
        icon={<FitnessCenter />}
      />
      <BottomNavigationAction
        component={Link}
        to="/settings"
        label="Settings"
        value="settings"
        className={classes.actions}
        icon={<Settings />}
      />
    </BottomNavigation>
  );
};

export default Footer;
