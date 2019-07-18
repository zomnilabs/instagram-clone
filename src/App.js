import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content } = Layout;

function App(props) {
  const { children } = props;
  return (
    <Layout>
      <Header className="header">
        <Link to="/">Instagram Clone</Link>
        <Link to="/users">Profile</Link>
      </Header>
      <Content id="main-content">{children}</Content>
    </Layout>
  );
}

export default App;
