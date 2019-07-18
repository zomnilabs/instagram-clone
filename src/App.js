import React from "react";
import { Layout } from "antd";
import "./App.css";

const { Header, Content } = Layout;

function App(props) {
  const { children } = props;
  return (
    <Layout>
      <Header>
        <p>InstaClone</p>
      </Header>
      <Content id="main-content">{children}</Content>
    </Layout>
  );
}

export default App;
