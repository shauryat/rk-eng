import styled from 'styled-components'

export const PreviewContainer = styled.div`

display:none;

@media (min-width:768px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;  
}
`;

export const MobileOnly = styled.div`

@media (min-width:768px) {
  display:none;  
}
`;