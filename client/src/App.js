import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Signup from './Pages/Signup'
import Navbar from './Components/Navs/Navbar';
import UserContext from "./Context/UserContext";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState({ userId: "" });

  const getLoginData = async function () {
    try {
      const user = localStorage.getItem("userId")
      setUserData({ userId: user });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLoginData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar nav={"Fitness with Ianna"} links={{ signup: "/signup" }} />
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route path={"/signup"} component={Signup} />
          </Switch>
        </UserContext.Provider>
      </Router>

    </div>
  );
}

export default App;
