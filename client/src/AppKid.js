import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Icon, Card, Image, Table } from 'semantic-ui-react';
import { KidOverview } from './component/KidOverview.js';

class AppKid extends Component {
  render() {
    return (
      <div>
        <KidOverview />
      </div>
    );
  }
}
export default AppKid;
