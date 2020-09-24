import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="top">
        <Navbar />
      </div>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <MainPage />} />
          <Route path="/signin" exact render={() => <SignInPage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
