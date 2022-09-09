import React from "react";
import styled from "styled-components";
import { ImageIcon } from "../Icons";
import ReactTypingEffect from "react-typing-effect";
import { HiArrowRight } from "react-icons/hi";

import { FaFacebook, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineDribbble,
  AiFillLinkedin,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Left>
        <ImageHolder>
          <ImageIcon />
          <Content>
            <Image src="/boy1.jpg" alt="loading" />
            <span>Hello am</span>
            <Name>Samuel Omamuzo</Name>
          </Content>
        </ImageHolder>
        <Icons>
          <a href="https://web.facebook.com/omamuzo.samuel.7" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://github.com/SamuelOmamuzo" target="_blank">
            <FaGithub />
          </a>
          <a href="https://Wa.me/+2348121687129" target="_blank">
            <FaWhatsappSquare />
          </a>
          {/* <a href="https://dribbble.com/obialasor" target="_blank">
            <AiOutlineDribbble />
          </a> */}
          <a
            href="https://www.linkedin.com/in/sam-omamuzo-4a48b3222"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </Icons>
      </Left>
      <Right>
        <Top>INTRODUCTION</Top>
        <Head>
          <ReactTypingEffect
            text={["Web Developer", "UI/UX Designer", "Fullstack Developer"]}
            speed={100}
            eraseDelay={1000}
            eraseSpeed={100}
            typingDelay={700}
          />
        </Head>
        <Line />
        <Text>
        Detail driven whose interest is based on client satisfaction. A skilled leader, problem solver with proven ability to learn, educate, 
        motivate and work with team. I care about details and consider the motion design of affordances to crucial in creating
        effective, intuitive interfaces and also prototyping.
        </Text>
        <ButtonHolder>
          <Button to="/about">
            <span>More About Me</span>
            <div>
              <HiArrowRight />
            </div>
          </Button>
        </ButtonHolder>
      </Right>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  height: auto;
  font-family: poppins;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 80px;
  }
`;

const Left = styled.div`
  width: 450px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(54, 193, 87, 50%);
  @media screen and (max-width: 768px) {
    border: none;
    width: 100%;
    height: 100%;
    min-height: 70vh;
  }
`;

const ImageHolder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const Content = styled.div`
  width: 250px;
  height: 320px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 19px;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 30px;
  }
`;
const Image = styled.img`
  height: 70%;
  width: 100%;
  object-fit: cover;
`;

const Name = styled.div`
  margin-top: 15px;
  font-family: lobster two;
  font-size: 25px;
  font-weight: lighter;
  color: #7f7f7f;
  :before {
    content: "[";
    margin-right: 12px;
    color: #36c157;
    font-size: 35px;
    animation: blink infinite 1.2s linear;
    @keyframes blink {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
  :after {
    content: "]";
    margin-left: 12px;
    color: #36c157;
    font-size: 35px;
    animation: blink infinite 1.2s linear;
    @keyframes blink {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

const Right = styled.div`
  margin-left: 50px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Top = styled.div`
  color: #fdbd05;
  margin-top: 80px;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const ButtonHolder = styled.div`
  margin-top: 40px;
`;

const Button = styled(NavLink)`
  outline: 1px solid rgba(54, 193, 87, 0.5);
  width: 195px;
  border-radius: 50px;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
  transition: 350ms;
  cursor: pointer;
  position: relative;
  margin-top: 20px;
  div {
    height: 50px;
    width: 50px;
    background: #36c157;
    border-radius: 25px;
    border: 1px solid #36c157;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 350ms;
    color: white;
    font-size: 20px;
  }
  span {
    font-size: 17px;
    color: #36c157;
    position: absolute;
    left: 15px;
  }
  :hover {
    color: white;
    div {
      padding-left: 155px;
    }
    span {
      color: white;
    }
  }
`;

const Head = styled.div`
  font-size: 60px;
  font-weight: normal;
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-top: 50px;
  }
`;

const Line = styled.div`
  width: 30%;
  height: 1px;
  background: #36c157;
  margin-top: 12px;
`;

const Text = styled.div`
  max-width: 500px;
  margin-top: 30px;
  font-size: 20px;
  color: #707070;
  line-height: 1.7;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 17px;
    padding: 0px 10px;
  }
  @media screen and (max-width: 320px) {
    text-align: center;
    font-size: 16px;
    padding: 0px 10px;
  }
`;

const Icons = styled.div`
  width: 50%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content:center;
  // justify-content: space-between;
  font-size: 20px;
  width: 70%;
  a {
    color: #36c157;
    margin-left:10px;
  }
`;
