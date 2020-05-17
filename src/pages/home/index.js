import React from 'react';
import './index.css';
import "antd/dist/antd.css";
import { Button, DatePicker, version } from "antd";

const Home = () => {
    return (
        <div className="App">
            <h1>antd version: {version}</h1>
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
                Primary Button
            </Button>
        </div>
    )
}

export default Home;