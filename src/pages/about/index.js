import React from 'react';
import './index.css';

import FadeIn from 'react-fade-in';
// import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";

import Header from '../../common/header';
import Footer from '../../common/footer';

const About = () => {
    const { Content } = Layout;
    // const { Title } = Typography;

    return (
        <Layout>
            <Header />
            <Content className="home-layout">
                <Row className="home-row">
                    <Col lg={24}>
                        <FadeIn delay="400" transitionDuration="1000">
                            <p className="home-name">Michiko Young Go</p>
                        </FadeIn>
                    </Col>
                    <Col lg={24}>
                        <FadeIn delay="600" transitionDuration="1000">
                            <p className="home-course">B.S. Computer Science</p>
                        </FadeIn>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout >
    )
}

export default About;