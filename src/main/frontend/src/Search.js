import React, { Component } from "react";
import {connect} from 'react-redux';
import SearchItem from './SearchItem';
import ReactSearchBox from 'react-search-box';

class Search extends Component {
    state = {
        searchOptions: [{value: "apple"}, {value: "orange"}, {value: "banana"}, {value: "grape"}],
        searchQuery: "",
        temp: null
    };

    getQueryResults = () => {
        let obj = {}
        fetch("/getQueryResults", {
                method: 'POST',
                body: {
                    searchQuery: this.state.searchQuery
                }
            }
        ).then(res => res.json()
        ).then(data => {
                this.props.setSearchResults(data);
            }
        )
    }

    getSearchSuggestions = () => {
        let obj = {}
        fetch( "/getSearchSuggestions", {
            method: 'POST',
            body: {
                searchQuery: this.state.searchQuery
            }
        }
        ).then(res => res.json()
        ).then(data => {
            this.setState({searchOptions: data})
        })
    }

    handleSearchQueryChange = (event) => {
        this.setState({searchQuery: event})
        this.getSearchSuggestions()
    }

    render() {
        return (
            <div>
                <ReactSearchBox placeholder="Search for food, cuisines, yuppppppppppppp" data={this.state.searchOptions} value="Test" onChange={value => this.handleSearchQueryChange(value)} name="SearchBar"/>
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