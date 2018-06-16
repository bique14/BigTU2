import React from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/Header.css'

export class BodyA extends React.Component {
    render() {
        return (
            <div>
                <Tab.Pane attached={false}>AA</Tab.Pane>
            </div>
        )
    }
}