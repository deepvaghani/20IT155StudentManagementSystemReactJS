import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import axios from "axios";

export default function AddStudent(){
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();

    function textChange(event){
        if(event.value.name === "id")
            setId(id);
        else if(event.value.name === "name")
            setName(name);
        if(event.value.name === "address")
            setAddress(address);
    }

    const student = {
        id : id,
        name : name,
        address : address
    }

    let saveStudent = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/student", student)
            .then(response => {alert(response.data);})
            .catch(error => {console.log(error.data);})
    }

    return(
        <Container>
        <Form onSubmit={saveStudent}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ID</Form.Label>
                <Form.Control name = "id" value={id} type="text" placeholder="Enter ID"  onChange={textChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name = "name" value={name} type="text" placeholder="Enter Name" onChange={textChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control name = "address" value={address} type="text" placeholder="Enter Address" onChange={textChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    );
}