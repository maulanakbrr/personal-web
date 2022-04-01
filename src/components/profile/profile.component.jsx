import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfilePhoto from '../../assets/2-3.jpg'
import Fade from 'react-reveal/Fade';

import { Subtitle, Desc } from '../../App.styles';

import {
  ProfileContainer, ProfileImage, IconsContainer, Icon
} from './profile.styles';

const Profile = () => {
  return (
    <ProfileContainer id='profile'> 
      <Row>
        <Col xl={3} md={3} sm={12}>
          <Fade left>
            <ProfileImage src={ProfilePhoto} alt='profile image' fluid/>  
          </Fade>
        </Col>
        <Col xl={9} md={9} sm={12} className='pt-2'>
          <Container fluid>
            <Row className='profile-title'>
              <Subtitle >Profile</Subtitle>
            </Row>
            <Row>
              <Desc className='text-justify profile-desc'>
                I'm a Software Engineer that specialize on Frontend. I have more than 2 years on translate designs and business requirement into an interactive Web UI and based on specifications. I like to learn something new that I never have because I am a fast learner person. I can manage time well and can work both in team or individually.
              </Desc>
            </Row>
            <IconsContainer>
              <Icon href='https://www.instagram.com/maulanakbrr/' target='_blank' rel="noopener noreferrer">
                <FaInstagram/>
              </Icon>
              <Icon href='https://twitter.com/livewtme' target='_blank' rel="noopener noreferrer">
                <FaTwitter/>
              </Icon>
              <Icon href='https://github.com/maulanakbrr' target='_blank' rel="noopener noreferrer">
                <FaGithub/>
              </Icon>
              <Icon href='https://www.linkedin.com/in/amaulanaa/' target='_blank' rel="noopener noreferrer">
                <FaLinkedin/>
              </Icon>
            </IconsContainer>
          </Container>
        </Col>
      </Row>
    </ProfileContainer>
  );
};

export default Profile;