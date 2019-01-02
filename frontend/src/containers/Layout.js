import React from 'react'
import {Container} from 'react-bulma-components'
import Header from '../components/Header';



class Layout extends React.Component {
    state = {

    }
    render(){
        return(
           <Container fluid>
            <Header />
           </Container>
        )
    }
}

export default Layout