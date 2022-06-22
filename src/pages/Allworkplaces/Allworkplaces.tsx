import React, { useCallback, useState } from "react";
import style from "../../style.module.scss";
import cx from "./Allworkplaces.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import DateRangePicker from 'rsuite/DateRangePicker';
// import 'rsuite/styles/index.less';
import userImg from "../../images/user.png";



export default function AllWorkplace() {
  // const instance = <DateRangePicker />;
  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={6}>
                <h5>All workplaces</h5>
              </Col>
              <Col className={`col-12 ${style.rowTitleRight}`} lg={6}>
             {/* <div>{instance}</div>  */}
              <button className={`btn ${style.width50}`} >
                  Filter
              </button>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  Sort by
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">A - Z</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Z - A</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Manager</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body style={{ minHeight: "600px" }}>
            <Row>
              <Col md={12} lg={6}>
                  <ul className={`${cx.adsentUserList}`}>
                    <li className={`${cx.List}`}>
                      <div className={`${cx.userName}`}>
                         <img src={userImg} /> <h5>John Doe</h5>
                      </div>
                      <div className={`${cx.totalAt}`}>
                        <div className={`${cx.totalAtbody}`}>
                          <p>Total attendance: 0</p>
                          <p> Total hours: 0 </p>
                        </div>
                        <button className={`btn ${cx.timesheetbtn}`}>Timesheet</button>
                      </div>
                    </li>
                    <li className={`${cx.List}`}>
                      <div className={`${cx.userName}`}>
                         <img src={userImg} /> <h5>John Doe</h5>
                      </div>
                      <div className={`${cx.totalAt}`}>
                        <div className={`${cx.totalAtbody}`}>
                          <p>Total attendance: 0</p>
                          <p> Total hours: 0 </p>
                        </div>
                        <button className={`btn ${cx.timesheetbtn}`}>Timesheet</button>
                      </div>
                    </li>
                    <li className={`${cx.List}`}>
                      <div className={`${cx.userName}`}>
                         <img src={userImg} /> <h5>John Doe</h5>
                      </div>
                      <div className={`${cx.totalAt}`}>
                        <div className={`${cx.totalAtbody}`}>
                          <p>Total attendance: 0</p>
                          <p> Total hours: 0 </p>
                        </div>
                        <button className={`btn ${cx.timesheetbtn}`}>Timesheet</button>
                      </div>
                    </li>
                    <li className={`${cx.List}`}>
                      <div className={`${cx.userName}`}>
                         <img src={userImg} /> <h5>John Doe</h5>
                      </div>
                      <div className={`${cx.totalAt}`}>
                        <div className={`${cx.totalAtbody}`}>
                          <p>Total attendance: 0</p>
                          <p> Total hours: 0 </p>
                        </div>
                        <button className={`btn ${cx.timesheetbtn}`}>Timesheet</button>
                      </div>
                    </li>
                    <li className={`${cx.List}`}>
                      <div className={`${cx.userName}`}>
                         <img src={userImg} /> <h5>John Doe</h5>
                      </div>
                      <div className={`${cx.totalAt}`}>
                        <div className={`${cx.totalAtbody}`}>
                          <p>Total attendance: 0</p>
                          <p> Total hours: 0 </p>
                        </div>
                        <button className={`btn ${cx.timesheetbtn}`}>Timesheet</button>
                      </div>
                    </li>
                    <li className={`${cx.List}`}>
                      <div className={`${cx.userName}`}>
                         <img src={userImg} /> <h5>John Doe</h5>
                      </div>
                      <div className={`${cx.totalAt}`}>
                        <div className={`${cx.totalAtbody}`}>
                          <p>Total attendance: 0</p>
                          <p> Total hours: 0 </p>
                        </div>
                        <button className={`btn ${cx.timesheetbtn}`}>Timesheet</button>
                      </div>
                    </li>
                    <li className={`${cx.List}`}>
                      <div className={`${cx.userName}`}>
                         <img src={userImg} /> <h5>John Doe</h5>
                      </div>
                      <div className={`${cx.totalAt}`}>
                        <div className={`${cx.totalAtbody}`}>
                          <p>Total attendance: 0</p>
                          <p> Total hours: 0 </p>
                        </div>
                        <button className={`btn ${cx.timesheetbtn}`}>Timesheet</button>
                      </div>
                    </li>
                  </ul>
              </Col>
              <Col md={12} lg={6}>
              <div className="table-responsive">
                <table className={`table m-0 ${cx.simpleTable}`}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Clock in</th>
                      <th>CLock out</th>
                      <th>Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>22-6-2022</td>
                      <td>12:45 AM</td>
                      <td>06:45 PM</td>
                      <td>6 </td>
                    </tr>
                    <tr>
                      <td>22-6-2022</td>
                      <td>12:45 AM</td>
                      <td>06:45 PM</td>
                      <td>6 </td>
                    </tr>
                    <tr>
                      <td>22-6-2022</td>
                      <td>12:45 AM</td>
                      <td>06:45 PM</td>
                      <td>6 </td>
                    </tr>
                    <tr>
                      <td>22-6-2022</td>
                      <td>12:45 AM</td>
                      <td>06:45 PM</td>
                      <td>6 </td>
                    </tr>
                    <tr>
                      <td>22-6-2022</td>
                      <td>12:45 AM</td>
                      <td>06:45 PM</td>
                      <td>6 </td>
                    </tr>
                    <tr>
                      <td>22-6-2022</td>
                      <td>12:45 AM</td>
                      <td>06:45 PM</td>
                      <td>6 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </section>
      <Footer />

    </>
  );
}
