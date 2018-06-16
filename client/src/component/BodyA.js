import React from 'react'
import { Tab, Label, Form, Select, Divider, Grid, Button, Icon } from 'semantic-ui-react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import '../css/Header.css'

const countryOptions = ['a', 'b']

export class BodyA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        }
    }

    render() {
        return (
            <div>
                <Tab.Pane attached={false}>
                    <Label as='a' color='red' ribbon>
                        ข้อมูลโครงการ
                    </Label>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='ชื่อโครงการ'
                                placeholder='ชื่อโครงการ'
                                onChange={this.onChange}
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='Project name'
                                placeholder='Project name'
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='รหัสโครงการ'
                                placeholder='รหัสโครงการ'
                            />
                            <Select placeholder='Select your country' options={countryOptions} />
                        </Form.Group>
                        <Grid columns={2} relaxed>
                            <Grid.Column>
                                <span>ระยะเวลาเริ่มต้นโครงการ</span>

                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    locale="en-gb"
                                    placeholderText="Weeks start on Monday" />
                            </Grid.Column>
                            <Grid.Column>
                                <span>ระยะเวลาสิ้นสุดโครงการ</span>

                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    locale="en-gb"
                                    placeholderText="Weeks start on Monday" />
                            </Grid.Column>
                        </Grid>
                        <br />
                        <Divider horizontal>Project manager contact</Divider>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='ชื่อ'
                                placeholder='ชื่อ'
                                onChange={this.onChange}
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='นามสกุล'
                                placeholder='นามสกุล'
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='เบอร์โทรศัพท์'
                                placeholder='เบอร์โทรศัพท์'
                                onChange={this.onChange}
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='อีเมล'
                                placeholder='อีเมล'
                            />
                        </Form.Group>
                        <br />
                        <Label as='a' color='red' ribbon>
                            ข้อมูลผู้ประสานงานหัวหน้าคนงาน
                        </Label>
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='construction name'
                            placeholder='construction name'
                            onChange={this.onChange}
                        />
                        <Divider horizontal>Supplier contact</Divider>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='ชื่อ'
                                placeholder='ชื่อ'
                                onChange={this.onChange}
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='นามสกุล'
                                placeholder='นามสกุล'
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='เบอร์โทรศัพท์'
                                placeholder='เบอร์โทรศัพท์'
                                onChange={this.onChange}
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='อีเมล'
                                placeholder='อีเมล'
                            />
                        </Form.Group>
                    </Form>
                    <div style={{ align: 'center' }}>
                        <Button icon positive labelPosition='right'>
                            Next
                        <Icon name='right arrow' />
                        </Button>
                    </div>
                </Tab.Pane>
            </div>
        )
    }
}