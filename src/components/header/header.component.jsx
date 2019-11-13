import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2)
  },
  link: {
    color: "white"
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.link}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Home />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Fitness Finess
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
