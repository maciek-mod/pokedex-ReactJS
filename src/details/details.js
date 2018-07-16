import React from 'react';
import fetch from 'isomorphic-fetch';
import * as constants from '../constants';

console.log(constants.LIST_NAME);

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {},
            isLoadingDetails: true
        };
    }
    getIdEvent() {
        const id = this.props.match.params.eventId;
        // const event = events.find(item => item.id === parseInt(id, 10));
        return id;
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/' + this.getIdEvent() + '/').then(response => response.json()).then(data => {
            this.setState({pokemon: data, isLoadingDetails: false});
        });
    }

    render() {
        const {abilities, name, sprites, weight, types} = this.state.pokemon;
        if (this.state.isLoadingDetails !== true) {
            console.log(sprites);
            return (<div>
                <p>{name}</p>
                <p>{weight}</p>

                {types.map( (item, key) => {
                        return <p key={key}>{item.type.name}</p>;
                })}

                {sprites.back_default && <img src={sprites.back_default} title={name} alt={name}/>}
                {sprites.front_default && <img src={sprites.front_default} title={name} alt={name}/>}

                {sprites.back_shiny && <img src={sprites.back_shiny} title={name} alt={name}/>}
                {sprites.front_shiny && <img src={sprites.front_shiny} title={name} alt={name}/>}

            </div>)
        } else {
            return (<p>Loading</p>);
        }

    }
}

export default Details;
