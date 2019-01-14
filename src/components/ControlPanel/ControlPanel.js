import React, { Component } from "react";
import ButtonPlayPause from "../ButtonPlayPause/ButtonPlayPause";
import ButtonStop from "../ButtonStop/ButtonStop";
import ProgressBar from "../ProgressBar/ProgressBar";
import VolumeBar from "../VolumeBar/VolumeBar";
import ButtonFullScreen from "../ButtonFullScreen/ButtonFullScreen";
import { withPlayerProps } from "../HOC/withPlayerProps"
import "./style.css"
import Timer from "../Timer/Timer";

class ControlPanel extends Component {
    
    render() {
        
        return (
            <div className = "control-panel player__control-panel">
                <ButtonPlayPause />
                <ButtonStop />
                <ProgressBar />
                <Timer />
                <VolumeBar />
                <ButtonFullScreen />
            </div>
        );
    };
}

export default withPlayerProps(ControlPanel);


