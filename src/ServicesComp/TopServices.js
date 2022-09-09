import React from "react";
import styled from "styled-components";
import TOpProp from "./TOpProp";

const TopServices = () => {
  return (
    <Container>
      <Top>Tools I Use</Top>
      <Text>
        Using tools such as this, i acomplish complex projects that are industry
        standard and I'm very versitile with these tools
      </Text>
      <Cards>
        <TOpProp image="/images/react.png" head="react" number="27" />
        <TOpProp image="/images/node.svg" head="Node" number="15" />
        <TOpProp image="/images/firebase.png" head="firebase" number="20" />
        <TOpProp image="/images/atlas.png" head="mongoDB atlas" number="10" />
        {/* <TOpProp image="/images/next.png" head="next JS" number="5" /> */}
        <TOpProp image="/images/figma.png" head="figma" number="20" />
        {/* <TOpProp image="/images/Photoshop.png" head="Adobe PS" number="10" /> */}
        <TOpProp image="/images/js.png" head="javascript" number="19" />
        <TOpProp
          image="/images/vs.png"
          head="Virtual studio code"
          number="40"
        />
      </Cards>
    </Container>
  );
};

export default TopServices;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: poppins;
`;

const Text = styled.div`
  max-width: 650px;
  margin-top: 30px;
  font-size: 20px;
  color: #707070;
  line-height: 1.7;
  margin-bottom: 30px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 320px) {
    font-size: 17px;
  }
`;

const Cards = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

const Top = styled.div`
  color: #fdbd05;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;
