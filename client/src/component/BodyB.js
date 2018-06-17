import React from 'react'
import { Tab, Label, Form, Select, Divider, Grid, Button, Icon ,TextArea , Checkbox , Modal} from 'semantic-ui-react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import '../css/Header.css'

const countryOptions = ['a', 'b']

export class BodyB extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        }
    }
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
    render() {
        return (
            <div>

                <Tab.Pane attached={false}>
                    <Label as='a' color='yellow' ribbon>
                      ข้อมูลแคมป์ที่พักคนงาน
                    </Label>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                              id='form-textarea-control-opinion'
                              control={TextArea}
                              label='ที่อยู่'
                              placeholder='ที่อยู่'
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                          <Select placeholder='Select your country' options={countryOptions} />
                          <Select placeholder='Select your country' options={countryOptions} />
                        </Form.Group>
                        <Form>
                          <Form.Field>
                            มีการก่อสร้างพื้นที่เด็ก The Good Space หรือไม่
                          </Form.Field>
                          <Form.Field>
                            <Checkbox
                              radio
                              label='มีการก่อสร้าง The Good Space แล้ว'
                              name='checkboxRadioGroup'
                              value='this'
                              checked={this.state.value === 'this'}
                              onChange={this.handleChange}
                            />
                          </Form.Field>
                          <Form.Field>
                            <Checkbox
                              radio
                              label='ยังไม่มีการก่อสร้าง'
                              name='checkboxRadioGroup'
                              value='that'
                              checked={this.state.value === 'that'}
                              onChange={this.handleChange}
                            />
                          </Form.Field>
                        </Form>


                        <Label as='a' color='yellow' ribbon>
                          ข้อมูลแรงงาน
                        </Label>
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
                                label='เลขประจำตัวผู้ใช้แรงงาน'
                                placeholder='0000000'
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='สัญชาติ'
                                placeholder='เช่น พม่า'
                                onChange={this.onChange}
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='ประเภทแรงงาน'
                                placeholder='เช่น ช่างปูน/ช่างไม้/ช่างไฟ/อื่นๆ'
                            />
                        </Form.Group>
                        <Form>
                        <Form.Field>
                          มีผู้ติดตามหรือไม่
                        </Form.Field>
                        <Form.Field>
                          <Checkbox
                            radio
                            label='มีผู้ติดตาม'
                            name='checkboxRadioGroup'
                            value='this'
                            checked={this.state.value === 'this'}
                            onChange={this.handleChange}
                          />
                        </Form.Field>
                        <Form.Field>
                          <Checkbox
                            radio
                            label='ไม่มีผู้ติดตาม'
                            name='checkboxRadioGroup'
                            value='that'
                            checked={this.state.value === 'that'}
                            onChange={this.handleChange}
                          />
                        </Form.Field>


                        <Divider horizontal>กรณีมีผู้ติดตาม</Divider>
                        <div><Checkbox label={<label>สามี</label>} /></div>
                        <div><Checkbox label={<label>ภรรยา</label>} /></div>
                        <div><Checkbox label={<label>บุตร/หลาน/ญาติ(อายุมากกว่า 15 ปี)</label>} /></div>
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='โปรระบุจำนวนคน'
                            placeholder='จำนวน'
                            onChange={this.onChange}
                        />
                        <div><Checkbox label={<label>บุตร/หลาน/ญาติ(อายุน้อยกว่า 15 ปี)</label>} /></div>
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='โปรระบุจำนวนคน'
                            placeholder='จำนวน'
                            onChange={this.onChange}
                        />
                        <div><Checkbox label={<label>อื่นๆ</label>} /></div>
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='โปรระบุจำนวนคน'
                            placeholder='จำนวน'
                            onChange={this.onChange}
                        />

                        </Form>
                        <div style={{ align: 'center' }}>
                          <Button.Group>
                            <Button>Back</Button>
                            <Button.Or />
                            <Button positive>Next</Button>
                          </Button.Group>
                        </div>
                    </Form>
                </Tab.Pane>
            </div>
        )
    }
}
