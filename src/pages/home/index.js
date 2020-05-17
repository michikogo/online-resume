import React from 'react';
import './index.css';

// import "antd/dist/antd.css";
import { Layout, Typography } from "antd";

import Header from '../common/header';
import Footer from '../common/footer';

const Home = () => {
    const { Content } = Layout;
    const { Title } = Typography;

    return (
        <Layout>
            <Header />
            <Content className="home-layout home-name">
                <p>Michiko Young Go</p>
            </Content>
            <Footer />
        </Layout>
    )
}

export default Home;