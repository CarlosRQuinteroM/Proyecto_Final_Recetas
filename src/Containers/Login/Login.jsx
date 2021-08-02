import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { LOGIN } from "../../redux/type";
import { Form, Button } from "react-bootstrap";
require("dotenv").config();

const Login = (props) => {
  let history = useHistory();
  // Role controller Admin or Custumer 
  const cred = props.credentials.user;
  if (cred?._id)
    if (cred?.role === "Admin") history.push("/admin");
   else history.push("/");

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const updateCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {}, []);

  const logeame = async () => {
    let body = {
      email: credentials.email,
      password: credentials.password,
    };
    //  envio axios
    axios
      .post(process.env.REACT_APP_URL_LOGIN , body)
      .then(handleResponse)
      .catch((error) => {
        console.log("No se ha podido realizar el logueo");
        console.log(error);
      });
  };
  const handleResponse = (res) => {
    props.dispatch({ type: LOGIN, payload: res.data });
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
            <Button
              className="BtnLogin1"
              type="submit"
              onClick={() => logeame()}
            >
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
