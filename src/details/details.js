import React from 'react';
import fetch from 'isomorphic-fetch';
import DetailsPokemon from './detailsItem';


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
            console.log(abilities);
            return (
                <DetailsPokemon
                    name={name}
                    weight={weight}
                    abilities={abilities}
                    types={types}
                    sprites={sprites}
                />)
        } else {
            return (<p>Loading</p>);
        }

    }
}

export default Details;
