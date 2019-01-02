import React from 'react'
import {Navbar} from 'react-bulma-components'

class Header extends React.Component {
    state = {

    }
    render(){
        return(
            <Navbar color="primary" fixed="top">
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="/">
                        Project Thai
                    </Navbar.Item>
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header