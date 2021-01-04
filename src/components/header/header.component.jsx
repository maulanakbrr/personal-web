import {
  HeaderContainer, HeaderImage, HeaderCaption, HeaderTitle, HeaderInfo, DownButton
} from './header.styles';

const Header = () => {
  return(
    <HeaderContainer id='home'>
      <HeaderImage style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/profile-2.jpg'})`}}/>
      <HeaderCaption>
        <HeaderTitle>
          Maulana Akbar
        </HeaderTitle>
        <HeaderInfo>Web Developer and Full Stack JS</HeaderInfo>
        <a href="#profile">
          <DownButton/>
        </a>
      </HeaderCaption>
    </HeaderContainer>
    
  )
};

export default Header;