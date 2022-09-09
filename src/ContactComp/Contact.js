import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineDribbble,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFacebook, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import styled from "styled-components";
import { IoIosSend } from "react-icons/io";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
   .back{
    opacity: ${({ theme }) => (theme.myTheme === "dark" ? "0.3" : "0.1")};
   }
   .front{
    color: ${({ theme }) => (theme.myTheme === "dark" ? "whitesmoke" : "gray")};
   }
   .input{
    color: ${({ theme }) => (theme.myTheme === "dark" ? "whitesmoke" : "whitesmoke")};
    ::placeholder{
    color: ${({ theme }) => (theme.myTheme === "dark" ? "whitesmoke" : "whitesmoke")};
    opacity: ${({ theme }) => (theme.myTheme === "dark" ? "0.4" : "")};

    }
   }
   `;

const Contact = () => {
  return (
    <Container>
      <GlobalStyled />
      <Header>
        <Back className="back">CONNECT</Back>
        <Front className="front">
          Contact <span>ME</span>
        </Front>
      </Header>
      <Main>
        <Left>
          <Title>Reach Out</Title>
          <Text>
            Ready to start your next project with me? Send me a messages and i
            will get back to you as soon as possible!
          </Text>
          <Cont>
            <Hold>
              <AiOutlineMail />
              <Div>
                <H1>Email Address</H1>
                <span>clintonekegbu@gmail.com</span>
              </Div>
            </Hold>
            <Hold>
              <MdLocalPhone />
              <Div>
                <H1>Phone Number</H1>
                <span>+234 9077683652</span>
              </Div>
            </Hold>
          </Cont>
          <Icons>
            <a href="https://web.facebook.com/clinton.ekegbu" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://github.com/SamuelOmamuzo" target="_blank">
              <FaGithub />
            </a>
            <a href="https://Wa.me/+2349077683652" target="_blank">
              <FaWhatsappSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/clinton-ekegbu-aa268822a/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </Icons>
        </Left>
        <Right
          action="mailto:clintonekegbu@gmail.com"
          method="POST"
          enctype="multipart/form-data"
          name="EmailForm"
        >
          <InputTop>
            <Input1
              placeholder="Enter Name"
              type="text"
              name="name"
              size="19"
            />
            <Input1 placeholder="Phone Number" name="phoneNumber" />
          </InputTop>
          <Input3 placeholder="Message Title" name="title" type="text" />
          <Message
            placeholder="Enter Message"
            name="message"
            type="text"
            rows="6"
            cols="20"
          />
          <Button type="submit">
            <span>Send Message</span>
            <div>
              <IoIosSend />
            </div>
          </Button>
        </Right>
      </Main>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: poppins;
  @media screen and (max-width: 768px) {
    padding-top: 20px;
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Back = styled.div`
  font-weight: 1000;
  font-size: 90px;
  opacity: 0.1;
  @media screen and (max-width: 425px) {
    font-size: 60px;
  }
  @media screen and (max-width: 368px) {
    font-size: 50px;
  }
`;

const Front = styled.div`
  position: absolute;
  color: black;
  font-weight: bold;
  font-size: 30px;
  top: 45px;
  text-transform: uppercase;
  span {
    color: #36c157;
  }
  @media screen and (max-width: 425px) {
    font-size: 25px;
    top: 25px;
  }
  @media screen and (max-width: 368px) {
    font-size: 25px;
    top: 20px;
  }
`;

const Main = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
`;

const Left = styled.div`
  max-width: 400px;
  @media screen and (max-width: 1024px) {
    margin-top: 40px;
    margin-left: 20px;
  }
`;

const Title = styled.div`
  color: #fdbd05;
  font-size: 20px;
`;

const Text = styled.div`
  margin-top: 30px;
  font-size: 20px;
  line-height: 1.7;
  margin-bottom: 30px;
  text-align: justify;

  @media screen and (max-width: 1024px) {
    text-align: unset;
  }
  @media screen and (max-width: 320px) {
    font-size: 17px;
  }
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Icons = styled.div`
  margin-top: 20px;
  a {
    color: #36c157;
    margin-right: 20px;
    font-size: 20px;
  }
`;

const Div = styled.div`
  font-size: 16px;
  margin-left: 10px;
  span {
    font-style: italic;
    @media screen and (max-width: 320px) {
      font-size: 16px;
    }
  }
`;

const H1 = styled.div`
  margin-bottom: 3px;
  font-weight: 500;
`;

const Right = styled.form`
  height: 100%;
  width: 40%;
  margin-left: 60px;
  @media screen and (max-width: 1024px) {
    margin-left: unset;
    margin-left: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

const InputTop = styled.div``;

const Input1 = styled.input`
  outline: 1px solid rgba(54, 193, 87, 0.5);
  border: none;
  width: 40%;
  height: 45px;
  border-radius: 50px;
  padding-left: 20px;
  color: lightgrey;
  font-weight: 500;
  font-size: 17px;
  margin-right: 20px;
  background: transparent;

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 1024px) {
    margin-right: unset;
    width: calc(100% - 22px);
    margin-bottom: 20px;
  }
`;

const Input3 = styled.input`
  outline: 1px solid rgba(54, 193, 87, 0.5);
  border: none;
  width: 88%;
  height: 45px;
  border-radius: 50px;
  padding-left: 20px;
  color: #707070;
  font-weight: 500;
  font-size: 17px;
  margin-right: 20px;
  background: transparent;
  margin-top: 15px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 1024px) {
    margin-right: unset;
    width: calc(100% - 22px);
    margin-top: 0;
  }
`;

const Message = styled.textarea`
  outline: 1px solid rgba(54, 193, 87, 0.5);
  border: none;
  width: 85%;
  max-width: 85%;
  height: 200px;
  max-height: 250px;
  border-radius: 20px;
  padding: 20px;
  color: lightgrey;
  font-weight: 500;
  font-size: 17px;
  margin-right: 20px;
  background: transparent;
  margin-top: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: normal;

  ::placeholder {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 1024px) {
    margin-right: unset;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
    margin-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
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
  padding: unset;
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

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;
