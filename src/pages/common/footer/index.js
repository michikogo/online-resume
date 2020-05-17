import React from 'react';
import './index.css';

import "antd/dist/antd.css";
import { Layout } from 'antd';

const Footer = () => {
    const { Footer } = Layout;

    return (
        <Layout>
            <Footer className="footer-background-color" style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout >
    )
}

export default Footer;