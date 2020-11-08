import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,Nav} from 'reactstrap'
import { UserContext } from '../context/context'
import { LOGOUT } from '../context/actions.types'

export default function Header() {
    
    const {state,dispatch} = useContext(UserContext)

    const logout=()=>{
        dispatch({
            type:LOGOUT
        })
    }
    
    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <NavbarToggler/>
                <Link to="/" className="text-white">GitApi App</Link>
            </NavbarBrand>
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <Nav className="mr-2">
                        {state===null?
                            (<Nav>
                                <NavItem >
                                    <Link to="/signup" className="text-white mr-2">Signup</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/signin" className="text-white">Signin</Link>
                                </NavItem>
                            </Nav>
                        ):("")}
                        {state!==null?(
                            <NavItem>
                                <Link to="/signin" onClick={logout} className="text-white">Logout</Link>
                            </NavItem>
                        ):("")}
                    </Nav>
                    <NavItem>
                        <Link to="/owner_projects" className="text-white border border-white p-2">Owner Projects</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}