import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import Eror from '../components/error'
import { Container, Row, Col } from 'reactstrap'
import ProjectCard from '../components/project_card'
import Base from '../components/base'

const OwnerProjects = ()=>{
    
    const [values,setValues] = useState({
        projects:[],
        error:false,
        isLoading:true
    });
    
    const {projects,error,isLoading} = values
    
    useEffect(async ()=>{
        const url = "https://api.github.com/users/bunny1999/repos?per_page=100&type=owner";
        const response = await Axios.get(url);
        if (response.status == 200) {
            let prioData=[];
            let remData=[];
            response.data.map(data=>{
                const tempDis=data.description!==null
                    ?data.description.split('#')
                    :[]
                let dis="";
                let prio=false;
                let tags=[];
                if(tempDis!==[]){
                    dis=tempDis[0];
                    const tempPrio=tempDis[tempDis.length-1].split('*');
                    for(let i=1;i<tempDis.length;i++){
                        if(i===(tempDis.length-1)){
                            if(tempPrio===null || tempPrio.length<=1){
                                tags.push(tempDis[i]);
                            }
                        }else{
                            tags.push(tempDis[i]);
                        }
                    }
                    if(tempPrio!==null && tempPrio.length>1){
                        tags.push(tempPrio[0]);
                        prio=tempPrio[1]==='P'?true:false
                    }
                } 
                if(prio){
                    prioData.push({
                        name:data.name,
                        description:dis,
                        url:data.html_url,
                        link:data.homepage,
                        tags:tags,
                    })
                }else{
                    remData.push({
                        name:data.name,
                        description:dis,
                        url:data.html_url,
                        link:data.homepage,
                        tags:tags,
                    })
                }
            })
            setValues({...values,projects:prioData.concat(remData),isLoading:false})
        }else{
            setValues({...values,error:true,isLoading:false})
        }
    },[])

    return (
        <Base>
            {
                isLoading?(
                    <div>Loading</div>
                ):error?(
                    <Eror code="403" />
                ):(
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
                )           
            }
        </Base>
    )
}

export default OwnerProjects;