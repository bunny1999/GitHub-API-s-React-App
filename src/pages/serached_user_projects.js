import React, {useContext, useState, useEffect } from 'react'
import {Container,Row,Col} from 'reactstrap'
import ProjectCard from '../components/project_card'
import { SearchContext } from '../context/context';
import Base from '../components/base';
import { Redirect } from 'react-router-dom';

const SearchedUserProjects = ()=>{
    
    const [projects,setProjects] = useState([]);
    const {stateSearch} = useContext(SearchContext);

    useEffect(() => {
        if(stateSearch===null){
            //TODO:
            return <Redirect to='/' />;
        }
        const {repos} = stateSearch;
        const data = repos.map(data=>{
                return {
                    name:data.name,
                    description:data.description,
                    url:data.html_url,
                    link:data.homepage,
                    tags:[data.language],
                }
            }
        )
        setProjects(data);
    }, [])
    
    return (
        <Base>
            <Container fluid>
                <Row>
                    {
                        projects.map(project=>(
                            <Col md="4" className="mt-2 mb-2" key={project.name}>
                                <ProjectCard
                                    title={project.name}
                                    description={project.description}
                                    tags={project.tags}
                                    link={project.link}
                                    url={project.url}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Base>
    )

}

export default SearchedUserProjects;