import React, {useContext, useState, useEffect } from 'react'
import { Container, Row, Col, Card, CardBody, Table, CardHeader, Progress } from 'reactstrap'
import { SearchContext, LoadingContext } from '../context/context';
import Avatar from '../avataaars.svg'
import Base from '../components/base';
import { Redirect } from 'react-router-dom';
import Skills from '../components/skills';
import {TableRow,TableRowLink} from '../components/table_row';
import { FaLink, FaTwitter, FaUser } from 'react-icons/fa';
import { ISDONE } from '../context/actions.types';

const SearchedUserProfile = ()=>{
    const {stateSearch} = useContext(SearchContext);
    const {stateLoading,dispatchLoading} = useContext(LoadingContext);
    
    const [values,setValues] = useState({
        img:null,
        username:null,
        name:null,
        bio:null,
        email:null,
        location:null,
        follwers:null,
        followings:null,
        blog:null,
        twitter:null,
        giturl:null,
        repo_count:null,
        last_update:null,
        skills:{}
    });

    const {
        img,
        username,
        email,
        bio,
        name,
        location,
        followings,
        follwers,
        blog,
        twitter,
        giturl,
        repo_count,
        last_update,
        skills
    } = values
    
    useEffect(() => {
        if(stateSearch===null){
            //TODO:
            return <Redirect to='/' />;
        }
        const {user,repos} = stateSearch;
        
        repos.map(data=>{
            return data.language
        });

        setValues({
            img :user.avatar_url,
            username : user.login,
            name : user.name,
            blog : user.blog,
            twitter: user.twitter_username,
            giturl : user.html_url,
            location : user.location,
            email : user.email,
            bio : user.bio,
            repo_count : user.public_repos,
            last_update : user.updated_at,
            skills:Array.from(new Set(skils))
        })
        dispatchLoading({
            type:ISDONE
        })
    }, [])

    return (
        <Base>
            {!stateLoading?(
                <Container fluid className="p-5">
                    <Row>
                        <Col className="text-center">
                            <img src={img} className="mb-5 rounded-circle" height="250" width="250"/>
                            <Container className="text-left mb-3">
                                <Row>
                                    <Col>
                                        <h4>{username}</h4>
                                    </Col>
                                    <Col className="text-center">
                                        <h4>200</h4>
                                        <p>Followers</p>
                                    </Col>
                                    <Col className="text-center">
                                        <h4>10</h4>
                                        <p>Followings</p>
                                    </Col>
                                </Row>
                                {bio}
                            </Container>
                        </Col>
                        <Col>
                            <Table>
                                <tbody className="text-left">
                                    <TableRow heading="Name" value={name}/>
                                    <TableRow heading="Email" value={email}/>
                                    <TableRow heading="Location" value={location}/>
                                    <TableRow heading="Projects (public)" value={repo_count}/>
                                    <TableRowLink heading="Website" link={blog} icon={<FaUser/>} />
                                    <TableRowLink heading="Twitter" link={twitter} icon={<FaTwitter/>} /> 
                                    <TableRowLink heading="Github Link" link={giturl} icon={<FaLink/>} />
                                    <TableRow heading="Last Update" value={last_update}/>
                                </tbody>
                            </Table>
                            {   skills!==[]?
                                <Card>
                                    <CardHeader className="text-left">
                                        <h4>Skills</h4>
                                    </CardHeader>
                                    <CardBody>
                                        <Skills skilsList={skills} className="m-1" />
                                    </CardBody>
                                </Card>
                                :""
                            }
                        </Col>
                    </Row>
                </Container>
                )
                :(
                    <Progress/>
                )
            }
        </Base>
    );
}

export default SearchedUserProfile;