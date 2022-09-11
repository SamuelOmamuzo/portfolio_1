import React from "react";
import styled from "styled-components";
import { AiOutlineDribbble, AiOutlineSearch } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
   .back{
    opacity: ${({ theme }) => (theme.myTheme === "dark" ? "0.3" : "0.1")};
   }
   .front{
    color: ${({ theme }) => (theme.myTheme === "dark" ? "whitesmoke" : "gray")};
   }
   `;

const Projects = () => {
  return (
    <Container>
      <GlobalStyled />
      <Header>
        <Back className="back">PROJECTS</Back>
        <Front className="front">
          My <span>Works</span>
        </Front>
      </Header>
      <Top>Projects Worked On</Top>
      <Wrapper>
        <Card>
          <CardImg>
            <img src="sos.png" alt="loading" />
          </CardImg>
          <Disc> Skin Triumph is an ecommerce website for beauticians who cares about their skin. My role was just the User interface and User expirence</Disc>
          <A href="https://skintriiumph-web.vercel.app">click to visit</A>
        </Card>
        <Card>
          <CardImg>
            <img src="callcare.png" alt="loading" />
          </CardImg>
          <Disc>Udemekitchen is a web application for users to order africa food online and my rople on this project was the UI/UX and backend</Disc>
          <A href="https://udemekitchen.herokuapp.com/">click to visit</A>
        </Card>
        <Card>
          <CardImg1>
            <img src="pigin11.png" alt="loading" />
          </CardImg1>
          <Disc> I work on signup page on this project called 
onechurchnetwork. My work spans from wireframing 
and helping with research studies to creating visuals for 
onboarding UI as well prototyping</Disc>
          <A href="https://onechurchnetwork.herokuapp.com">click to visit</A>
        </Card>
        <Card>
          <CardImg>
            <img src="skool1.png" alt="loading" />
          </CardImg>
          <Disc> I have worked as a UI/UX Instructor at  CodeLab with them 
whe created so many project one of them is called 
Sckoolkod. I contributed to the wireframing, Designing 
using figma and implementing using React.js
and helping with research studies to creating visuals for 
onboarding UI as well prototyping</Disc>
          <A href="https://sckoolkod.vercel.app">click to visit</A>
        </Card>
        <Card>
          <CardImg>
            <img src="sos.png" alt="loading" />
          </CardImg>
          <Disc> My service is a platform that connect artisans and professional to client that need their services. My work span from wireframing to Designing using figma</Disc>
          <A href="https://myservices.netlify.app/">click to visit</A>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: poppins;
  width: 100%;
  /* background: yellow; */
  height: 100%;
  min-height: 100vh;
  /* overflow: hidden; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 70px;
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
  border-radius:10px;
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

const Top = styled.div`
  color: #fdbd05;
  font-size: 20px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 320px;
  height: 299px;
  /* background: blue; */
  border: none;
  margin: 15px 10px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  transform:scale(1);
  transition:all 550ms;

  box-shadow: 1px 0px 19px -1px rgba(10,10,10,0.24);
  -webkit-box-shadow: 1px 0px 19px -1px rgba(10,10,10,0.24);
  -moz-box-shadow: 1px 0px 19px -1px rgba(10,10,10,0.24);
  
  :hover{
    transform:scale(1.1);
    cursor: pointer;
  }
`;

const CardImg = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CardImg1 = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */

  img {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    object-fit: cover;
  }
`;

const Disc = styled.div`
  font-size: 10px;
  width:90%;
  text-align:center;
  margin: 10px 0;
`;
const A = styled.a`
  font-size: 18px;
  color: grey;
  text-decoration: none;
`;
