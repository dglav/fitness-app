import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import MainMenu from "./components/main-menu/main-menu.component";
import WorkoutRoutine from "./components/workout-routine/workout-routine.component";

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
              <MainMenu currentWorkout={this.state.currentWorkout} />
            </Route>
            <Route path="/workout">
              <WorkoutRoutine />
            </Route>
          </Switch>
        </MainContentContainer>
        <Footer />
      </Router>
    );
  }
}

export default App;
