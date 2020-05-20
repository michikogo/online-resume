import React, { useState } from 'react';
import './index.css';
import { scrible, scrible2 } from '../../images';

// import Fade from 'react-reveal/Fade';
// import Jump from 'react-reveal/Jump';
import { Layout, Row, Col } from "antd";
import { DownOutlined } from '@ant-design/icons';

import Header from '../../common/header';
import Footer from '../../common/footer';
import ScrollAnimation from 'react-animate-on-scroll';

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

    const [education, setEducation] = useState([
        { number: "01. ", education: "Lorem ipsum dolor sit amet", desc: "Consectetur adipiscing elit." },
        { number: "02. ", education: "Lorem ipsum dolor sit amet", desc: "Consectetur adipiscing elit." },
    ])

    const [experiences, setExperiences] = useState([
        { number: "01. ", education: "Lorem ipsum dolor sit amet", desc: "Consectetur adipiscing elit." },
        { number: "02. ", education: "Lorem ipsum dolor sit amet", desc: "Consectetur adipiscing elit." },
    ])

    return (
        <Layout>
            <Header />
            <Content>
                {/* Hello Page */}
                <Row className="home-hello">
                    <Col lg={24}>
                        {/* <Fade bottom big oposite delay={800} duration={1000}> */}
                        <ScrollAnimation animateIn='zoomIn'
                            animateOut='zoomIn'>
                            <p className="home-hello-name">Michiko Young Go</p>
                        </ScrollAnimation>
                        {/* </Fade> */}
                    </Col>
                    <Col lg={24}>
                        {/* <Fade bottom big oposite delay={1000} duration={1000}> */}
                        <p className="home-hello-course">B.S. Computer Science</p>
                        {/* </Fade> */}
                    </Col>
                    <Col lg={24}>
                        <img src={scrible} alt="scrible" className="home-hello-image" />
                    </Col>
                </Row>
                <Row className="home-hello-down-row">
                    {/* <Jump forever={true}> */}
                    <DownOutlined className="home-hello-down" />
                    {/* </Jump> */}
                </Row>
                {/* Skills */}
                <img src={scrible2} alt="scrible2" className="home-skills-image" />
                <Row className="home-brown">
                    <Col lg={24}>
                        <p className="home-title"> Skills </p>
                    </Col>
                    <Row>
                        <Col lg={12}>
                            {/* <Fade left big> */}
                            {
                                skills !== ' '
                                    ? skills.map((data, i) => {
                                        return (
                                            <Row key={i} className="home-content">
                                                <p className="home-number">{data.number}</p>
                                                <p className="home-desc">{data.skill}</p>
                                            </Row>
                                        )
                                    })
                                    : "No Data"
                            }
                            {/* </Fade> */}
                        </Col>
                        <Col lg={12}>
                            {/* <Fade right big> */}
                            {
                                skills2 !== ' '
                                    ? skills2.map((data, i) => {
                                        return (
                                            <Row key={i} className="home-content">
                                                <p className="home-number">{data.number}</p>
                                                <p className="home-desc">{data.skill}</p>
                                            </Row>
                                        )
                                    })
                                    : "No Data"
                            }
                            {/* </Fade> */}
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
                                        // <Fade right big>
                                        <Row key={i} className="home-content">
                                            <p className="home-number">{data.number}</p>
                                            <p className="home-desc">{data.education} <br /> {data.desc}</p>
                                        </Row>
                                        // </Fade>
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
                                        // <Fade left big>
                                        <Row key={i} className="home-content">
                                            <p className="home-number">{data.number}</p>
                                            <p className="home-desc">{data.education} <br /> {data.desc}</p>
                                        </Row>
                                        // </Fade>
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
            </Content >
            <Footer />
        </Layout >
    )
}

export default About;