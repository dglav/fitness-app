import React from "react";
import { Switch, Route } from "react-router-dom";
import { getStuff } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import LandingPage from "./pages/landing/landing.component";
import WorkoutPage from "./pages/workouts/workouts.component";
import ExercisesPage from "./pages/exercises/exercises.component";

import { MainContentContainer } from "./App.styles";

class App extends React.Component {
  componentDidMount() {
    getStuff();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <MainContentContainer>
          <Switch>
            <Route exact path="/">
              <LandingPage />
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
      </React.Fragment>
    );
  }
}

export default App;
