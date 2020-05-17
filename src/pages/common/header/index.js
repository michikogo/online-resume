import React from 'react';
import './index.css';

import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from 'antd';

const Header = () => {
    const { Header } = Layout;

    return (
        <Layout>
            <Header className="header-background-color header-height ">
                <div className="logo" />
                <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['1']} className="header-background-color">
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Portfolio</Menu.Item>
                    <Menu.Item key="3">Contact Me</Menu.Item>
                </Menu>
            </Header>
            {/* <Content className="site-layout header-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Content
                </div>
            </Content>
            <Footer className="header-background-color" style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout >
    )
}

export default Header;