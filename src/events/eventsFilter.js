import React from 'react';
import PropTypes from 'prop-types';


const EvenFilter = (props) => {
    return(
        <form>
            <input type="text" onChange={props.onFindPokemon} placeholder="find..." value={props.filter}></input>
        </form>
    );
};

EvenFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFindPokemon: PropTypes.func.isRequired

};

export default EvenFilter;
