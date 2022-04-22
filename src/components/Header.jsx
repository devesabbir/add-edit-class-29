import React from 'react'
import { Container , Row , Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

const logo = '../logo512.png'


const Header = () => {
  return (
     <header>
          <Container>
              <Row className='align-items-center'>
                  <Col lg={3}>
                       <div className="logo">
                           <Link to=''> <img src={logo} alt="Logo" /></Link>
                       </div>
                  </Col>
                  <Col lg={9}>
                       <Nav className='justify-content-end '>
                           <Nav.Item>
                               <Link to="/">Home</Link>   
                           </Nav.Item> 
                           <Nav.Item>
                               <Link to="/dashboard" >Dashbord</Link>   
                           </Nav.Item> 
                           <Nav.Item>
                               <Link to='/adddevs'>Add Devs</Link>   
                           </Nav.Item>
                         
                       </Nav>
                  </Col>
              </Row>
          </Container>
     </header>
  )
}

export default Header