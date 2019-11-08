import React from "react";
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
    flexGrow: 0
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
        label="Profile"
        value="profile"
        icon={<AccountCircle />}
      />
      <BottomNavigationAction
        label="Workout"
        value="workout"
        icon={<DirectionsRun />}
      />
      <BottomNavigationAction
        label="Exercises"
        value="exercises"
        icon={<FitnessCenter />}
      />
      <BottomNavigationAction
        label="Settings"
        value="settings"
        icon={<Settings />}
      />
    </BottomNavigation>
  );
};

export default Footer;
