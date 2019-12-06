import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "80px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2)
  },
  workoutDesc: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left"
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  editButton: {
    marginBottom: theme.spacing(1)
  }
}));

export default useStyles;
