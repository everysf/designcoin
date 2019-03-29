import React, { Component } from 'react';
import styled from "styled-components";
import ReactContactForm from 'react-mail-form';

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

const City = styled.div`

  background-image: url(img/city01.png);
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

const AboutSection = styled.div`

    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    min-width: 100%;

    @media(max-width: 800px){
      padding: 100px 0 300px;
      h3 {
        font-size: 20px !important;
        line-height: 30px !important;
        margin: 25px;
      }
    }

    .color {
      margin-top: 100px;
      z-index: 1;
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
  
      z-index: 10;
      background-color: rgba(255,255,255,.85);
      // background: red;
      width: 100vw;
      padding: 300px 0 450px;
      display: flex;
      justify-content: center;
      transition. 3s ease;
      transform: skew(0,5deg);

      @media(max-width: 800px){
        padding: 100px 0 200px;
      }

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

      @media(max-width: 800px){
        padding: 100px 0 100px;
        h3 {
          font-size: 20px !important;
          line-height: 30px !important;
          margin: 25px;
        }
      }

      margin-top: -150px;
      z-index: 20;
      background-color: rgba(244,244,244,1);
      // background: red;
      width: 100vw;
      padding: 300px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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

const DesignCoinSection = styled.div`

    padding: 250px 0 200px;
    z-index: 20;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background-image: url(./img/wavy.png);

    @media(max-width: 800px) {
      h3, h4 {
        font-size: 20px !important;
        margin: 10px !important;
      }
      h1 {
        font-size: 30px !important;
        margin: 0;
      }
      padding: 100px 0 100px;
    }

    h1 {
      font-size: 48px;
      margin-bottom: 30px;
    }

    h3 {
      font-size: 32px;
      margin-bottom: 30px;
      font-weight: 700;
    }

    h4 {
      margin-bottom: 30px;
      font-size: 24px;
      font-family: "Roboto Slab";
      font-weight: 300;
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

      @media (max-width: 800px) {
        flex-direction: column;
      }

    }

    .servicesOffered {
      padding: 70px 30px 0;
      box-shadow: 0px 0px 5px rgba(0,0,0,.3);
      border-radius: 10px;
      max-width: 900px;
      margin: 0 auto;
      background: linear-gradient(to top, rgba(0,0,255,.1), rgba(255,0,255,.1) 3%,rgba(0,0,0,0) 10%)

    }

    img {
      height: 150px;
      margin: 0 auto;
      text-align: center;

      @media (max-width: 800px) {
        height: 90px;
        margin: 30px auto 0 !important;
      }

    }
    
    .ferry {
      display: flex;
      justify-content: center;
    }

`

const Footer = styled.div`

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f1f1;
  width: 100%;
  z-index: 50;

  min-height: 200px;

  img {
    height: 50px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  h3 {
    text-align: center;

  }

  @media (max-width: 800px) {
    min-height: 100vh;
    margin-bottom: -100vh;
    h3 {
      font-size: 20px !important;
    }
    img {
      margin-bottom: 0 !important;
    }
  }

`

const Leadership = styled.div`

  // position: absolute;
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
  background-repeat: no-repeat;
  z-index: 10;

  @media(max-width: 800px) {
    h3, h4 {
      font-size: 20px !important;
      line-height: 30px;
      margin: 10px !important;
    }
    h1 {
      font-size: 30px !important;
      margin: 0;
    }
    padding: 100px 0 0px;
  }


  h1 {
    font-size: 44px;
    color: white;
    margin-bottom: 20px;
  }

  a {
    transition: .2s ease;
  }

  a:hover {
    color: #ff00ff;
    margin-left: 10px;
  }
  
  .headshot {
    background: url(./img/thumbnail.jpg);
    height: 200px;
    width: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 200px;
    margin: 10px auto 40px;
  };

  .bio {
    padding: 20px 50px;
    max-width: 600px;
    margin: 0 auto;
    h3 {
      font-size: 25px;
      line-height: 40px;
      font-family: "Roboto Slab";
      font-weight: 300;
    }

    @media (max-width: 800px) {
      padding: 20px !important;

    }
  }

  .kevin {

    max-width: 880px;
    display: flex;
    margin: 50px auto 0;
    flex-direction: column;
    justify-content: center;
    border: 1px solid white;
    padding: 40px 0;
    background: linear-gradient(to top, rgba(0,0,255,.5), rgba(0,0,0,.1) 90%);

    @media (max-width: 800px) {
      margin: 50px 10px !important;
    }

    h2 {

      font-size: 36px;
      text-align: center;
      margin: 10px 10px 20px;

    };

    .iconbox {

      width: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 40px 25px;
      transition: .2s ease;

      @media (max-width: 800px) {
        margin: 20px 10px;
        width: 150px;
      }

    }

    .iconbox:hover {
      margin: 35px 25px 45px;
      
    }

    .icons {

      min-height: 400px;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

      

      img {
        height: 100px;
        margin: 10px auto 20px;
        text-align: center;
      }

      h4 {
        text-align: center;
        font-size: 13px;
        margin-bottom: 2px;
      }

      h5 {
        font-size: 18px;
        text-align: center;
        line-height: 30px;
        font-family: "Roboto Slab"
      }
      
      @media (max-width: 800px) {

        img {
          height: 60px !important;
          margin: 10px auto 5px;
        }

        h4 {
          font-size: 20px !important;
          line-height: 30px !important;
          margin: 0 !important;
        }

        h5 {
          font-size: 15px !important;
          line-height: 20px !important;
        }

      }
    
  }

`

const Contact = styled.div`

  // position: absolute;
  z-index: 10;

  .contactSheet {
    padding: 50px;
    margin: 200px auto;
    background: linear-gradient(to top, rgba(244,244,244,1),rgba(250,250,250,1));
    border-radius: 10px;
    max-width: 350px;
    
    @media(max-width: 800px){
      margin: 50px auto;
      padding: 20px;
      width: 300px;
    }

    h1 {
      margin-bottom: 15px;
    }
  }


  .contactForm {



    input {
      margin: 10px;
      max-width: 700px;
      font-size: 18px;
      padding: 10px;
      border: none;
      width: 310px;
      
      @media(max-width: 800px){
        width: 260px;
      }

    }

    textarea {
      margin: 10px;
      max-width: 700px;
      font-size: 18px;
      padding: 10px;
      border: none;
      width: 310px;
      @media(max-width: 800px){
        width: 260px;
      }
    }

    div {
      display: flex;
      flex-direction: column;
    }

    a {
      background-color: rgba(255,255,255,0);
      border: 1px solid #0000ff;
      padding: 10px;
      font-size: 18px;
      widthL 100%;
      margin: 10px;
      color: #0000ff;
      transition: .2s ease;
    }

    a:hover {
      background-color: rgba(0,0,255,1);
      color: #ffffff;
    }


  }

`


const HomeScreen = props => {
  return (
    <Screen id="top">


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
              <span className="bold">What is Decentralized Design?</span><br></br><span className="gray">
                Not sure! But it's catchy and you thought it was interesting enough to keep reading. Decentralization is key philosophy that the DesignCoin team is working towards.</span>
            </h3>
          </div>

          <div className="textAlt">
            <h3>
              <span className="bold">DESIGNCOIN</span><span className="gray"> is a San Francisco based web design agency servicing startups, crypto companies, and small businesses. We design and code everything in house with pride, diligence, and sometimes craft beer.</span>
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
          <h3>Kevin Macaraeg designs graphics, interfaces,  websites, and experiences for startups, restaurants, and his own projects. Macaraeg leads a small team of freelance designers and developers to produce beautiful and engaging products for clients.<br></br><a href="https://www.linkedin.com/feed/">See his LinkedIn</a></h3>
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
              <h5>Front-end Framework</h5>
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
              <h5>Animation Software</h5>
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
        <div className="contactSheet">
        <h1>Let's Chat.</h1>
        <ReactContactForm className="contactForm" to="kevin@designcoin.us" />
        </div>
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