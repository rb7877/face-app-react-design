import React, { useCallback, useState } from "react";
import style from "../../style.module.scss";
import cx from "./Dashboard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { MdModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";





export default function Dashboard() {

  

  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
        <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={4}>
                <h5>Dashboard</h5>
              </Col>

            </Row>
          </Card.Title>



        <Card.Body style={{ minHeight: "600px" }}>
            <Row>
              
              
              
            </Row>   
        </Card.Body>
        </Card>
      </section>
      <Footer />

    </>
  );
}
