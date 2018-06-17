import React from 'react';
import { Tab, Button } from 'semantic-ui-react';
import '../css/Header.css';
import BodyA from './BodyA.js';
import BodyB from './BodyB.js';
import BodyC from './BodyC.js';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      countData: 0,
      bodyA: '',
      bodyB: '',
      bodyC: ''
    };
  }

  // getState = state => {
  //   this.setState(prevState => {
  //     prevState, state
  //   });
  // };

  getStateFormA = state => {
    // console.log(state)
    this.setState(
      {
        bodyA: state
      },
      () => {
        console.log(this.state);
      }
    );
  };

  getStateFormB = state => {
    this.setState(
      {
        bodyB: state
      },
      () => {
        console.log(this.state);
      }
    );
  };

  getStateFormC = state => {
    this.setState(
      {
        bodyC: state
      },
      () => {
        console.log(this.state);
      }
    );
  };

  getDataCount = count => {
    // console.log(typeof count)
    console.log(count);
    this.setState(
      {
        countData: count
      },
      () => {
        console.log('count', this.state.countData);
      }
    );
  };

  handleRangeChange = value => this.setState({ activeIndex: value });
  handleTabChange = ({ activeIndex }) => this.setState({ activeIndex });

  render() {
    const panes = [
      {
        menuItem: 'Step1',
        render: () => (
          <Tab.Pane>
            <BodyA
              getStateFormA={this.getStateFormA}
              content="Tab 2"
              onClick={this.handleRangeChange}
              value={1}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Step2',
        render: () => (
          <Tab.Pane>
            <BodyB
              getStateFormB={this.getStateFormB}
              getDataCount={this.getDataCount}
              content="Tab 3"
              onClick={this.handleRangeChange}
              value={2}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Step3',
        render: () => (
          <Tab.Pane>
            <BodyC
              getStateFormC={this.getStateFormC}
              countData={this.state.countData}
              content="Tab 1"
              onClick={this.handleRangeChange}
              value={0}
              allData={this.state}
            />
          </Tab.Pane>
        )
      }
    ];
    return (
      <div>
        <div className="div-card">
          <Tab
            panes={panes}
            getStateFormA={this.getStateFormA}
            activeIndex={this.state.activeIndex}
            onTabChange={this.handleTabChange}
          />
        </div>
      </div>
    );
  }
}
