import React from "react";
import { Typography } from "@material-ui/core";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Typography variant="h6" component="h1" color="textPrimary">
          Welcome to Fitness Finess
        </Typography>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
