import axios from 'axios'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'




const Singlepage = () => {
// getParams & state
   const { id } = useParams()
   const [ single , setSingle ] = useState({})
// state update with axios
  useEffect( () => {    
    axios.get('http://localhost:9090/devs/'+id).then( res => {
      setSingle(res.data)
   })

  },)


  return (
     <section>
         <Container>
             <Row>
                <Col lg={12}>
                     <Card>
                          <h1>{single.name}</h1>
                          <img src={single.photo} alt="" />
                      </Card> 
                </Col>
             </Row>
         </Container>
     </section>
  )
}

export default Singlepage