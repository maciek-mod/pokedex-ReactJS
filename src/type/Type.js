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
        return idType;
    }

    componentWillUnmount() {
        // document.getElementsByTagName('body')[0].className = '';
        // this.props.detailsStore.toggleMoves = false;
        // this.props.detailsStore.toggleSprite = false;
        // this.props.detailsStore.toggleAbilities = false;
        // this.props.detailsStore.toggleStats = false;

    }
    componentWillReceiveProps(){
        // if (firstId !== this.props.match.params.typetId) {
        //     console.log("inny LInk");
        // }
    }
    onUpdateType(){
        // window.location.reload();
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
                        update={this.onUpdateType.bind(this)}
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
