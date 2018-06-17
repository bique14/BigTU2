import React from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/Header.css'
import {BodyA} from './BodyA.js'
import {BodyB} from './BodyB.js'
import {BodyC} from './BodyC.js'

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
            { menuItem: 'Step1', render: () => <BodyA /> },
            { menuItem: 'Step2', render: () => <BodyB /> },
            { menuItem: 'Step3', render: () => <BodyC /> }
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
