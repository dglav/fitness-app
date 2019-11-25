import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(2),
    padding: 0
  }
}));

const WorkoutCard = ({ exerciseName, repsAndSets, currentTarget, last }) => {
  const classes = useStyles();

  const [targetSets, targetReps] = repsAndSets.split("x");

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent>
          <Typography component="h5" variant="h5">
            {exerciseName}
          </Typography>
          <Typography color="textSecondary">
            Target Weight: <span>{currentTarget}</span>
            <span>kgs</span>
          </Typography>
          <Typography color="textSecondary">
            Target Sets: <span>{targetSets}</span>
          </Typography>
          <Typography color="textSecondary">
            Target Reps: <span>{targetReps}</span>
          </Typography>
        </CardContent>
        <form>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="left">Previous</TableCell>
                <TableCell align="left">Current</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {last.repCount.map((reps, set) => (
                <TableRow key={set}>
                  <TableCell align="center">{set + 1}</TableCell>
                  <TableCell align="left">{reps}</TableCell>
                  <TableCell align="left">
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      margin="normal"
                      variant="outlined"
                      defaultValue={targetReps}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </form>
      </div>
    </Card>
  );
};

export default WorkoutCard;
