import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Icon, Card, Image } from 'semantic-ui-react';
import { Review } from './component/Review.js';

class AppReview extends Component {
  render() {
    return (
      <div>
        <Review />
      </div>
    );
  }
}
export default AppReview;
