import React from 'react'
import GitLogo from '../gitHubLogo.png';
import { Card, CardBody,Row,Col, Badge } from 'reactstrap'
import {FaLink} from 'react-icons/fa'

export default function ProjectCard({title,description,tags=[],link,url}) {
    return (
        <Card className="p-2 rounded-top" >
            {
                link?(
                    <div className="text-right">
                        <Badge href={link} target="_blank" color="warning"><a>Live <FaLink/></a></Badge>
                    </div>
                ):("")
            }
            <CardBody className="p-2">
                <Row>
                    <Col md="2">
                        <img src={GitLogo} width="60" height="60"/>
                    </Col>
                    <Col md="10">
                        <h4><a href={url} target="_blank" className="text-dark">{title}</a></h4>
                        <p>{description}</p>
                    </Col>
                </Row>
                <hr style={{border:"0.5px solid #bbb"}}/>
                <Row className="m-1">
                    {
                        tags.map(tag=>(
                            <Badge  color="info" className="mr-2 mb-2 badge-pill">{tag}</Badge>
                        ))
                    }
                </Row>
            </CardBody>
        </Card>
    )
}
