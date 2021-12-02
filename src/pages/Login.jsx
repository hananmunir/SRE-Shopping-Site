import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../static/pexels-elle-hughes-1549200.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.3)
    ),
    url(${background}) center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 30%;
  margin: 10px 0;
  padding: 10px;
`;

const Buttons = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
const Button = styled.button`
  margin: 12px 0;
  padding: 12px 34px;
  background: transparent;
  letter-spacing: 1.5px;
  cursor: pointer;
  color: #fff;
  background-color: teal;
  border: none;
`;
const Linker = styled.a`
  margin-top: 14px;
  font-size: 12px;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Password" />
          <Buttons>
            <Button>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                LOGIN
              </Link>
            </Button>
            <Button>
              {" "}
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                CANCEL
              </Link>
            </Button>
          </Buttons>
          <Linker>FORGOT PASSWORD?</Linker>
          <Linker>CREATE NEW ACCOUNT</Linker>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
