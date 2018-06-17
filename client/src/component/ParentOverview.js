import React from 'react'
import _ from 'lodash'
import { Route } from 'react-router-dom';
import { Icon, Card, Image, Segment, Statistic, Table, Accordion, Input  } from 'semantic-ui-react'
import Kid from '../logo/kid.jpg'
import Parent from '../logo/parent.jpg'

const source = _.times(5, () => ({

}))

export class ParentOverview extends React.Component {
    state = { activeIndex: 1 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
    }

    componentWillMount() {
        this.resetComponent()
      }

      resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

      handleResultSelect = (e, { result }) => this.setState({ value: result.title })

      handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
          if (this.state.value.length < 1) return this.resetComponent()

          const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
          const isMatch = result => re.test(result.title)

          this.setState({
            isLoading: false,
            results: _.filter(source, isMatch),
          })
        }, 300)
      }

    render() {
        const { isLoading, value, results } = this.state
        const { activeIndex } = this.state
        return (
            <div>

            <Segment inverted>
              <Input inverted placeholder='Search...' />
            </Segment>


              <Table color='yellow' key='yellow'>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>ชื่อ-นามสกุล</Table.Cell>
                    <Table.Cell>จำนวนผู้ติดตาม</Table.Cell>
                    <Table.Cell>จำนวนบุตร</Table.Cell>
                    <Table.Cell>สัญชาติ</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>ชื่อ-นามสกุล</Table.Cell>
                    <Table.Cell>จำนวนผู้ติดตาม</Table.Cell>
                    <Table.Cell>จำนวนบุตร</Table.Cell>
                    <Table.Cell>สัญชาติ</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>ชื่อ-นามสกุล</Table.Cell>
                    <Table.Cell>จำนวนผู้ติดตาม</Table.Cell>
                    <Table.Cell>จำนวนบุตร</Table.Cell>
                    <Table.Cell>สัญชาติ</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

            </div>
        )
    }
}
