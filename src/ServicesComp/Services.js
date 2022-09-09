import React from "react";
import styled from "styled-components";
import Info from "./Info";
import TopServices from "./TopServices";
import { MdLocalPhone } from "react-icons/md";
import { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

const GlobalStyled = createGlobalStyle`
   .back{
    opacity: ${({ theme }) => (theme.myTheme === "dark" ? "0.3" : "0.1")};
   }
   .front{
    color: ${({ theme }) => (theme.myTheme === "dark" ? "white" : "gray")};
   }
   .skillbar{
    background: ${({ theme }) =>
      theme.myTheme === "dark" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.2)"};
   }
   `;

const Services = () => {
  return (
    <Container>
      <GlobalStyled />
      <Header>
        <Back className="back">SERVICES</Back>
        <Front className="front">
          My <span>Skills</span>
        </Front>
      </Header>

      <TopServices />
      <Skills>
        <Top>My Skilll</Top>
        <SkilHolder>
          <SkillLevel>
            <TopInfo>
              <span>Frontend Development</span>
              <Info text="80%" />
            </TopInfo>
            <Level />
          </SkillLevel>
          <SkillBar className="skillbar" />
        </SkilHolder>
        <SkilHolder>
          <SkillLevel1>
            <TopInfo>
              <span>Backend Development</span>
              <Info text="80%" />
            </TopInfo>
            <Level />
          </SkillLevel1>
          <SkillBar className="skillbar" />
        </SkilHolder>
        <SkilHolder>
          <SkillLevel2>
            <TopInfo>
              <span>UI/UX Design</span>
              <Info text="90%" />
            </TopInfo>
            <Level />
          </SkillLevel2>
          <SkillBar className="skillbar" />
        </SkilHolder>
        <SkilHolder>
          <SkillLevel3>
            <TopInfo>
              <span>JavaScript Development</span>
              <Info text="70%" />
            </TopInfo>
            <Level />
          </SkillLevel3>
          <SkillBar className="skillbar" />
        </SkilHolder>
        <SkilHolder>
          <SkillLevel4>
            <TopInfo>
              <span>Miro</span>
              <Info text="60%" />
            </TopInfo>
            <Level />
          </SkillLevel4>
          <SkillBar className="skillbar" />
        </SkilHolder>
      </Skills>
      <Button to="/contact">
        <span>Contact Me</span>
        <div>
          <MdLocalPhone />
        </div>
      </Button>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  align-items: center;
  font-family: poppins;
  @media screen and (max-width: 768px) {
    padding-top: 20px;
    padding-bottom: 80px;
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

const Skills = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
`;

const Top = styled.div`
  color: #fdbd05;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const SkilHolder = styled.div`
  width: 60%;
  height: 52px;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 425px) {
    width: 85%;
  }
  /* background: red; */
`;

const SkillLevel = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
`;

const SkillLevel1 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
`;

const SkillLevel2 = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
`;

const SkillLevel3 = styled.div`
  width: 77%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
`;

const SkillLevel4 = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
`;

const TopInfo = styled.div`
  /* background: red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 18px;
    @media screen and (max-width: 320px) {
      font-size: 16px;
    }
  }
`;

const Level = styled.div`
  background: #36c157;
  width: 100%;
  height: 3px;
  border-radius: 20px;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 3px;
  /* background: rgba(0, 0, 0, 0.1); */
  border-radius: 20px;
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

// const Skills = styled.div``

// const Skills = styled.div``

// const Skills = styled.div``

// const Skills = styled.div``

// const Skills = styled.div``

// const Skills = styled.div``

// const Skills = styled.div``

// const Skills = styled.div``

// const Skills = styled.div``

// const Skills = styled.div``

// const Skills = styled.div``

// const Skills = styled.div``
