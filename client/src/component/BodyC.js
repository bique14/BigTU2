import React from 'react'
import { Tab, Label, Form, Select, Divider, Grid, Button, Icon, Checkbox } from 'semantic-ui-react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import '../css/Header.css'

var arr = []

export class BodyC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
        }
    }
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    componentDidMount(){
        arr = []
    }

    render() {
        for (let i = 0; i < this.props.countData; i++) {
            arr.push(i)
        }
        return (
            <div>
                <Tab.Pane attached={false}>
<<<<<<< HEAD
                    <Label as='a' color='yellow' ribbon>
                        ข้อมูลบุตรหรือผู้ติดตามที่เป็นเด็ก (อายุ 0 - 15 ปี)
                    </Label>
                    <Divider horizontal>ข้อมูลบุตร/หลาน/ญาติ คนที่ i</Divider>
                    <Form>
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
                              label='เลขประจำตัวเด็ก'
                              placeholder='x-xxxx-xxxxx'
                              onChange={this.onChange}
                          />

                          <Form.Input
                              fluid
                              id='form-subcomponent-shorthand-input-last-name'
                              label='วันเกิด'
                              placeholder='เช่น 17'
                          />
                          <Form.Input
                              fluid
                              id='form-subcomponent-shorthand-input-last-name'
                              label='เดือนเกิด'
                              placeholder='เช่น กันยายน'
                          />
                          <Form.Input
                              fluid
                              id='form-subcomponent-shorthand-input-last-name'
                              label='ปีเกิด'
                              placeholder='เช่น 2538'
                          />
                          <Form.Input
                              fluid
                              id='form-subcomponent-shorthand-input-first-name'
                              label='สัญชาติ'
                              placeholder='สัญชาติ'
                              onChange={this.onChange}
                          />
                      </Form.Group>
                    </Form>


                    <Label as='a' color='yellow' ribbon>
                        เข้าโรงเรียนของไทยหรือไม่
=======
                    <Label as='a' color='red' ribbon>
                        ข้อมูลบุตรหรือผู้ติดตามที่เป็นเด็ก
>>>>>>> f487522fa0efc9dabf4e6111323c69df781c3b54
                    </Label>
                    {
                        arr.map((i) => {
                            return (
                                <div>

                                    <Divider horizontal>ข้อมูลบุตร/หลาน/ญาติ คนที่ {i+1}</Divider>
                                    <Form>
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
                                                label='เลขประจำตัวเด็ก'
                                                placeholder='x-xxxx-xxxxx'
                                                onChange={this.onChange}
                                            />

                                            <Form.Input
                                                fluid
                                                id='form-subcomponent-shorthand-input-last-name'
                                                label='วันเกิด'
                                                placeholder='เช่น 17'
                                            />
                                            <Form.Input
                                                fluid
                                                id='form-subcomponent-shorthand-input-last-name'
                                                label='เดือนเกิด'
                                                placeholder='เช่น กันยายน'
                                            />
                                            <Form.Input
                                                fluid
                                                id='form-subcomponent-shorthand-input-last-name'
                                                label='ปีเกิด'
                                                placeholder='เช่น 2538'
                                            />
                                            <Form.Input
                                                fluid
                                                id='form-subcomponent-shorthand-input-first-name'
                                                label='สัญชาติ'
                                                placeholder='สัญชาติ'
                                                onChange={this.onChange}
                                            />
                                        </Form.Group>

<<<<<<< HEAD
                    <Label as='a' color='yellow' ribbon>
                        ได้รับวัคซีนในช่วง 0-4 ปีที่ผ่านมาหรือไม่
                    </Label>
                    <Form>
                      <Form.Field>
                        <Checkbox
                          radio
                          label='ได้รับวัคซีนในช่วง 0-4 ปีที่ผ่านมา'
                          name='checkboxRadioGroup'
                          value='this'
                          checked={this.state.value === 'this'}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          radio
                          label='ไม่ได้รับวัคซีนในช่วง 0-4 ปีที่ผ่านมา'
                          name='checkboxRadioGroup'
                          value='that'
                          checked={this.state.value === 'that'}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                    </Form>
                    <div><Checkbox label={<label>แรกเกิด - 1 เดือน : BCG,HB1</label>} /></div>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='นัดวันที่'
                        placeholder='เช่น 17/09/2538'
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='รับวันที่'
                        placeholder='เช่น 20/09/2538'
                        onChange={this.onChange}
                    />
                    <div><Checkbox label={<label>2 เดือน : OPV1,DTP-HB</label>} /></div>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='นัดวันที่'
                        placeholder='เช่น 17/09/2538'
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='รับวันที่'
                        placeholder='เช่น 20/09/2538'
                        onChange={this.onChange}
                    />
                    <div><Checkbox label={<label>4 เดือน : OPV2,IPV1,DTP-HB2</label>} /></div>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='นัดวันที่'
                        placeholder='เช่น 17/09/2538'
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='รับวันที่'
                        placeholder='เช่น 20/09/2538'
                        onChange={this.onChange}
                    />
                    <div><Checkbox label={<label>6 เดือน : OPV3,DTP-HB3</label>} /></div>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='นัดวันที่'
                        placeholder='เช่น 17/09/2538'
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='รับวันที่'
                        placeholder='เช่น 20/09/2538'
                        onChange={this.onChange}
                    />
                    <div><Checkbox label={<label>9 เดือน : MMR1</label>} /></div>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='นัดวันที่'
                        placeholder='เช่น 17/09/2538'
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='รับวันที่'
                        placeholder='เช่น 20/09/2538'
                        onChange={this.onChange}
                    />
                    <div><Checkbox label={<label>1 ปี : LAJE1</label>} /></div>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='นัดวันที่'
                        placeholder='เช่น 17/09/2538'
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='รับวันที่'
                        placeholder='เช่น 20/09/2538'
                        onChange={this.onChange}
                    />
                    <div><Checkbox label={<label>1 ปี 6 เดือน : OPV4,DTP4</label>} /></div>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='นัดวันที่'
                        placeholder='เช่น 17/09/2538'
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='รับวันที่'
                        placeholder='เช่น 20/09/2538'
                        onChange={this.onChange}
                    />
                    <div><Checkbox label={<label>2 ปี 6 เดือน : MMR2,LAJE2</label>} /></div>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='นัดวันที่'
                        placeholder='เช่น 17/09/2538'
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='รับวันที่'
                        placeholder='เช่น 20/09/2538'
                        onChange={this.onChange}
                    />
                    <div><Checkbox label={<label>4 ปี : OPV5,DTP5</label>} /></div>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='นัดวันที่'
                        placeholder='เช่น 17/09/2538'
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='รับวันที่'
                        placeholder='เช่น 20/09/2538'
                        onChange={this.onChange}
                    />
                    <div><Checkbox label={<label>อื่นๆ</label>} /></div>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='ชื่อวัคซีน'
                        placeholder='ชื่อ'
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='นัดวันที่'
                        placeholder='เช่น 20/09/2538'
                        onChange={this.onChange}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='รับวันที่'
                        placeholder='เช่น 20/09/2538'
                        onChange={this.onChange}
                    />
=======
                                        <Form.Field>
                                            <strong>เข้าโรงเรียนของประเทศไทยหรือไม่</strong>
                                        </Form.Field>
                                        <Form.Field>
                                            <Checkbox
                                                radio
                                                label='ใช่'
                                                name='checkboxRadioGroup'
                                                value='this'
                                                checked={this.state.value === 'this'}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Checkbox
                                                radio
                                                label='ไม่'
                                                name='checkboxRadioGroup'
                                                value='that'
                                                checked={this.state.value === 'that'}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Field>
                                        {/* </Form> */}
                                        <Divider horizontal>ระดับการศึกษา</Divider>
                                        <div><Checkbox label={<label>ระดับอนุบาล</label>} /></div>
                                        <Form.Input
                                            fluid
                                            id='form-subcomponent-shorthand-input-first-name'
                                            label='ชื่อโรงเรียน'
                                            placeholder='ชื่อโรงเรียน'
                                            onChange={this.onChange}
                                        />
                                        <Form.Input
                                            fluid
                                            id='form-subcomponent-shorthand-input-first-name'
                                            label='ปีการศึกษา'
                                            placeholder='เช่น 2558 - 2560'
                                            onChange={this.onChange}
                                        />
                                        <div><Checkbox label={<label>ระดับประถมศึกษา</label>} /></div>
                                        <Form.Input
                                            fluid
                                            id='form-subcomponent-shorthand-input-first-name'
                                            label='ชื่อโรงเรียน'
                                            placeholder='ชื่อโรงเรียน'
                                            onChange={this.onChange}
                                        />
                                        <Form.Input
                                            fluid
                                            id='form-subcomponent-shorthand-input-first-name'
                                            label='ปีการศึกษา'
                                            placeholder='เช่น 2558 - 2560'
                                            onChange={this.onChange}
                                        />
                                        <div><Checkbox label={<label>ระดับมัธยมศึกษาตอนต้น</label>} /></div>
                                        <Form.Input
                                            fluid
                                            id='form-subcomponent-shorthand-input-first-name'
                                            label='ชื่อโรงเรียน'
                                            placeholder='ชื่อโรงเรียน'
                                            onChange={this.onChange}
                                        />
                                        <Form.Input
                                            fluid
                                            id='form-subcomponent-shorthand-input-first-name'
                                            label='ปีการศึกษา'
                                            placeholder='เช่น 2558 - 2560'
                                            onChange={this.onChange}
                                        />
                                        <div><Checkbox label={<label>ระดับมัธยมศึกษาตอนปลาย</label>} /></div>
                                        <Form.Input
                                            fluid
                                            id='form-subcomponent-shorthand-input-first-name'
                                            label='ชื่อโรงเรียน'
                                            placeholder='ชื่อโรงเรียน'
                                            onChange={this.onChange}
                                        />
                                        <Form.Input
                                            fluid
                                            id='form-subcomponent-shorthand-input-first-name'
                                            label='ปีการศึกษา'
                                            placeholder='เช่น 2558 - 2560'
                                            onChange={this.onChange}
                                        />
                                        <div><Checkbox label={<label>อื่นๆ</label>} /></div>
                                        <Form.Input
                                            fluid
                                            id='form-subcomponent-shorthand-input-first-name'
                                            label='ชื่อโรงเรียน'
                                            placeholder='ชื่อโรงเรียน'
                                            onChange={this.onChange}
                                        />
                                        <Form.Input
                                            fluid
                                            id='form-subcomponent-shorthand-input-first-name'
                                            label='ปีการศึกษา'
                                            placeholder='เช่น 2558 - 2560'
                                            onChange={this.onChange}
                                        />
                                    </Form>
>>>>>>> f487522fa0efc9dabf4e6111323c69df781c3b54

                                </div>
                            )
                        })

                    }

                    <div style={{ align: 'center', marginTop: 20 }}>
                        <Button.Group>
                            <Button>Back</Button>
                            <Button.Or />
                            <Button positive>Next</Button>
                        </Button.Group>
                    </div>
                </Tab.Pane>
            </div>
        )
    }
}
