import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Home from "./HomeComp/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import ScrollToTop from "./ScrollToTop";
import storage from "local-storage-fallback";
import Nav from "./Nav";
import About from "./AboutComp/About";
import Contact from "./ContactComp/Contact";
import Projects from "./ProjectComp/Projects";
import Services from "./ServicesComp/Services";

// const ScrollToTop = ({ history }) => {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     };
//   }, []);

//   return null;
// }

const GlobalStyled = createGlobalStyle`
 body{
   background-color: ${({ theme }) =>
     theme.myTheme === "dark" ? "#121212" : "whitesmoke"};
   color: ${({ theme }) => (theme.myTheme === "dark" ? "whitesmoke" : "gray")};
   
   }`;

const App = () => {
  const storeThemeChoice = () => {
    const saveTheme = storage.getItem("toogle");
    return saveTheme ? JSON.parse(saveTheme) : { myTheme: "dark" };
  };
  const [toogle, setToogle] = useState(storeThemeChoice);

  React.useEffect(() => {
    storage.setItem("toogle", JSON.stringify(toogle));
  }, [toogle]);

  return (
    <ThemeProvider theme={toogle}>
      <GlobalStyled />
      <Container>
        <Router>
          <ScrollToTop />
          <Nav
            bclr={() => {
              setToogle(
                toogle.myTheme === "dark"
                  ? { myTheme: "y" }
                  : { myTheme: "dark" }
              );
            }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.div`
  /* display: flex; */
  /* background: blue; */
  height: 100vh;
`;
