import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import LandingPage from "./pages/landing/landing.component";
import WorkoutPage from "./pages/workouts/workouts.component";
import ExercisesPage from "./pages/exercises/exercises.component";

import { MainContentContainer } from "./App.styles";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentWorkout: "Phase 3: Workout A" };
  }

  render() {
    return (
      <Router>
        <Header />
        <MainContentContainer>
          <Switch>
            <Route exact path="/">
              <LandingPage currentWorkout={this.state.currentWorkout} />
            </Route>
            <Route path="/workout">
              <WorkoutPage />
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
