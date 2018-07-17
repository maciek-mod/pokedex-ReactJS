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
        fetch('https://pokeapi.co/api/v2/pokemon/' + this.getIdEvent() + '/')
        .then(response => response.json())
        .then(data => {
            this.setState({pokemon: data, isLoadingDetails: false});
        }).catch(function(error) {
            console.log(error);
        });
        document.getElementsByTagName('body')[0].className = 'page-details';
    }

    componentWillUnmount() {
        document.getElementsByTagName('body')[0].className = '';
    }

    capitalizeFirstLetter(string) {
        var capitalizeString = string.charAt(0).toUpperCase() + string.slice(1);
        if (/-/g.test(capitalizeString)) {
            capitalizeString = capitalizeString.replace(/-/g, ' ');
        }
        return capitalizeString;
    }
    numberWithCommas(number) {
        return number / 10;
    }

    render() {
        const {abilities, name, sprites, weight, types, moves} = this.state.pokemon;
        if (this.state.isLoadingDetails !== true) {
            return (
                <DetailsPokemon
                    name={name}
                    weight={weight}
                    abilities={abilities}
                    types={types}
                    sprites={sprites}
                    moves={moves}
                    capitalizeFirstLetter={this.capitalizeFirstLetter.bind(this)}
                    numberWithCommas={this.numberWithCommas.bind(this)}
                />)
        } else {
            return (<p>Loading</p>);
        }

    }
}

export default Details;
