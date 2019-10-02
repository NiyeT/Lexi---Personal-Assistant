import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
  padding: 0 3.5%;
`;

function Body({children}) {
    return <StyledBody>{children}</StyledBody>
}

export default Body;