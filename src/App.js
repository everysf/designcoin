import React, { Component } from 'react';
import './App.css';
import { strictEqual } from 'assert';
import styled from 'styled-components'
import {ThemeProvider} from 'styled-components'

import HomeScreen from './components/Screens/HomeScreen.jsx'
import Navigator from './components/navigator'

const Screen = props => {

  return (
    <div className="screen-wrap">
      {(() => {
        switch (props.screen) {
          case 'home':
            return <HomeScreen theme={props.theme}/>
          default:
            return <h1>Loading...</h1>;
        }
      })()}
    </div>
  )

}

class App extends Component {


  state = {
    section: "home",
    theme: "soma",
    number: "21"
  }

  changeToUI = (arg) => {
    this.setState({ section: arg })
  }

  render() {

    return (
      <div>
        <Screen screen={this.state.section} text={this.state.text} theme={this.state.theme}/>
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
