import React from 'react'
import { Tab, Label, Form, Select, Divider, Grid, Button, Icon } from 'semantic-ui-react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import '../css/Header.css'

const countryOptions = ['a', 'b']

export class BodyD extends React.Component {
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
                        ประวัติการศึกษา เฉพาะเด็ก 3-15 ปี (ถ้ามี)
                    </Label>

                    <div style={{ align: 'center' }}>
                      <Button.Group>
                        <Button>Back</Button>
                        <Button.Or />
                        <Button positive>Submit</Button>
                      </Button.Group>
                    </div>
                </Tab.Pane>
            </div>
        )
    }
}
