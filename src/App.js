import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import LandingPage from "./pages/landing/landing.component";
import WorkoutPage from "./pages/workouts/workouts.component";
import ExercisesPage from "./pages/exercises/exercises.component";

import { MainContentContainer } from "./App.styles";

class App extends React.Component {
  componentDidMount() {
    // let collectionName = "users/98357273/history";
    // let data = {
    //   "Hammer Curl": {
    //     exists: true
    //   }
    // };
    // uploadToDatabase(collectionName, data);
    // let collectionName = "exercises/";
    // let data = {
    //   "Barbell Military Press": {
    //     repsAndSets: ["4x6"]
    //   },
    //   "Bulgarian Split Squat": {
    //     repsAndSets: ["4x6"]
    //   },
    //   "Dumbbell Seal Row": {
    //     repsAndSets: ["4x6"]
    //   },
    //   "Barbell Upright Row": {
    //     repsAndSets: ["2x10"]
    //   },
    //   "Concentration Curl": {
    //     repsAndSets: ["2x10"]
    //   }
    // };
    // uploadToDatabase(collectionName, data);
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
