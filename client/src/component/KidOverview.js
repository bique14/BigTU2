import React from 'react';
import _ from 'lodash';
import { Route } from 'react-router-dom';
import {
  Icon,
  Card,
  Image,
  Segment,
  Statistic,
  Table,
  Accordion,
  Input,
  Divider
} from 'semantic-ui-react';
import Kid from '../logo/kid.jpg';
import Parent from '../logo/parent.jpg';

const source = _.times(5, () => ({}));

export class KidOverview extends React.Component {
  state = { activeIndex: 1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    const { activeIndex } = this.state;
    let i = 0;
    return (
      <div>
        <Segment inverted>
          <Input inverted placeholder="Search..." />
        </Segment>

        <Table color="yellow" key="yellow">
          <Table.Body>
            <Table.Row>
              <Table.Cell>เด็กหญิงนิตา หม่าล่า</Table.Cell>
              <Table.Cell>นายสุกี้ แสงสีเสียง</Table.Cell>
              <Table.Cell>เรียนอยู่ Good Space หรือไม่: เรียน</Table.Cell>
              <Table.Cell>กำลังศึกษาอยู่โรงเรียน: หนองตาบัวไผ่</Table.Cell>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === i}
                  index={i}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  ประวัติการรับวัคซีน
                </Accordion.Title>
                <Accordion.Content active={activeIndex === i++} >
                  <p style={{ paddingLeft: '20px' }}>ชื่อวัคซีน : BCG, HB1</p>
                  <p style={{ paddingLeft: '20px' }}>วันนัด : 12 สิงหาคม 2559</p>
                  <p style={{ paddingLeft: '20px' }}>วันรับ : 16 สิงหาคม 2559</p>
                  {/* <Accordion>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                      <Icon name='dropdown' />
                      What is a dog?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                      <p>
                        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
                        be found as a welcome guest in many households across the world.
                      </p>
                    </Accordion.Content>
                  </Accordion> */}

                </Accordion.Content>
              </Accordion>
            </Table.Row>
            <Table.Row>
              <Table.Cell>เด็กชายแจ็ค หมี่</Table.Cell>
              <Table.Cell>นายสุกี้ แสงสีเสียง</Table.Cell>
              <Table.Cell>เรียนอยู่ Good Space หรือไม่: เรียน</Table.Cell>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === i}
                  index={i}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  ประวัติการรับวัคซีน
                </Accordion.Title>
                <Accordion.Content active={activeIndex === i++}>
                  <p style={{ paddingLeft: '20px' }}>ชื่อวัคซีน : BCG, HB1</p>
                  <p style={{ paddingLeft: '20px' }}>วันนัด : 12 สิงหาคม 2559</p>
                  <p style={{ paddingLeft: '20px' }}>วันรับ : 16 สิงหาคม 2559</p>
                  <Divider clearing />
                  <p style={{ paddingLeft: '20px' }}>ชื่อวัคซีน : OPV1, DTP-HB</p>
                  <p style={{ paddingLeft: '20px' }}>วันนัด : 12 ตุลาคมม 2559</p>
                  <p style={{ paddingLeft: '20px' }}>วันรับ : 16 ตุลาคม 2559</p>
                </Accordion.Content>
              </Accordion>
            </Table.Row>
            <Table.Row>
              <Table.Cell>เด็กหญิงจิ๊ก เหม่อ</Table.Cell>
              <Table.Cell>นางสุโค่ย ขี้โวยวาย</Table.Cell>
              <Table.Cell>เรียนอยู่ Good Space หรือไม่: ไม่</Table.Cell>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === i}
                  index={i}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  ประวัติการรับวัคซีน
                </Accordion.Title>
                <Accordion.Content active={activeIndex === i++}>
                  <p style={{ paddingLeft: '20px' }}>ชื่อวัคซีน : BCG, HB1</p>
                  <p style={{ paddingLeft: '20px' }}>วันนัด : 1 กุมภาพันธ์ 2559</p>
                  <p style={{ paddingLeft: '20px' }}>วันรับ : 7 กุมภาพันธ์ 2559</p>
                </Accordion.Content>
              </Accordion>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}
