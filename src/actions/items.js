
//////////////////
// STATE ACTIONS
//////////////////

export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}


//////////////////
// STATE FUNCTIONS, using Thunk
//////////////////

export function errorAfterFiveSeconds() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(itemsHasErrored(true));
    }, 5000);
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        // parse the initial abstract response

        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      // json-ify the actual API data in the response
      .then((response) => response.json())
      // use the data
      .then((data) => {
        console.log(data);
        dispatch(itemsFetchDataSuccess(data));
        dispatch(itemsHasErrored(false));
      })
      .catch(dispatch(itemsHasErrored(true)));
  };
}
