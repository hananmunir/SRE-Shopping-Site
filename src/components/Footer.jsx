import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { mobile } from "../responsive.js";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.span`
  margin: 20px 0;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  transition: 0.7s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
const SocialContainer = styled.div`
  display: flex;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shoppier</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque,
          facere expedita quos accusantium reprehenderit excepturi esse harum
          corporis unde eos maiores dolores sed. Perspiciatis assumenda neque
          placeat aliquam quaerat.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Women Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} /> Address
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          Phone No
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} /> Email
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
