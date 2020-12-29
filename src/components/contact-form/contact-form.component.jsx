import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = userData;

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userData);
    setUserData({
      name: '',
      email: '',
      message: ''
    });
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }
  
  return (
    <div style={{
      padding: '20px',
      borderRadius: '1.5%',
      backgroundColor: '#292928'
    }}>
      <Form className='text-left' onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label className=" text-white">Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="enter name" value={name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="enter email" value={email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label className="text-white">Message</Form.Label>
          <Form.Control name='message' as="textarea" rows={3} placeholder='enter message' value={message} onChange={handleChange}/>
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-3'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;