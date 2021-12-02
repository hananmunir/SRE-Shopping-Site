import React from "react";
import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({ height: "50vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  display: flex;
  flex-direction: column;

  ${mobile({ padding: "0 10px", marginTop: "50px" })}
`;
const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
const FilterSizeOption = styled.option``;
const FilterSize = styled.select`
  margin: 10px;
  padding: 5px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.span`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  background-color: transparent;
  border: 2px solid teal;
  cursor: pointer;
  font-weight: 500;
  transition: 0.7s ease;

  &:hover {
    letter-spacing: 1.5px;
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ab!
            Deleniti earum odio modi hic officiis facere impedit inventore
            itaque quasi dolorem accusantium totam, aliquam perspiciatis rem
            numquam debitis repudiandae?
          </Desc>
          <Price>$ 20</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <AddIcon style={{ cursor: "pointer" }} />
            </AmountContainer>

            <Button>
              {" "}
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Add To Cart
              </Link>
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
