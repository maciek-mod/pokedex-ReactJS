import React from 'react';

const Loading = (props) => {
    if (props.isLoading) {
        return <p>loading .....</p>;
    } else {
        return props.children;
    }
};


export default Loading;
