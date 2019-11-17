import React from "react";
import { connect } from "react-redux";

import ExerciseCard from "../../components/exercise-card/exercise-card.component";

class ExercisesPage extends React.Component {
  render() {
    const exercisesNameList = Object.keys(this.props.exercises);
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

export default connect(mapStateToProps)(ExercisesPage);
