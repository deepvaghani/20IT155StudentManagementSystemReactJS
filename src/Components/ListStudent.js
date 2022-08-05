import {Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function ListStudent(){
    return(
        <Container>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Student Address</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
            </tr>
            </tbody>
        </Table>
        </Container>
    );
}

