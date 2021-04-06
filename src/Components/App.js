import UsersList from "../Components/UsersList";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from 'react-bootstrap'
import "../styles/App.css";

function App() {
  return (
    <div className="app">
       <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home" style ={{ fontSize:"xx-large", }}>
    Users List
    </Navbar.Brand>
  </Navbar>
      <UsersList />
    </div>
  );
}

export default App;
