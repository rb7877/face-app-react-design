import React, { useState, Component  } from "react";
import style from "../../style.module.scss";
import cx from "./Setting.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

import { AiOutlineEye } from "react-icons/ai";


import { NavLink } from "react-router-dom";
import userImg from "../../images/user.png";

export default function Setting() {

  const [categoryShow, setCategoryShow] = useState(false);
  const handleClose = () => setCategoryShow(false);

  
  const [passwordShow, setPasswordShow] = useState(false);
  const handleClose2 = () => setPasswordShow(false);

  
  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
        <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={12}>
                <h5>Settings</h5>
              </Col>
            </Row>
          </Card.Title>



        <Card.Body style={{ minHeight: "600px" }}>
            <Row>
              <Col lg={6}>
                <div className={`${cx.settingCard}`}>
                   <h2>Time</h2>
                   <ul>
                      <li className={`${cx.List}`} onClick={() => setCategoryShow(true)}>
                         <h5>Time Formate</h5>
                         <p>12 hours</p>
                         <IoIosArrowForward className={`${cx.iconArrow}`} />
                      </li>
                  </ul>
                </div>
                <div className={`${cx.settingCard}`}>
                   <h2>Account</h2>
                   <ul>
                      <li className={`${cx.List}`} onClick={() => setPasswordShow(true)}>
                         <h5>Change Password</h5>
                         <IoIosArrowForward className={`${cx.iconArrow}`} />
                      </li>
                  </ul>
                </div>
              </Col>
              
            </Row>   
        </Card.Body>
        </Card>
      </section>
      <Footer />

      <Modal
        className={`${cx.ctsPopup}`}
        //size="lg"
        show={categoryShow}
        onHide={() => setCategoryShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Time Formate
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={`${cx.timeCheckbox}`}>
              <div className={`${cx.cheBox}`}>
              <label className={`${style.radio}`}>
                <input type="radio" value="24 hours" name="time" id="24" />
                <span className={`${style.checkmark}`}></span>
                24 hours
              </label>
              </div>
              <div className={`${cx.cheBox}`}>
              <label className={`${style.radio}`}>
                <input type="radio" value="12 hours" name="time" id="12" />
                <span className={`${style.checkmark}`}></span>
                12 hours
              </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer >
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={12} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose}>
                    Close
                  </button>
                  <Button type="button" className={`btn ${cx.apply}`}>
                  Save
                  </Button>
                </Col>
              </Row>
            </Col>
          </Modal.Footer>
        </Form>
      </Modal>

      
      <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={passwordShow}
        onHide={() => setPasswordShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Change Password
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Enter New Password</Form.Label>
                </Col>
                <Col lg={8}>
                <div className={`position-relative ${cx.passwordBox}`}>
                  <Form.Control
                    className={`${cx.formClass}`}
                    type="password"
                    placeholder="Password"
                  />
                  <div className={`${cx.passwordAction}`}>
                    <AiOutlineEye />
                    {/* <AiOutlineEyeInvisible /> */}
                  </div>
                </div>
                </Col>
              </Form.Group>
              
            <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Retype New Password</Form.Label>
                </Col>
                <Col lg={8}>
                <div className={`position-relative ${cx.passwordBox}`}>
                  <Form.Control
                    className={`${cx.formClass}`}
                    type="password"
                    placeholder="Password"
                  />
                  <div className={`${cx.passwordAction}`}>
                    <AiOutlineEye />
                    {/* <AiOutlineEyeInvisible /> */}
                  </div>
                </div>
                </Col>
              </Form.Group>
          </Modal.Body>
          <Modal.Footer >
            <Col lg={12}>
              <Row className="align-items-center">
                <Col lg={12} className={`${cx.rightft}`}>
                  <button type="button" className={`btn ${cx.close}`} onClick={handleClose2}>
                    Close
                  </button>
                  <Button type="button" className={`btn ${cx.apply}`}>
                  Save
                  </Button>
                </Col>
              </Row>
            </Col>
          </Modal.Footer>
        </Form>
      </Modal>

    </>
  );
}
