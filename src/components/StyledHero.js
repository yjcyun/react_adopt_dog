import styled from 'styled-components';
import defaultImg from '../images/dog-6.jpg';

const StyledHero = styled.header`
  min-height: 70vh;
  background: url(${props => props.img ? props.img : defaultImg});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledHero;