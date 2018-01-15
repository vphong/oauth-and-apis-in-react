import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import ItemList from './components/ItemList'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(

  <MuiThemeProvider>
    <AppBar title="Playing with React, Redux, OAuth, and APIs"/>
    <div>
    <Paper zDepth={1}>
      <Provider store={store}>
        <ItemList />
      </Provider>
    </Paper>
    </div>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
