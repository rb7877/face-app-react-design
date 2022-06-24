import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "./pages/404/404";
import AllWorkplace from "./pages/Allworkplaces/Allworkplaces";
import Attendance from "./pages/Attendance/Attendance";
import Login from "./pages/Login/Login";
import Setting from "./pages/Setting/Setting";
import Staff from "./pages/Staff/Staff";
import Workplace from "./pages/Workplace/Workplace";


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
              <Staff />
            </Route>
            <Route exact path="/attendance">
              <Attendance />
            </Route>
            <Route exact path="/workplace">
              <Workplace />
            </Route>
            <Route exact path="/day-planing">
              <Error404 />
            </Route>
            <Route exact path="/setting">
              <Setting />
            </Route>
            <Route exact path="/all-workplace">
              <AllWorkplace />
            </Route>

                                       
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
