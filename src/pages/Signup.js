import React from 'react'
import {Row, Col, Button, Form, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import './Signup.css';
import botImg from '../assets/bot.jpg'

function Signup() {
  return (
    <Container>
      <Row>
          <Col mg={7} className="d-flex align-items-center justify-content-center flex-direction-column">
            <Form style={{width: '80%', maxWidth: 500}}>
              <div className="signup-profile-pic__container">
                <img src={botImg} className="signup-profile-pic" />
                <label htmlFor="image-upload" className="image-upload-label">
                    <i className="fas fa-plus-circle add-picture-icon"></i>
                </label>
              </div>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className="py-4">
              <p className="text-center">
                Don't have an account ? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
  )
}

export default Signup