import React from 'react';
import EventItem from './eventsItem';
import EventFilter from './eventsFilter';
import Loading from '../common/loading';
import ErrorItem from '../common/errorConnect';
import { connect } from 'react-redux';
import * as actions from '../actions/events';


class Events extends React.Component {

    componentDidMount() {
        this.props.getEvents();
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
            <EventFilter onFindPokemon={this.onFindPokemon.bind(this)} filter={this.props.eventsStore.filter} />
            <Loading isLoading={this.props.eventsStore.isLoading}>
                <ul>
                    {this.props.eventsStore.data.map(item => {
                        if (item.pokemon_species.name.indexOf(this.props.eventsStore.filter) > -1) {
                            return <EventItem onShowDetails={this.onShowDetails.bind(this) } item={item} key={item.entry_number} />
                        }
                        return null;
                    })}
                </ul>
            </Loading>
            <ErrorItem isError={this.props.isError} />
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
        filterEvents: (filter) => dispatch(actions.filterEvents(filter)),
        getEvents: () => dispatch(actions.getEvents())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
