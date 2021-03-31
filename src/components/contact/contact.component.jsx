import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import ContactForm from '../contact-form/contact-form.component';

import { Subtitle, Desc } from '../../App.styles';

import { ContactContainer, ContactRow } from './contact.styles';

const Contact = () => {
  return(
    <ContactContainer id='contact'>
      <ContactRow>
        <Col md={6} xs={12} className='mb-5'>
          <Container fluid>
            <Row>
              <Subtitle>Get in touch</Subtitle>
              <Desc className='text-justify'>
                There's nothing impossible to build your dream website. Let's make it come true! 
              </Desc>
              <div style={{ width: '100%', textAlign: 'justify', fontSize: '1rem'}}> 
                <span>Email: amaulanaa995@gmail.com</span><br/>
                <span>Phone: +62 890 2929 2939</span>
              </div>
            </Row>
          </Container>
        </Col>
        <Col md={6} xs={12}>
          <Fade>
            <ContactForm/>
          </Fade>
        </Col>
      </ContactRow>
    </ContactContainer>
  );
};

export default Contact;