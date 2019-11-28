import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  firestore,
  addCollectionsAndDocuments
} from "./firebase/firebase.utils";
import usersCollectionData from "./data/users.collection";
import historyCollectionData from "./data/history.collection";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import LandingPage from "./pages/landing/landing.component";
import WorkoutPage from "./pages/workouts/workouts.component";
import ExercisesPage from "./pages/exercises/exercises.component";

import { MainContentContainer } from "./App.styles";

class App extends React.Component {
  componentDidMount() {
    const userId = "98357273";

    // const userRef = firestore.collection("users");
    // addCollectionsAndDocuments(userRef, usersCollectionData);
    // const historyRef = firestore.collection(`users/${userId}/history`);
    // addCollectionsAndDocuments(historyRef, historyCollectionData);
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
