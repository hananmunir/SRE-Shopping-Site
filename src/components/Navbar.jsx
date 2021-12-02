import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    padding: "10px 0",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
  }

  ${mobile({
    width: "50px",
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "20px",
    marginLeft: "10px",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({
    flex: 2,
    justifyContent: "center",
  })}
`;

const NavItems = styled.div`
  font-size: 14px;
  cusrsor: pointer;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({
    fontSize: "10px",
    marginLeft: "14px",
  })}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <SearchIcon
              style={{ color: "gray", fontSize: 16, cursor: "pointer" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              Shoppier
            </Link>
          </Logo>
        </Center>
        <Right>
          <NavItems>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "#000" }}
            >
              REGISTER
            </Link>
          </NavItems>

          <NavItems>
            <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
              LOGIN
            </Link>
          </NavItems>
          <NavItems>
            <Badge badgeContent={2} color="primary">
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "#000" }}
              >
                {" "}
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </NavItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
