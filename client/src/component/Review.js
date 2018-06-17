import React from 'react'
import { Route } from 'react-router-dom';
import { Icon, Card, Image, Segment, Statistic } from 'semantic-ui-react'
import Kid from '../logo/kid.jpg'
import Parent from '../logo/parent.jpg'

export class Review extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            formA: ''
        }
    }

    render() {
        return (
            <div>
              <Card centered={true}>
                <Image src={ Kid } />
                <Card.Content>
                  <Card.Header>ข้อมูลเด็ก</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    10 children
                  </a>
                </Card.Content>
              </Card>

              <Card centered={true}>
                <Image src={ Parent } />
                <Card.Content>
                  <Card.Header>ข้อมูลผู้ปกครอง</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    10 people
                  </a>
                </Card.Content>
              </Card>
              <Segment color='yellow'>
              <Statistic.Group>
                  <Statistic>
                    <Statistic.Value>22</Statistic.Value>
                    <Statistic.Label>Saves</Statistic.Label>
                  </Statistic>

                  <Statistic>
                    <Statistic.Value text>
                      Three<br />
                      Thousand
                    </Statistic.Value>
                    <Statistic.Label>Signups</Statistic.Label>
                  </Statistic>

                  <Statistic>
                    <Statistic.Value>
                      <Icon name='globe' />
                      5
                    </Statistic.Value>
                    <Statistic.Label>Nationalities</Statistic.Label>
                  </Statistic>

                  <Statistic>
                    <Statistic.Value>
                      <Image src={Parent} inline circular />
                      42
                    </Statistic.Value>
                    <Statistic.Label>Families</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </Segment>
            </div>
        )
    }
}