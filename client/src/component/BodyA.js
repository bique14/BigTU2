import React from 'react'
import { Tab, Label, Form, Dropdown, Divider, Grid, Button, Icon } from 'semantic-ui-react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import '../css/BodyA.css'

var province_list = require('../component/province.json')

export class BodyA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            provinceList: province_list,
            projectEN: '',
            projectTH: '',
            projectID: '',
            startDate: moment(),
            endDate: '',
            province: '',
            projectManagerName: '',
            projectManagerSurname: '',
            projectManagetTel: '',
            projectManagerEmail: '',
            constructionName: '',
            supplierName: '',
            supplierSurname: '',
            supplierTel: '',
            supplierEmail: ''
        }
    }

    onSubmitForm = (e) => {
        this.props.getStateFormA(this.state)
    }

    onProjectTHChange = (e) => {
        this.setState({
            projectTH: e.target.value
        }, () => {
            // console.log(this.state)
        })
    }

    onProjectENChange = (e) => {
        this.setState({
            projectEN: e.target.value
        }, () => {
            // console.log(this.state)
        })
    }

    validateTel = () => {

    }

    onChangeProvince = (e, data) => {
        this.setState({
            province: e.target.value
        })
        console.log(data.value)
    }

    render() {
        return (
            <div>
                <Tab.Pane attached={false}>
                    <Label as='a' color='red' ribbon >
                        ข้อมูลโครงการ
                    </Label>
                    <Form >
                        <Form.Group widths='equal' className='div-data'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='ชื่อโครงการ'
                                placeholder='ชื่อโครงการ'
                                value={this.state.projectTH}
                                onChange={this.onProjectTHChange}
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='Project name'
                                placeholder='Project name'
                                value={this.state.projectEN}
                                onChange={this.onProjectENChange}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='รหัสโครงการ'
                                placeholder='รหัสโครงการ'
                                style={{ width: '100%' }}
                            />
                            <Grid columns={2} textAlign='center' className='grid-col'>
                                <Grid.Column>
                                    <h5 className='text-style'>ระยะเวลาเริ่มต้น</h5>
                                    <DatePicker
                                        className='date-picker1'
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        locale="en-gb"
                                        placeholderText="Weeks start on Monday" />
                                </Grid.Column>
                                <Grid.Column>
                                    <h5 className='text-style'>ระยะเวลาสิ้นสุด</h5>
                                    <DatePicker
                                        className='date-picker2'
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        locale="en-gb"
                                        placeholderText="Weeks start on Monday" />
                                </Grid.Column>
                            </Grid >

                        </Form.Group>
                        <div >
                            <h5 className='text-province'>จังหวัด</h5>
                            <Dropdown
                                placeholder='จังหวัด'
                                search
                                selection
                                options={this.state.provinceList}
                                className='dropdown'
                                value={this.state.province}
                                onChange={this.onChangeProvince}
                            />
                        </div>
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
                        <Form.Group widths='equal' className='div-data'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='Construction name'
                                placeholder='construction name'
                                onChange={this.onChange}
                            />
                        </Form.Group>

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
                        <div style={{ align: 'center' }}>
                            <Button icon positive labelPosition='right' type='submit' onClick={this.onSubmitForm}>
                                Next
                        <Icon name='right arrow' />
                            </Button>
                        </div>
                    </Form>
                </Tab.Pane>
            </div>
        )
    }
}
