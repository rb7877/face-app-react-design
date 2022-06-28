import React, { useCallback, useState } from "react";
import style from "../../style.module.scss";
import cx from "./Devices.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { MdModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";





export default function Devices() {


  const [addWorkShow, setaddWorkShow] = useState(false);
  const handleClose = () => setaddWorkShow(false);

  
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
                <h5>Devices</h5>
              </Col>

            </Row>
          </Card.Title>



        <Card.Body style={{ minHeight: "600px" }}>
            <Row>
              <Col lg={4}>
                 <div className={`${cx.staffCard}`}>
                    <div className={`${cx.userName}`}>
                        <div className={`${cx.userBody}`}>
                          <h5>Unnamed Device</h5>
                          <p>Device: CPH2249</p>
                          <p>Workplace: .dot</p>
                          <p>Status: offline</p>
                          <div className="d-flex">
                            <button className={`btn ${cx.btnNt}`} onClick={() => seteditWorkShow(true)}>
                              <MdModeEdit /> Edit
                            </button>
                            <button className={`btn ${cx.btnNt}`} onClick={() => setDeleteShow(true)}>
                              <AiOutlineDelete /> Delete
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
                          <h5>Unnamed Device</h5>
                          <p>Device: CPH2249</p>
                          <p>Workplace: .dot</p>
                          <p>Status: offline</p>
                          <div className="d-flex">
                            <button className={`btn ${cx.btnNt}`} onClick={() => seteditWorkShow(true)}>
                              <MdModeEdit /> Edit
                            </button>
                            <button className={`btn ${cx.btnNt}`} onClick={() => setDeleteShow(true)}>
                              <AiOutlineDelete /> Delete
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
        show={editWorkShow}
        onHide={() => seteditWorkShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Edit Device
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={`${cx.timeCheckbox}`}>
              <Form.Group
                className={`row align-items-center ${cx.formBox}`}
                controlId="formName"
              >
                <Col lg={4}>
                  <Form.Label>Device Id</Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="Device Id" />
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
