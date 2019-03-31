import React, { Component } from 'react';
import styled from "styled-components";

import AboutSection from "./Sections/AboutSection";
import DesignCoinSection from "./Sections/DesignCoinSection";
import Leadership from "./Sections/Leadership";
import Contact from "./Sections/Contact";
import Footer from './Sections/Footer';

const Screen = styled.div`
  z-index: 5;
  h1 {
    text-align: center;
    width: 100%;
    // animation-name: hoverBlue;
    // animation-duration: 1s;
    font-size: 44px;
  }

  @keyframes hoverBlue {
    0% {
      color: black
    }
    100% {
      color: blue
    }
  }

  background-color: rgba(255,255,255,.8)

`

const BackgroundImage = styled.div`

  z-index: 5;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  transition: 3s ease;
  background: linear-gradient(
    to bottom, 
    rgba(255,0,255,1) -30%, 
    rgba(0,0,0,0) 50%);
    display: flex;
    justify-content: center;
    align-items: center;

  animation-name: fadeIn;
  animation-duration: 2s;

  @keyframes fadeIn {
    0% {
      top: 45%;
    },
    100% {
      top: 50%;
    }
  }
`

//   background-image: ${ props => (props.theme ? "url(img/cityillustration_soma_desktop.png)" : "url(img/cityillustration_fidi_desktop.png)")};

const City = styled.div`

  background-image: ${ props => (props.theme = "soma" ? "url(img/cityillustration_soma_desktop.png)": "url(img/cityillustration_fidi_desktop.png)")};

  @media (max-width: 800px) {
    background-image: url(img/cityillustrationmobile.png);
  }

  height: 700px;
  width: 700px;
  background-size: contain;
  background-position: center;
  z-index: 5;
  transition: 1.5s ease;
  background-repeat: no-repeat;

  animation-name: fadeIn;
  animation-duration: 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      filter: blur(10px)
    },
    100% {
      opacity: 1;
      filter: blur(0px)
    }
  }


`

const EmptyDiv = styled.div`

    height: 100vh;
    
    h1 {
      position: absolute;
      bottom: 50px;
    }

`

// const Line2 = styled.div`

//     height: 200px;
//     margin: -250px auto;
//     z-index: 1;
//     width: 1px;
//     background: #4d4d4d;
//     left: 50%;
//     animation-name: growshrink;
//     animation-duration: 2s;
//     animation-iteration-count: infinite;

//     @keyframes growshrink {
//       0% {
//           height: 10px;
//           opacity: 0;
//       }
//       5% {
//         opacity: 1;
//       }
//       25% {
//         background: #ff00ff;
//       }
//       70% {
//         opacity: 1;
//       }
//       75%{
//           background: #0000ff;
//       }
//       100% {
//         opacity: 0;
//         height: 200px;
//       }
//     }

// `


const Line = styled.div`

    height: 400px;
    margin: -160px auto;
    z-index: 1;
    width: 1px;
    background: #4d4d4d;
    position: absolute;
    left: 100px;
    animation-name: growshrink;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    @keyframes growshrink {
      0% {
          height: 10px;
          opacity: 0;
      }
      5% {
        opacity: 1;
      }
      25% {
        background: #ff00ff;
      }
      70% {
        opacity: 1;
      }
      75%{
          background: #0000ff;
      }
      100% {
        opacity: 0;
        height: 250px;
      }
    }

`

const ScrollText = styled.div`

    h5 {
      margin-top: -150px;
      transform: rotate(-90deg) translate(100px, 38px);
      color: #ff00ff;
    }

`

const ScrollItems = styled.div`

@media(max-width: 800px) {
  display: none;
}

  position: absolute;
  right: 60px;
  display: flex;
  flex-direction: column;

`

//   ${props => (props.tech ? "" : "")}

const HomeScreen = props => {

  console.log("home theme " + props.theme )

  return (
    <Screen id="top" theme={props.theme}>

      <EmptyDiv />

      <ScrollItems>
            <ScrollText>
              <h5>SCROLL DOWN</h5>
            </ScrollText>
            <Line></Line>
          </ScrollItems>

      <AboutSection>

        
          <div className="color"></div>

          <BackgroundImage id="cityWrap">
            <City id="city"></City>
          </BackgroundImage>

          <div className="text" id="about">
            <h3>
              <span className="bold">DESIGNCOIN</span><br></br><span className="gray">We are a San Francisco based web design agency servicing startups, crypto companies, and small businesses. We design and code everything in house with pride, diligence, and sometimes craft beer.
              </span>
            </h3>
          </div>

          <div className="textAlt">
            <h3>
              <span className="bold">DESIGNING WITH PASSION</span><br></br><span className="gray">We are here to help you create web products and digital assets that will set you apart from the competition. Hand made digital products with a fast/tech/winning mentality.</span>
            </h3>
          </div>

          <DesignCoinSection id="services">
        <div className="servicesOffered">
          <h1>Services</h1>
          <div className="categories">
            <div className="categoryBox">
              <h3>Design</h3>
              <h4>UI/UX Design</h4>
              <h4>Website Design</h4>
              <h4>Digital Product Design</h4>
            </div>
            <div className="categoryBox">
              <h3>Creative</h3>
              <h4>Digital Branding</h4>
              <h4>Brand Style Guides</h4>
              <h4>Consultation</h4>
            </div>
          </div>
          <div className="ferry">
            <img src="./img/ferry.png" alt="" />
          </div>
        </div>
      </DesignCoinSection>

      <Leadership id="kevin">
        <h1>Lead Designer</h1>
        <div className="bio">
          <div className="headshot"></div>
          <h2></h2>
          <h3>Kevin Macaraeg designs graphics, interfaces,  websites, and experiences for startups, restaurants, and his own projects. Macaraeg leads a team of designers and developers to produce beautiful and engaging products for clients.</h3><h3 style={{textAlign: "center", marginTop: "20px"}}><a href="https://www.linkedin.com/in/sandiegokevin/">See LinkedIn</a></h3>
        </div>
        <div className="kevin">
          <h2>Experiences</h2>
          <div className="icons">
            <div className="iconbox">
              <img src="./img/icons-01.svg" alt="" />
              <h4>Crypto Industry</h4>
              <h5>Web Design</h5>
            </div>
            <div className="iconbox">
              <img src="./img/icons-02.svg" alt="" />
              <h4>Snapchat</h4>
              <h5>Content Analyst</h5>
            </div>
            <div className="iconbox">
              <img src="./img/icons-03.svg" alt="" />
              <h4>UC Berkeley</h4>
              <h5>Web Development</h5>
            </div>
            <div className="iconbox">
              <img src="./img/icons-04.svg" alt="" />
              <h4>SF State</h4>
              <h5>Design + Marketing</h5>
            </div>
            <div className="iconbox">
              <img src="./img/icons-05.svg" alt="" />
              <h4>React.js</h4>
              <h5>Front End Design</h5>
            </div>
            <div className="iconbox">
              <img src="./img/icons-06.svg" alt="" />
              <h4>Sketch</h4>
              <h5>UI/UX Prototyping</h5>
            </div>
            <div className="iconbox">
              <img src="./img/icons-07.svg" alt="" />
              <h4>Adobe Suite</h4>
              <h5>Full Proficiencies</h5>
            </div>
            <div className="iconbox">
              <img src="./img/icons-08.svg" alt="" />
              <h4>Origami Studio</h4>
              <h5>Web Animation</h5>
            </div>
            <div className="iconbox">
              <img src="./img/icons-09.svg" alt="" />
              <h4>Web Design</h4>
              <h5>Experienced Contractor</h5>
            </div>
          </div>
        </div>
      </Leadership>

      <Contact id="contact">
        <div className="formEmail">        
          <h1>Let's Chat</h1>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfY1RgfcvP-ALHKEcxOL_KF7UOpmhai4oaz4AiWV2Z8y-ndIA/viewform?usp=sf_link">CONTACT</a>
        </div>



        {/* <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfY1RgfcvP-ALHKEcxOL_KF7UOpmhai4oaz4AiWV2Z8y-ndIA/formResponse?embedded=true">
        <input type="text" jsname="ibnC6b"/>
        <input type="submit">
        </input>
        
        </form>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfY1RgfcvP-ALHKEcxOL_KF7UOpmhai4oaz4AiWV2Z8y-ndIA/viewform?embedded=true" width="640" height="1176" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        <div className="contactSheet">
        <h1>Let's Chat.</h1>
        <ReactContactForm className="contactForm" to="kevin@designcoin.us" />
        </div> */}

      </Contact>



      <Footer>
        <img src="./img/designcoinlogo.png" alt=""/>
        <h3>Designed responsibly in California.</h3>

      </Footer>

      </AboutSection>



    </Screen>
  )
}

export default HomeScreen