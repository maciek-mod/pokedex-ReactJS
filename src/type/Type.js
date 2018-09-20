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
        if (this.props.typeStore.urlId !== null &&  this.props.typeStore.urlId !== this.props.match.params.typetId) {
            this.props.typeStore.urlId = null;
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

    getNumberType(numberPokemon){
        var getNumber = numberPokemon;
            getNumber = getNumber.match(/\/\d+/)[0].replace(/\//g, '');
        return getNumber;
    }

    render() {
        if (this.props.typeStore.isLoading === false && this.props.typeStore.isError === false){
            if (this.props.typeStore.urlId === null) {
                this.props.typeStore.urlId = this.props.match.params.typetId;
            }
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
                        actualyId={this.props.match.params.typetId}
                        getNumberType={this.getNumberType.bind(this)}
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
