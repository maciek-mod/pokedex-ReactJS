import React from 'react';
import PropTypes from 'prop-types';

const DetailsPokemon = (props) => {
    return(
        <div className="details_pokemon">
            <div className="item">
                <h2>Name</h2>
                <p>{props.capitalizeFirstLetter(props.name)}</p>
            </div>
            <div className="item">
                <h2>Number</h2>
                <p>{props.id}</p>
            </div>
            <div className="item">
                <h2>Weight</h2>
                <p>{props.numberWithCommas(props.weight)} kg</p>
            </div>
            <div className="item">
                <h2>Type</h2>
                <div className="type">
                    {props.types.map( (item, key) => {
                            return <p key={key}>{props.capitalizeFirstLetter(item.type.name)}</p>;
                    })}
                </div>
            </div>
            <div className="item">
                <h2>Abilities</h2>
                <div className="abilities">
                    {props.abilities.map( (item, key) => {
                            return <p key={key}>{props.capitalizeFirstLetter(item.ability.name)}</p>;
                    })}
                </div>
            </div>
            <div className="item">
                <h2>Sprites</h2>
                <div className="sprites">
                    <h3>Normal</h3>
                    {props.sprites.back_default && <img src={props.sprites.back_default} title={props.name} alt={props.name}/>}
                    {props.sprites.front_default && <img src={props.sprites.front_default} title={props.name} alt={props.name}/>}
                </div>
                <div className="sprites">
                    <h3>Shiny</h3>
                    {props.sprites.back_shiny && <img src={props.sprites.back_shiny} title={props.name} alt={props.name}/>}
                    {props.sprites.front_shiny && <img src={props.sprites.front_shiny} title={props.name} alt={props.name}/>}
                </div>
            </div>
            <div className="item">
                <h2>Moves</h2>
                <div className="attact">
                    {props.moves.map( (item, key) => {
                        return <p key={key}>{props.capitalizeFirstLetter(item.move.name)}</p>;
                    })}
                </div>
            </div>
        </div>
    )
}

DetailsPokemon.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  weight: PropTypes.number,
  id: PropTypes.number.isRequired,
  abilities: PropTypes.array.isRequired,
  moves: PropTypes.array.isRequired,
  sprites: PropTypes.object.isRequired,
  capitalizeFirstLetter: PropTypes.func.isRequired,
  numberWithCommas: PropTypes.func.isRequired

};

export default DetailsPokemon;
