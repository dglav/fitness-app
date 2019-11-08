import React from "react";

import Header from "./components/header/header.component";
import MainMenu from "./components/main-menu/main-menu.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MainMenu />
      <Footer />
    </React.Fragment>
  );
};

export default App;
