import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

const MainLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <Container fluid>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainLayout;
