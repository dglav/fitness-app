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
    marginBottom: theme.spacing(2),
    minHeight: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    paddingLeft: theme.spacing(2)
  },
  subtext: {
    paddingLeft: theme.spacing(2)
  },
  arrow: {
    paddingRight: theme.spacing(2)
  }
}));

const MenuItem = ({ title, subtitle, route }) => {
  const classes = useStyles();

  return (
    <ButtonBase className={classes.root} href={route}>
      <div className="text">
        <Typography variant="h5" component="h3" className={classes.text}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.subtext}
            color="textSecondary"
          >
            {subtitle}
          </Typography>
        ) : null}
      </div>
      <ChevronRight color="inherit" className={classes.arrow} />
    </ButtonBase>
  );
};

export default MenuItem;