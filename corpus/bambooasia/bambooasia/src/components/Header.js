import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
    font: 36px/1.2em "BrownProBold",sans-serif;
    letter-spacing: 0;
    font-weight: 500;
    line-height: 30px;
    position: relative;
    display: inline-block;
    color: #58585a;
    text-align: left;
    margin-left: 19px;
    margin-bottom: 36px;
    ::after {
        position: absolute;
        content: "";
        width: 30px;
        height: 6px;
        background-color: #e44c2a;
        top: 50%;
        left: -20px;
        margin-top: -5px;
    }
`;

const Header = ({children}) => (
 <StyledHeader>{children}</StyledHeader>
)

export default Header
