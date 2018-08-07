import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TypePokemon = (props) => {
    return (
        <div>
            <div className="title_pokemon_head">
                <a onClick={props.goBack}><img src="/img/left-arrow.png" alt="arrow" /></a>
                <h2>type {props.name}</h2>
            </div>

            <div className="damage_relations">
                {Object.keys(props.damage_relations).map( (item, key) => {
                    return (
                        <div className="type" key={key}><h2>{props.capitalizeFirstLetter(item)}</h2>
                            {
                                Object.keys(props.damage_relations[item]).map( (el, i) => {
                                    return (
                                        <a key={i} href={"/type" + props.damage_relations[item][i].url.match(/\/\d+/)}><p className={props.damage_relations[item][i].name}>{props.damage_relations[item][i].name}</p></a>
                                    );
                                })
                            }
                        </div>
                    )
                })}
            </div>
            <div className="pokemon-list-type">
                <h2>Pokemon type {props.name}</h2>
                <ul>
                    {
                        props.pokemon_type.map((item, key) => {
                            return (
                                <li key={key}>
                                    <Link to={"/details" + item.pokemon.url.match(/\/\d+/)}><span>{props.getNumberPokemon(item.pokemon.url)}</span><p>{props.capitalizeFirstLetter(item.pokemon.name)}</p></Link>
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
  pokemon_type: PropTypes.array.isRequired,
  capitalizeFirstLetter: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  getNumberPokemon: PropTypes.func.isRequired

};

export default TypePokemon;
