import {Card, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ListStudent(){

    const [student, setStudent] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/listStudents")
            .then(response => setStudent(response.data))
            .catch(error => alert(error));
    },[])

    return(
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
                        </tr>
                        </thead>
                        <tbody>
                        {student.map(student => (
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Container>
        </div>
    );
}

