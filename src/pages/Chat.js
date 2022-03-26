import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from '../components/MessageForm';

function Chat() {
  return (
    <Container>
      <Row>
        <Col>
          <Sidebar md={4}/>
        </Col>
        <Col>
          <MessageForm md={8}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Chat