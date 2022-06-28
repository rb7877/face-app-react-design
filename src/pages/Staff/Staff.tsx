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

  const [editWorkShow, seteditWorkShow] = useState(false);
  const handleClose2 = () => seteditWorkShow(false);

  const [show3, setDeleteShow] = useState(false);
  const handleClose3 = () => setDeleteShow(false);

  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
        <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={4}>
                <h5>Staff</h5>
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
                      <Dropdown.Item href="#/action-3">Present</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Absent</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <NavLink className="btn" to="/add-staff">
                     + Add Staff
                  </NavLink>
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
                          <p>Department - Sales</p>
                          <p>Job Position - Manager</p>
                          <p>Timesheet Cost : $20</p>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <p>Building 1, Second Floor, Manasovar, Jaipur</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => seteditWorkShow(true)}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => setDeleteShow(true)}>Delete</Dropdown.Item>
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
                          <h5>Abigail Peterson</h5>
                          <p>Department - Sales</p>
                          <p>Job Position - Manager</p>
                          <p>Timesheet Cost : $20</p>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <p>Building 1, Second Floor, Manasovar, Jaipur</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: 'rgb(58 165 0 / 1)' }}></span> 
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => seteditWorkShow(true)}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => setDeleteShow(true)}>Delete</Dropdown.Item>
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
                          <h5>Abigail Peterson</h5>
                          <p>Department - Sales</p>
                          <p>Job Position - Manager</p>
                          <p>Timesheet Cost : $20</p>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <p>Building 1, Second Floor, Manasovar, Jaipur</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: 'rgb(58 165 0 / 1)' }}></span> 
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => seteditWorkShow(true)}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => setDeleteShow(true)}>Delete</Dropdown.Item>
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
                          <h5>Abigail Peterson</h5>
                          <p>Department - Sales</p>
                          <p>Job Position - Manager</p>
                          <p>Timesheet Cost : $20</p>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <p>Building 1, Second Floor, Manasovar, Jaipur</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: 'rgb(58 165 0 / 1)' }}></span> 
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => seteditWorkShow(true)}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => setDeleteShow(true)}>Delete</Dropdown.Item>
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
                          <h5>Abigail Peterson</h5>
                          <p>Department - Sales</p>
                          <p>Job Position - Manager</p>
                          <p>Timesheet Cost : $20</p>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <p>Building 1, Second Floor, Manasovar, Jaipur</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => seteditWorkShow(true)}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => setDeleteShow(true)}>Delete</Dropdown.Item>
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
                          <h5>Abigail Peterson</h5>
                          <p>Department - Sales</p>
                          <p>Job Position - Manager</p>
                          <p>Timesheet Cost : $20</p>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <p>Building 1, Second Floor, Manasovar, Jaipur</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => seteditWorkShow(true)}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => setDeleteShow(true)}>Delete</Dropdown.Item>
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
                          <h5>Abigail Peterson</h5>
                          <p>Department - Sales</p>
                          <p>Job Position - Manager</p>
                          <p>Timesheet Cost : $20</p>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <p>Building 1, Second Floor, Manasovar, Jaipur</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => seteditWorkShow(true)}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => setDeleteShow(true)}>Delete</Dropdown.Item>
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
                          <h5>Abigail Peterson</h5>
                          <p>Department - Sales</p>
                          <p>Job Position - Manager</p>
                          <p>Timesheet Cost : $20</p>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <p>Building 1, Second Floor, Manasovar, Jaipur</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => seteditWorkShow(true)}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => setDeleteShow(true)}>Delete</Dropdown.Item>
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
                          <h5>Abigail Peterson</h5>
                          <p>Department - Sales</p>
                          <p>Job Position - Manager</p>
                          <p>Timesheet Cost : $20</p>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <p>Building 1, Second Floor, Manasovar, Jaipur</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => seteditWorkShow(true)}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => setDeleteShow(true)}>Delete</Dropdown.Item>
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
                          <h5>Abigail Peterson</h5>
                          <p>Department - Sales</p>
                          <p>Job Position - Manager</p>
                          <p>Timesheet Cost : $20</p>
                          <p>Date of Employment: Jun 13th, 2022</p>
                          <p>Last activity: 17:00, Jun 14, 2022</p>
                          <p>Building 1, Second Floor, Manasovar, Jaipur</p>
                          <span className={`${cx.status}`} style={{ backgroundColor: '#f59608' }}></span> 
                          <Dropdown className={`${cx.actionDrop}`}>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FiMoreHorizontal />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => seteditWorkShow(true)}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => setDeleteShow(true)}>Delete</Dropdown.Item>
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
            Edit Staff
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={`${cx.timeCheckbox}`}>
                        
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                <img src={userImg} className={` ${cx.popupProfile}`} /> 
                </Col>
              </Form.Group>
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
                  <Form.Label>Department</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Select aria-label="Default select example">
                    <option>Manager</option>
                    <option>Staff</option>
                  </Form.Select>
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


      <Modal className={`${cx.DeletePopup}`} show={show3} onHide={handleClose3} centered>
        <Modal.Body>
          <Col lg={12}>
            <p>Are you sure you want to delete this User?</p>
            <button type="button" className={`btn btn-danger ${cx.CancelBtn}`} onClick={handleClose3}>
              Cancel
            </button>
            <button type="submit" className={`btn ${cx.submitBtn}`}>  Delete</button>
          </Col>
          </Modal.Body>
      </Modal>
    </>
  );
}
