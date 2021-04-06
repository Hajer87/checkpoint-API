import axios from 'axios'
import  {useState, useEffect} from "react"
import User from './User'
import {Col, Row} from 'react-bootstrap'

function UsersList() {
          
          const [listOfUSer, setListOfUSer] = useState([]);

  const fetchListOfUSer = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUSer(res.data))
      .catch();
  };

  useEffect(() => {
    fetchListOfUSer();
  }, []);

        return(
                  <Row>
 {listOfUSer.map((user, index) => (<Col> <User user={user} key={index} /></Col>
      ))}
                  </Row>               
                
        )    
}

export default UsersList
