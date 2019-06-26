import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
import './auth.css';

const Auth = (props) => {
  const [showLogin, setShowLogin] = useState(true)

  return(
    <Container className="auth-container">
      <Row>
        <Col md="6">
            <Signup updateToken={props.updateToken}/>
        </Col>
        <Col md="6" className="login-col">
            <Login updateToken={props.updateToken}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Auth;