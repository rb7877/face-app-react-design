import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import style from '../../style.module.scss';
import { MdOutlineMenuOpen } from "react-icons/md";
import { useContext, useState } from "react";
import GlobalContext from "../../store/global-context";
import logo from "../../images/logo.svg";
import line from "../../images/line.svg";
import { MdMoreTime } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { SiWorkplace } from 'react-icons/si';
import { MdCalendarToday } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { FiUserCheck } from 'react-icons/fi';
import { MdReportGmailerrorred } from 'react-icons/md';

import { Accordion } from "react-bootstrap"

const Sidebar = (props: any) => {
  const globalCtx = useContext(GlobalContext);
  const param = useLocation();
  console.log(param, "param")
  const [show, setShow] = useState(true);
  return (
    <>
      <aside className={`${style.sidebarBody} ${globalCtx.showMenu ? style.show : ''}`}>
        <div className={`${style.hideBg}`} onClick={globalCtx.displayMenu}></div>
        <div className={`${style.sidebarMain}`}>
          <div className={`${style.logoBox}`}>
            <NavLink className={`${style.navlogo}`} to="/">
              <img src={logo} className={`${style.logoIcon}`} alt="logo" />
              <img src={line} className={`${style.line}`} alt="line" />
            </NavLink>
          </div>

          <div className={`${style.menuList}`}>
            <ul className={`${style.scroll}`}>

              <Accordion>

                <Accordion.Item eventKey="0">
                  <NavLink className={`${style.listLink}`} to="/dashboard">
                    <Accordion.Header>
                      <div className={`${style.menuIcon}`}>
                        <AiOutlineDashboard />
                      </div>
                      <div className={`${style.menuName}`}>Dashboard</div>
                    </Accordion.Header>
                  </NavLink>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className={`${style.menuIcon}`}>
                      <MdMoreTime />
                    </div>
                    <div className={`${style.menuName}`}>Timesheet</div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <NavLink to="/all-workplace">
                          <div className={`${style.menuName}`}>All Workplace</div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/dot">
                          <div className={`${style.menuName}`}>dot</div>
                        </NavLink>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <NavLink className={`${style.listLink}`} to="/staff">
                    <Accordion.Header>
                      <div className={`${style.menuIcon}`}>
                        <FiUsers />
                      </div>
                      <div className={`${style.menuName}`}>Staff</div>
                    </Accordion.Header>
                  </NavLink>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <NavLink className={`${style.listLink}`} to="/attendance">
                    <Accordion.Header>
                      <div className={`${style.menuIcon}`}>
                        <FiUserCheck />
                      </div>
                      <div className={`${style.menuName}`}>Attendance</div>
                    </Accordion.Header>
                  </NavLink>
                </Accordion.Item>


                <Accordion.Item eventKey="4">
                  <NavLink className={`${style.listLink}`} to="/workplace">
                    <Accordion.Header>
                      <div className={`${style.menuIcon}`}>
                        <SiWorkplace />
                      </div>
                      <div className={`${style.menuName}`}>Workplace</div>
                    </Accordion.Header>
                  </NavLink>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <NavLink className={`${style.listLink}`} to="/day-planing">
                    <Accordion.Header>
                      <div className={`${style.menuIcon}`}>
                        <MdCalendarToday />
                      </div>
                      <div className={`${style.menuName}`}>Day planing </div>
                    </Accordion.Header>
                  </NavLink>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <NavLink className={`${style.listLink}`} to="/reports">
                    <Accordion.Header>
                      <div className={`${style.menuIcon}`}>
                        <MdReportGmailerrorred />
                      </div>
                      <div className={`${style.menuName}`}>Reports </div>
                    </Accordion.Header>
                  </NavLink>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <NavLink className={`${style.listLink}`} to="/setting">
                    <Accordion.Header>
                      <div className={`${style.menuIcon}`}>
                        <FiSettings />
                      </div>
                      <div className={`${style.menuName}`}>Setting</div>
                    </Accordion.Header>
                  </NavLink>
                </Accordion.Item>



              </Accordion>




            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
