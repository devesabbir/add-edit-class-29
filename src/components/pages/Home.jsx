import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
// get data state
  const [ devs, setDevs ] = useState([])

// get Data axios
  useEffect( () => {
      axios.get('http://localhost:9090/devs').then( res => {
         setDevs(res.data)
      })
  },[devs])



  return (
     <section className='team'>
         <Container>
                <Row className='my-3'>
                    
                       {
                        devs.map( data => (
                           
                            

                            <Col lg={3} className='my-3'>
                            <div className="team-member">
                                <figure>
                                     <img src={data.photo} alt="" />
                                     <figcaption>
                                        <p>{data.about}</p>
                                    </figcaption>
                                 </figure> 
                              
                                <h4>{data.name}</h4>
                               <Link to={`/single/${data.id}`}> View </Link>
                              
                          {
                            data.location && <p>{`${data.location}`}</p>
                          }
                          
                           {
                           data.skill &&  <p>{`${data.skill}`}</p>
                          }  
                            
                            <p>{data.gender}</p>
                        
                            </div>
                        </Col>
                        ))
                    }
                    
                </Row>
         </Container>
     </section>
  )
}

export default Home