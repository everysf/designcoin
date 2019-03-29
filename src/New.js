import React, { Component } from 'react';
import './New.css'

class New extends Component {

    state = {

    }

    render() {
        return (
            <div className="wrapper">
                <a className="image" href="https://www.linkedin.com/in/sandiegokevin/" id="logo1"><img style={{zIndex:"20"}} src="./designcoinlogo.png"></img>
                </a>
                <div className="wallpaper">
                    <a className="text" href="https://www.linkedin.com/in/sandiegokevin/" id="logo1"><h1>KEVIN@DESIGNCOIN.US</h1></a>
                    </div>
                <div className="wallpaper2"></div>
            </div>
        )
    }

}

export default New