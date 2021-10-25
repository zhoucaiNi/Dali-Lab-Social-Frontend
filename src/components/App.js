
// import './App.css';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Container, Row, Col
} from 'react-bootstrap';

import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';

import '../style.scss';
// import SignIn from './components/Main';
import Dali from '../pics/DALILogo.png'
import DetailedProfile from './DetailedProfile';
import Profile from './Profile';

class LoginIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleNameUpdate = this.handleNameUpdate.bind(this);
  }

  handleNameUpdate(e) {
    this.setState({name: e.target.value});
    console.log(this.state.name)
  }

  render(){
    return (
      <>
        <Container >
          <Row className="justify-content-md-center">
            <Col className="text-center">
            <h1> Welcome to the Dali Lab Social Platform</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="text-center">
            <img src={Dali} alt="Dali"></img>
            </Col>
            </Row>
          <Row className="justify-content-md-center">
            <Col className="text-center">
              <form>
                <input className="login" type="Name" placeholder="Name" value={this.state.name} onChange={this.handleNameUpdate} /> <br />
                <NavLink to={{
                  pathname: "/Main",
                  state: this.state.name
                }}> <input className="login-button" type="submit" value="Sign In" /> </NavLink>
                <br />
                {/* <label>
                <input type="checkbox" name="remember_me" id="remember_me" />
                Remember me on this computer
              </label> */}
              </form>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

const App = (props) => {
  return (
    <>
      <Router>
        <Container fluid>
          <Switch>
            <Route exact path="/" component={LoginIn} />
            <Route exact path="/Main" component={Profile}></Route>
            <Route exact path="/Main/Profile" component={DetailedProfile}></Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
