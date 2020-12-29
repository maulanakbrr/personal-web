import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import ContactForm from '../contact-form/contact-form.component';

import { ContactContainer, ContactRow, Title, Desc } from './contact.styles';

const Contact = () => {
  return(
    <ContactContainer id='contact'>
      <ContactRow>
        <Col lg={6} md={12} className='mb-5'>
          <Container fluid>
            <Row>
              <Title>Contact</Title>
              <Desc className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consequatur? Suscipit asperiores architecto sint iste illo voluptatibus.</Desc>
              <div style={{ width: '100%', textAlign: 'justify' }}> 
                <span>Email: name@example.com</span><br/>
                <span>Tel: +62 890 2929 2939</span>
              </div>
            </Row>
          </Container>
        </Col>
        <Col lg={6} md={12}>
          <Fade>
            <ContactForm/>
          </Fade>
        </Col>
      </ContactRow>
    </ContactContainer>
  );
};

export default Contact;