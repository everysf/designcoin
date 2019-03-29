import React, { Component } from 'react';
import styled from "styled-components";

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
`

const City = styled.div`

  background-image: url(img/city01.png);
  height: 700px;
  width: 700px;
  background-size: contain;
  background-position: center;
  z-index: 5;
  transition: 1.5s ease;

`

const EmptyDiv = styled.div`

    height: 100vh;
    
    h1 {
      position: absolute;
      bottom: 50px;
    }

`

const AboutSection = styled.div`

    // transform: skew(0, 15deg);

    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: white;
    min-width: 100%;

    .color {
      margin-top: 100px;
      z-index: 0;
      width: 100vw;
      height: 100vh;
      background-color: white;
      background: linear-gradient(
        to bottom,
        rgba(0,0,255,1), 
        rgba(255,0,255,.0));
        z-index: 5;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: skew(0,-5deg);
      // background-image: url(./img/wavy.png);

        img {
          height: 500px;
        }

    }

    .text {
      z-index: 20;
      background-color: rgba(255,255,255,.75);
      // background: red;
      width: 100vw;
      padding: 300px 0 400px;
      display: flex;
      justify-content: center;
      transition. 3s ease;
      transform: skew(0,5deg);


      h3 {
        transform: skew(0,-5deg);
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
        font-size: 36px;
        line-height: 54px;
        
        max-width: 800px;


        span {


        }

        .gray {
          color: #4d4d4d;
        }

        .bold {
          font-weight: 700;
          transition: .5s ease;
          border-bottom: 1px solid rgba(0,0,0,0);
          background: -webkit-linear-gradient(-30deg, #0000ff, #ff00ff 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }

        .bold:hover {
          border-bottom: 1px solid #ff00ff;
        }

        .montserrat {
          font-family: 'Montserrat';
          font-weight: 700;
          padding-right: 3px;
        }
      }

    }


    .textAlt {
      margin-top: -150px;
      z-index: 20;
      background-color: rgba(244,244,244,1);
      // background: red;
      width: 100vw;
      padding: 300px 0;
      display: flex;
      justify-content: center;
      transition. 3s ease;
      transform: skew(0,-5deg);

      h3 {
        transform: skew(0,5deg);
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
        font-size: 36px;
        line-height: 54px;
       
        max-width: 800px;

        span {


        }

        .gray {
          color: #4d4d4d;
          background: none;
        }

        .bold {
          font-family: 'Montserrat';
          margin-right:6px;
          font-weight: 700;
          transition: .5s ease;
          border-bottom: 1px solid rgba(0,0,0,0);
          background: -webkit-linear-gradient(-30deg, #0000ff, #ff00ff 70%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bold:hover {
          border-bottom: 1px solid #ff00ff;
        }


        .montserrat {
          font-family: 'Montserrat';
          font-weight: 700;
          padding-right: 3px;
        }
      }

    }

    .alt {


      transform: skew(0,-5deg);
      background: linear-gradient(
        30deg,
        rgba(0,0,255,1), 
        rgba(255,0,255,1));
        z-index: 5;

      h3 {
        color: white !important;
      }
    }

`

const MovingText = styled.div`

    text-align: center;

    // animation-name: scroll;
    // animation-duration: 2s;
    // animation-iteration-count: infinite;

    @keyframes scroll {
      0% {
      left: 0;
      opacity: 0;
      }

      50%{

        opacity: 1
      }

      100% {
      left: 100%;
      opacity: 0;
      }
    }


`

const Line = styled.div`

    height: 400px;
    margin: -200px auto;
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
      margin-top: -190px;
      transform: rotate(-90deg) translate(100px, 38px);
      color: #ff00ff;
    }

`

const ScrollItems = styled.div`

  position: absolute;
  right: 60px;
  display: flex;
  flex-direction: column;

`

const DesignCoinSection = styled.div`

    postition: absolute;
    padding: 300px 0 300px;
    z-index: 200;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background-image: url(./img/wavy.png);

    h1 {
      font-size: 48px;
      margin-bottom: 30px;
    }

    h3 {
      font-size: 32px;
      margin-bottom: 40px;
      font-weight: 700;
    }

    h4 {
      margin-bottom: 30px;
      font-size: 24px;
    }

    .categoryBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
    }

    .categories {

      margin: 0 auto;
      padding: 10px;
      width: auto;
      display: flex;

    }

    .servicesOffered {
      padding: 70px 30px;
      box-shadow: 0px 0px 5px rgba(0,0,0,.3);
      max-width: 900px;
      margin: 0 auto;
    }

    img {
      height: 150px;
      margin: 0 auto;
    }

`

const FooterText = styled.div`

    display: flex;
    border-top: 1px solid #e5e5e5;
    padding: 20px;
    justify-content: space-between;

    h3 {
      padding: 10px;
    }

`

const Footer = styled.div`
position: absolute;

display: flex;
flex-direction: column;
justify-content: center;
background-color: #d4d4d4;
width: 100%;

img {
  height: 100px;
  margin: 0 auto;
}

`

const Leadership = styled.div`

  position: absolute;
  background-image: url(./img/wavy.png);
  min-height: 500px;
  width: 100vw;
  background-size: cover;
  padding: 200px 0;
  display; flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  color: white;

  h1 {
    font-size: 44px;
    color: white;
    margin-bottom: 40px;
  }
  
  .kevin {

    max-width: 900px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;

    .headshot {
      background: url(./img/thumbnail.jpg);
      height: 200px;
      width: 200px;
      background-size: cover;
      background-position: center;
      border-radius: 200px;
      margin: 10px auto 40px;
    };



    h2 {
      font-size: 36px;
      text-align: center;
      margin: 10px;
    };

    .iconbox {
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .icons {

      min-height: 400px;

      img {
        height: 100px;
        margin: 10px auto;
        text-align: center;
      }

      h4 {
        text-align: center;
      }
    
  }

`

const Experience = [
  {
    icon: "./img/icons-01.svg",
    title: "Crypto",
    subtitle: "Design Experience"
  },
  {
    icon: "./img/icons-02.svg",
    title: "Snapchat",
    subtitle: "Content Creator"
  },
  {
    icon: "./img/icons-03.svg",
    title: "Web Development",
    subtitle: "UC Berkeley"
  },
  {
    icon: "./img/icons-04.svg",
    title: "Graphic Design and Marketing",
    subtitle: "San Francisco State"
  },
  {
    icon: "./img/icons-05.svg",
    title: "React.js",
    subtitle: "Front End Technology"
  },
  {
    icon: "./img/icons-06.svg",
    title: "Sketch",
    subtitle: "UI/UX Prototyping"
  },
  {
    icon: "./img/icons-07.svg",
    title: "Adobe Products",
    subtitle: "Full Proficiencies"
  },
  {
    icon: "./img/icons-08.svg",
    title: "Origami Studio",
    subtitle: "Animation Rendering"
  },
]

const HomeScreen = props => {
  return (
    <Screen>

      <MovingText>
      </MovingText>

      <EmptyDiv>
      </EmptyDiv>

      <AboutSection>

        <div className="frames">

          <ScrollItems>
            <ScrollText>
              <h5>SCROLL DOWN</h5>
            </ScrollText>
            <Line></Line>
          </ScrollItems>

          <div className="color">
            <img src=".img/wavy.png" alt="" />
          </div>

          <BackgroundImage id="cityWrap">
            <City id="city"></City>
          </BackgroundImage>
          <div className="text">
            <h3>
              <span className="bold">What is Decentralized Design?
                    </span><br></br><span className="gray">
                Not sure! But it's catchy and you thought it was interesting enough to keep reading.</span></h3>
          </div>

          <div className="textAlt">
            <h3>
              <span className="bold">DESIGNCOIN
                    </span>
              <span className="gray"> is a web design agency servicing startups, crypto companies, and small businesses based in San Francisco, California. We make everything in house with pride, diligence, and Lagunitas.</span></h3>
          </div>
        </div>

      </AboutSection>

      <DesignCoinSection id="services">
        <img src="./img/ferry.png" alt="" />
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
        </div>
      </DesignCoinSection>

      <Leadership>
        <h1>Team</h1>
        <div className="kevin">
          <div className="headshot"></div>
          <h2>Kevin Macaraeg</h2>
          <div className="icons">
            <div className="iconbox">
              <img src="./img/icons-01.svg" alt="" />
              <h4>Crypto</h4>
            </div>
          </div>
        </div>
      </Leadership>

      {/* <Footer>
        <FooterText>
          <h3>DesignCoin is a California design agency that loves to make beautiful and engaging experiences.</h3>
          <h3>We're hiring!</h3>
        </FooterText>
      </Footer> */}
    </Screen>
  )
}

export default HomeScreen