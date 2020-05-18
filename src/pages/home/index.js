import React from 'react';
import './index.css';

// import "antd/dist/antd.css";
import { Layout, Typography, Row } from "antd";

import Header from '../common/header';
import Footer from '../common/footer';

const Home = () => {
    const { Content } = Layout;
    // const { Title } = Typography;

    return (
        <Layout>
            <Header />
            <Content className="home-layout">
                <Row className="home-row">
                    <p className="home-name">Michiko Young Go</p>
                </Row>
            </Content>
            <Footer />
        </Layout>
    )
}

export default Home;