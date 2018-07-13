import React from 'react';
import PropTypes from 'prop-types';

const EventItem = (props) => {
    return(
        <li>
            <a onClick={props.onShowDetails} data-id={props.item.entry_number}><strong>{props.item.entry_number}</strong> {props.item.pokemon_species.name}</a>
        </li>
    );
};

EventItem.propTypes = {
    onShowDetails: PropTypes.func.isRequired 
};

export default EventItem;
