import React from 'react'
import './Adddevs.css'
import { Col, Container, Form, Row , Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import './Dashboard.css'


const Adddevs = () => {
// input data state
  const [ input , setInput ] = useState({})
// input data destracture
  const { name , photo , about } = input
// check data state
  const [ check ,  setCheck ] = useState({})

// handlePost by axios
  const handlepost = (e) => {
     e.preventDefault() 
     axios.post('http://localhost:9090/devs',{
         ...input,
         skill : Object.keys(check)
     }).then( res => {
         setInput({
             name : '',
             photo : '',
             about : '',
             location : ''
         })
     })
  }

// inputdata handle function
  const inputData = (e) => {
     let target = e.target
     let value = target.value
     let name  = target.name
     setInput({
         ...input,
         [name] : value,
     })
  }

// inputcheckdata handle
  const handleCheck = (e) => {
      let target = e.target
      let value  = target.value
      if(target.checked){
        setCheck({...check, [value] : true })
      }else{
          delete check[value]
      }
      
  }


  return (
     <section className='adddevsform'>
           <Container>
                <Row>
                    <Col lg={7}>
                     
                    </Col> 
                    <Col lg={5}>
                        <Form method='POST' onSubmit={ handlepost }>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='name' value={name} type="name" onChange={ e => inputData(e)} placeholder="Developer Name" />
                            
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Photo</Form.Label>
                                <Form.Control name='photo' value={photo} onChange={ e => inputData(e)} type="text" placeholder="Photo" />
                            </Form.Group>

                            <label className='my-2' htmlFor="">Gender</label>
                            <Form.Group className='addformcheck my-1'>
                                 <Form.Check onChange={ e => inputData(e)} type='radio' name='gender' value='Male' /> <Form.Label>Male</Form.Label>
                                 <Form.Check onChange={ e => inputData(e)} type='radio' name='gender' value='Female' /> <Form.Label>Male</Form.Label>
                            </Form.Group>
                            
                            <label htmlFor="">Location</label>
                            <Form.Select name='location' onChange={ e => inputData(e)}>
                            <option>---select---</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Khulna">Khulna</option>
                            </Form.Select>

                            <label className='' htmlFor="">Skill</label>
                            <Form.Group className='addformcheck my-3'>
                                 <Form.Check onChange={ e =>  handleCheck (e)} value='Mern'/> <Form.Label>Mern</Form.Label>
                                 <Form.Check onChange={ e =>  handleCheck (e)}  value='PHP' /> <Form.Label>PHP</Form.Label>
                                 <Form.Check onChange={ e =>  handleCheck (e)}  value='Python' /> <Form.Label>Python</Form.Label>  <Form.Check onChange={ e =>  handleCheck (e)}  value='Django' /> <Form.Label>Django</Form.Label>
                            </Form.Group>

                            <Form.Group>
                                  <textarea className='w-100' value={about} onChange={ e => inputData(e)}name="about" id="" cols="50" rows="10"></textarea>
                            </Form.Group>

                            <Button className='btn btn-success w-100' variant="primary" type="submit">
                                Submit
                            </Button>
                       </Form>
                    </Col>
                </Row>
           </Container>
     </section>
  )
}

export default Adddevs