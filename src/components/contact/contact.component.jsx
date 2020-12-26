import { Container, Row, Col } from 'react-bootstrap';

import ContactForm from '../contact-form/contact-form.component';

import { ContactContainer, Title, Desc } from './contact.styles';

const Contact = () => {
  return(
    <ContactContainer>
      <Row>
        <Col>
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
        <Col>
          <ContactForm/>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;