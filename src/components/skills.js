import React from 'react'
import {Row,Badge } from 'reactstrap'

const Skills = ({skilsList,className})=>{
    return (
        <Row className={className}>
            {
                skilsList.map(skill=>(
                    <Badge  color="info" className="mr-2 mb-2 badge-pill">{skill}</Badge>
                ))
            }
        </Row>
    )
}

export default Skills;