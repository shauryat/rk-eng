import styled from 'styled-components'

export const PreviewContainer = styled.div`

display:none;

@media (min-width:768px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;  
}
`;

export const MobileOnly = styled.div`

@media (min-width:768px) {
  display:none;  
}
`;

export const FontChelsea = styled.div`

font-family: 'Chelsea Market', cursive;

`;

export const Desktop = styled.div`

display:none;

@media (min-width:768px) {
  display:inline-block;  
}
`;

export const FontRoboto = styled.div`

font-family: 'Roboto', sans-serif;

`;

export const HorizontalList = styled.div`

overflow: auto;
white-space: nowrap;

`;

export const GradientBackground = styled.div`

background-color: #06bcfb;
background-image: linear-gradient(315deg, #06bcfb 0%, #4884ee 74%);

`;




