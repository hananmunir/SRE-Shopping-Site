import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 8px 18px;
  border: 2px solid #fff;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  letter-spacing: 1.5px;
  transition: all 0.7s ease;

  &:hover {
    transform: scale(1.2);
    letter-spacing: 1.8px;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />

      <Info>
        <Title>{item.title}</Title>
        <Button>
          <Link
            to="/productlist"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            SHOP NOW
          </Link>
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
