import React from 'react';
import fetch from 'isomorphic-fetch';
import EventItem from './eventsItem';
import EventFilter from './eventsFilter';


class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter: ''
        };
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokedex/1/')
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data.pokemon_entries
            });
            console.log(data.pokemon_entries);
        });
    }

    onFindPokemon(event){
        event.preventDefault();
        const value = event.currentTarget.value;
        this.setState({
            filter: value
        });
    }
    onShowDetails(event){
        event.preventDefault();
        console.log(event.currentTarget.getAttribute("data-id"));
        // this.setState({
        //     filter: value
        // });
    }

    render() {
        return (<div>
            <EventFilter onFindPokemon={this.onFindPokemon.bind(this)} filter={this.state.filter} />
            <ul>
                {this.state.data.map(item => {
                    if (item.pokemon_species.name.indexOf(this.state.filter) > -1) {
                        return <EventItem onShowDetails={this.onShowDetails.bind(this) } item={item} key={item.entry_number} />
                    }
                    return null;
                })}
            </ul>
        </div>);
    }
};

export default Events;
