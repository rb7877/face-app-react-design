import React, { useCallback, useState } from "react";
import style from "../../style.module.scss";
import cx from "./Dashboard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { FiUsers } from "react-icons/fi";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "9",
    PastWeek: 4000,
    CurrentWeek: 2400,
    YTD: 1400,
  },

  {
    name: "10",
    PastWeek: 4000,
    CurrentWeek: 2400,
    YTD: 1400,
  },

  {
    name: "11",
    PastWeek: 4000,
    CurrentWeek: 2400,
    YTD: 1400,
  },

  {
    name: "12",
    PastWeek: 4000,
    CurrentWeek: 2400,
    YTD: 1400,
  }
];





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
              <Col lg={3}>
                <div className={`${cx.countCard}`} style={{ borderColor: '#5498fd' }}>
                  <span style={{ backgroundColor: '#5498fd' }} ><FiUsers className={`${cx.icon}`} /></span>
                  <div className={`${cx.countCardName}`}>
                    <h2>25</h2>
                    <p>Total Staffs</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className={`${cx.countCard}`} style={{ borderColor: '#ff7070' }}>
                  <span style={{ backgroundColor: '#ff7070' }} ><FiUsers className={`${cx.icon}`} /></span>
                  <div className={`${cx.countCardName}`}>
                    <h2>22</h2>
                    <p>Total Absent</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className={`${cx.countCard}`} style={{ borderColor: '#08a829' }}>
                  <span style={{ backgroundColor: '#08a829' }} ><FiUsers className={`${cx.icon}`} /></span>
                  <div className={`${cx.countCardName}`}>
                    <h2>36</h2>
                    <p>Total Present</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className={`${cx.countCard}`} style={{ borderColor: '#608ed2' }}>
                  <span style={{ backgroundColor: '#608ed2' }} ><FiUsers className={`${cx.icon}`} /></span>
                  <div className={`${cx.countCardName}`}>
                    <h2>25</h2>
                    <p>Staffs</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className={`${cx.countCard}`} style={{ borderColor: '#608ed2' }}>
                  <span style={{ backgroundColor: '#608ed2' }} ><FiUsers className={`${cx.icon}`} /></span>
                  <div className={`${cx.countCardName}`}>
                    <h2>25</h2>
                    <p>Staffs</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className={`${cx.countCard}`} style={{ borderColor: '#5498fd' }}>
                  <span style={{ backgroundColor: '#5498fd' }} ><FiUsers className={`${cx.icon}`} /></span>
                  <div className={`${cx.countCardName}`}>
                    <h2>25</h2>
                    <p>Total Staffs</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className={`${cx.countCard}`} style={{ borderColor: '#ff7070' }}>
                  <span style={{ backgroundColor: '#ff7070' }} ><FiUsers className={`${cx.icon}`} /></span>
                  <div className={`${cx.countCardName}`}>
                    <h2>22</h2>
                    <p>Total Absent</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className={`${cx.countCard}`} style={{ borderColor: '#08a829' }}>
                  <span style={{ backgroundColor: '#08a829' }} ><FiUsers className={`${cx.icon}`} /></span>
                  <div className={`${cx.countCardName}`}>
                    <h2>36</h2>
                    <p>Total Present</p>
                  </div>
                </div>
              </Col>
            </Row>


            <Row>
              <Col md={12}>
                <div className={`mt-4 ${cx.cardBox}`}>
                  <BarChart
                    width={1020}
                    height={350}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 1,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="PastWeek" fill="#1E90FF" />
                    <Bar dataKey="CurrentWeek" fill="#DC143C" />
                    <Bar dataKey="YTD" fill="#FFA500" />
                  </BarChart>

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
