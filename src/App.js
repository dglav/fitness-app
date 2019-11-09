import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import MainMenu from "./components/main-menu/main-menu.component";
import Workout from "./components/workout/workout.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentWorkout: "Phase 3: Workout A" };
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainMenu currentWorkout={this.state.currentWorkout} />
          </Route>
          <Route path="/workout">
            <Workout />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
