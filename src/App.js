import React from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./styled-comp/Header";
import StyledLink from "./styled-comp/StyledLink";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import Career from "./routes/Career";
import Web3 from "./routes/Web3";
import StyledNav from "./styled-comp/StyledNav";
// import tgDarkMode from "./components/tgDarkMode";
// import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter className="App">
      <Header>
        <StyledLink to="/"><h1>Daniel Villegas</h1></StyledLink>
        <StyledNav className="align-self-center">
          <StyledLink to="/portfolio">Portfolio</StyledLink> |{" "}
          <StyledLink to="/career">Career</StyledLink> |{" "}
          <StyledLink to="/web3">Web3</StyledLink>
        </StyledNav>
        {/* <button onClick={tgDarkMode}>Light/Dark mode WIP!!</button> */}
      </Header>
      <Outlet />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/web3" element={<Web3 />} />
        <Route
          path="*"
          element={
            <main>
              <p>this URL does not exist!</p>
            </main>
          }
        />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
