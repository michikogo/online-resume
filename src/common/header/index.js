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
                <Menu theme='dark' selectedKeys={[]} mode="horizontal" className="header-background-color">
                    <Menu.Item key="1">
                        <Link to="/" replace>
                            <p className="header-name">HOME</p>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/portfolio" replace>
                            <p className="header-name">PORTFOLIO</p>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/contact" replace>
                            <p className="header-name">CONTACT ME</p>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout >
    )
}

export default Header;