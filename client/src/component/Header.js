import React from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/Header.css'
import { BodyA } from './BodyA.js'
import { BodyB } from './BodyB.js'
import { BodyC } from './BodyC.js'
import { BodyD } from './BodyD.js'

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bodyA: '',
            bodyB: ''
        }
    }

    getStateFormA = (state) => {
        // console.log(state)
        this.setState({
            bodyA: state
        }, () => {
            console.log(this.state)
        })
    }

    getStateFormB = (state) => {
        this.setState({
            bodyB: state
        }, () => {
            console.log(this.state)
        })
    }
    render() {
        const panes = [
            { menuItem: 'Step1', render: () => <BodyA getStateFormA={this.getStateFormA} /> },
            { menuItem: 'Step2', render: () => <BodyB getStateFormB={this.getStateFormB} /> },
            { menuItem: 'Step3', render: () => <BodyC /> },
            { menuItem: 'Step4', render: () => <BodyD /> }
        ]
        return (
            <div>
                <div className='div-card'>
                    <Tab panes={panes} getStateFormA={this.getStateFormA} />
                </div>
            </div>
        )
    }
}
