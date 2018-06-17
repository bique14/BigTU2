import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Image, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './css/App.css';
import AppReview from './AppReview.js';
import AppKid from './AppKid.js';
import AppParent from './AppParent.js';
import { Header } from './component/Header.js';
import SansiriLogo from './logo/sansiri.jpg';
import BodyA from './component/BodyA'
import BodyB from './component/BodyB'
import BodyC from './component/BodyC'

class App extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  constructor(props) {
    super(props);
  }
  render() {
    const childProps = {};
    const { activeItem } = this.state;
    return (
      <div className="bodyColor">
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
              as={Link}
              to="/"
              name="Home"
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/overview"
              name="Overview"
              active={activeItem === 'Overview'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>

        <div className="paddingDiv">
          <Image src={SansiriLogo} size="small" centered={true} />
        </div>
        <Switch>
          <Route path="/overview" component={AppReview} props={childProps} />
          <Route path="/kid" component={AppKid} props={childProps} />
          <Route path="/parent" component={AppParent} props={childProps} />

          <Route path="/BodyA" component={BodyA} />
          <Route path="/BodyB" component={BodyB} />
          <Route path="/BodyC" component={BodyC} />
          <Route path="/kid" component={AppKid} />
          <Route path="/parent" component={AppParent} />
          <Route path="/" component={Header} props={childProps} />
        </Switch>
      </div>
    );
  }
}

export default App;
