import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import config from '../config.json'

var url = "https://api.nasa.gov/planetary/apod?api_key=" + config.NASA_API_KEY;

class ItemList extends Component {

  componentDidMount() {
    console.log("Fetching " + url);
    this.props.fetchData(url);
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items.</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <ul>{this.props.items.map((item) => (
        <li key={item.id}>
          item.label
        </li>
      ))}
      </ul>
    );
  }
}

// map Redux's state to props
const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

// map dispatches to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
