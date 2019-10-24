import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'react-strap';
class HomePage extends Component{
    render() {
        return(
            <div >
                <Navbar color="light" light expand="md" className="fixed-top">
                    <NavbarBrand href="/"><img src="https://image.shutterstock.com/image-vector/abstract-letter-dy-yd-minimal-260nw-1289830444.jpg"/>>

                    </NavbarBrand>
                </Navbar>
            </div>
        )

    }
}