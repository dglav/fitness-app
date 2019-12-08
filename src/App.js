import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// import {
//   firestore,
//   setDocumentsfromCollectionRef
// } from "./firebase/firebase.utils";
// import userCollectionData from "./data/user.collection";
// import historyCollectionData from "./data/history.collection";
// import workoutsCollectionData from "./data/workouts.collection";

import { fetchWorkoutsStart } from "./redux/workouts/workouts.actions";
import { fetchUserStart } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import LandingPage from "./pages/landing/landing.component";
import WorkoutPage from "./pages/workouts/workouts.component";
import ExercisesPage from "./pages/exercises/exercises.component";

import { MainContentContainer } from "./App.styles";

class App extends React.Component {
  componentDidMount() {
    const userId = "98357273";
    // const userRef = firestore.collection("user");
    // const historyRef = firestore.collection(`user/${userId}/history`);
    // const workoutsRef = firestore.collection("workouts");

    // Update database data from template
    // setDocumentsfromCollectionRef(userRef, userCollectionData);
    // setDocumentsfromCollectionRef(historyRef, historyCollectionData);
    // setDocumentsfromCollectionRef(workoutsRef, workoutsCollectionData);

    // Get data from database and feed into state
    this.props.fetchUserStart(userId);
    this.props.fetchWorkoutsStart();
  }

  render() {
    const isLoading =
      this.props.isWorkoutsLoading || this.props.isUserLoading ? true : false;
    return (
      <React.Fragment>
        <Header />
        <MainContentContainer>
          {!isLoading ? (
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
  isUserLoading: state.user.isLoading,
  isWorkoutsLoading: state.workouts.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchUserStart: userId => dispatch(fetchUserStart(userId)),
  fetchWorkoutsStart: () => dispatch(fetchWorkoutsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
