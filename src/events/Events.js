import React from 'react';
import EventItem from './eventsItem';
import EventFilter from './eventsFilter';
import Loading from '../common/loading';
import ErrorItem from '../common/errorConnect';
import {connect} from 'react-redux';
import * as actions from '../actions/events';

class Events extends React.Component {

    componentDidMount() {
        this.props.getEvents();
        document.getElementsByTagName('body')[0].className = 'page-list';
    }

    componentWillUnmount() {
        document.getElementsByTagName('body')[0].className = '';
        this.props.eventsStore.toggleClass = false;
    }
    onFindPokemon(event) {
        event.preventDefault();
        const value = event.currentTarget.value;
        this.props.filterEvents(value);
    }
    onShowDetails(event) {
        event.preventDefault();
        console.log(event.currentTarget.getAttribute("data-id"));
        // this.setState({
        //     filter: value
        // });
    }
    capitalizeFirstLetter(string) {
        var capitalizeString = string.charAt(0).toUpperCase() + string.slice(1);
        if (/-/g.test(capitalizeString)) {
            capitalizeString = capitalizeString.replace(/-/g, ' ');
        }
        if (/-/g.test(capitalizeString)) {
            capitalizeString = capitalizeString.replace(/-/g, ' ');
        }
        return capitalizeString;
    }

    toggleClass() {
        if (this.props.eventsStore.toggleClass === true) {
            this.props.eventsStore.toggleClass = false;
        } else {
            this.props.eventsStore.toggleClass = true;
        }
        this.forceUpdate();
    }

    render() {
        return (
            <Loading isLoading={this.props.eventsStore.isLoading}>
                <div className={"pokemon_list_container" + " " + (this.props.eventsStore.toggleClass? 'slide_down': '')}>
                    <div className={"search_pokemon" + " " + (
                            this.props.eventsStore.toggleClass
                            ? ''
                            : 'hidden')}>
                        <EventFilter onFindPokemon={this.onFindPokemon.bind(this)} filter={this.props.eventsStore.filter}/>
                        <div className="search_pokemon_inner">
                            <div className="pokeball_icon">
                                <img src="/img/pokeball.png" alt="pokebal"/>
                            </div>
                            <h1>POKEDEX</h1>
                            <div onClick={this.toggleClass.bind(this)} className="search_icon"></div>
                        </div>
                    </div>
                    <ul className="pokemon_list">
                        {
                            this.props.eventsStore.data.map(item => {
                                if (item.pokemon_species.name.indexOf(this.props.eventsStore.filter.toLowerCase()) > -1) {
                                    return <EventItem onShowDetails={this.onShowDetails.bind(this)} capitalizeFirstLetter={this.capitalizeFirstLetter.bind(this)} item={item} key={item.entry_number}/>
                                }
                                return null;
                            })
                        }
                    </ul>
                </div>
                {/* <ErrorItem isError={this.props.eventsStore.isError}/> */}
            </Loading>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterEvents: (filter) => dispatch(actions.filterEvents(filter)),
        getEvents: () => dispatch(actions.getEvents())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
