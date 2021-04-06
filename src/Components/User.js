import React from 'react'
import { Card} from 'react-bootstrap'

import '../styles/user.css'
import Profile from './Profile'

function User({ user }) {
  
  return (
    <div>


<Card style={{ width: '25rem'}} className='main-card'>
                <Card.Img variant="top" src="data:image/png;base64,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" />
                <Card.Body className="cardBody">
                    <Card.Title><span style={{fontSize:"x-large", textDecoration:'underline' ,color:"blue"}}> {user.name}:</span> {user.username}</Card.Title>
                    <Card.Text>
                        {user.email}
                    </Card.Text>
                    <Card.Text>{user.phone}</Card.Text>
                   <Profile user={user}/>
                </Card.Body>
            </Card>

</div>

     
      )}




     
      
     
       
      

      

    

export default User;
