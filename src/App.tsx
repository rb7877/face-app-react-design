import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "./pages/404/404";
import Addstaff from "./pages/Addstaff/Addstaff";
import AllWorkplace from "./pages/Allworkplaces/Allworkplaces";
import Attendance from "./pages/Attendance/Attendance";
import Dashboard from "./pages/Dashboard/Dashboard";
import Dayplanning from "./pages/Dayplanning/Dayplanning";
import Devices from "./pages/Devices/Devices";
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
              <Dashboard />
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
              <Dayplanning />
            </Route>
            <Route exact path="/reports">
              <Error404 />
            </Route>
            <Route exact path="/setting">
              <Setting />
            </Route>
            <Route exact path="/all-workplace">
              <AllWorkplace />
            </Route>
            <Route exact path="/dot">
              <AllWorkplace />
            </Route>
            <Route exact path="/devices">
              <Devices />
            </Route>
            <Route exact path="/add-staff">
              <Error404 />
            </Route>

                                          
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
