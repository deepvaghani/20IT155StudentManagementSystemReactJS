import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Table, Button } from "react-bootstrap";

export default function ListStudent() {

    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/listStudents")
            .then(response => setStudent(response.data))
            .catch(error => alert(error));
    }, [])

    let deleteRecord = (id) => {
        axios.delete("http://localhost:8080/student/"+id)
            .then(response => {
                if(response.data != null)
                    alert("Record Deleted");
            });
    }

    return (
        <div className="my-3">
            <Container>
                <Card.Header><h3>Students List</h3></Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Student Name</th>
                            <th>Student Address</th>
                            <th>Edit/Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {student.map(student => (
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.address}</td>
                                <td>
                                    <Button variant="success">Edit</Button>{' '}
                                    <Button variant="primary" onClick ={ () => deleteRecord(student.id)}>Delete</Button>{' '}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Container>
        </div>
    );
}
