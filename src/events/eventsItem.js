import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const EventItem = (props) => {
    var number = props.item.entry_number;
    if (props.item.entry_number < 10) {
        number = "00" + props.item.entry_number;
    } else if(props.item.entry_number < 100 && props.item.entry_number >= 10 ){
        number = "0" + props.item.entry_number;
    }
    return(
        <li>
            {/* <a onClick={props.onShowDetails} data-id={props.item.entry_number}><strong>{props.item.entry_number}</strong> {props.item.pokemon_species.name}</a> <br/> */}
            <Link to={"/details/" + props.item.entry_number}><span>{number}</span> {props.capitalizeFirstLetter(props.item.pokemon_species.name)}</Link>

        </li>
    );
};

EventItem.propTypes = {
    onShowDetails: PropTypes.func.isRequired
};

export default EventItem;
