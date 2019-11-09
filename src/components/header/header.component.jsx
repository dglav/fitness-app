import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  root: {},
  homeButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.homeButton}
            color="inherit"
            aria-label="menu"
          >
            <Home />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Fitness Finess
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
