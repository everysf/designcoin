import React, { Component } from 'react';
import './App.css';
import { strictEqual } from 'assert';
import styled from 'styled-components'

import HomeScreen from './components/Screens/HomeScreen.jsx'
const Screen = props => {

  return (
    <div className="screen-wrap">
      {(() => {
        switch (props.screen) {
          case 'home':
            return <HomeScreen />
          default:
            return <h1>Loading...</h1>;
        }
      })()}
    </div>
  )

}

const Content = styled.div`

`

const Navigator = styled.div`


a {
  color: black;
}
// background-color: #fff;
z-index: 100;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  top: 0;
  h4 {
    padding: 5px 0;
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
    color: black;

    @media(max-width: 800px) {
      display: none;
    }

    h4:hover {
      cursor: pointer;
      // background: -webkit-linear-gradient(#eee, #333);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      border-bottom: 50px solid rgba(255,0,255,1);
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
    opacity: 1
  }

  .logotext:hover ~ .logotext2 {
    opacity: 1;
    margin-left: 20px;
  }
`

const Container = styled.div`
    width: 100%;
    height: 18px;
    background: rgba(255, 255, 255, 0.1);
    position: fixed;
    top: 20px;
    left: 0px;
    z-index: 100;
    opacity: 0;
    transition: 1s ease;
`;

const ProgressBar = styled.div`
    height: 18px;
    background: rgba(255,0,255,.2);
    width: 0%;
    transition: .2s ease;
`;



class ScrollProgress extends Component {
  componentDidMount() {
      window.onscroll = function() {
          let winScroll =
              document.body.scrollTop || document.documentElement.scrollTop;
          let height =
              document.documentElement.scrollHeight -
              document.documentElement.clientHeight;
          let scrolled = (winScroll / height) * 100;

          const barCont = document.getElementById("progressBarCont");
          const bar = document.getElementById("progressBar");

          if (scrolled === 0) {
              barCont.style.opacity = "0";
          } else {
              barCont.style.opacity = "1";
              bar.style.width = scrolled + "%";
          }

          console.log(scrolled)

          const city = document.getElementById("city");
          
          if (scrolled > 30) {
            city.style.opacity = "0";
            
          } else {
            city.style.opacity = "1";

          }

          const cityWrap = document.getElementById("cityWrap");
          
          if (scrolled > 25) {
            cityWrap.style.top = "47%";
            cityWrap.style.opacity = "0";
            // city.style.display = "none";
          } else {
            cityWrap.style.top = "50%";
            cityWrap.style.opacity = "1";
            // city.style.display = "flex";
          }

      };
  }

  render() {
      return (
          <Container id="progressBarCont">
              <ProgressBar id="progressBar" />
          </Container>
      );
  }
}

class App extends Component {

  state = {
    section: "home",
    text: "jello"
  }

  changeToUI = (arg) => {
    this.setState({ section: arg })
  }

  render() {

    return (
      <div>
          <Navigator>
            <div className="home">
              {/* <img src="./img/designcoinlogo.png"/> */}
              <h4 className="logotext"><a href="#top">DESIGNCOIN</a></h4>
              <h4 className="logotext2">DECENTRALIZED DESIGN</h4>
            </div>
            <div className="links">
              <h4><a href="#about">WHO ARE WE</a></h4>
              <h4><a href="#services">SERVICES</a></h4>
              <h4><a href="#kevin">LEADERSHIP</a></h4>
              <h4><a href="#contact">CONTACT</a></h4>
            </div>
            <ScrollProgress className="hidemobile"></ScrollProgress>
          </Navigator>
          <Screen screen={this.state.section} text={this.state.text} />
          {/* <div className="navigate">
          <h1 className="nav-item" onClick={this.changeToUI.bind(this, "home")}>
            home
          </h1>
          <h1 className="nav-item" onClick={this.changeToUI.bind(this, "interface")}>
            design
          </h1>
          <h1 className="nav-item" onClick={this.changeToUI.bind(this, "creative")}>
            creative
            </h1>
          <h1 className="nav-item" onClick={this.changeToUI.bind(this, "resume")}>
            resume
            </h1>
        </div> */}
      </div>


    );
  }
}

export default App;
