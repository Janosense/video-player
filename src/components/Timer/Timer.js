import React, { Component } from "react";
import { withPlayerProps } from "../HOC/withPlayerProps";

class Timer extends Component {
    
    state = {
        currentTime: null
    };
    
    _getCurrentTimeFormatted = ( currentTime ) => {
        const minutes = Math.floor( currentTime / 60 );
        const seconds = Math.floor( currentTime - minutes * 60 );
        let minuteValue;
        let secondValue;
        
        if ( minutes < 10 ) {
            minuteValue = `0${ minutes }`;
        } else {
            minuteValue = minutes;
        }
        
        if ( seconds < 10 ) {
            secondValue = `0${seconds}`;
        } else {
            secondValue = seconds;
        }
        
        return `${ minuteValue }:${ secondValue }`;
        
    };
    
    static getDerivedStateFromProps( props, state ) {
        return {
            currentTime: props.currentTime,
        };
    };
    
    render() {
        return (
            <div style={ {
                color:       '#ffffff',
                marginRight: 10,
                fontSize:    14,
            } }>
                <span>{ this.state.currentTime ? this._getCurrentTimeFormatted( this.state.currentTime ) : '00:00' }</span>
            </div>
        );
    };
}

export default withPlayerProps( Timer );
