import React from "react";
import { Typography, ButtonBase } from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    background: "white",
    borderRadius: "4px",
    boxShadow: "3px 3px 4px rgba(0, 0, 0, 0.3)",
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 0),
    minHeight: "80px",
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    paddingLeft: theme.spacing(2)
  },
  arrow: {
    paddingRight: theme.spacing(2)
  }
}));

const MenuItem = ({ title }) => {
  const classes = useStyles();

  return (
    <ButtonBase className={classes.root}>
      <Typography variant="h5" component="h3" className={classes.text}>
        {title}
      </Typography>
      <ChevronRight color="inherit" className={classes.arrow} />
    </ButtonBase>
  );
};

export default MenuItem;
