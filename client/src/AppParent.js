import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Icon, Card, Image } from 'semantic-ui-react';
import { ParentOverview } from './component/ParentOverview.js';

class AppParent extends Component {
  render() {
    return (
      <div>
        <ParentOverview />
      </div>
    );
  }
}
export default AppParent;
