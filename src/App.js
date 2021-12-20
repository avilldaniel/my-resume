import React from "react";
import "./App.css";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Header from "./styled-comp/Header";
import StyledLink from "./styled-comp/StyledLink";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import Career from "./routes/Career";
import Media from "./routes/Media";
import tgDarkMode from "./components/tgDarkMode";
import StyledNav from "./styled-comp/StyledNav";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter className="App">
      <Header>
        <StyledLink to="/"><h1>Daniel Villegas</h1></StyledLink>
        <StyledNav>
          <StyledLink to="/portfolio">Portfolio</StyledLink> |{" "}
          <StyledLink to="/career">Career</StyledLink> |{" "}
          <StyledLink to="/media">Media</StyledLink>
        </StyledNav>
        <button onClick={tgDarkMode}>Light/Dark mode WIP!!</button>
      </Header>
      <Outlet />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/media" element={<Media />} />
        <Route
          path="*"
          element={
            <main>
              <p>this URL does not exist!</p>
            </main>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
