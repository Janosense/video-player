import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withPlayerProps } from "../HOC/withPlayerProps";

class Video extends PureComponent {

    static propTypes = {
        videoList: PropTypes.array.isRequired,
    };
    
    _handleOnVideoEnded = () => {
        const { _changeStateIsVideoPlaying } = this.props;
        this.props.innerRef.current.pause();
        this.props.innerRef.current.currentTime = 0;
        _changeStateIsVideoPlaying(false);
    };
    
    _handleOnTimeUpdate = () => {
        const { _handleOnTimeUpdateParent } = this.props;
        const video = this.props.innerRef.current;
        const progress = video.currentTime * 100 / video.duration;
        
        _handleOnTimeUpdateParent(progress);
    };
    
    _handleOnVideoClick = () => {
        const { _changeStateIsVideoPlaying, _changeStateIsVideoOnPause } = this.props;
        const video = this.props.innerRef.current;
        if (video.paused) {
            video.play();
            _changeStateIsVideoOnPause(false);
            _changeStateIsVideoPlaying(true);
        } else {
            video.pause();
            _changeStateIsVideoOnPause(true);
            _changeStateIsVideoPlaying(false);
        }
    };

    get source() {
        const { videoList } = this.props;
        return (
            videoList.map((video) => {
                return (
                    <source src = {video.src} type = {video.type} key = {video.id} />
                );
            })
        );
    };

    render() {
//        console.log("render Video", this.props);
        return (
            <video
                className = "video"
                ref = {this.props.innerRef}
                onEnded = { this._handleOnVideoEnded }
                onClick = { this._handleOnVideoClick }
                onTimeUpdate = { this._handleOnTimeUpdate }
                width = "600px" >
                { this.source }
                Video not supported.
            </video>
        );
    }
}

const VideoWithProps = withPlayerProps(Video);
export default React.forwardRef((props, ref) => <VideoWithProps innerRef = { ref } { ...props } />);

