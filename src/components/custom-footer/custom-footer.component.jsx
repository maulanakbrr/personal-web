import {
  Footer,
  FooterBrand,
  Copyright
} from './custom-footer.styles';

const styles = {
  color: '#fff'
}

const CustomFooter = () => {
  return(
    <Footer>
      <FooterBrand href="#home" style={styles}>MLBR</FooterBrand>
      <Copyright>&#169; 2020 MLBR. All Rights Reserved</Copyright>
    </Footer>
  );
};

export default CustomFooter;