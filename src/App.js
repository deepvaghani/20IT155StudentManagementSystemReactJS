import './App.css';
import Container from 'react-bootstrap/Container';
import AddStudent from "./Components/AddStudent";
import NavBar from "./Components/NavBar";
import ListStudent from "./Components/ListStudent";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Container>
          <Router>
              <NavBar/>
              <AddStudent/>
              <ListStudent/>
              <Routes>
                  <Route path="/student" element={<AddStudent/>} />
                  <Route path="/listStudents" element={<ListStudent/>} />
              </Routes>
          </Router>
      </Container>
  );
}

export default App;