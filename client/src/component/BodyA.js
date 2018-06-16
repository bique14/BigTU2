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
            startDateSelect: moment(),
            startDateShow: moment().format('ddd MMM DD'),
            endDateSelect: moment(),
            endDateShow: moment().format('ddd MMM DD'),
            province: '',


            projectManagerName: '',
            projectManagerSurname: '',
            projectManagerTel: '',
            chkManegerTel: true,
            projectManagerEmail: '',
            chkManagerEmail: true,


            constructionName: '',
            supplierName: '',
            supplierSurname: '',
            
            supplierTel: '',
            chkSupplierTel: true,
            supplierEmail: '',
            chkSupplierEmail: true
        }
    }

    onSubmitForm = (e) => {
        this.props.getStateFormA(this.state)
    }

    onChangeProjectTH = (e) => {
        this.setState({
            projectTH: e.target.value
        }, () => {
            // console.log(this.state.projectTH)
        })
    }

    onChangeProjectEN = (e) => {
        this.setState({
            projectEN: e.target.value
        }, () => {
            // console.log(this.state)
        })
    }

    onChangeProjectID = (e) => {
        this.setState({
            projectID: e.target.value
        }, () => {
            // console.log(this.state.projectID)
        })
    }

    validateProjectManagerTel = (e) => {
        let regexTel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        e.target.value.match(regexTel) ?
            this.setState({
                chkManegerTel: true,
                projectManagerTel: e.target.value
            }, () => { console.log('[validate] project manager telephone no', this.state.chkManegerTel, this.state.projectManagerTel) }) :
            this.setState({
                chkManegerTel: false,
            })
    }

    validateProjectManagerEmail = (e) => {
        let regexMail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        e.target.value.match(regexMail) ?
            this.setState({
                chkManagerEmail: true,
                projectManagerEmail: e.target.value
            }, () => { console.log('[validate] project manager email', this.state.chkManegerTel, this.state.projectManagerEmail) }) :
            this.setState({
                chkManagerEmail: false
            })
    }

    validateSupplierTel = (e) => {
        let regexTel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        e.target.value.match(regexTel) ?
            this.setState({
                chkSupplierTel: true,
                supplierTel: e.target.value
            }, () => { console.log('[validate] suplier telephone no', this.state.chkManegerTel, this.state.supplierTel) }) :
            this.setState({
                chkSupplierTel: false,
            })
    }

    validateSupplierEmail = (e) => {
        let regexMail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        e.target.value.match(regexMail) ?
            this.setState({
                chkSupplierEmail: true,
                supplierEmail: e.target.value
            }, () => { console.log('[validate] supplier email', this.state.chkManegerTel, this.state.supplierEmail) }) :
            this.setState({
                chkSupplierEmail: false
            })
    }

    onChangeProvince = (e, data) => {
        this.setState({
            province: data.value
        }, () => {
            console.log('province', this.state.province)
        })
    }


    onChangeStartDate = (date) => {
        var parse_date = moment(date).format('ddd MMM DD')
        this.setState({
            startDateSelect: date,
            startDateShow: parse_date
        }, () => {
            console.log('start date ', this.state.startDateShow)
        })
    }

    onChangeEndDate = (date) => {
        var parse_date = moment(date).format('ddd MMM DD')
        this.setState({
            endDateSelect: date,
            endDateShow: parse_date
        }, () => {
            console.log('end date', this.state.endDateShow)
        })
    }

    onChangeProjectManagerName = (e) => {
        this.setState({
            projectManagerName: e.target.value
        }, () => {
            console.log('project manager name', this.state.projectManagerName)
        })
    }

    onChangeProjectManagerSurname = (e) => {
        this.setState({
            projectManagerSurname: e.target.value
        }, () => {
            console.log('project manager surname', this.state.projectManagerSurname)
        })
    }

    onChangeConstructionName = (e) => {
        this.setState({
            constructionName: e.target.value
        }, () => {
            console.log('construction name', this.state.constructionName)
        })
    }

    onChangeSupplierName = (e) => {
        this.setState({
            supplierName: e.target.value
        }, () => {
            console.log('supplier name', this.state.supplierName)
        })
    }

    onChangeSupplierSurname = (e) => {
        this.setState({
            supplierSurname: e.target.value
        }, () => {
            console.log('supplier surname', this.state.supplierSurname)
        })
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
                                onChange={this.onChangeProjectTH}
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='Project name'
                                placeholder='Project name'
                                onChange={this.onChangeProjectEN}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='รหัสโครงการ'
                                placeholder='รหัสโครงการ'
                                onChange={this.onChangeProjectID}
                                style={{ width: '100%' }}
                            />
                            <Grid columns={2} textAlign='center' className='grid-col'>
                                <Grid.Column>
                                    <h5 className='text-style'>ระยะเวลาเริ่มต้น</h5>
                                    <DatePicker
                                        className='date-picker1'
                                        dateFormat="DD/MM/YYYY"
                                        selected={this.state.startDateSelect}
                                        onChange={this.onChangeStartDate}
                                        locale="en-gb"
                                        withPortal
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <h5 className='text-style'>ระยะเวลาสิ้นสุด</h5>
                                    <DatePicker
                                        className='date-picker2'
                                        dateFormat="DD/MM/YYYY"
                                        selected={this.state.endDateSelect}
                                        onChange={this.onChangeEndDate}
                                        minDate={this.state.startDateSelect}
                                        locale="en-gb"
                                        withPortal
                                    />
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
                                onChange={this.onChangeProjectManagerName}
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='นามสกุล'
                                placeholder='นามสกุล'
                                onChange={this.onChangeProjectManagerSurname}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            {
                                this.state.chkManegerTel ?
                                    <Form.Input
                                        fluid
                                        id='form-subcomponent-shorthand-input-first-name'
                                        label='เบอร์โทรศัพท์'
                                        placeholder='เบอร์โทรศัพท์'
                                        onChange={this.validateProjectManagerTel}
                                    /> :
                                    <Form.Input
                                        fluid
                                        id='form-subcomponent-shorthand-input-first-name'
                                        label='เบอร์โทรศัพท์'
                                        placeholder='เบอร์โทรศัพท์'
                                        onChange={this.validateProjectManagerTel}
                                        error
                                    />
                            }
                            {
                                this.state.chkManagerEmail ?
                                    <Form.Input
                                        fluid
                                        id='form-subcomponent-shorthand-input-last-name'
                                        label='อีเมล'
                                        placeholder='อีเมล'
                                        onChange={this.validateProjectManagerEmail}
                                    /> :
                                    <Form.Input
                                        fluid
                                        id='form-subcomponent-shorthand-input-last-name'
                                        label='อีเมล'
                                        placeholder='อีเมล'
                                        onChange={this.validateProjectManagerEmail}
                                        error
                                    />
                            }
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
                                onChange={this.onChangeConstructionName}
                            />
                        </Form.Group>

                        <Divider horizontal>Supplier contact</Divider>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='ชื่อ'
                                placeholder='ชื่อ'
                                onChange={this.onChangeSupplierName}
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='นามสกุล'
                                placeholder='นามสกุล'
                                onChange={this.onChangeSupplierSurname}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            {
                                this.state.chkSupplierTel ?
                                    <Form.Input
                                        fluid
                                        id='form-subcomponent-shorthand-input-first-name'
                                        label='เบอร์โทรศัพท์'
                                        placeholder='เบอร์โทรศัพท์'
                                        onChange={this.validateSupplierTel}
                                    /> :
                                    <Form.Input
                                        fluid
                                        id='form-subcomponent-shorthand-input-first-name'
                                        label='เบอร์โทรศัพท์'
                                        placeholder='เบอร์โทรศัพท์'
                                        onChange={this.validateSupplierTel}
                                        error
                                    />
                            }
                            {
                                this.state.chkSupplierEmail ?
                                    <Form.Input
                                        fluid
                                        id='form-subcomponent-shorthand-input-last-name'
                                        label='อีเมล'
                                        placeholder='อีเมล'
                                        onChange={this.validateSupplierEmail}
                                    /> :
                                    <Form.Input
                                        fluid
                                        id='form-subcomponent-shorthand-input-last-name'
                                        label='อีเมล'
                                        placeholder='อีเมล'
                                        onChange={this.validateSupplierEmail}
                                        error
                                    />
                            }

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
