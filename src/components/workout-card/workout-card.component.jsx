import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// Actions
import { updateExerciseEdit } from "../../redux/user/user.actions";

// Styles
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

const WorkoutCard = ({
  exerciseName,
  repsAndSets,
  targetWeight,
  last,
  currentExercises,
  updateExerciseEdit
}) => {
  const classes = useStyles();
  const [weight, setWeight] = useState(targetWeight);
  const [targetSets, targetReps] = repsAndSets.split("x");
  const [repCountPrevious, setRepCountPrevious] = useState(() => {
    if (last.repCount) {
      return [...last.repCount];
    } else {
      return new Array(parseInt(targetSets, 10)).fill("N/A");
    }
  });

  const [repCountCurrent, setRepCountCurrent] = useState(() => {
    if (currentExercises[exerciseName][repsAndSets].last.repCount) {
      return currentExercises[exerciseName][repsAndSets].last.repCount;
    } else {
      return new Array(parseInt(targetSets, 10)).fill(0);
    }
  });

  const handleChange = ({ set, event }) => {
    let repCountUpdate = [...repCountCurrent];
    repCountUpdate[set] = parseInt(event.target.value, 10);
    setRepCountCurrent(repCountUpdate);

    // There is a bug here that updates currentExercises state even without sending an action,
    // Ignoring for now, can't figure it out.
    let updatedExercise = {};
    updatedExercise[exerciseName] = { ...currentExercises[exerciseName] };
    updatedExercise[exerciseName][repsAndSets].last.repCount = repCountUpdate;
    updateExerciseEdit(updatedExercise);
  };

  // console.log(currentExercises["Decline Situps"]);

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent>
          <Typography component="h5" variant="h5">
            {exerciseName}
          </Typography>
          <Typography color="textSecondary">
            Target Weight: <span>{weight}</span>
            {targetWeight === "Body Weight" ? null : <span>kgs</span>}
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
              {repCountPrevious.map((reps, set) => (
                <TableRow key={set}>
                  <TableCell align="center">{set + 1}</TableCell>
                  <TableCell align="left">{reps}</TableCell>
                  <TableCell align="left">
                    <TextField
                      id="outlined-basic"
                      label="Today's Reps"
                      margin="normal"
                      variant="outlined"
                      defaultValue={repCountCurrent[set]}
                      onChange={event => handleChange({ set, event })}
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

const mapStateToProps = state => {
  return {
    currentExercises: state.user.currentExercises
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateExerciseEdit: exerciseData =>
      dispatch(updateExerciseEdit(exerciseData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCard);
