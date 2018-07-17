import React from 'react';
import PropTypes from 'prop-types';

const DetailsPokemon = (props) => {
    return(
        <div>
            <h2>Name</h2>
            <p>{props.name}</p>
            <h2>Weight</h2>
            <p>{props.weight}</p>
            <h2>Type</h2>
            {props.types.map( (item, key) => {
                    return <p key={key}>{item.type.name}</p>;
            })}
            <h2>Abilities</h2>
            {props.abilities.map( (item, key) => {
                    return <p key={key}>{item.ability.name}</p>;
            })}
            <h2>Sprites</h2>
            {props.sprites.back_default && <img src={props.sprites.back_default} title={props.name} alt={props.name}/>}
            {props.sprites.front_default && <img src={props.sprites.front_default} title={props.name} alt={props.name}/>}

            {props.sprites.back_shiny && <img src={props.sprites.back_shiny} title={props.name} alt={props.name}/>}
            {props.sprites.front_shiny && <img src={props.sprites.front_shiny} title={props.name} alt={props.name}/>}
        </div>
    )
}

DetailsPokemon.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  weight: PropTypes.number,
  abilities: PropTypes.array.isRequired,
  sprites: PropTypes.object.isRequired

};

export default DetailsPokemon;
