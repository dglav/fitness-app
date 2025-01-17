import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  firestore,
  setDocumentsfromCollectionRef
} from "./firebase/firebase.utils";
// import usersCollectionData from "./data/users.collection";
// import historyCollectionData from "./data/history.collection";
import workoutsCollectionData from "./data/workouts.collection";

import { fetchWorkoutsStart } from "./redux/workouts/workouts.actions";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import LandingPage from "./pages/landing/landing.component";
import WorkoutPage from "./pages/workouts/workouts.component";
import ExercisesPage from "./pages/exercises/exercises.component";

import { MainContentContainer } from "./App.styles";

class App extends React.Component {
  componentDidMount() {
    // const userId = "98357273";
    // const userRef = firestore.collection("users");
    // const historyRef = firestore.collection(`users/${userId}/history`);
    // const workoutsRef = firestore.collection("workouts");
    // Update database data from template
    // setDocumentsfromCollectionRef(userRef, usersCollectionData);
    // setDocumentsfromCollectionRef(historyRef, historyCollectionData);
    // setDocumentsfromCollectionRef(workoutsRef, workoutsCollectionData);
    // Get data from database and feed into state
    this.props.fetchWorkoutsStart();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <MainContentContainer>
          {!this.props.isWorkoutsLoading ? (
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
          ) : (
            <p>Loading...</p>
          )}
        </MainContentContainer>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isWorkoutsLoading: state.workouts.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchWorkoutsStart: () => dispatch(fetchWorkoutsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
