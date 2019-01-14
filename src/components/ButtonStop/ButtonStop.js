import React, { PureComponent } from "react";
import { withPlayerProps } from "../HOC/withPlayerProps"
import "./style.css"

class ButtonStop extends PureComponent {
    
    _handleButtonClick = () => {
        const { videoElement: video, _changeStateIsVideoPlaying, _changeStateIsVideoOnPause } = this.props;
        video.pause();
        video.currentTime = 0;
        _changeStateIsVideoOnPause( false );
        _changeStateIsVideoPlaying( false );
    };
    
    render() {
        return (
            <button
                className = "button-stop"
                onClick = { this._handleButtonClick } />);
    }
}

export default withPlayerProps( ButtonStop );
