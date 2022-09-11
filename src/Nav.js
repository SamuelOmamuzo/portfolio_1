import React, { useState } from "react";
import styled from "styled-components";
import { IoMdHome, IoIosPerson, IoMdBriefcase } from "react-icons/io";
import { GoTools } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import storage from "local-storage-fallback";

const Nav = ({ bclr }) => {
  const [change, setChange] = useState(false);
  // const saveTheme = JSON.parse(storage.getItem("toogle")).myTheme;

  const OnToggle = () => {
    setChange(!change);
  };

  return (
    <Container>
      <Wrapper>
        <Top>
          {" "}
          {!change ? (
            <ButtonHolder2
              onClick={() => {
                OnToggle();
                bclr();
              }}
            >
              <BsSun />
            </ButtonHolder2>
          ) : (
            <ButtonHolder1
              onClick={() => {
                OnToggle();
                bclr();
              }}
            >
              <IoMoonOutline />
            </ButtonHolder1>
          )}
        </Top>
        <Rest>
          <ButtonHolder to="/">
            <IoMdHome />
            <span>Home</span>
          </ButtonHolder>
          <ButtonHolder to="/about">
            <IoIosPerson />
            <span>About</span>
          </ButtonHolder>
          <ButtonHolder to="/services">
            <GoTools />
            <span>Services</span>
          </ButtonHolder>
          <ButtonHolder to="/projects">
            <IoMdBriefcase />
            <span>Projects</span>
          </ButtonHolder>
          <ButtonHolder to="/contact">
            <MdLocalPhone />
            <span>Contact</span>
          </ButtonHolder>
        </Rest>
      </Wrapper>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  position: fixed;
  right: 30px;
  height: 100vh;
  width: 180px;
  z-index: 10;
  @media screen and (max-width: 768px) {
    background: purple;
    width: 100%;
    right: 0;
    height: 0;
    bottom: 65px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 0px;
    align-items: unset;
    flex-direction: unset;
  }
`;

const ButtonHolder = styled(NavLink)`
  width: 65px;
  height: 65px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  cursor: pointer;
  transition: 350ms;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
  color: #36c157;
  position: relative;
  margin-top: 25px;
  font-size: 20px;

  span {
    left: 20px;
    opacity: 0;
    color: white;
    position: absolute;
    z-index: 1;
    top: 22px;
    font-weight: 500;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    width: 45px;
    height: 45px;
    font-size: 17px;
  }
  :hover {
    padding-left: 100px;
    background: #36c157;
    color: white;
    span {
      opacity: 1;
    }
    @media screen and (max-width: 768px) {
      padding-left: unset;
      background: #36c157;
      color: white;
      span {
        display: none;
      }
    }
  }
`;

const Top = styled.div``;

const Rest = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    margin-top: 0;
    margin-left: -10px;

    flex-direction: unset;
    width: 80vw;
  }
`;

const ButtonHolder1 = styled.div`
  width: 65px;
  height: 65px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  cursor: pointer;
  transition: 350ms;
  // box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: relative;
  margin-top: 25px;
  font-size: 20px;


  @media screen and (max-width: 768px) {
    margin-top: 0;
    width: 45px;
    height: 45px;
    font-size: 17px;
  }
`;

const ButtonHolder2 = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  cursor: pointer;
  transition: 350ms;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
  background: white;
  color: black;
  position: relative;
  margin-top: 25px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    width: 45px;
    height: 45px;
    font-size: 17px;
  }
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
