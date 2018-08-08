import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/type';
import TypePokemon from './typeItem';

class Type extends React.Component {

    getIdEvent() {
        const id = this.props.match.params.typetId;
        return id;
    }

    componentDidMount() {
        const idType = this.getIdEvent();
        this.props.getType(idType);
        document.getElementsByTagName('body')[0].className = 'page-type';
    }


    componentDidUpdate(){
        if (this.props.typeStore.urlChange > 0) {
            this.props.typeStore.urlChange = 0;
            const idType = this.getIdEvent();
            this.props.getType(idType);
        }
    }
    capitalizeFirstLetter(string) {
        var capitalizeString = string.charAt(0).toUpperCase() + string.slice(1);
        if (/_/g.test(capitalizeString)) {
            capitalizeString = capitalizeString.replace(/_/g, ' ');
        }
        if (/-/g.test(capitalizeString)) {
            capitalizeString = capitalizeString.replace(/-/g, ' ');
        }
        return capitalizeString;
    }

    goBack(){
        window.history.back();
    }

    getNumberPokemon(numberPokemon){
        var getNumber = numberPokemon;
            getNumber = getNumber.match(/\/\d+/)[0].replace(/\//g, '');
        if (getNumber < 10) {
            return "00"+ getNumber;
        } else if (getNumber < 100) {
            return "0"+ getNumber;
        } else{
            return getNumber;
        }
    }

    updateUrl(){
        this.props.typeStore.urlChange = this.props.typeStore.urlChange + 1;
    }


    render() {
        if (this.props.typeStore.isLoading === false){
            const {name, damage_relations, pokemon} = this.props.typeStore.typeList;
            return (
                <div>
                    <TypePokemon
                        name={name}
                        damage_relations={damage_relations}
                        pokemon_type={pokemon}
                        capitalizeFirstLetter={this.capitalizeFirstLetter.bind(this)}
                        goBack={this.goBack.bind(this)}
                        getNumberPokemon={this.getNumberPokemon.bind(this)}
                        updateUrl={this.updateUrl.bind(this)}
                    />
                </div>
            );

        } else {
            return (
                <div className="loading_container">
                    <div className="pokeball">
                        <div className="pokeball__button"></div>
                    </div>
                </div>
            );
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
        getType: (idType) => dispatch(actions.getType(idType))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Type);
