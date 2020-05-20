import React, { useState } from 'react';
import './index.css';
import { scrible, scrible2 } from '../../images';

import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump'
// import FadeIn from 'react-fade-in';
// import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";
import { DownOutlined } from '@ant-design/icons';

import Header from '../../common/header';
import Footer from '../../common/footer';

const About = () => {
    const { Content } = Layout;

    const [skills, setSkills] = useState([
        { number: "01. ", skill: "Programming Languages (C, C++, Java, MySQL)" },
        { number: "02. ", skill: "Programming Languages (C, C++, Java, MySQL)" },
        { number: "03. ", skill: "Programming Languages (C, C++, Java, MySQL)" },
    ])

    const [skills2, setSkills2] = useState([
        { number: "04. ", skill: "Programming Languages (C, C++, Java, MySQL)" },
        { number: "05. ", skill: "Programming Languages (C, C++, Java, MySQL)" },
        { number: "06. ", skill: "Programming Languages (C, C++, Java, MySQL)" },
    ])

    return (
        <Layout>
            <Header />
            <Content>
                {/* Hello Page */}
                <Row className="home-hello">
                    <Col lg={24}>
                        <Fade bottom big oposite delay={800} duration={1000}>
                            <p className="home-hello-name">Michiko Young Go</p>
                        </Fade>
                    </Col>
                    <Col lg={24}>
                        <Fade bottom big oposite delay={1000} duration={1000}>
                            <p className="home-hello-course">B.S. Computer Science</p>
                        </Fade>
                    </Col>
                    <Col lg={24}>
                        <img src={scrible} alt="scrible" className="home-hello-image" />
                    </Col>
                </Row>
                <Row className="home-hello-down-row">
                    <Jump forever={true}>
                        <DownOutlined className="home-hello-down" />
                    </Jump>
                </Row>
                {/* Skills */}
                <img src={scrible2} alt="scrible2" className="home-skills-image" />
                <Row className="home-skills">
                    <Col lg={24}>
                        <p className="home-skills-name"> Skills </p>
                    </Col>
                    <Row>
                        <Col lg={12}>
                            <Fade left big>
                                {
                                    skills !== ' '
                                        ? skills.map((data, i) => {
                                            return (
                                                <Row key={i} className="home-skills-content">
                                                    <p className="home-skills-number">{data.number}</p>
                                                    <p className="home-skills-skill">{data.skill}</p>
                                                </Row>
                                            )
                                        })
                                        : "No Data"
                                }
                            </Fade>
                        </Col>
                        <Col lg={12}>
                            <Fade right big>
                                {
                                    skills2 !== ' '
                                        ? skills2.map((data, i) => {
                                            return (
                                                <Row key={i} className="home-skills-content">
                                                    <p className="home-skills-number">{data.number}</p>
                                                    <p className="home-skills-skill">{data.skill}</p>
                                                </Row>
                                            )
                                        })
                                        : "No Data"
                                }
                            </Fade>
                        </Col>
                    </Row>
                </Row>

                {/* Profile - Name, Age, Course, Location */}
                {/* Experiences  and Involvement */}
            </Content >
            <Footer />
        </Layout >
    )
}

export default About;