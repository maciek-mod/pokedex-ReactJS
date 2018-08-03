import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const DetailsPokemon = (props) => {
    return(
        <div className="details_pokemon">
            <div className="details_pokemon_head">
                <Link to="/"><img src="/img/left-arrow.png" alt="arrow" /></Link>
                <h2>{props.capitalizeFirstLetter(props.name)}</h2>
            </div>
            <div className="sprites">
                <div className="normal">
                    {props.sprites.front_default && <img src={props.sprites.front_default} title={props.name} alt={props.name}/>}
                    {props.sprites.back_default && <img src={props.sprites.back_default} title={props.name} alt={props.name}/>}
                </div>
                {props.sprites.back_shiny && <button onClick={props.toggleClass.bind(this, "toggleSprite")}>{props.toggleClassNew.toggleSprite ? "show shiny form" : "hide shiny form"}</button>}
                <div className={"shiny" + " " + (props.toggleClassNew.toggleSprite ? "show" : "hide")}>
                    {props.sprites.front_shiny && <img src={props.sprites.front_shiny} title={props.name} alt={props.name}/>}
                    {props.sprites.back_shiny && <img src={props.sprites.back_shiny} title={props.name} alt={props.name}/>}
                </div>
            </div>
            <div className="details_pokemon_type">
                <h2>Type</h2>
                <div className="type">
                    {props.types.map( (item, key) => {
                            return <p key={key} className={item.type.name}>{props.capitalizeFirstLetter(item.type.name)}</p>;
                    })}
                </div>
            </div>
            <div className="details_pokemon_data">
                <div className="item">
                    <h2>{props.id}</h2>
                    <p>Number</p>
                </div>
                <div className="item">
                    <h2>{props.height/10 + " m"}</h2>
                    <p>height</p>
                </div>
                <div className="item">
                    <h2>{props.numberWithCommas(props.weight)} kg</h2>
                    <p>Weight</p>
                </div>
            </div>

            <div className="section_button">
                <div className="section_button_buttons">
                    <h2 className={(props.toggleClassNew.toggleAbilities ? "active" : "")} onClick={props.toggleClass.bind(this, "toggleAbilities")} >Abilities</h2>
                    <h2 className={(props.toggleClassNew.toggleStats ? "active" : "")} onClick={props.toggleClass.bind(this, "toggleStats")} >Stats</h2>
                    <h2 className={(props.toggleClassNew.toggleMoves ? "active" : "")} onClick={props.toggleClass.bind(this, "toggleMoves")} >Moves</h2>
                </div>
                <div className={"item abilities" + " " + (props.toggleClassNew.toggleAbilities ? "show" : "") }>
                    {props.abilities.map( (item, key) => {
                            return <p key={key}>{props.capitalizeFirstLetter(item.ability.name)}</p>;
                    })}
                </div>
                <div className={"item stats" + " " + (props.toggleClassNew.toggleStats ? "show" : "") }>
                    {props.stats.map( (item, key) => {
                            return (
                                <p key={key}>
                                    <strong>{item.base_stat}</strong> <br/>
                                    {props.capitalizeFirstLetter(item.stat.name)}
                                </p>
                            );
                    })}
                </div>
                <div className={"item moves" + " " + (props.toggleClassNew.toggleMoves ? "show" : "") }>
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
  stats: PropTypes.array.isRequired,
  sprites: PropTypes.object.isRequired,
  capitalizeFirstLetter: PropTypes.func.isRequired,
  numberWithCommas: PropTypes.func.isRequired

};

export default DetailsPokemon;
