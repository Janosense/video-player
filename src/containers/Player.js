import React, { Component } from "react";
import Video from "../components/Video/Video";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import videoList from "../config/video-list";
import { Provider } from '../components/HOC/withPlayerProps';
import "./style.css"

export default class Player extends Component {
    
    state = {
        currentProgress: 0,
        isComponentDidMount: false,
        isVideoPlaying: false,
        isVideoOnPause: false,
    };
    
    videoElement = React.createRef();
    
    componentDidMount() {
        this.setState({isComponentDidMount: true})
    };
    
    _changeStateIsVideoOnPause = (isVideoOnPause) => {
        this.setState({isVideoOnPause});
    };
    
    _changeStateIsVideoPlaying = ( isVideoPlaying) => {
        this.setState({isVideoPlaying});
    };
    
    _handleOnTimeUpdateParent = (time) => {
        this.setState({currentProgress: time});
    };
    
    render() {
        const context = {
            _changeStateIsVideoOnPause: this._changeStateIsVideoOnPause,
            _changeStateIsVideoPlaying: this._changeStateIsVideoPlaying,
            _handleOnTimeUpdateParent: this._handleOnTimeUpdateParent,
            _handleClickButtonParent: this._changeStateIsVideoPlaying,
            videoList: videoList,
            videoElement: this.videoElement.current,
            currentTime: this.state.currentTime,
            currentProgress: this.state.currentProgress,
            isVideoPlaying: this.state.isVideoPlaying,
        };
        
        return (
            <Provider value = { context  }>
                <div className = { `player ${ this.state.isVideoOnPause && `player--on-pause` }` }>
                    <Video ref = { this.videoElement } />
                    <ControlPanel />
                </div>
            </Provider>
        
        );
    };
}
