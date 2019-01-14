import React, { PureComponent } from "react";
import "./style.css";
import { withPlayerProps } from "../HOC/withPlayerProps";

class VolumeBar extends PureComponent {
    
    state = {
        progress: 50,
        isProgressBarVisible: false,
    };
    
    progressElement = React.createRef();
    
    _handleClickVolumeButton = () => {
        this.setState({isProgressBarVisible: !this.state.isProgressBarVisible})
    };
    
    _updateVolume = (evt) => {
        const { videoElement: video } = this.props;
        const progressElementRect = this.progressElement.current.getBoundingClientRect();
        var percent = parseInt((evt.clientX - progressElementRect.x) * 100 /  progressElementRect.width);
        this.setState({progress: percent});
        video.volume = percent / 100;
    };
    
    render() {
        return (
            <>
                <button
                    className = { `button-volume  ${ this.state.isProgressBarVisible && `button-volume--active` }` }
                    onClick = { this._handleClickVolumeButton }
                />
                { this.state.isProgressBarVisible &&
                (<progress
                    ref = { this.progressElement }
                    onClick = { this._updateVolume }
                    className = "volume"
                    max = "100"
                    value = { this.state.progress }>
                </progress>) }
            </>
        );
    }
}

export default withPlayerProps(VolumeBar);
