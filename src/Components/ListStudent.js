import {Card, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function ListStudent(){
    return(
        <Container>
            <div>
                <Card className="mb-3">
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
                </Card>
            </div>
        </Container>
    );
}

