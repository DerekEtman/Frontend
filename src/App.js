import React from "react";
import { Route, Switch } from "react-router-dom";
import { StateProvider } from "./contexts/StateContext";
import { PrivateRoute } from "./utils/PrivateRoute";

// Components
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import initialState from "./reducers/initialState";

import { rootReducer } from "./reducers";

function App() {
  return (
    <StateProvider value={initialState} reducer={rootReducer}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </StateProvider>
  );
}

export default App;
