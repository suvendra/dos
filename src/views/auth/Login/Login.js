import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link , Redirect } from 'react-router-dom'
import { renewbuyApiRouter } from '../../../api/appApiManager';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email : "",
      password: "",
    });
  }

  clickFunction() {
      // console.log(JSON.stringify(this.state.email));
      renewbuyApiRouter("login", this.state).then(data => {
        //this.setState({ name : data.first_name});
        // localStorage.setItem('renewbuy_token' , data.token);
        localStorage.setItem('dossier_token' , "1a2490cef8829b76811145070e33dca9175288bc");
        console.log(data);
        this.props.history.push("/");
     }); 
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Link to="/">Home</Link>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" name="email" autoComplete="username" onChange={(ev)=>this.setState({email:ev.target.value})} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" name="password" autoComplete="current-password" onChange={(ev)=>this.setState({password:ev.target.value})}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.clickFunction.bind(this)}>Login</Button>
                        </Col>
                        {/* <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col> */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>

        {/* { this.state.name != "" ? <p>{this.state.name}</p> : null} */}
      </div>
    );
  }
}

export default Login;
