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

function createData(set, previous) {
  return { set, previous };
}

const rows = [
  createData(1, 6),
  createData(2, 6),
  createData(3, 6),
  createData(4, 6)
];

const WorkoutCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent>
          <Typography component="h5" variant="h5">
            Bench Press
          </Typography>
          <Typography color="textSecondary">
            Target Weight: <span>55</span>
            <span>kgs</span>
          </Typography>
          <Typography color="textSecondary">
            Target Sets: <span>4</span>
          </Typography>
          <Typography color="textSecondary">
            Target Reps: <span>6</span>
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
              {rows.map(row => (
                <TableRow key={row.set}>
                  <TableCell align="center">{row.set}</TableCell>
                  <TableCell align="left">{row.previous}</TableCell>
                  <TableCell align="left">
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      margin="normal"
                      variant="outlined"
                      defaultValue="6"
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