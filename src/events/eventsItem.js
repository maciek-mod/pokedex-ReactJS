import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const EventItem = (props) => {
    return(
        <li>
            {/* <a onClick={props.onShowDetails} data-id={props.item.entry_number}><strong>{props.item.entry_number}</strong> {props.item.pokemon_species.name}</a> <br/> */}
            <Link to={"/details/" + props.item.entry_number}><strong>{props.item.entry_number}</strong> {props.capitalizeFirstLetter(props.item.pokemon_species.name)}</Link>

        </li>
    );
};

EventItem.propTypes = {
    onShowDetails: PropTypes.func.isRequired
};

export default EventItem;
