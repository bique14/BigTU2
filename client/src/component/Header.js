import React from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/Header.css'

import { BodyA } from './BodyA.js'
import { BodyB } from './BodyB.js'
import { BodyC } from './BodyC.js'
var fs = require('fs');

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countData: 0,
            bodyA: '',
            bodyB: '',
            bodyC: ''
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

    getStateFormC = (state) => {
        this.setState({
            bodyC: state
        }, () => {
            console.log(this.state)
        })
    }

    getDataCount = (count) => {
        // console.log(typeof count)
        this.setState({
            countData: count
        }, () => {
            console.log('count', this.state.countData)
        })
    }

    exportFile = () => {
        var obj = {
            table: []
        }

        obj.table.push({
            "name_thai": this.state.bodyA.projectTH,
            "name_english": this.state.bodyA.projectEN,
            "province": this.state.bodyA.province,
            "start_date": this.state.bodyA.startDateShow,
            "due_date": this.state.bodyA.endDateShow,
            "project_manager": {
                "firstname": this.state.bodyA.projectManagerName,
                "lastname": this.state.bodyA.projectManagerSurname,
                "telnum": this.state.bodyA.projectManagerTel
            },
            "supplier_contact": {
                "construction_name": this.state.bodyA.constructionName,
                "supplier_contact": {
                    "firstname": this.state.bodyA.supplierName,
                    "lastname": this.state.bodyA.supplierSurname,
                    "telnum": this.state.bodyA.supplierTel,
                    "email": this.state.bodyA.Email
                }
            },
            "campus": {
                "address": this.state.bodyB.campAddress,
                "district": this.state.bodyB.campDistrict,
                "province": this.state.bodyB.campProvince,
                "have_the_good_space": this.state.bodyB.haveGoodSpace
            },
            "labors": [
                {
                    "firstname": this.state.bodyB.laborName,
                    "lastname": this.state.bodyB.laborSurname,
                    "telnum": this.state.bodyB.laborTel,
                    "id_number": this.state.bodyB.laborId,
                    "nationality": this.state.bodyB.laborNationality,
                    "occupation": this.state.bodyB.laborType,
                    "followers": [
                        {
                            "firstname": this.state.bodyC.childName,
                            "lastname": this.state.bodyC.childSurname,
                            "id_number": this.state.bodyC.childId,
                            "birthdate": this.state.bodyC.childBirthDay + '-'+ this.state.bodyC.childBirthMonth + '-'+ this.state.bodyC.childBirthYear,
                            "nationality": this.state.bodyC.chilNationality,
                            "gender": "male",
                            "have_injected_vaccine": false,
                            "medical_history": [
                                {
                                    "required_month": 1,
                                    "title": "BCG, HB1",
                                    "meet_date": "1990-07-03",
                                    "inject_date": "1990-07-04"
                                },
                                {
                                    "required_month": 2,
                                    "title": "OPV1, DTP-HB",
                                    "meet_date": "1990-08-03",
                                    "inject_date": "1990-08-04"
                                }
                            ],
                            "education_history": {
                                "have_been_study_in_thai": this.state.bodyC.isSchoolInThai,
                                "have_been_study_in_country": true,
                                "have_been_in_the_good_space": true,
                                "current_education": "ประถมศึกษา 1",
                                "educational_history": [
                                    {
                                        "title": "ระดับอนุบาล",
                                        "school_name": "โรงเรียนพม่า",
                                        "year": "1996"
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        })

    }

    render() {
        const panes = [

            // { menuItem: 'Step1', render: () => <BodyA getStateFormA={this.getStateFormA} /> },
            // { menuItem: 'Step2', render: () => <BodyB getStateFormB={this.getStateFormB} getDataCount={this.getDataCount} /> },
            { menuItem: 'Step3', render: () => <BodyC getStateFormC={this.getStateFormC} countData={this.state.countData} /> },

        ]
        return (

            <div>
                <div className='div-card'>
                    <Tab panes={panes} getStateFormA={this.getStateFormA} />
                    <button onClick={this.exportFile}>export</button>
                </div>
            </div>
        )
    }
}
