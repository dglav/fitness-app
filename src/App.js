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
      currentWorkout: {
        name: "Beastmode Bulking",
        phase: "1",
        variation: "A",
        description: "Phase I: Foundations"
      }
    };
  }

  render() {
    const { name, phase, variation } = this.state.currentWorkout;
    const workoutData = this.state.data.workouts[name][phase][variation];
    return (
      <Router>
        <Header />
        <MainContentContainer>
          <Switch>
            <Route exact path="/">
              <LandingPage currentWorkout={this.state.currentWorkout} />
            </Route>
            <Route path="/workout">
              <WorkoutPage
                workoutData={workoutData}
                currentWorkout={this.state.currentWorkout}
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
