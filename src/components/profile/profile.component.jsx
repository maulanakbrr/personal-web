import {
  Container, Row, Col
} from 'react-bootstrap';

import {
  FaInstagram, FaTwitter, FaGithub
} from 'react-icons/fa';

import {
  ProfileContainer, ProfileImageContainer, Image, Title, Desc, IconsContainer, Icon
} from './profile.styles';

const Profile = () => {
  return (
    <ProfileContainer>
      <Row>
        <Col xl={4}>
          <ProfileImageContainer>
            <Image src='https://robohash.org/akbar' alt='profile-img' />  
          </ProfileImageContainer>
        </Col>
        <Col xl={8} className='pt-2'>
          <Container fluid>
            <Row>
              <Title>Profile</Title>
            </Row>
            <Row>
              <Desc className='text-justify'>
                Dolor deserunt laboris duis id veniam consequat aliquip et culpa amet eiusmod irure duis. Ad ullamco dolore dolore sunt ullamco ullamco fugiat labore. Adipisicing sunt quis duis nostrud laborum exercitation aute ipsum labore dolor voluptate tempor. Magna voluptate ad culpa irure voluptate velit dolore. Esse excepteur laborum elit sit ipsum. Enim reprehenderit cillum officia elit exercitation culpa magna in pariatur aute dolor commodo esse id. Quis ipsum exercitation consequat sunt.
              </Desc>
            </Row>
            <IconsContainer>
              <Icon href=''>
                <FaInstagram/>
              </Icon>
              <Icon>
                <FaTwitter/>
              </Icon>
              <Icon>
                <FaGithub/>
              </Icon>
            </IconsContainer>
          </Container>
        </Col>
      </Row>
    </ProfileContainer>
  );
};

export default Profile;