import React from 'react'
import { Tab, Label, Form, Divider, Button, Checkbox } from 'semantic-ui-react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/Header.css'

var arr = ['1']

export class BodyC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
            // childArr: [],

            childName: '',
            childSurname: '',
            childID: '',
            childBirthDay: '',
            childBirthMonth: '',
            childBirthYear: '',
            childNationality: '',

            childAge: 0,

            isSchoolInThai: true,

            isNursery: false,
            nurseryName: '',
            nurseryYear: '',

            isPrimary: false,
            primaryName: '',
            primaryYear: '',

            isSecondary: false,
            secondaryName: '',
            secondaryYear: '',

            isHighSchool: false,
            highSchoolName: '',
            highSchoolYear: '',

            isOther: false,
            otherHighSchoolName: '',
            otherHighSchoolYear: ''
        }
    }
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    componentDidMount() {
        arr = ['1']
    }

    chkIsSchoolInThai = () => {
        this.setState({
            isSchoolInThai: !this.state.isSchoolInThai
        }, () => { console.log('school in thai', this.state.isSchoolInThai) })
    }

    chkIsNursery = () => {
        this.setState({
            isNursery: !this.state.isNursery
        }, () => { console.log('nursery', this.state.isNursery) })
    }

    chkIsPrimary = () => {
        this.setState({
            isPrimary: !this.state.isPrimary
        }, () => { console.log('primary', this.state.isPrimary) })
    }

    chkIsSecondary = () => {
        this.setState({
            isSecondary: !this.state.isSecondary
        }, () => { console.log('secondary', this.state.isSecondary) })
    }

    chkIsHighSchool = () => {
        this.setState({
            isHighSchool: !this.state.isHighSchool
        }, () => { console.log('highschool', this.state.isHighSchool) })
    }

    chkIsOther = () => {
        this.setState({
            isOther: !this.state.isOther
        }, () => { console.log('other', this.state.isOther) })
    }

    onChangeChildName = (e) => {
        this.setState({
            childName: e.target.value
        }, () => { console.log('child name', this.state.childName) })
    }

    onChangeChildSurname = (e) => {
        this.setState({
            childSurname: e.target.value
        }, () => { console.log('child surname', this.state.childSurname) })
    }

    onChangeChildID = (e) => {
        this.setState({
            childID: e.target.value
        }, () => { console.log('child ID', this.state.childID) })
    }

    onChangeChildBirthDay = (e) => {
        this.setState({
            childBirthDay: e.target.value
        }, () => { console.log('child b day', this.state.childBirthDay) })
    }

    onChangeChildBirthMonth = (e) => {
        this.setState({
            childBirthMonth: e.target.value
        }, () => { console.log('child b month', this.state.childBirthMonth) })
    }

    onChangeChildBirthYear = (e) => {
        this.setState({
            childBirthYear: e.target.value,
            childAge: parseInt(moment().format('YYYY')) - (parseInt(e.target.value) - 543)
        }, () => { console.log('child age', this.state.childAge) })
    }

    onChangeChildNationality = (e) => {
        this.setState({
            childNationality: e.target.value
        }, () => { console.log('child nationality', this.state.childNationality) })
    }


    onChangeNurseryName = (e) => {
        this.setState({
            nurseryName: e.target.value
        }, () => { console.log('nursery name', this.state.nurseryName) })
    }

    onChangeNurseryYear = (e) => {
        this.setState({
            nurseryYear: e.target.value
        }, () => { console.log('nursery year', this.state.nurseryYear) })
    }

    onChangePrimaryName = (e) => {
        this.setState({
            primaryName: e.target.value
        }, () => { console.log('primary name', this.state.primaryName) })
    }

    onChangePrimaryYear = (e) => {
        this.setState({
            primaryYear: e.target.value
        }, () => { console.log('primary year', this.state.primaryYear) })
    }

    onChangeSecondaryName = (e) => {
        this.setState({
            secondaryName: e.target.value
        }, () => { console.log('second name', this.state.secondaryName) })
    }

    onChangeSecondaryYear = (e) => {
        this.setState({
            secondaryYear: e.target.value
        }, () => { console.log('second year', this.state.secondaryYear) })
    }

    onChangeHighSchoolName = (e) => {
        this.setState({
            highSchoolName: e.target.value
        }, () => { console.log('high school name', this.state.highSchoolName) })
    }

    onChangeHighSchoolYear = (e) => {
        this.setState({
            highSchoolYear: e.target.value
        }, () => { console.log('high school year', this.state.highSchoolYear) })
    }

    onChangeOtherName = (e) => {
        this.setState({
            otherHighSchoolName: e.target.value
        }, () => { console.log('other name', this.state.otherHighSchoolName) })
    }

    onChangeOtherYear = (e) => {
        this.setState({
            otherHighSchoolYear: e.target.value
        }, () => { console.log('other year', this.state.otherHighSchoolYear) })
    }


    render() {
        for (let i = 0; i < this.props.countData; i++) {
            arr.push(i)
        }
        return (
            <div>
                <Tab.Pane attached={false}>
                    <Label as='a' color='yellow' ribbon>
                        ข้อมูลบุตรหรือผู้ติดตามที่เป็นเด็ก (อายุ 0 - 15 ปี)
                    </Label>
                    {
                        arr.map((i) => {
                            return (
                                <div>
                                    <Divider horizontal>ข้อมูลบุตร/หลาน/ญาติ คนที่ {i + 1}</Divider>
                                    <Form>
                                        <Form.Group widths='equal'>
                                            <Form.Input
                                                fluid
                                                id='form-subcomponent-shorthand-input-first-name'
                                                label='ชื่อ'
                                                placeholder='ชื่อ'
                                                onChange={this.onChangeChildName}
                                            />
                                            <Form.Input
                                                fluid
                                                id='form-subcomponent-shorthand-input-last-name'
                                                label='นามสกุล'
                                                placeholder='นามสกุล'
                                                onChange={this.onChangeChildSurname}
                                            />
                                        </Form.Group>
                                        <Form.Group widths='equal'>
                                            <Form.Input
                                                fluid
                                                id='form-subcomponent-shorthand-input-first-name'
                                                label='เลขประจำตัวเด็ก'
                                                placeholder='x-xxxx-xxxxx'
                                                onChange={this.onChangeChildID}
                                            />

                                            <Form.Input
                                                fluid
                                                id='form-subcomponent-shorthand-input-last-name'
                                                label='วันเกิด'
                                                placeholder='เช่น 17'
                                                onChange={this.onChangeChildBirthDay}
                                            />
                                            <Form.Input
                                                fluid
                                                id='form-subcomponent-shorthand-input-last-name'
                                                label='เดือนเกิด'
                                                placeholder='เช่น กันยายน'
                                                onChange={this.onChangeChildBirthMonth}
                                            />
                                            <Form.Input
                                                fluid
                                                id='form-subcomponent-shorthand-input-last-name'
                                                label='ปีเกิด'
                                                placeholder='เช่น 2538'
                                                onChange={this.onChangeChildBirthYear}
                                            />
                                            <Form.Input
                                                fluid
                                                id='form-subcomponent-shorthand-input-first-name'
                                                label='สัญชาติ'
                                                placeholder='สัญชาติ'
                                                onChange={this.onChangeChildNationality}
                                            />
                                        </Form.Group>

                                        <Form.Field>
                                            <strong>เข้าโรงเรียนของประเทศไทยหรือไม่</strong>
                                        </Form.Field>
                                        <Form.Field>
                                            <Checkbox
                                                radio
                                                label='ใช่'
                                                name='checkboxRadioGroup'
                                                value={true}
                                                checked={this.state.isSchoolInThai === true}
                                                onChange={this.chkIsSchoolInThai}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Checkbox
                                                radio
                                                label='ไม่'
                                                name='checkboxRadioGroup'
                                                value={false}
                                                checked={this.state.isSchoolInThai === false}
                                                onChange={this.chkIsSchoolInThai}
                                            />
                                        </Form.Field>
                                        {/* </Form> */}
                                        <Divider horizontal>ระดับการศึกษา</Divider>
                                        <div><Checkbox label={<label>ระดับอนุบาล</label>} onChange={this.chkIsNursery} /></div>
                                        {
                                            this.state.isNursery ?
                                                <div>
                                                    <Form.Input
                                                        fluid
                                                        id='form-subcomponent-shorthand-input-first-name'
                                                        label='ชื่อโรงเรียน'
                                                        placeholder='ชื่อโรงเรียน'
                                                        onChange={this.onChangeNurseryName}
                                                    />
                                                    <Form.Input
                                                        fluid
                                                        id='form-subcomponent-shorthand-input-first-name'
                                                        label='ปีการศึกษา'
                                                        placeholder='เช่น 2558 - 2560'
                                                        onChange={this.onChangeNurseryYear}
                                                    /><br />
                                                </div> : null

                                        }
                                        <div><Checkbox label={<label>ระดับประถมศึกษา</label>} onChange={this.chkIsPrimary} /></div>
                                        {
                                            this.state.isPrimary ?
                                                <div>
                                                    <Form.Input
                                                        fluid
                                                        id='form-subcomponent-shorthand-input-first-name'
                                                        label='ชื่อโรงเรียน'
                                                        placeholder='ชื่อโรงเรียน'
                                                        onChange={this.onChangePrimaryName}
                                                    />
                                                    <Form.Input
                                                        fluid
                                                        id='form-subcomponent-shorthand-input-first-name'
                                                        label='ปีการศึกษา'
                                                        placeholder='เช่น 2558 - 2560'
                                                        onChange={this.onChangePrimaryYear}
                                                    /><br />
                                                </div> : null
                                        }

                                        <div><Checkbox label={<label>ระดับมัธยมศึกษาตอนต้น</label>} onChange={this.chkIsSecondary} /></div>
                                        {
                                            this.state.isSecondary ?
                                                <div>
                                                    <Form.Input
                                                        fluid
                                                        id='form-subcomponent-shorthand-input-first-name'
                                                        label='ชื่อโรงเรียน'
                                                        placeholder='ชื่อโรงเรียน'
                                                        onChange={this.onChangeSecondaryName}
                                                    />
                                                    <Form.Input
                                                        fluid
                                                        id='form-subcomponent-shorthand-input-first-name'
                                                        label='ปีการศึกษา'
                                                        placeholder='เช่น 2558 - 2560'
                                                        onChange={this.onChangeSecondaryYear}
                                                    /><br />
                                                </div> : null
                                        }

                                        <div><Checkbox label={<label>ระดับมัธยมศึกษาตอนปลาย</label>} onChange={this.chkIsHighSchool} /></div>
                                        {
                                            this.state.isHighSchool ?
                                                <div>
                                                    <Form.Input
                                                        fluid
                                                        id='form-subcomponent-shorthand-input-first-name'
                                                        label='ชื่อโรงเรียน'
                                                        placeholder='ชื่อโรงเรียน'
                                                        onChange={this.onChangeHighSchoolName}
                                                    />
                                                    <Form.Input
                                                        fluid
                                                        id='form-subcomponent-shorthand-input-first-name'
                                                        label='ปีการศึกษา'
                                                        placeholder='เช่น 2558 - 2560'
                                                        onChange={this.onChangeHighSchoolYear}
                                                    /><br />
                                                </div> : null
                                        }

                                        <div><Checkbox label={<label>อื่นๆ</label>} onChange={this.chkIsOther} /></div>
                                        {
                                            this.state.isOther ?
                                                <div>
                                                    <Form.Input
                                                        fluid
                                                        id='form-subcomponent-shorthand-input-first-name'
                                                        label='ชื่อโรงเรียน'
                                                        placeholder='ชื่อโรงเรียน'
                                                        onChange={this.onChangeOtherName}
                                                    />
                                                    <Form.Input
                                                        fluid
                                                        id='form-subcomponent-shorthand-input-first-name'
                                                        label='ปีการศึกษา'
                                                        placeholder='เช่น 2558 - 2560'
                                                        onChange={this.onChangeOtherYear}
                                                    /><br />
                                                </div> : null
                                        }

                                    </Form>
                                    <br /><br />
                                </div>
                            )
                        })

                    }

                    <div style={{ align: 'center', marginTop: 20 }}>
                        <Button.Group>
                            <Button>Back</Button>
                            <Button.Or />
                            <Button positive onClick={()=>{console.log(this.state)}}>Submit</Button>
                        </Button.Group>
                    </div>
                </Tab.Pane>
            </div>
        )
    }
}
