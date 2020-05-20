import React, { useState, useEffect } from 'react';
import './index.css';
import { scrible, scrible2, dp } from '../../images';

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
        { number: "01. ", skill: "Consectetur adipiscing elit." },
        { number: "02. ", skill: "Consectetur adipiscing elit." },
        { number: "03. ", skill: "Consectetur adipiscing elit." },
        { number: "04. ", skill: "Consectetur adipiscing elit." },
        { number: "05. ", skill: "Consectetur adipiscing elit." },
        { number: "06. ", skill: "Consectetur adipiscing elit." },
    ])

    const [education, setEducation] = useState([
        { number: "01. ", education: "Lorem ipsum dolor sit amet", desc: "Consectetur adipiscing elit." },
        { number: "02. ", education: "Lorem ipsum dolor sit amet", desc: "Consectetur adipiscing elit." },
    ])

    const [experiences, setExperiences] = useState([
        { number: "01. ", education: "Lorem ipsum dolor sit amet", desc: "Consectetur adipiscing elit." },
        { number: "02. ", education: "Lorem ipsum dolor sit amet", desc: "Consectetur adipiscing elit." },
    ])

    const [personal, setPersonal] = useState([
        { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", desc: "Proin accumsan justo augue, id sodales dolor tincidunt sit amet. Quisque pharetra massa nisl, ac tempor purus ultrices quis. Suspendisse consectetur turpis felis, vel blandit sem porta non." },
        { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", desc: "Proin accumsan justo augue, id sodales dolor tincidunt sit amet. Quisque pharetra massa nisl, ac tempor purus ultrices quis. Suspendisse consectetur turpis felis, vel blandit sem porta non. Aenean at leo eget mauris semper ornare non at ante. " },
        { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", desc: "Proin accumsan justo augue, id sodales dolor tincidunt sit amet. Quisque pharetra massa nisl, ac tempor purus ultrices quis." }
    ])

    useEffect(() => {
        window.scrollTo(0, 0);
    })

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
                <Row className="home-white">
                    <Col lg={24}>
                        <p className="home-title"> Skills </p>
                    </Col>
                    <Row>
                        <Col lg={12}>
                            {
                                skills !== ' '
                                    ? skills.slice(0, 3).map((data, i) => {
                                        return (
                                            <Fade left big>
                                                <Row key={i} className="home-content">
                                                    <p className="home-number">{data.number}</p>
                                                    <p className="home-desc">{data.skill}</p>
                                                </Row>
                                            </Fade>
                                        )
                                    })
                                    : "No Data"
                            }
                        </Col>
                        <Col lg={12}>
                            {
                                skills !== ' '
                                    ? skills.slice(3, 6).map((data, i) => {
                                        return (
                                            <Fade right big>
                                                <Row key={i} className="home-content">
                                                    <p className="home-number">{data.number}</p>
                                                    <p className="home-desc">{data.skill}</p>
                                                </Row>
                                            </Fade>
                                        )
                                    })
                                    : "No Data"
                            }
                        </Col>
                    </Row>
                </Row>
                {/* Experiences and Involvement */}
                <Row className="home-pink">
                    <Col lg={12}>
                        <Row>
                            <p className="home-title">Education</p>
                            <img src={scrible} alt="scrible" className="home-education-image" />
                        </Row>
                        {
                            experiences !== ''
                                ? experiences.map((data, i) => {
                                    return (
                                        <Fade left big>
                                            <Row key={i} className="home-content">
                                                <p className="home-number">{data.number}</p>
                                                <p className="home-desc">{data.education} <br />{data.desc}</p>
                                            </Row>
                                        </Fade>
                                    )
                                })
                                : "No Data"
                        }
                    </Col>
                    <Col lg={12} className="home-experiences-padding">
                        {
                            experiences !== ''
                                ? experiences.map((data, i) => {
                                    return (
                                        <Fade right big>
                                            <Row key={i} className="home-content">
                                                <p className="home-number">{data.number}</p>
                                                <p className="home-desc">{data.education} <br /> {data.desc}</p>
                                            </Row>
                                        </Fade>
                                    )
                                })
                                : "No Data"
                        }
                        <Row>
                            <p className="home-title">Experiences</p>
                            <img src={scrible} alt="scrible" className="home-experiences-image" />
                        </Row>
                    </Col>
                </Row>
                {/* Profile - Name, Age, Course, Location */}
                <Row className="home-white">
                    <Col lg={10} className="home-profile-dp">
                        <img src={dp} alt="dp" className="home-profile-dp-width" />
                    </Col>
                    <Col lg={14}>
                        <Row>
                            <p className="home-title">About Me</p>
                        </Row>
                        <Row>
                            <img src={scrible} alt="scrible" className="home-profile-image" />
                        </Row>
                        <Row>
                            {
                                personal.map((data, i) => {
                                    return (
                                        <Fade right big>
                                            <Row key={i} className="home-content">
                                                <Row>
                                                    <p className="home-number home-profile-title">{data.title}</p>
                                                </Row>
                                                <Row>
                                                    <p className="home-desc home-profile-desc">{data.desc}</p>
                                                </Row>
                                            </Row>
                                        </Fade>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Content >
            <Footer />
        </Layout >
    )
}

export default About;