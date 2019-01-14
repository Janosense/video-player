import React, { PureComponent } from "react";
import { withPlayerProps } from "../HOC/withPlayerProps"
import "./style.css"

class ButtonFullScreen extends PureComponent {
    
    _toggleFullScreen = () => {
        const { videoElement: video } = this.props;
        
        if ( !video.fullscreenElement && !video.mozFullScreenElement && !video.webkitFullscreenElement ) {
            if ( video.requestFullscreen ) {
                video.requestFullscreen();
            } else if ( video.mozRequestFullScreen ) {
                video.mozRequestFullScreen();
            } else if ( video.webkitRequestFullscreen ) {
                video.webkitRequestFullscreen( Element.ALLOW_KEYBOARD_INPUT );
            }
        } else {
            if ( video.cancelFullScreen ) {
                video.cancelFullScreen();
            } else if ( video.mozCancelFullScreen ) {
                video.mozCancelFullScreen();
            } else if ( video.webkitCancelFullScreen ) {
                video.webkitCancelFullScreen();
            }
        }
    };
    
    render() {
        return (
            <button
                className = "button-full-screen"
                onClick={ this._toggleFullScreen } />
        );
    };
}

export default withPlayerProps( ButtonFullScreen );
