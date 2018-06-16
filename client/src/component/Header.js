import React from 'react'
import { Tab,Grid, Divider } from 'semantic-ui-react'
import '../css/Header.css'
import { BodyA } from './BodyA.js'

export class Header extends React.Component {
    render() {
        const panes = [
            { menuItem: 'ข้อมูลโครงการ', render: () => <BodyA /> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
        ]
        return (
            <div>
                <div className='div-card'>
                    <Grid columns={3} relaxed>
                        <Grid.Column>
                            <Tab panes={panes} />
                        </Grid.Column>
                        <Divider vertical>Or</Divider>
                        <Grid.Column>
                            <Tab panes={panes} />

                        </Grid.Column>
                        <Divider vertical>And</Divider>
                        <Grid.Column>
                            <Tab panes={panes} />

                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}