import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "./pages/404/404";
import AllWorkplace from "./pages/Allworkplaces/Allworkplaces";
import Login from "./pages/Login/Login";


function App() {
  return (
    <>
      <Router basename="/designer/faceapp/">
        <div>
          <Switch>

            <Route path="/" exact>
              <Login />
            </Route>

            <Route exact path="/dashboard">
              <Error404 />
            </Route>
            <Route exact path="/staff">
              <Error404 />
            </Route>
            <Route exact path="/attendance">
              <Error404 />
            </Route>
            <Route exact path="/workplace">
              <Error404 />
            </Route>
            <Route exact path="/day-planing">
              <Error404 />
            </Route>
            <Route exact path="/setting">
              <Error404 />
            </Route>
            <Route exact path="/all-workplace">
              <AllWorkplace />
            </Route>
            <Route exact path="/dot">
              <Error404 />
            </Route>

                                       
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
