import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

const withPlayerProps = ( Enhanceable ) => {
    return class WithProfile extends Component {
        
        render() {
            return (
                <Consumer>
                    { ( context ) => (
                        <Enhanceable
                            innerRef = { this.props.innerRef }
                            { ...context }
                            { ...this.props }
                        />
                    ) }
                </Consumer>
            );
        }
    };
};

export { Provider, Consumer, withPlayerProps };
