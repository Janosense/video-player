import React, { Component } from "react";
import Video from "../components/Video/Video";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import videoList from "../config/video-list";
import { Provider } from '../components/HOC/withPlayerProps';
import "./style.css"

export default class Player extends Component {
    
    state = {
        currentProgress:     0,
        currentTime:         0,
        isComponentDidMount: false,
        isVideoPlaying:      false,
        isVideoOnPause:      false,
    };
    
    videoElement = React.createRef();
    
    _changeStateCurrentTime = ( currentTime ) => {
        this.setState( { currentTime } );
    };
    
    _changeStateIsVideoOnPause = ( isVideoOnPause ) => {
        this.setState( { isVideoOnPause } );
    };
    
    _changeStateIsVideoPlaying = ( isVideoPlaying ) => {
        this.setState( { isVideoPlaying } );
    };
    
    _changeStateCurrentProgress = ( time ) => {
        this.setState( {
            currentProgress: time,
        } );
    };
    
    componentDidMount( currentTime ) {
        this.setState( {
            isComponentDidMount: true,
        } );
    };
    
    render() {
        const context = {
            _changeStateIsVideoOnPause:  this._changeStateIsVideoOnPause,
            _changeStateIsVideoPlaying:  this._changeStateIsVideoPlaying,
            _changeStateCurrentTime:     this._changeStateCurrentTime,
            _changeStateCurrentProgress: this._changeStateCurrentProgress,
            currentProgress:             this.state.currentProgress,
            currentTime:                 this.state.currentTime,
            isVideoPlaying:              this.state.isVideoPlaying,
            videoList:                   videoList,
            videoElement:                this.videoElement.current,
        };
        
        return (
            <Provider value = { context }>
                <div className = { `player ${ this.state.isVideoOnPause && `player--on-pause` }` }>
                    <Video ref = { this.videoElement }/>
                    <ControlPanel />
                </div>
            </Provider>
        
        );
    };
}
