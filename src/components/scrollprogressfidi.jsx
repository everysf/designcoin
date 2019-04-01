import styled from 'styled-components'
import React, { Component } from 'react';

const ProgressBar = styled.div`
    height: 18px;
    background: rgba(16,39,68,.4);
    width: 0%;
    transition: .2s ease;
`;

const Content = styled.div`

`

const Container = styled.div`
    width: 100%;
    height: 18px;
    background: rgba(16,39,68,.4);
    position: fixed;
    top: 20px;
    left: 0px;
    z-index: 100;
    opacity: 0;
    transition: 1s ease;
`;

class ScrollProgressFidi extends Component {

state = {
  theme: this.props.theme,
  color: this.props.color
}

  componentDidMount() {
    console.log(this.state.color);
    console.log("progress "+ this.state.theme);
    window.onscroll = function () {
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
      <Container id="progressBarCont" theme={this.state.theme} color={this.state.color}>
        <ProgressBar id="progressBar" theme={this.state.theme} color={this.state.color}/>
      </Container>
    );
  }
}

export default ScrollProgressFidi