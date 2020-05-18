import React, { useState } from 'react';
import './index.css';

import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
    const { Header } = Layout;

    return (
        <Layout>
            <Header className="header-background-color header-height ">
                <div className="logo" />
                <Menu theme='dark' selectedKeys={[]} mode="horizontal" className="header-background-color">
                    <Menu.Item key="1">
                        <Link to="/" replace>
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/portfolio" replace>
                            Portfolio
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/contact" replace>
                            Contact Me
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout >
    )
}

export default Header;