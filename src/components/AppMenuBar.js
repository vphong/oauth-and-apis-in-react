import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem } from 'material-ui/List';


class AppMenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer() {
    this.setState({drawerOpen: !this.state.drawerOpen})
  }

  render() {

    return(
      <div>
        <AppBar title="Playing with React, Redux, OAuth, and APIs"
          onLeftIconButtonClick={() => this.toggleDrawer()}
        />
        <Drawer docked={false} open={this.state.drawerOpen} onClose={() => this.toggleDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer()}
          >
            <List>
              <ListItem button primaryText="NASA APOD"/>
              <ListItem button primaryText="reddit"/>
            </List>
          </div>
        </Drawer>

      </div>
    )

  }

}

export default AppMenuBar;
