import React from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase/firebase.utils";
import { updateUserInfo } from "../../redux/user/user.actions";

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

const setCurrentExercisesFromHistory = (userId, workoutExercises) => {
  const exerciseHistorySummary = Object.entries(workoutExercises).map(
    async ([exercise, setsAndReps]) => {
      const exerciseRef = firestore.doc(
        `users/${userId}/history/${exercise}/${setsAndReps}/summary`
      );
      const exerciseDoc = await exerciseRef.get();
      console.log("after await");
      const exerciseData = exerciseDoc.data();
      return { [exercise]: exerciseData };
    }
  );
  Promise.all(exerciseHistorySummary).then(results => {
    console.log(results);

    return results;
  });
};

class WorkoutPage extends React.Component {
  async componentDidMount() {
    const userId = "98357273";
    const userRef = firestore.collection(`users`).doc(userId);

    this.unsubscribeFromSnapshot = userRef.onSnapshot(async snapshot => {
      this.props.updateUserInfo(snapshot.data());
    });
  }

  render() {
    const { currentWorkout } = this.props;
    const exercises = currentWorkout.exercises;

    return (
      <div id="workout-page">
        <WorkoutTitle></WorkoutTitle>
        {Object.keys(exercises).map(exercise => {
          const name = exercise;
          const repsAndSets = Object.keys(exercises[name])[0];
          const { currentTarget, last } = exercises[name][repsAndSets];
          return (
            <WorkoutCard
              key={name}
              exerciseName={name}
              repsAndSets={repsAndSets}
              currentTarget={currentTarget}
              last={last}
            ></WorkoutCard>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exerciseHistory: state.users.history,
    currentWorkout: state.users.currentWorkout,
    allWorkouts: state.workouts.allWorkouts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserInfo: userInfo => dispatch(updateUserInfo(userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage);
