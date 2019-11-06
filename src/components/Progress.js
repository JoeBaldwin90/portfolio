import styled from 'styled-components';

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    rgba(155, 186, 143, 0.9) ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 4px;
  z-index: 3;
`;

export default Progress;
