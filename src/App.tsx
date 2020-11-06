import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import HomeContainer from "./pages/home/home.container";
import Header from "./components/header/header.component";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <HomeContainer />
    </div>
  );
}

export default App;
