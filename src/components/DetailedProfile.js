import {
  Container, Row, Col
} from 'react-bootstrap';

import '../style.scss'

import { Link } from 'react-router-dom';

function DetailedProfile(data) {

  console.log(data)

  const newData = data.location.state[0].data
  console.log(newData)
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1> {newData.name} </h1>

            <div>
              <img src={newData.picture} alt={newData.name} />
            </div>
          </Col>
          <Col>
            <h2> {newData.home} </h2>
            <h2> Favorite Shoe: {newData.favoriteShoe}</h2>
            <h2> Favorite Artist: {newData.favoriteArtist}</h2>
            <h2> Favorite Color: {newData.favoriteColor}</h2>
          </Col>
        </Row>
        <Row>
        <Link to={{
              pathname: '/Main'
            }}>
              <button type="button" >
                Go Back
              </button>
            </Link>
        </Row>
      </Container>


    </>
  )
}



export default DetailedProfile;
