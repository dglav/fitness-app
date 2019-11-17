import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import LandingPage from "./pages/landing/landing.component";
import WorkoutPage from "./pages/workouts/workouts.component";
import ExercisesPage from "./pages/exercises/exercises.component";

import { MainContentContainer } from "./App.styles";

import data from "./data/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      nextWorkout: data.users["drew"].nextWorkout
    };
  }

  render() {
    const { name, phase, variation } = this.state.nextWorkout;
    const workoutExercises = this.state.data.workouts[name][phase][variation]
      .exercises;
    const currentExercises = Object.entries(workoutExercises).map(exercise => {
      return {
        name: exercise[0],
        repsAndSets: exercise[1],
        details: this.state.data.history.drew[exercise[0]][exercise[1]].summary
      };
    });
    return (
      <Router>
        <Header />
        <MainContentContainer>
          <Switch>
            <Route exact path="/">
              <LandingPage nextWorkout={this.state.nextWorkout} />
            </Route>
            <Route path="/workout">
              <WorkoutPage
                exercises={currentExercises}
                nextWorkout={this.state.nextWorkout}
              />
            </Route>
            <Route path="/exercises">
              <ExercisesPage />
            </Route>
          </Switch>
        </MainContentContainer>
        <Footer />
      </Router>
    );
  }
}

export default App;
