import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { LOGIN } from "../../redux/type";
import { Form, Button } from "react-bootstrap";
require('dotenv').config()

const Login = (props) => {
  let history = useHistory();

  const [credentials, setCredentials] = useState({ email: "", password: "" });


  const updateCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {}, []);

  const handleResponse = (res) =>{
    if (res.status === 200) {
      props.dispatch({type:LOGIN, payload:res.data});
      setTimeout(() => {
        history.push("/")
      }, 500);
      
    }
  }

  const logeame = async () => {
    let body = {
      email: credentials.email,
      password: credentials.password,
    };
    //  envio axios
    axios.post("http://localhost:3005/user/login" , body)
      .then(handleResponse)
      .catch((error) => {
        console.alert("No se ha podido realizar el logueo")
        console.log(error);
      });

  };


  return (
    
    <div className="body">
      <div className="FormCard">
      <div className="AlingForm">
        <Form>
          <h1 id="Logintitle">login</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={updateCredentials}
              name="email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={updateCredentials}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree with the terms and conditions"
            />
          </Form.Group>
          <Button className="BtnLogin1" type="submit" onClick={() => logeame()}>
            Login
          </Button>
        </Form>
       </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
}))(Login);
