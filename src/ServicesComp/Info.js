import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

const Info = ({ text }) => {
  return (
    <Container>
      <Box>{text}</Box>
      <Icon />
    </Container>
  );
};

export default Info;

const Container = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: -20px;
  font-family: poppins;
`;

const Box = styled.div`
  background: #36c157;
  color: white;
  border-radius: 3px;
  padding: 5px 7px;
  font-size: 12px;
`;

const Icon = styled(IoMdArrowDropdown)`
  color: #36c157;
  font-size: 30px;
  margin-top: -13px;
`;
