import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from '../components/MessageForm';

function Chat() {
  return <Container fluid className="p-30">
      <Row>
        <Col md={4}>
          <Sidebar/>
        </Col>
        <Col md={8}>
          <MessageForm/>
        </Col>
      </Row>
    </Container>
}

export default Chat