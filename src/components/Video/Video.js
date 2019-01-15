import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withPlayerProps } from "../HOC/withPlayerProps";

export class Video extends PureComponent {
    
    static propTypes = {
        videoList: PropTypes.array.isRequired,
    };
    
    _handleOnVideoEnded = () => {
        const { _changeStateIsVideoPlaying } = this.props;
        this.props.innerRef.current.pause();
        this.props.innerRef.current.currentTime = 0;
        _changeStateIsVideoPlaying( false );
    };
    
    _handleOnTimeUpdate = () => {
        const { _changeStateCurrentProgress, _changeStateCurrentTime, innerRef } = this.props;
        const video = innerRef.current;
        const progress = video.currentTime * 100 / video.duration;
        
        _changeStateCurrentProgress( progress );
        _changeStateCurrentTime( video.currentTime );
    };
    
    _handleOnVideoClick = () => {
        const { _changeStateIsVideoPlaying, _changeStateIsVideoOnPause } = this.props;
        const video = this.props.innerRef.current;
        if ( video.paused ) {
            video.play();
            _changeStateIsVideoOnPause( false );
            _changeStateIsVideoPlaying( true );
        } else {
            video.pause();
            _changeStateIsVideoOnPause( true );
            _changeStateIsVideoPlaying( false );
        }
    };
    
    get source() {
        const { videoList } = this.props;
        return (
            videoList.map( ( video ) => {
                return (
                    <source src={ video.src } type={ video.type } key={ video.id }/>
                );
            } )
        );
    };
    
    render() {
        return (
            <video
                className = "video"
                onEnded = { this._handleOnVideoEnded }
                onClick = { this._handleOnVideoClick }
                onTimeUpdate = { this._handleOnTimeUpdate }
                ref = { this.props.innerRef }
                width = "600px">
                { this.source }
                Video not supported.
            </video>
        );
    }
}

const VideoWithProps = withPlayerProps( Video );
export default React.forwardRef( ( props, ref ) => <VideoWithProps innerRef={ ref } { ...props } /> );

