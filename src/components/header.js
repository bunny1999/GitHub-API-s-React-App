import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,Nav, NavbarText} from 'reactstrap'
import { UserContext, SearchContext } from '../context/context'
import { LOGOUT } from '../context/actions.types'

export default function Header() {
    
    const {stateUser,dispatchUser} = useContext(UserContext)
    const {stateSearch} = useContext(SearchContext);

    const logout=()=>{
        dispatchUser({
            type:LOGOUT
        })
    }
    
    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <NavbarToggler/>
                <Link to="/" className="text-white">GitApi App</Link>
            </NavbarBrand>
            {
                // TODO: 
            }
            <Collapse navbar>
                {   stateSearch?
                    (<Nav navbar>
                        <NavItem>
                            <Link to="/user/profile" className="text-white mr-2 bold">Profile</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/user/projects" className="text-white">Projects</Link>
                        </NavItem>
                    </Nav>):""
                }
                <Nav className="ml-auto" navbar>
                    <Nav className="mr-2">
                        {stateUser===null?
                            (<Nav>
                                <NavItem >
                                    <Link to="/signup" className="text-white mr-2">Signup</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/signin" className="text-white">Signin</Link>
                                </NavItem>
                            </Nav>
                        ):("")}
                        {stateUser!==null?(
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