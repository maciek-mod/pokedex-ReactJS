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
        this.props.detailsStore.toggleMoves = false;
        this.props.detailsStore.toggleSprite = false;
        this.props.detailsStore.toggleAbilities = false;

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

    toggleClass(class_name) {
        if (this.props.detailsStore[class_name] === true) {
            this.props.detailsStore[class_name] = false;
        } else {
            this.props.detailsStore[class_name] = true;
        }
        if (class_name === "toggleMoves") {
            this.props.detailsStore.toggleAbilities = false;
            this.props.detailsStore.toggleStats = false;
        }
        if (class_name === "toggleAbilities") {
            this.props.detailsStore.toggleMoves = false;
            this.props.detailsStore.toggleStats = false;
        }
        if (class_name === "toggleStats") {
            this.props.detailsStore.toggleMoves = false;
            this.props.detailsStore.toggleAbilities = false;
        }
        this.forceUpdate();
    }

    render() {
        if (this.props.detailsStore.isLoading === false) {
            const {abilities, name, sprites, weight, types, moves, id, height ,stats} = this.props.detailsStore.pokemon;
            const toggleClass = this.props.detailsStore;
            return (
                <div>
                    <DetailsPokemon
                        name={name}
                        id ={id}
                        height={height}
                        weight={weight}
                        abilities={abilities}
                        types={types}
                        sprites={sprites}
                        moves={moves}
                        stats={stats}
                        toggleClassNew={this.props.detailsStore}
                        capitalizeFirstLetter={this.capitalizeFirstLetter.bind(this)}
                        numberWithCommas={this.numberWithCommas.bind(this)}
                        toggleClass={this.toggleClass.bind(this)}
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
