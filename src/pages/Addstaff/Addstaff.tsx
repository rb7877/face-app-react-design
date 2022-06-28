import React, { useState, Component  } from "react";
import style from "../../style.module.scss";
import cx from "./Addstaff.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

import { AiOutlineEye } from "react-icons/ai";


import { NavLink } from "react-router-dom";
import userImg from "../../images/user.png";

export default function Addstaff() {


  
  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
        <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={12}>
                <h5>Add Staff</h5>
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
