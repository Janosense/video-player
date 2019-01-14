import React, { Component } from "react";
import { withPlayerProps } from "../HOC/withPlayerProps";
import "./style.css"

class ProgressBar extends Component {
    
    state = {
        progress: this.props.currentProgress,
    };
    
    progressBarElement = React.createRef();
    progressBarIndicator = React.createRef();
    
    static getDerivedStateFromProps(props, state) {
        return {
            progress: props.currentProgress,
        };
    };
    
    _handleMouseDown = () => {
        this.progressBarElement.current.addEventListener('mousemove', this._updateProgressIndicator);
    };
    
    _handleMouseUp = () => {
        this.progressBarElement.current.removeEventListener('mousemove', this._updateProgressIndicator);
    };
    
    _updateProgressIndicator = (evt) => {
        const { videoElement: video } = this.props;
        const progressBarRect = this.progressBarElement.current.getBoundingClientRect();
        var percent = (evt.clientX - progressBarRect.x) * 100 /  progressBarRect.width;
        this.setState({progress: percent});
        this.progressBarIndicator.current.style.width = `${ percent }%`;
        video.currentTime = percent / 100 * video.duration;
    };
    
    render() {
        return (
            <div
                onMouseUp = { this._handleMouseUp }
                onMouseLeave = { this._handleMouseUp }
                onMouseDown = { this._handleMouseDown }
                onClick = { this._updateProgressIndicator }
                className = "progress-bar player__progress-bar"
                ref = { this.progressBarElement } >
                <span
                    style = {{
                        width: `${ this.state.progress }%`,
                    }}
                    ref = { this.progressBarIndicator }
                    className = "progress-bar__indicator"  />
            </div>);
    }
}

export default withPlayerProps(ProgressBar)
