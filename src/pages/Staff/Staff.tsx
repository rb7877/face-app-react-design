import React, { useCallback, useState } from "react";
import style from "../../style.module.scss";
import cx from "./Staff.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { FiArrowDown,FiArrowUp } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";


import { NavLink } from "react-router-dom";
// import DateRangePicker from 'rsuite/DateRangePicker';
// import 'rsuite/styles/index.less';
import userImg from "../../images/user.png";



export default function Staff() {
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
                <h5>Staff</h5>
              </Col>
             
             
              <Col className={`col-12 ${style.rowTitleRight}`} lg={6}>
                <Col className={`${cx.rightSearch}`}>
                  <div className={`${cx.searchbar}`}>
                    <input className="form-control" type="search" placeholder="Search..." aria-label="Search"/>
                    <RiSearchLine className={`${cx.ion}`}/>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      <FiFilter /> Sort by
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">A - Z</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Z - A</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Manager</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Staff</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Data added</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Data added</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Col>

            </Row>
          </Card.Title>



        <Card.Body style={{ minHeight: "600px" }}>
            <Row>
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>John Doe <span>•</span> <span style={{ color: '#5498fd' }}>Active</span></h5>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Archive</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                    </div>
                 </div>
              </Col>
              
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>John Doe <span>•</span> <span style={{ color: '#5498fd' }}>Active</span></h5>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Archive</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                    </div>
                 </div>
              </Col>
              
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>John Doe <span>•</span> <span style={{ color: '#5498fd' }}>Active</span></h5>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Archive</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                    </div>
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
