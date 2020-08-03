import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import "./App.css";
const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path="/" component={Landing} />
      </>
    </Router>
  );
};

export default App;
