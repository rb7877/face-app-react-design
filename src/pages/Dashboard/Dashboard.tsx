import React, { useCallback, useState } from "react";
import style from "../../style.module.scss";
import cx from "./Dashboard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { FiUsers } from "react-icons/fi";
import { PieChart, Pie, Cell, ResponsiveContainer, } from 'recharts';
import { MdModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,

  LabelList,
} from "recharts";

const data = [
  {
    name: "9",
    name1: "95%",
    PastWeek: 95,
    name2: "95%",
    CurrentWeek: 97,
    name3: "97%",
    YTD: 93,
  },

  {
    name: "10",
    name1: "93%",
    PastWeek: 93,
    name2: "93%",
    CurrentWeek: 95,
    name3: "95%",
    YTD: 91,
  },
  {
    name: "11",
    name1: "82%",
    PastWeek: 82,
    name2: "82%",
    CurrentWeek: 91,
    name3: "91%",
    YTD: 91,
  },
  {
    name: "12",
    name1: "95%",
    PastWeek: 95,
    name2: "95%",
    CurrentWeek: 98,
    name3: "98%",
    YTD: 91,
  }
];


const data1 = [
  { name: 'Group A', value: 400, month: 'Dec 1' },
  { name: 'Group B', value: 500, month: 'Dec 14' },
  { name: 'Group C', value: 400, month: 'Dec 18' },
  { name: 'Group D', value: 300, month: 'Dec 19' },
  { name: 'Group E', value: 200, month: 'Dec 1' },
  { name: 'Group f', value: 300, month: 'Dec 1' },
  { name: 'Group g', value: 200, month: 'Dec 1' },

];

const COLORS = ['#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#FF8042',
  '#FF8041',
  '#FF8046',
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (props: any) => {
  console.log("rendered");
  const {
    cx,
    cy,
    midAngle,
    outerRadius,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 1;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";
  return (
    <g >
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        style={{ fontSize: '13px' }}
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill={fill}
      >
        {payload.month}
      </text>
      <text
        style={{ fontSize: '12px' }}
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {value}
      </text>
    </g>
  );
};

export default function Dashboard() {

  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card className="mb-3">
          <Card.Title>
            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={4}>
                <h5>Dashboard</h5>
              </Col>

            </Row>
          </Card.Title>
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
              <div className={`${cx.countCard}`} style={{ borderColor: '#4D4D4D' }}>
                <span style={{ backgroundColor: '#4D4D4D' }} ><FiUsers className={`${cx.icon}`} /></span>
                <div className={`${cx.countCardName}`}>
                  <h2>22</h2>
                  <p>Total Absent</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={`${cx.countCard}`} style={{ borderColor: '#FAAD14' }}>
                <span style={{ backgroundColor: '#FAAD14' }} ><FiUsers className={`${cx.icon}`} /></span>
                <div className={`${cx.countCardName}`}>
                  <h2>36</h2>
                  <p>Total Present</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={`${cx.countCard}`} style={{ borderColor: '#EE6352' }}>
                <span style={{ backgroundColor: '#EE6352' }} ><FiUsers className={`${cx.icon}`} /></span>
                <div className={`${cx.countCardName}`}>
                  <h2>25</h2>
                  <p>Staffs</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={`${cx.countCard}`} style={{ borderColor: '#52C41A' }}>
                <span style={{ backgroundColor: '#52C41A' }} ><FiUsers className={`${cx.icon}`} /></span>
                <div className={`${cx.countCardName}`}>
                  <h2>25</h2>
                  <p>Staffs</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={`${cx.countCard}`} style={{ borderColor: '#1890FF' }}>
                <span style={{ backgroundColor: '#1890FF' }} ><FiUsers className={`${cx.icon}`} /></span>
                <div className={`${cx.countCardName}`}>
                  <h2>25</h2>
                  <p>Total Staffs</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={`${cx.countCard}`} style={{ borderColor: '#EE6352' }}>
                <span style={{ backgroundColor: '#EE6352' }} ><FiUsers className={`${cx.icon}`} /></span>
                <div className={`${cx.countCardName}`}>
                  <h2>22</h2>
                  <p>Total Absent</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={`${cx.countCard}`} style={{ borderColor: '#52c41a' }}>
                <span style={{ backgroundColor: '#52c41a' }} ><FiUsers className={`${cx.icon}`} /></span>
                <div className={`${cx.countCardName}`}>
                  <h2>36</h2>
                  <p>Total Present</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>


        <Card className="mb-3">
          <Card.Title>
            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`col-12 ${style.rowTitleLeft}`} lg={4}>
                <h5>Attendance % by Grade</h5>
              </Col>

            </Row>
          </Card.Title>
          <Card.Body>
            <Row>
              <Col md={12}>
                <div className={`mt-4 ${cx.cardBox}`}>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      width={1020}
                      height={300}
                      data={data}
                      margin={{
                        top: 11,
                        right: 30,
                        left: 1,
                        bottom: 5
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      {/* <YAxis /> */}
                      <YAxis tickFormatter={tick => `${tick}%`} />

                      <Bar dataKey="PastWeek" fill="#1E90FF" unit="%"   >
                        <LabelList dataKey="name1" position="top" style={{ fill: "#000" }} />
                      </Bar>
                      <Bar dataKey="CurrentWeek" fill="#DC143C" unit="%"  >
                        <LabelList dataKey="name2" position="top" style={{ fill: "#000" }} />
                      </Bar>
                      <Bar dataKey="YTD" fill="#FFA500" unit="%"  >
                        <LabelList dataKey="name3" position="top" style={{ fill: "#000" }} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>

                </div>
              </Col>
            </Row>

          </Card.Body>
        </Card>

        <Row>
          <Col lg={6}>
            <Card className="mb-3">

              <Card.Title>
                <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                  <Col className={`col-12 ${style.rowTitleLeft}`} lg={12}>
                    <h5>Absentes - Last 7 days</h5>
                  </Col>

                </Row>
              </Card.Title>
              <Card.Body>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={data1}
                      labelLine={false}
                      label={(a) => renderCustomizedLabel(a)}
                      innerRadius={50}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {
                        data1.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))
                      }
                    </Pie>

                  </PieChart>
                </ResponsiveContainer>

              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="mb-3">

              <Card.Title>
                <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                  <Col className={`col-12 ${style.rowTitleLeft}`} lg={12}>
                    <h5>Absentes - by Month</h5>
                  </Col>

                </Row>
              </Card.Title>
              <Card.Body>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={data1}
                      labelLine={false}
                      label={(a) => renderCustomizedLabel(a)}
                      innerRadius={50}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {
                        data1.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))
                      }
                    </Pie>

                  </PieChart>
                </ResponsiveContainer>

              </Card.Body>
            </Card>
          </Col>


          <Col lg={6}>
            <Card className="mb-3">

              <Card.Title>
                <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
                  <Col className={`col-12 ${style.rowTitleLeft}`} lg={12}>
                    <h5>Absentes - by Month</h5>
                  </Col>

                </Row>
              </Card.Title>
              <Card.Body>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={data1}
                      labelLine={false}
                      label={(a) => renderCustomizedLabel(a)}
                      innerRadius={50}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {
                        data1.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))
                      }
                    </Pie>

                  </PieChart>
                </ResponsiveContainer>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <Footer />

    </>
  );
}
