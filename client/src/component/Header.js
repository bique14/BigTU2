import React from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/Header.css'
import {BodyA} from './BodyA.js'

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
            { menuItem: 'Step1', render: () => <BodyA getStateFormA={this.getStateFormA}/> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
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