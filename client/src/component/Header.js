import React from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/Header.css'
import {BodyA} from './BodyA.js'
import {BodyB} from './BodyB.js'
import {BodyC} from './BodyC.js'
import {BodyD} from './BodyD.js'

export class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            formA: ''
        }
    }

    getStateFormA = (state) => {
        // console.log(state)
        this.setState({
            formA: state
        },() => {
            console.log(this.state)
        })
    }
    render() {
        const panes = [
<<<<<<< HEAD
            { menuItem: 'Step1', render: () => <BodyA /> },
            { menuItem: 'Step2', render: () => <BodyB /> },
            { menuItem: 'Step3', render: () => <BodyC /> },
            { menuItem: 'Step4', render: () => <BodyD /> }
=======
            { menuItem: 'Step1', render: () => <BodyA getStateFormA={this.getStateFormA}/> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
>>>>>>> 7cb5360f2e52218222c8a983d3468f3ecf0aa9af
        ]
        return (
            <div>
                <div className='div-card'>
                    <Tab panes={panes} getStateFormA={this.getStateFormA}/>
                </div>
            </div>
        )
    }
}
