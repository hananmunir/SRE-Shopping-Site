import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../static/pexels-juan-mendez-1536619.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${background}) center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  opacity: 0.98;
  padding: 20px;
  width: 40%;
  background-color: #fff;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 35px 0 24px 0;
`;
const Buttons = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const Button = styled.button`
  padding: 12px 34px;
  background: transparent;
  letter-spacing: 1.5px;
  cursor: pointer;
  color: #fff;
  background-color: teal;
  border: none;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the{" "}
            <b style={{ cursor: "pointer" }}>PRIVACY POLICY</b>
          </Agreement>
          <Buttons>
            <Button>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                CREATE
              </Link>
            </Button>
            <Button>
              {" "}
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                CANCEL
              </Link>
            </Button>
          </Buttons>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
