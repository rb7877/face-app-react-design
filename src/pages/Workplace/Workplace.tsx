import React, { useCallback, useState } from "react";
import style from "../../style.module.scss";
import cx from "./Workplace.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { FiArrowDown,FiArrowUp } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineImportantDevices } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";


import { FiFilter } from "react-icons/fi";


import { NavLink } from "react-router-dom";
// import DateRangePicker from 'rsuite/DateRangePicker';
// import 'rsuite/styles/index.less';
import userImg from "../../images/user.png";



export default function Workplace() {
  // const instance = <DateRangePicker />;


  const [addWorkShow, setaddWorkShow] = useState(false);
  const handleClose = () => setaddWorkShow(false);

  
  const [editWorkShow, seteditWorkShow] = useState(false);
  const handleClose2 = () => seteditWorkShow(false);

  

  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
        <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={4}>
                <h5>Workplace</h5>
              </Col>
             
             
              <Col className={`col-12 ${style.rowTitleRight}`} lg={8}>
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
                    </Dropdown.Menu>
                  </Dropdown>
                  <button className="btn" onClick={() => setaddWorkShow(true)}>+ Add Workplace</button>
                </Col>
              </Col>

            </Row>
          </Card.Title>



        <Card.Body style={{ minHeight: "600px" }}>
            <Row>
              <Col lg={4}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <div className={`${cx.userBody}`}>
                          <h5>Workplace Name</h5>
                          <p>Location : Jaipur</p>
                          <div className="d-flex">
                            <button className={`btn ${cx.btnNt}`} onClick={() => seteditWorkShow(true)}>
                              <MdModeEdit /> Edit
                            </button>
                            <button className={`btn ${cx.btnNt}`}>
                              <MdOutlineImportantDevices /> Devices
                            </button>
                            <button className={`btn ${cx.btnNt}`}>
                              <AiOutlineLock /> Attendance
                            </button>
                          </div>
                          
                        </div>
                    </div>
                 </div>
              </Col>
              
              <Col lg={4}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <div className={`${cx.userBody}`}>
                          <h5>Workplace Name</h5>
                          <p>Location : Jaipur</p>
                          <div className="d-flex">
                            <button className={`btn ${cx.btnNt}`} onClick={() => seteditWorkShow(true)}>
                              <MdModeEdit /> Edit
                            </button>
                            <button className={`btn ${cx.btnNt}`}>
                              <MdOutlineImportantDevices /> Devices
                            </button>
                            <button className={`btn ${cx.btnNt}`}>
                              <AiOutlineLock /> Attendance
                            </button>
                          </div>
                          
                        </div>
                    </div>
                 </div>
              </Col>
              
              <Col lg={4}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <div className={`${cx.userBody}`}>
                          <h5>Workplace Name</h5>
                          <p>Location : Jaipur</p>
                          <div className="d-flex">
                            <button className={`btn ${cx.btnNt}`} onClick={() => seteditWorkShow(true)}>
                              <MdModeEdit /> Edit
                            </button>
                            <button className={`btn ${cx.btnNt}`}>
                              <MdOutlineImportantDevices /> Devices
                            </button>
                            <button className={`btn ${cx.btnNt}`}>
                              <AiOutlineLock /> Attendance
                            </button>
                          </div>
                          
                        </div>
                    </div>
                 </div>
              </Col>
              
              <Col lg={4}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <div className={`${cx.userBody}`}>
                          <h5>Workplace Name</h5>
                          <p>Location : Jaipur</p>
                          <div className="d-flex">
                            <button className={`btn ${cx.btnNt}`} onClick={() => seteditWorkShow(true)}>
                              <MdModeEdit /> Edit
                            </button>
                            <button className={`btn ${cx.btnNt}`}>
                              <MdOutlineImportantDevices /> Devices
                            </button>
                            <button className={`btn ${cx.btnNt}`}>
                              <AiOutlineLock /> Attendance
                            </button>
                          </div>
                          
                        </div>
                    </div>
                 </div>
              </Col>
              
            </Row>   
        </Card.Body>
        </Card>
      </section>
      <Footer />

      <Modal
        className={`${cx.ctsPopup}`}
        size="lg"
        show={addWorkShow}
        onHide={() => setaddWorkShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Add Workplace
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={`${cx.timeCheckbox}`}>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Name</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="Name" />
                </Col>
              </Form.Group>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Location</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="Location" />
                </Col>
              </Form.Group>
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
        show={editWorkShow}
        onHide={() => seteditWorkShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Edit Workplace
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={`${cx.timeCheckbox}`}>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Name</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="Name" />
                </Col>
              </Form.Group>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Location</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="Location" />
                </Col>
              </Form.Group>
            </div>
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
