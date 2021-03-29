import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
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
            <ProfileImage src='https://robohash.org/akbar' alt='profile image' fluid/>  
          </Fade>
        </Col>
        <Col xl={9} md={9} sm={12} className='pt-2'>
          <Container fluid>
            <Row className='profile-title'>
              <Subtitle >Profile</Subtitle>
            </Row>
            <Row>
              <Desc className='text-justify profile-desc'>
                Recent bachelor's degree recipient with a background in information technology. Over 2 years of experience working on freelance web developer and skilled in HTML, CSS and JavaScript. I have a good adaptability that makes me can live in new surrounding. I like to learn something new and I'm also a fast learner. Currently still honing my skills and getting deeper with MERN stack. I love to meet new people and know each other. If your hobby is playing guitar, I think we can make a band together. 
              </Desc>
            </Row>
            <IconsContainer>
              <Icon href='https://www.instagram.com/maulanakbrr/' target='_blank'>
                <FaInstagram/>
              </Icon>
              <Icon href='https://twitter.com/livewtme' target='_blank'>
                <FaTwitter/>
              </Icon>
              <Icon href='https://github.com/maulanakbrr' target='_blank'>
                <FaGithub/>
              </Icon>
              <Icon href='https://github.com/maulanakbrr' target='_blank'>
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