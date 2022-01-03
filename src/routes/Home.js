import React from "react";
import img1 from "../images/linkedinProf.jpg";
import { MDBBadge } from "mdb-react-ui-kit";

const Home = () => {
  return (
    <div
      className="container text-center mt-5 pt-4"
      style={{ maxWidth: "55rem" }}
    >
      <div className="row mx-5">
        <img
          className="img-responsive col-sm rounded-circle shadow-2"
          src={img1}
          alt="My profile pic"
          style={{ maxWidth: "22rem" }}
        />
        <h1 className="col-sm align-self-center display-1 mt-4">About Me</h1>
      </div>

      <div className="row mx-5 mt-3" style={{ display: "flex" }}>
        <div
          className="h4 mx-auto text-left mt-4 mb-4"
          style={{ textAlign: "left" }}
        >
          Hello, my name is Daniel. I'm an aspiring Programmer with a passion
          for music and video games! In 2020, I received my Bachelor of Arts in
          Computer Science at UNLV.
          <br />
          <br />
          My current goal is to land a Developer position. Whether it'd be a
          Junior position or an internship, I'm open to whatever opportunity
          arises. As I work on my frontend and JavaScript capabilities, I
          eventually want to dip my toes in Blockchain development, namely smart
          contracts. I'd also like to learn TypeScript and Next.js in the near
          future.
          <br />
          <br />
          At the moment, I work full-time IT for the Cosmopolitan of Las Vegas.
          While I'm not at work, I spend my time building programs or studying
          (on YouTube or Udemy). Feel free to open that Portfolio tab to sift
          through some of my work!
        </div>

        <hr
          className="rounded mb-4"
          style={{ borderTop: "4px solid #3B0918" }}
        />

        <div className="mx-auto">
          <h2>
            <MDBBadge className="ms-2" color="dark">
              React
            </MDBBadge>
            <MDBBadge className="ms-2" color="dark">
              JavaScript
            </MDBBadge>
            <MDBBadge className="ms-2" color="dark">
              HTML/CSS
            </MDBBadge>
            <MDBBadge className="ms-2" color="dark">
              Git
            </MDBBadge>
            <MDBBadge className="ms-2" color="dark">
              Solidity
            </MDBBadge>
          </h2>
        </div>

        <div className="mx-auto mt-2 mb-5">
          <h2>
            <MDBBadge className="ms-2" color="warning">
              B.A. in Computer Science, UNLV
            </MDBBadge>
            <MDBBadge className="ms-2" color="warning">
              IT Asset Technician
            </MDBBadge>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
