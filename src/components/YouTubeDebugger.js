// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YoutubeDebugger extends Component{
    constructor(){
        super();
        this.state =
            {
                errors: [],
                user: null,
                settings: {
                  bitrate: 8,
                  video: {
                    resolution: '1080p'
                  }
                }
              }
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolution = () => {
        let x = this.state.settings.video;
        x.resolution = '720p';
        console.log(x.resolution)
        // this.setState({
        //     settings: {
        //         ...this.state.settings.video,
        //         resolution: '720p'
        //     }
        // })
        return x;
    }

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.handleBitrate}>{this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.handleResolution}></button>
            </div>
        )
    }
}