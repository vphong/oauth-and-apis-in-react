import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import AppMenuBar from './components/AppMenuBar'
import ItemList from './components/ItemList'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(

  <MuiThemeProvider>
      <AppMenuBar/>
      <div>
        <Provider store={store}>
      <Paper zDepth={1}>
          <ItemList />
      </Paper>
    </Provider>
      </div>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
