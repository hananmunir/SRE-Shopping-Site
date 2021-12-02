import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import p1 from "../static/kindpng_3332071.png";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.filled === "true" && "2px solid white"};
  background-color: ${(props) =>
    props.filled === "true" ? "black" : "transparent"};
  color: ${(props) => props.filled === "true" && "white"};
  transition: all 0.7s ease;

  &: hover {
    border: ${(props) =>
      props.filled !== "true" ? "2px solid white" : "2px solid black"};
    background-color: ${(props) =>
      props.filled !== "true" ? "black" : "transparent"};
    color: ${(props) => (props.filled !== "true" ? "white" : "black")};
  }
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Image = styled.img`
  width: 200px;
  margin-top: 10px;
  max-height: 180px;
  object-fit: contain;
  ${mobile({ width: "150px", objectFit: "contain" })}
`;
const ProductName = styled.span`
  ${mobile({ marginBottom: "10px" })}
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;

  background-color: ${(props) => props.color};
  ${mobile({ marginBottom: "10px" })}
`;
const ProductSize = styled.span``;
const ProductID = styled.span`
  ${mobile({ marginBottom: "10px" })}
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.span`
  font-size: 20px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.span`
  font-size: 24px;
  font-weight: 300;

  ${mobile({ marginBottom: "15px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 3px;
`;
const Summary = styled.div`
  flex: 1;
  height: 50vh;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 20px;

  ${mobile({ marginTop: "50px" })}
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  background-color: #000;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  border: 2px solid #000;
  transition: 0.7s ease;

  &:hover {
    background-color: transparent;

    color: #000;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>SHOPPING CART</TopText>
            <TopText>YOUR WISHLIST</TopText>
          </TopTexts>
          <TopButton filled="true">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductID>
                    <b>ID:</b> 1225124171
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <AmountContainer>
                  <Add style={{ cursor: "pointer" }} />
                  <ProductAmount>2</ProductAmount>
                  <Remove style={{ cursor: "pointer" }} />
                </AmountContainer>
                <ProductPrice>$ 15</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />

            <Product>
              <ProductDetails>
                <Image src={p1} />
                <Details>
                  <ProductName>
                    <b>Product:</b> SK CLASSIC WATCH
                  </ProductName>
                  <ProductID>
                    <b>ID:</b> 93813718293
                  </ProductID>
                  <ProductColor color="#000" />
                  <ProductSize>
                    <b>Size:</b> STANDARD
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <AmountContainer>
                  <Add style={{ cursor: "pointer" }} />
                  <ProductAmount>1</ProductAmount>
                  <Remove style={{ cursor: "pointer" }} />
                </AmountContainer>
                <ProductPrice>$ 10</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sub total</SummaryItemText>
              <SummaryItemPrice>$ 40.0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 2.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$ 2.0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 40.50</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
