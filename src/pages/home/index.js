import React from 'react';
import './index.css';

import "antd/dist/antd.css";
import { Layout, Breadcrumb } from "antd";
import Header from '../common/header';
import Footer from '../common/footer';

const Home = () => {
    const { Content } = Layout;
    return (
        <Layout>
            <Header />
            <Content className="site-layout home-layout" style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Content
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default Home;