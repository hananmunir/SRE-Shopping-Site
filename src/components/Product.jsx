import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  position: relative;

  &: hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  max-width: 250px;
  max-height: 200px;
  object-fit: contain;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Link to="/product/1" style={{ textDecoration: "none", color: "#000" }}>
        <Info>
          <Icon>
            <Link to="/cart" style={{ textDecoration: "none", color: "#000" }}>
              <ShoppingCartOutlinedIcon />
            </Link>
          </Icon>
          <Icon>
            <SearchOutlinedIcon />
          </Icon>
          <Icon>
            <Link to="/cart" style={{ textDecoration: "none", color: "#000" }}>
              <FavoriteBorderOutlinedIcon />
            </Link>
          </Icon>
        </Info>
      </Link>
    </Container>
  );
};

export default Product;
