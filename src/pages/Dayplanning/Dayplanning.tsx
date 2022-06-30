import React, { useCallback, useState } from "react";
import style from "../../style.module.scss";
import cx from "./Dayplanning.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { MdModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { Scheduler } from "@aldabil/react-scheduler";

export default function Dayplanning() {
  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card>
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={4}>
                <h5>Day planing</h5>
              </Col>

            </Row>
          </Card.Title>
          <Card.Body style={{ minHeight: "600px" }}>
            <Row className={`${cx.calendarBox}`}>

            </Row>
          </Card.Body>
        </Card>
      </section>
      <Footer />

    </>
  );
}
