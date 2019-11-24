import React from "react";
import { connect } from "react-redux";
import { updateExercises } from "../../redux/exercises/exercises.actions";

import {
  firestore,
  convertExercisesSnapshotToMap,
  addExercisesToUser
} from "../../firebase/firebase.utils";

import ExerciseCard from "../../components/exercise-card/exercise-card.component";

class ExercisesPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateExercises } = this.props;
    const collectionRef = firestore.collection("exercises/");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const exercisesMap = await convertExercisesSnapshotToMap(snapshot);
      await updateExercises(exercisesMap);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const exercisesNameList = Object.keys(this.props.exercises);
    if (exercisesNameList.length) {
      addExercisesToUser("98357273", exercisesNameList);
    }
    return (
      <div id="exercises-page">
        {exercisesNameList.map(exercise => {
          return <ExerciseCard key={exercise} name={exercise} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises
  };
};

const mapDispatchToProps = dispatch => ({
  updateExercises: exercisesMap => dispatch(updateExercises(exercisesMap))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesPage);
