import React from "react";
import { Row, Col } from "antd";
import Post from "../../components/Post";

function Home() {
  return (
    <div>
      <Row id="post-list" gutter={30} type="flex" justify="center">
        <Col span={10}>
          <div id="title">Homepage</div>
          <Post width={600} height={400} />
          <Post width={600} height={400} />
        </Col>

        <Col span={8} style={{ backgroundColor: "#000" }}>
          This is the sidebar
        </Col>
      </Row>
    </div>
  );
}

export default Home;
