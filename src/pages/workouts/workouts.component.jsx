import React from "react";
import { connect } from "react-redux";
// import { addExerciseRecords } from "../../firebase/firebase.utils";

import WorkoutTitle from "../../components/workout-title/workout-title.component";
import WorkoutCard from "../../components/workout-card/workout-card.component";

const getCurrentExercises = (allWorkouts, currentWorkout, exerciseHistory) => {
  const { name, phase, variation } = currentWorkout;
  const workoutExercises = allWorkouts[name][phase][variation].exercises;
  return Object.entries(workoutExercises).map(exercise => {
    return {
      name: exercise[0],
      repsAndSets: exercise[1],
      details: exerciseHistory[exercise[0]][exercise[1]].summary
    };
  });
};

class WorkoutPage extends React.Component {
  componentDidMount() {
    // const userId = "98357273";
    // const data = {
    //   "Concentration Curl": {
    //     "2x10": {
    //       summary: {
    //         pr: {
    //           weight: 8,
    //           date: null
    //         },
    //         currentTarget: 9,
    //         last: {
    //           weight: 9,
    //           date: "2019/7/13",
    //           toPR: null,
    //           note: null,
    //           repCount: null
    //         }
    //       },
    //       completeHistory: {
    //         "2019/7/13": {
    //           target: 9,
    //           pr: false,
    //           toPR: null,
    //           repCount: null
    //         }
    //       }
    //     }
    //   }
    // };
    // addExerciseRecords(userId, data);
  }

  render() {
    const { allWorkouts, currentWorkout, exerciseHistory } = this.props;
    const currentExercises = currentWorkout.name
      ? getCurrentExercises(allWorkouts, currentWorkout, exerciseHistory)
      : null;

    return (
      <div id="workout-page">
        <WorkoutTitle></WorkoutTitle>
        {currentExercises
          ? currentExercises.map(exercise => {
              return (
                <WorkoutCard
                  key={exercise.name}
                  exercise={exercise}
                ></WorkoutCard>
              );
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentWorkout: state.users.drew.currentWorkout,
    allWorkouts: state.workouts.allWorkouts,
    exerciseHistory: state.users.drew.exerciseHistory
  };
};

export default connect(mapStateToProps)(WorkoutPage);
