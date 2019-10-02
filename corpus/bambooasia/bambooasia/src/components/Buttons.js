import styled from 'styled-components'

// put all buttons here

export const CommerceButton = styled.button`
  border: 2px solid #f26722;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  background-color: #f26722;
  transition: all 0.3s ease 0s;
  letter-spacing: 0.6px;
  margin-left: 4px;
  cursor: pointer;
  box-shadow: none;
  border-radius: 0;

  &:disabled {
    border: 2px solid lightgray;
    background-color: lightgray;
    cursor: not-allowed;
  }
`;


export const CommerceButtonSecondary = styled.button`
  border: 2px solid lightgray;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  background-color: lightgray;
  transition: all .3s ease 0s;
  letter-spacing: .6px;
  margin-left: 4px;
  cursor: pointer;
  box-shadow: none;
  border-radius: 0;

  &:hover {
    border: 2px solid darkgray;
    background-color: lightgray;
  }

  &:disabled {
    border: 2px solid lightgray;
    background-color: lightgray;
    cursor: not-allowed;
  }
`;
