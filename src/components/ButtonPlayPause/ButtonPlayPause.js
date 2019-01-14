import React, { PureComponent } from "react";
import { withPlayerProps } from "../HOC/withPlayerProps"
import "./style.css"

class ButtonPlayPause extends PureComponent {
    
    _handleButtonClick = () => {
        const { videoElement: video, _handleClickButtonParent, _changeStateIsVideoOnPause } = this.props;
        if ( video.paused ) {
            video.play();
            _changeStateIsVideoOnPause(false);
            _handleClickButtonParent( true );
        } else {
            video.pause();
            _changeStateIsVideoOnPause(true);
            _handleClickButtonParent( false );
        }
    };
    
    render() {
        return (
            <button
                className = { `button ${ this.props.isVideoPlaying ? "button--pause" : "button--play"}` }
                onClick = { this._handleButtonClick } /> );
    }
}

export default withPlayerProps(ButtonPlayPause);

