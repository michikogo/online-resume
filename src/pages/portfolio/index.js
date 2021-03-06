import React from 'react';
import './index.css';
import { Layout } from 'antd';

import Header from '../../common/header';
import Footer from '../../common/footer';

const Portfolio = () => {
    const { Content } = Layout;
    return (
        <Layout>
            <Header />
            <Content className="site-layout home-layout" style={{ padding: '0 50px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Portfolio
            </div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default Portfolio;