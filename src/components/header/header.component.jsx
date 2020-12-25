import {
  HeaderContainer, HeaderImage, HeaderCaption, Title, Info, DownButton
} from './header.styles';

const Header = () => {
  return(
    <HeaderContainer>
      <HeaderImage style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/profile-2.jpg'})`}}/>
      <HeaderCaption>
        <Title>
          Maulana Akbar
        </Title>
        <Info>Web Developer and Full Stack JS</Info>
        <DownButton/>
      </HeaderCaption>
    </HeaderContainer>
    
  )
};

export default Header;