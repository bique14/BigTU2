import React from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/Header.css'
import {BodyA} from './BodyA.js'
import {BodyB} from './BodyB.js'
import {BodyC} from './BodyC.js'
import {BodyD} from './BodyD.js'

export class Header extends React.Component {
    render() {
        const panes = [
            { menuItem: 'Step1', render: () => <BodyA /> },
            { menuItem: 'Step2', render: () => <BodyB /> },
            { menuItem: 'Step3', render: () => <BodyC /> },
            { menuItem: 'Step4', render: () => <BodyD /> }
        ]
        return (
            <div>
                <div className='div-card'>
                    <Tab panes={panes} />
                </div>
            </div>
        )
    }
}
