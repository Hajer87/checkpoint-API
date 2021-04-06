import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import {useState} from 'react'
import '../styles/user.css'
function Profile({user}) {
          const [show, setShow] = useState(false);

          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);

  return (
    <>
     <Button onClick={handleShow} variant="primary" size="lg" active>
                      
   Show more
  </Button>{' '}

      <Modal className= "modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <span style={{ textSize:"x-large", fontWeight:"bold"}}>Adresse:</span>
                 
                    <p>{user.address.street}, {user.address.suite}, {user.address.city}</p>
        <span style={{ textSize:"x-large", fontWeight:"bold"}}>Company :</span>
        <br/>
        <p> {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
                  </Modal.Footer>
      </Modal>
    </>
  );
}

export default Profile
