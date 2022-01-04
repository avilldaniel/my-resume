import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardFooter,
  MDBCardLink,
  MDBCardSubTitle,
} from "mdb-react-ui-kit";
import img1 from "../images/msgMeIMG.png";
import img2 from "../images/favQuotesIMG.png";
import img3 from "../images/myResume.png";
import img4 from "../images/cryptoWatchlist.png";

const Portfolio = () => {
  return (
    <MDBRow
      className="container row-cols-1 row-cols-md-3 g-5 mx-auto my-auto new-tab"
      style={{ width: "70rem" }}
    >
      <MDBCol>
        <MDBCard className="shadow-4-strong">
          <MDBCardImage src={img1} alt="Message Me app" position="top" />
          <MDBCardBody>
            <MDBCardTitle>Message Me</MDBCardTitle>
            <MDBCardText>
              App that lets you contact me in regards to anything! It utilizes
              the EmailJS JavaScript library that can send emails directly through
              client-side JavaScript code.
            </MDBCardText>
            <MDBCardLink href="https://msg-me.netlify.app/" target="_blank">
              <MDBCardSubTitle>msg-me</MDBCardSubTitle>
            </MDBCardLink>
            <MDBCardFooter className="mt-2">
              <small>
                React (useState), Create-React-App, EmailJS, Netlify, Bootstrap
              </small>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="shadow-4-strong">
          <MDBCardImage src={img4} alt="My Crypto Watchlist" position="top" />
          <MDBCardBody>
            <MDBCardTitle>My Crypto Watchlist</MDBCardTitle>
            <MDBCardText>
              View the current market price of a few Cryptocurrencies which I
              tend to keep an eye on. I use the Axios library for fetching data
              from the CoinGecko API. That data is pulled as useEffect renders,
              and is then stored with useState.
            </MDBCardText>
            <MDBCardLink href="https://my-crypto-watchlist.netlify.app/" target="_blank">
              <MDBCardSubTitle>crypto-watchlist</MDBCardSubTitle>
            </MDBCardLink>
            <MDBCardFooter className="mt-2">
              <small>
                React (useState & useEffect), Create-React-App, Axios, Styled Components, Netlify
              </small>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="shadow-4-strong">
          <MDBCardImage src={img2} alt="Favorite Quotes app" position="top" />
          <MDBCardBody>
            <MDBCardTitle>Favorite Quotes</MDBCardTitle>
            <MDBCardText>
              Simple program displaying some of my favorite quotes. Implements
              Bootstrap's Carousel component.
            </MDBCardText>
            <MDBCardLink
              href="https://avilldaniel.github.io/fav-quotes/"
              target="_blank"
            >
              <MDBCardSubTitle>fav-quotes</MDBCardSubTitle>
            </MDBCardLink>
            <MDBCardFooter className="mt-2">
              <small>
                React, Create-React-App, Bootstrap (Carousel), Github Pages
              </small>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="shadow-4-strong">
          <MDBCardImage src={img3} alt="My Website app" position="top" />
          <MDBCardBody>
            <MDBCardTitle>My Website V1</MDBCardTitle>
            <MDBCardText>
              What you are viewing right now! But don't worry, this will be
              scrapped & re-built as I progress in my CSS skills. I promise!
            </MDBCardText>
            <MDBCardLink
              href="https://avilldaniel.netlify.app/"
              target="_blank"
            >
              <MDBCardSubTitle>my-resume</MDBCardSubTitle>
            </MDBCardLink>
            <MDBCardFooter className="mt-2">
              <small>
                React, Create-React-App, React Router, Styled Components,
                MDBootstrap, Netlify
              </small>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default Portfolio;
