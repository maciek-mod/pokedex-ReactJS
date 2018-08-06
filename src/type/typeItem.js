import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const TypePokemon = (props) => {
    return (
        <div>
            <div>type {props.name}</div>
            <div className="damage_relations">
                {Object.keys(props.damage_relations).map( (item, key) => {
                    return (
                        <div key={key}>{item}
                            {
                                Object.keys(props.damage_relations[item]).map( (el, i) => {
                                    return (
                                        <Link key={i} to={"/type" + props.damage_relations[item][i].url.match(/\/\d+/)}><p>{props.damage_relations[item][i].name}</p></Link>
                                    );
                                })
                            }
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>Pokemon</h2>
                <ul>
                    {
                        props.pokemon_type.map((item, key) => {
                            return (
                                <li key={key}>
                                    <Link to={"/details" + item.pokemon.url.match(/\/\d+/)}><p>{item.pokemon.name}</p></Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}


TypePokemon.propTypes = {
  name: PropTypes.string.isRequired,
  damage_relations: PropTypes.object.isRequired,
  pokemon_type: PropTypes.array.isRequired
  // weight: PropTypes.number,
  // id: PropTypes.number.isRequired,
  // abilities: PropTypes.array.isRequired,
  // moves: PropTypes.array.isRequired,
  // stats: PropTypes.array.isRequired,
  // sprites: PropTypes.object.isRequired,
  // capitalizeFirstLetter: PropTypes.func.isRequired,
  // numberWithCommas: PropTypes.func.isRequired

};

export default TypePokemon;
