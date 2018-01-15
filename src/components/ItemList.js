import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import config from '../config.json'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


var url = "https://api.nasa.gov/planetary/apod?api_key=" + config.NASA_API_KEY;

class ItemList extends Component {

  componentDidMount() {
    console.log("Fetching " + url)
    this.props.fetchData(url);
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items.</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    var data = this.props.items;

    return (
      <Card>
        <CardMedia overlay={<CardTitle title={data.title} subtitle={data.copyright} />}>
          <img src={data.url} alt=""/>
        </CardMedia>
        <CardText>{data.explanation}</CardText>
      </Card>
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
