import styled from 'styled-components';
import {
  Container, Col, Row
} from 'react-bootstrap';

export const ProfessionalContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    min-height: 70vh;
    padding-top: 90px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  
  @media screen and (max-width: 992px){
    font-size: 2.5rem;
  }
`;

export const Desc = styled.p`
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

// export const Skill = styled.div`
//   display: flex;
//   margin-bottom: 1rem;
//   justify-content: space-between;
// `;

export const SkillName = styled(Col)`
  font-size: 1.1rem;
  font-weight: 500;
  width: 7rem;
  text-align: justify;
`;

export const SkillProgress = styled(Col)`
  /* width: 30rem; */
  display: inline-block;
  position: relative;
  margin-top: 6px;
`;

export const SkillPercent = styled(Col)`
  font-size: 1.1rem;
`;
