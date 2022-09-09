import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
   .header{
    background-color: ${({ theme }) =>
      theme.myTheme === "green" ? "#121212" : "white"};
   }
   .back{
    opacity: ${({ theme }) => (theme.myTheme === "dark" ? "0.3" : "0.1")};
   }
   .front{
    color: ${({ theme }) => (theme.myTheme === "dark" ? "white" : "gray")};
   }
   .details{
     color: ${({ theme }) => (theme.myTheme === "dark" ? "white" : "black")};
   }
   `;

const About = () => {
  return (
    <Container>
      <GlobalStyled />
      <Header className="header">
        <Back className="back">PORTFOLIO</Back>
        <Front className="front">
          ABOUT <span>ME</span>
        </Front>
      </Header>
      <Main>
        <Left>
          <ImageHolder>
            <Box1 />
            <Box2 />
            <Image src="/boy.jpg" />
            <Box3 />
            <Box4 />
          </ImageHolder>
        </Left>
        <Right>
          <Top>
            <Title>WHAT I DO</Title>
            <Text>
              I work with you hand-in-hand to materialize your ideas with codes,
              using programming tools, from creating the wireframe to deploying
              the project
            </Text>
            {/* <Button
              href="https://drive.google.com/file/d/1SmMqAIwsObdFZ0krNpO9mjAs6ajqRq4A/view?usp=drivesdk"
              download
            >
              <span>Download CV</span>
              <div>
                <AiOutlineDownload />
              </div>
            </Button> */}
          </Top>
          <Bottom>
            <Title>PERSONAL INFO</Title>
            <Info>
              <div className="details">
                Full Name: <span>Samuel Omamuzo</span>
              </div>
              <div className="details">
                Birthday: <span>20th September</span>
              </div>
              <div className="details">
                Age: <span>classified</span>
              </div>
              <div className="details">
                Education: <span>Codelab</span>
              </div>
              <div className="details">
                Location: <span>Lagos, Nigeria</span>
              </div>
              <div className="details">
                Freelancing: <span>Available</span>
              </div>
            </Info>
          </Bottom>
        </Right>
      </Main>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5px;
  font-family: poppins;
  @media screen and (max-width: 1024px) {
    padding-bottom: 40px;
    padding-top: 20px;
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 100%;
  position: fixed;
  @media screen and (max-width: 1024px) {
    position: unset;
    background: unset;
  }
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
  span {
    color: #36c157;
  }
  @media screen and (max-width: 768px) {
    top: 65px;
  }
  @media screen and (max-width: 425px) {
    font-size: 25px;
    top: 45px;
  }
  @media screen and (max-width: 368px) {
    font-size: 25px;
    top: 40px;
  }
`;

const Main = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`;

const Left = styled.div`
  position: relative;
  width: 350px;
  height: 100vh;
  @media screen and (max-width: 1024px) {
    width: unset;
    height: unset;
  }
`;

const ImageHolder = styled.div`
  width: 390px;
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  @media screen and (max-width: 1024px) {
    position: unset;
  }

  @media screen and (max-width: 425px) {
    width: 350px;
    height: 420px;
  }
  @media screen and (max-width: 368px) {
    width: 300px;
  }
`;

const Box1 = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-left: 3px solid #36c157;
  border-top: 3px solid #36c157;
  animation: blink infinite 2s linear;
  border-radius: 10px 0 0 0;
  @keyframes blink {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 0;
    }
  }
`;

const Box2 = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  border-right: 3px solid #36c157;
  border-top: 3px solid #36c157;
  animation: blink infinite 2s linear;
  border-radius: 0 10px 0 0;

  @keyframes blink {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 0;
    }
  }
`;

const Image = styled.img`
  width: 350px;
  height: 390px;
  object-fit: cover;
  border-radius: 10px;
  outline: 1px solid #36c157;

  @media screen and (max-width: 425px) {
    width: 320px;
  }

  @media screen and (max-width: 370px) {
    width: 270px;
  }

  @media screen and (max-width: 320px) {
    width: 250px;
    height: 370px;
  }
`;

const Box3 = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-left: 3px solid #36c157;
  border-bottom: 3px solid #36c157;
  animation: blink infinite 2s linear;
  border-radius: 0 0 0 10px;

  @keyframes blink {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 0;
    }
  }
`;

const Box4 = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  border-right: 3px solid #36c157;
  border-bottom: 3px solid #36c157;
  animation: blink infinite 2s linear;
  border-radius: 0 0 10px 0;

  @keyframes blink {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 0;
    }
  }
`;

const Right = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    height: unset;
  }
`;

const Top = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
`;

const Title = styled.div`
  color: #fdbd05;
  font-size: 20px;

  @media screen and (max-width: 320px) {
    font-size: 17px;
  }
`;

const Text = styled.div`
  max-width: 500px;
  margin-top: 30px;
  font-size: 20px;
  color: #707070;
  line-height: 1.7;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
  @media screen and (max-width: 320px) {
    font-size: 17px;
  }
`;

const Button = styled.a`
  border: 1px solid #36c157;
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

const Bottom = styled.div`
  margin-top: 60px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Info = styled.div`
  max-width: 500px;
  margin-top: 20px;
  font-size: 19px;
  color: #707070;
  line-height: 1.7;
  margin-bottom: 30px;
  div {
    font-weight: 500;
    margin-bottom: 5px;

    @media screen and (max-width: 320px) {
      font-size: 17px;
    }
  }

  span {
    font-weight: normal;
    color: #929292;
  }
`;
