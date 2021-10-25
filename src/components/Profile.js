import data from '../DALI_Data.json'

import {
  Container, Row, Card, Col
} from 'react-bootstrap';

import '../style.scss'

import { Link } from 'react-router-dom';

function Profile() {

  const newData = data.map((data) => {
    return (
      <>
        <Col>
          <Card
            bg="Success"
            style={{ width: '18rem' }}
          >
            <Card.Img variant="top" src={data.picture} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                {data.role}
              </Card.Text>
            </Card.Body>
            <Link to={{
              pathname: '/Main/Profile',
              state: [{ data }],
            }}>
              <button type="button" >
                Learn More
              </button>
            </Link>

          </Card>
        </Col>
      </>

    )
  })


  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center">
          <h1> Here are all the Dali Members</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {newData}
        </Row>
      </Container>
    </>
  );
}

export default Profile;
