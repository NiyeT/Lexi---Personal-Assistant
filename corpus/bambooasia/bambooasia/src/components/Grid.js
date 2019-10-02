import styled from 'styled-components'

export const Row = styled.div`
  padding-bottom: 70px;
  padding-top: 70px;
  display: flex;
  flex-direction: ${props => props.sectionType === "Image Left" ? "row-reverse" : "row"};
  @media (max-width: ${props => props.theme.responsive.small}) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 0 0 50%;
  @media (max-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 100%;
  }
  padding-left: 15px;
  padding-right: 15px;
`;

export const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 50px;
  }
  @media (max-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 1fr;
    padding-bottom: 50px;
  }
  grid-column-gap: 20px;
`;
