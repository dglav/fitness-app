import React from "react";

import ExerciseCard from "../../components/exercise-card/exercise-card.component";

import data from "../../data/data";

class ExercisesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exercises: Object.keys(data.exercises) };
  }

  render() {
    return (
      <div id="exercises-page">
        {this.state.exercises.map(exercise => {
          console.log(exercise);
          return <ExerciseCard key={exercise} name={exercise} />;
        })}
      </div>
    );
  }
}

export default ExercisesPage;
