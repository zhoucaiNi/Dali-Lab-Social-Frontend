
import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../../components/Profile';

import {
  Container, Row
} from 'react-bootstrap';

function Main(props) {
  return (
    <>
      <Container>
        <Row>
          <h1> Hello </h1>
        </Row>
      </Container>
      <Profile></Profile>
    </>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));


export default Main