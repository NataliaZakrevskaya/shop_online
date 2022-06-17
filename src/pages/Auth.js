import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder={'Enter your email'}
          />
          <Form.Control
            className="mt-3"
            placeholder={'Enter your password'}
          />
          <Row className="d-flex justify-content-between mt-3" style={{paddingLeft: '0.75em', paddingRight: '0.75em'}}>
            {!isLogin ?
              <div className="p-0">
                Do you have an account? <NavLink to={LOGIN_ROUTE}>Log in!</NavLink>
              </div>
              :
              <div className="p-0">
                You don’t have an account? <NavLink to={REGISTRATION_ROUTE}>Sign up!</NavLink>
              </div>
            }
            
            <Button className="mt-3" variant={'outline-success'}>{isLogin ? 'Log in' : 'Sign up'}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;