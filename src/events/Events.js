import React from 'react';
import fetch from 'isomorphic-fetch';
import EventItem from './eventsItem';
import EventFilter from './eventsFilter';
import Loading from '../common/loading';
import { connect } from 'react-redux';
import * as actions from '../actions/events';


class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokedex/1/')
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data.pokemon_entries,
                isLoading: false
            });
        }).catch(function(error) {
            console.log(error);
        });
        document.getElementsByTagName('body')[0].className = 'page-list';
    }

    componentWillUnmount() {
        document.getElementsByTagName('body')[0].className = '';
    }
    onFindPokemon(event){
        event.preventDefault();
        const value = event.currentTarget.value;
        this.props.filterEvents(value);
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
            <EventFilter onFindPokemon={this.onFindPokemon.bind(this)} filter={this.props.filter} />
            <Loading isLoading={this.state.isLoading}>
                <ul>
                    {this.state.data.map(item => {
                        if (item.pokemon_species.name.indexOf(this.props.filter) > -1) {
                            return <EventItem onShowDetails={this.onShowDetails.bind(this) } item={item} key={item.entry_number} />
                        }
                        return null;
                    })}
                </ul>
            </Loading>
        </div>);
    }
};

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterEvents: (filter) => dispatch(actions.filterEvents(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
