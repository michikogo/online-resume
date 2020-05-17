import React from 'react';
import './index.css';

import "antd/dist/antd.css";
import { Button, DatePicker, version, Layout } from "antd";
import Header from '../common/header';

const Home = () => {
    return (
        <Layout>
            <Header />
            <div className="App">
                <h1>antd version: {version}</h1>
                <DatePicker />
                <Button type="primary" style={{ marginLeft: 8 }}>
                    Primary Button
            </Button>
            </div>
        </Layout>
    )
}

export default Home;