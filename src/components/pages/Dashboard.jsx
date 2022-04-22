import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Container, Form, Row , Table , Button} from 'react-bootstrap'
import 'boxicons';


const Dashboard = () => {
// datagetState
  const [ devs , setDevs ] = useState([])
// editDatastate
  const [ editdata , setEditdata ] = useState('')
  const [ check , setCheck ] = useState({})
// editdatadistracture
  const { id , name , photo , about , gender} =  editdata


// dataget
  useEffect(() => {
      axios.get('http://localhost:9090/devs').then( res => {
         setDevs(res.data)
      })
  },[devs])

// datadelete
  const datadelete = (id) => {
        axios.delete(`http://localhost:9090/devs/${id}`)  
  }
// dataedit
  const edit = (id) => {
      axios.get(`http://localhost:9090/devs/${id}`).then( res => {
          setEditdata(res.data)
      })  
  }
// dataedithandle
  const handleEdit = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:9090/devs/${editdata.id}`, {
      ...editdata,
      skill : Object.keys(check)
    }).then( res => {
      setEditdata('')
    })
    
  }
// editdatahandel
  const handleEditdata = (e) => {
       let target = e.target
       let value  = target.value
       let name  = target.name
       setEditdata({
        ...editdata,
          [name] : value
       })
  }

// checkdatahandle
  const handleCheck = (e) => {
      let target = e.target
      let value = target.value
      if(target.checked){
        setCheck({
          ...check,
          [value] : true
        })
      }else{
        delete check[value]
      }
  }

 
  return (
    <section className='dashboard-sec'>
         <Container>
                <Row>
                    <Col lg={12}>
                 <Table striped bordered hover size="sm">
                    <thead>
                      {
                        devs[0] && 
                        <tr>
                        <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                       
                      }
                       </thead>
                    <tbody>
                        
                        {
                          devs.map( data => (
                          <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td><img src={data.photo} alt="" /></td>
                            <td>{data.about}</td>
                            <td style={{justifyContent :'center', display : 'flex', gap : '0px 10px', alignItems : 'stretch'}} ><button onClick={ e => datadelete(data.id) } className='btn btn-danger'><box-icon type='solid' name='trash-alt'></box-icon></button>
                            <button onClick={ e => edit(data.id) } className='btn btn-success'><box-icon type='solid' name='edit'></box-icon></button>
                            </td>
                     
                        
                          </tr>
                          ))
                        }
                      
                    </tbody>
                 </Table>
                    </Col>
                </Row>
                {
                
                editdata &&  ( <Row>
                  <Col lg={5}  className="editForm">
                       <Form  method="PATCH" id="editForm"  onSubmit={ handleEdit }>
                       <Form.Group className="mb-3" controlId="formBasicPassword">
                             <Form.Label>Name</Form.Label>
                             <Form.Control value={name} onChange={ e => handleEditdata(e)} type="text" placeholder="Photo" />
                         </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicPassword">
                             <Form.Label>Photo</Form.Label>
                             <Form.Control value={photo} onChange={ e => handleEditdata(e)} type="text" placeholder="Photo" />
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formBasicPassword">
                          
                             <Form.Control value={id} onChange={ e => handleEditdata(e)} type="text" placeholder="Photo" hidden/>

                           </Form.Group>
                            

                           <label className='my-2' htmlFor="">Gender</label>
                            <Form.Group className='addformcheck my-1'>
                                 <Form.Check  onChange={ e => handleEditdata(e)} type='radio' name='gender' value='Male' /> <Form.Label>Male</Form.Label>
                                 <Form.Check  onChange={ e => handleEditdata(e)} type='radio' name='gender' value='Female' /> <Form.Label>Male</Form.Label>
                            </Form.Group>
                          
                           <Form.Select name='location' onChange={ e => handleEditdata(e)} >
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
                               <textarea value={about} onChange={ e => handleEditdata(e)} name="about" id="" cols="50" rows="10"></textarea>
                         </Form.Group>

                       
                         <Button variant="primary" type="submit">
                             Done
                         </Button>
                       </Form>
                  </Col>
              </Row>)
                }
           </Container>   
    </section>
  )
}

export default Dashboard