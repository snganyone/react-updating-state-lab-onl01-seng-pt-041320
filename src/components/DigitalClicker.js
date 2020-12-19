// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component{
    constructor(){
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        // let newCount = this.state.timesClicked + 1;
        // this.setState({
        //     timesClicked: newCount
        // })
        
        this.setState(previousState => {
            return{
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render(){
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}