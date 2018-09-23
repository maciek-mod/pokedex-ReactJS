import React from 'react';

const Loading = (props) => {
    if (props.isLoading === true && props.isError === false) {
        return (
            <div className="loading_container">
                <div className="pokeball">
                    <div className="pokeball__button"></div>
                </div>
            </div>
        );
    } else if(props.isLoading === false && props.isError === false) {
        return props.children;
    } else if (props.isLoading === false && props.isError === true) {
        return (
            <div className="loading_container">
                <h1> error, please try again later </h1>
            </div>
        );
    }

};


export default Loading;
