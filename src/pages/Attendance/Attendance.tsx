import React, { useCallback, useState } from "react";
import style from "../../style.module.scss";
import cx from "./Attendance.module.scss";
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



export default function Attendance() {
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
                <h5>Attendance</h5>
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
                      <Dropdown.Item href="#/action-3">Present</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Absent</Dropdown.Item>
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
                          <h5>Abigail Peterson</h5>
                          <p>Consultant</p>
                          <p>Building 1, Second Floor</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                        </div>
                    </div>
                 </div>
              </Col>
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>Abigail Peterson</h5>
                          <p>Consultant</p>
                          <p>Building 1, Second Floor</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: 'rgb(58 165 0 / 1)' }}></span> 
                        </div>
                    </div>
                 </div>
              </Col>
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>Abigail Peterson</h5>
                          <p>Consultant</p>
                          <p>Building 1, Second Floor</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: 'rgb(58 165 0 / 1)' }}></span> 
                        </div>
                    </div>
                 </div>
              </Col>
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>Abigail Peterson</h5>
                          <p>Consultant</p>
                          <p>Building 1, Second Floor</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: 'rgb(58 165 0 / 1)' }}></span> 
                        </div>
                    </div>
                 </div>
              </Col>
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>Abigail Peterson</h5>
                          <p>Consultant</p>
                          <p>Building 1, Second Floor</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                        </div>
                    </div>
                 </div>
              </Col>
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>Abigail Peterson</h5>
                          <p>Consultant</p>
                          <p>Building 1, Second Floor</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                        </div>
                    </div>
                 </div>
              </Col>
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>Abigail Peterson</h5>
                          <p>Consultant</p>
                          <p>Building 1, Second Floor</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                        </div>
                    </div>
                 </div>
              </Col>
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>Abigail Peterson</h5>
                          <p>Consultant</p>
                          <p>Building 1, Second Floor</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                        </div>
                    </div>
                 </div>
              </Col>
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>Abigail Peterson</h5>
                          <p>Consultant</p>
                          <p>Building 1, Second Floor</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                        </div>
                    </div>
                 </div>
              </Col>
              <Col lg={6}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <img src={userImg} /> 
                        <div className={`${cx.userBody}`}>
                          <h5>Abigail Peterson</h5>
                          <p>Consultant</p>
                          <p>Building 1, Second Floor</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
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
