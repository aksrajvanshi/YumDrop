import React, { Component } from "react";
import {connect} from 'react-redux';
import SearchItem from './SearchItem';
import ReactSearchBox from 'react-search-box';

class Search extends Component {
    state = {
        searchQuery: "",
        searchOptions: [],
    };

    getQueryResults = () => {
        let obj = {}
        fetch("/getQueryResults", {
                method: 'POST',
                body: JSON.stringify({
                    searchQuery: this.state.searchQuery
                } )
            }
        ).then(res => res.json()
        ).then(data => {
                console.log(data);
                this.props.setSearchResults([]);
                this.props.setSearchResults(data);
            }
        )
    }

    getSearchSuggestions = (event) => {
        let obj = {}
        fetch( "/getSearchSuggestions", {
            method: 'POST',
            body: JSON.stringify({
                    searchQuery: event
                })
        }
        ).then(res => res.json()
        ).then(data => {
            console.log(data)
            this.setState({searchOptions: data});
        })
    }

    handleSearchQueryChange = (event) => {
        this.setState({searchQuery: event})
        this.getSearchSuggestions(event)
    }

    render() {
        return (
            <div>
                <ReactSearchBox placeholder="Search for restaurants here..." data={this.state.searchOptions} onChange={value => this.handleSearchQueryChange(value)} name="SearchBar"/>
                <button className="btn btn-lg btn-danger" onClick={this.getQueryResults}>Search</button>
                <div className="container-fluid">
                    {this.props.searchResults.map(restaurant => (
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-2">
                                <SearchItem restaurantImage={restaurant.restaurantImage}
                                            restaurantName={restaurant.restaurantName}
                                            restaurantTags={restaurant.restaurantTags}/>
                            </div>
                        </div>))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchResults(evt){
            dispatch({type: "setSearchResults", newSearchResults: evt})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Search);