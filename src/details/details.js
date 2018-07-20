import React from 'react';
import DetailsPokemon from './detailsItem';
import { connect } from 'react-redux';
import * as actions from '../actions/details';

class Details extends React.Component {

    getIdEvent() {
        const id = this.props.match.params.eventId;
        return id;
    }



    componentDidMount() {
        // fetch('https://pokeapi.co/api/v2/pokemon/' + this.getIdEvent() + '/')
        // .then(response => response.json())
        // .then(data => {
        //     this.setState({pokemon: data, isLoadingDetails: false});
        // }).catch(function(error) {
        //     console.log(error);
        // });
        const idPokemon = this.getIdEvent();
        this.props.getDetails(idPokemon);
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
        if (this.props.detailsStore.isLoading === false) {
            const {abilities, name, sprites, weight, types, moves, id} = this.props.detailsStore.pokemon;
            return (
                <div>
                    <DetailsPokemon
                        name={name}
                        id ={id}
                        weight={weight}
                        abilities={abilities}
                        types={types}
                        sprites={sprites}
                        moves={moves}
                        capitalizeFirstLetter={this.capitalizeFirstLetter.bind(this)}
                        numberWithCommas={this.numberWithCommas.bind(this)}
                    />
                </div>
            )
        } else {
            return (<p>Loading</p>);
        }
    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetails: (idPokemon) => dispatch(actions.getDetails(idPokemon))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
