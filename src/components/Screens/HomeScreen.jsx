import React, { Component } from 'react';
import styled from "styled-components";

import AboutSection from "./Sections/AboutSection";
import DesignCoinSection from "./Sections/DesignCoinSection";
import Leadership from "./Sections/Leadership";
import Contact from "./Sections/Contact";
import Footer from './Sections/Footer';
// import Navigator from './../navigator'
import ScrollProgress from './../scrollprogress'
import ScrollProgressFidi from './../scrollprogressfidi'

const Navigator = styled.div`

a {
  color: ${ props => (props.theme === "soma" ? "black" : "white !important")};
  transition: 2s ease;
}

z-index: 100;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  top: 0;
  h4 {
    padding: 5px 0 6px;
    transition: .2s ease;
    font-size: 10px;
    letter-spacing: 2px;
    border-bottom: 1px solid rgba(0,0,0,0);
    margin: 2px 10px;
    max-height: 13px;
    font-weight: 300;
    mix-blend-mode: lighten;
  }
  .links {
    z-index: 200;
    display: flex;
    padding: 18px 20px 30px;
    color: ${ props => (props.theme == "soma" ? "black" : "white !important")};

    @media(max-width: 800px) {
      display: none;
    }

    h4:hover {
      cursor: pointer;
      // background: -webkit-linear-gradient(#eee, #333);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      border-bottom: ${ props => (props.theme == "soma" ? "50px solid #ff00ff" : "50px solid #fff9b0")};
      color: rgba(0,0,255,1);
    }

  }

  .home {
    display: flex;
    z-index: 200;
  }
  img {
    height: 50px;
    padding: 10px;
    transition: .2s ease;
  }
  .logotext {
    opacity: 1;
    transition: .3s ease;
    margin: 20px 0px 20px 20px;
  }
  .logotext2 {
    opacity: 0;
    transition: .3s ease;
    margin: 20px 20px 20px 0;
  }
  img:hover ~ .logotext {

    opacity: 1;
  }

  .logotext:hover ~ .logotext2 {
    color: ${props=> (props.theme=="soma" ? "black" : "white")}
    opacity: 1;
    margin-left: 20px;
  }
`

const Screen = styled.div`

::-moz-selection { background: ${props => (props.theme == "soma" ? "#ff00ff" : "#fff9b0")}; }
::selection { background:${props => (props.theme == "soma" ? "#ff00ff" : "#fff9b0")}; }

  z-index: 5;
  h1 {
    text-align: center;
    width: 100%;
    font-size: 44px;
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
    ${props => (props.theme == "soma" ? props.color.soma1 : props.color.fidi1)} -30%, 
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

// background-image: ${ props => (props.theme = "soma" ? "url(img/cityillustration_soma_desktop.png)" : "url(img/cityillustration_fidi_desktop.png)")};

let City = styled.div`

  background-image: ${ props => (props.theme == "soma" ? "url(img/cityillustration_soma_desktop.png)" : "url(img/cityillustration_fidi_desktop.png)")};

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

const Line = styled.div`

    height: 400px;
    margin: -160px auto;
    z-index: 1;
    width: 1px;
    background: #4d4d4d;
    position: absolute;
    left: 100px;
    animation-name: ${props => (props.theme == "soma" ? "growshrink1" : "growshrink2")};
    animation-duration: 2s;
    animation-iteration-count: infinite;


    @keyframes growshrink1 {
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

    @keyframes growshrink2 {
      0% {
          height: 10px;
          opacity: 0;
      }
      5% {
        opacity: 1;
      }
      25% {
        background: #c7dcdd;
      }
      70% {
        opacity: 1;
      }
      75%{
          background: #4e6a91;
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
      transition: 2s ease;
      color: ${props => (props.theme == "soma" ? props.color.soma1 : props.color.fidi1)};
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

const ThemeChanger = styled.div`

  position: fixed;
  display: flex;
  z-index: 900;
  left: 40px;
  bottom: 40px;

  @media (max-width: 800px) {
    left: 50%;
    transform: translate(-50%);
    .themeTitle {
      display: none;
    }
  }

  border-radius: 5px;

  .themeTitle {
    font-size: 15px;
    padding: 10px 10px;
    opacity: 0;
    margin-left: -20px;
    transition: .2s ease;
  }

  button {
    background: white;
  }

  button:hover {
    background-color: ${props => (props.theme == "soma" ? "#ff00ff" : "#fff9b0")};
  }

  button:hover ~ .themeTitle{
    opacity: 1;
    margin-left: 10px;
    overflow: hidden;
  }

`

let ThemeButtons = styled.button`

  font-size: 15px;
  color: black;
  border-radius: ${props => (props.soma ? "5px 0 0 5px" : "0 5px 5px 0")};
  padding: ${props => (props.soma ? "5px 15px" : "5px 20px")};
  border: none;
  font-family: "Montserrat";
  box-shadow: 0px 5px 5px rgba(0,0,0,.1);
  @media (max-width: 800px) {
    width: 100px;
  }

`

const ThemeTitle = styled.h3`

`


function Ferry(arg){
  // const isInTheme = props.theme;
  if (arg == "soma"){
    return "./img/ferry.png";
  } else {
    return "./img/ferryfidi.png"
  }
}

function SmallIcon(arg){
  // const isInTheme = props.theme;
  if (arg == "soma"){
    return "./img/newlogossoma.png";
  } else {
    return "./img/newlogosfidi.png"
  }
}

const alertDom = (arg) => {
  alert(arg);
}

const ScrollBar = (theme, themeStyle) => {
  console.log(themeStyle)
  if (theme=="soma") {
    return <ScrollProgress theme={theme} color={themeStyle}/>;
  }
  return <ScrollProgressFidi themne={theme} color={themeStyle}/>;
}

class HomeScreen extends Component {

  // console.log("home theme " + props.theme )

  state = {
    theme: "soma",
    number: "21",
  };

  themeStyle = {
    soma1: "rgba(255,0,255,1)",
    soma2: "rgba(0,0,255,1)",
    soma3: "",
    soma4: "rgba(255,0,255,1)",
    soma5: "rgba(255,0,255,.1)",
    fidi1: "rgba(21,55, 91,1)",
    fidi2: "rgba(255, 249, 176, 1)",
    fidi3: "rgba(249,248,229,1)",
    fidi4: "rgba(21,55, 91,1)",
    fidi5: "rgba(21,55, 91,.1)",
  }

  changeTheme = (arg, action) => {
    this.setState({ theme: arg });
    this.setState({ number: "22" });
    console.log("arg" +
      arg)
    console.log(this.state.theme);
    // action(this.state.theme)
  }

  render() {
    return (
      <Screen id="top" theme={this.state.theme}>

        <Navigator theme={this.state.theme}  color={this.themeStyle}>
          <div className="home">
            {/* <img src="./img/designcoinlogo.png"/> */}
            <h4 className="logotext"><a href="#top">DESIGNCOIN</a></h4>
            <h4 className="logotext2">DECENTRALIZED DESIGN</h4>
          </div>
          <div className="links">
            <h4><a href="#about">WHO ARE WE</a></h4>
            <h4><a href="#services">SERVICES</a></h4>
            <h4><a href="#kevin">DESIGNER</a></h4>
            <h4><a href="#contact">CONTACT</a></h4>
          </div>
          {ScrollBar(this.state.theme, this.themeStyle)}
{/* 
          <ScrollProgress className="hidemobile" theme={this.state.theme} color={this.themeStyle}></ScrollProgress> */}
        </Navigator>

        <ThemeChanger>
          <ThemeButtons soma onClick={this.changeTheme.bind(this, "soma", alertDom)} theme={this.state.theme} color={this.themeStyle}>SoMa</ThemeButtons>
          <ThemeButtons fidi onClick={this.changeTheme.bind(this, "fidi", alertDom)} theme={this.state.theme} color={this.themeStyle}>FiDi</ThemeButtons>
          <ThemeTitle className="themeTitle">Theme Changer</ThemeTitle>
        </ThemeChanger>

        <EmptyDiv />

        <ScrollItems>
          <ScrollText theme={this.state.theme} color={this.themeStyle}>
            <h5>SCROLL DOWN</h5>
          </ScrollText>
          <Line theme={this.state.theme} color={this.themeStyle}></Line>
        </ScrollItems>

        <AboutSection theme={this.state.theme} color={this.themeStyle}>

          <div className="color"></div>

          <BackgroundImage id="cityWrap" theme={this.state.theme} color={this.themeStyle}>
            <City id="city" theme={this.state.theme}></City>
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

          <DesignCoinSection id="services" theme={this.state.theme} color={this.themeStyle}>
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
              {/* <img src='./img/ferry.png'/>
              {props => (this.state.theme == "soma" ? "<img src='./img/ferry.png'/>" : "<img src='./img/ferryfidi.png' />")} */}
              <img src={Ferry(this.state.theme)} alt=""/>
              </div>
            </div>
          </DesignCoinSection>

          <Leadership id="kevin" theme={this.state.theme} color={this.themeStyle}>
          <div className="wavy">
            <h1>Lead Designer</h1>
            <div className="bio">
              <div className="headshot"></div>
              <h2></h2>
              <h3>Kevin Macaraeg designs graphics, interfaces,  websites, and experiences for startups, restaurants, and his own projects. Macaraeg leads a team of designers and developers to produce beautiful and engaging products for clients.</h3><h3 style={{ textAlign: "center", marginTop: "20px" }}><a href="https://www.linkedin.com/in/sandiegokevin/">See LinkedIn</a></h3>
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
            </div>
          </Leadership>

          <Contact id="contact" theme={this.state.theme} color={this.themeStyle}>
            <div className="formEmail">
              <h1>Let's Chat</h1>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfY1RgfcvP-ALHKEcxOL_KF7UOpmhai4oaz4AiWV2Z8y-ndIA/viewform?usp=sf_link">CONTACT</a>
            </div>

          </Contact>

          <Footer>
            <img src={SmallIcon(this.state.theme)} alt="" />
            <h3>Designed responsibly in California.</h3>
          </Footer>

        </AboutSection>



      </Screen>
    )
  }
}

export default HomeScreen