import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import axios from "axios";
import {Card} from "react-bootstrap";

export default function AddStudent(){
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();

    const student = {
        id : id,
        name : name,
        address : address
    }

    function textChange(event){
        if(event.target.name === "id")
            setId(event.target.value);
        else if(event.target.name === "name")
            setName(event.target.value);
        else if(event.target.name === "address")
            setAddress(event.target.value);
    }

    let saveStudent = (event) => {
        //  alert(id + name + address);
        event.preventDefault();
        axios.post("http://localhost:8080/student", student)
            .then(response => {
                if (response.data != null){
                    alert("Record Saved Successfully");
                }
            })
            .catch(error => alert(error));
    }

    return(
        <Container>
            <div>
                <Card className="my-3">
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
                </Card>
            </div>
        </Container>
    );
}