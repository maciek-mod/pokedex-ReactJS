import React from 'react';
import fetch from 'isomorphic-fetch';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []

    };
  }

  componentDidMount() {
      fetch('http://frontendinsights.com/events.json')
          .then(response => response.json())
          .then(data => {
              this.setState({
                  events: data,
                  isLoading: false
              });
              console.log(data);
          });
  }


  render() {
    return (
      <div>
        <p>test2</p>
      </div>
    );
  }
};

export default Events;
