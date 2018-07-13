import React from 'react';

const EventItem = (props) => {
    return(
        <li >
            <strong>{props.item.entry_number}</strong> {props.item.pokemon_species.name}
        </li>
    );
};

export default EventItem;
