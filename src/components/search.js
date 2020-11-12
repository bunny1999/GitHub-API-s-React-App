import React, { useState, useContext } from 'react'
import { Container, Input, Button, InputGroup } from 'reactstrap'
import { SearchContext } from '../context/context'
import { ADDSEARCH } from '../context/actions.types'
import { apisUser } from '../helper/search'
const Search = ()=>{
    const {stateSearch,dispatchSearch} = useContext(SearchContext)
    const [search, setSearch] = useState("");

    const onSearch= async ()=>{
        await apisUser({
            username:search
        }).then((data)=>{
            dispatchSearch({
                type:ADDSEARCH,
                payload:data
            });
        })
    }

    return (
        <Container className="my-5">
            <InputGroup>
                <Input className="mr-1" placeholder="Enter GitHub Username..." type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <Button color="info" className="input-group-append" onClick={onSearch} >Search</Button>
            </InputGroup>
        </Container>
    );
}

export default Search;