import styled from 'styled-components';
import {
  Container, Col, Row
} from 'react-bootstrap';

export const ProfessionalContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;

  @media screen and (max-width: 767px) {
    
    padding-top: 90px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 575px){
    padding: 0px 35px;
    padding-top: 90px;
  }
`;

export const ProfessionalTitle = styled.h2`
  font-size: 3.5rem;
  width: 100%;
  text-align: justify;
  
  @media screen and (max-width: 992px){
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px){
    text-align: center;
  }
`;

export const ProfessionalDesc = styled.p`
  font-size: 1.1rem;

  @media screen and (max-width: 992px){
    font-size: 1rem;
  }
`;

export const SkillContainer = styled(Col)`
  
`;

export const Skill = styled(Row)`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
`;

export const SkillName = styled(Col)`
  font-size: 1rem;
  font-weight: 500;
  width: 7rem;
  text-align: justify;
`;

export const SkillProgress = styled(Col)`
  display: inline-block;
  position: relative;
  margin-top: 6px;
`;

export const SkillPercent = styled(Col)`
  font-size: 1rem;
`;
