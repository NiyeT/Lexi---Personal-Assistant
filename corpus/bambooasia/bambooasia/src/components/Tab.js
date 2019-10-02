import React, { Component } from 'react';
import styled from 'styled-components'

const TabItem = styled.li.attrs(({ theme, active }) => ({
  color: active ? theme.colors.secondary : theme.colors.brandSecondary,
}))`
  padding: .4em 1em;
  max-height: ${props => props.active ? '50px': '30px'};
  position: ${props => props.active ? 'relative': 'relative'};
  top: ${props => props.active ? '1px': '0'};
  background-color: ${props => props.color};
  cursor: pointer;
  color: ${props => props.active ? 'white': 'black'};
  border-top: 1px solid black;
  border-left: 1px solid black;  
  border-right: 1px solid black;      
  margin-right: .5em;
  align-self: flex-end;
  user-select: none;
  flex: 1; 
  &:hover {
    cursor: ${props => props.active ? 'default': 'pointer'};
    //color: ${props => props.active ? 'white': 'white'};
    top: ${props => props.active ? '1px': '0'};
    max-height: ${props => props.active ? '50px': '50px'};
  }
  
`

class Tab extends Component {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    return (
      <TabItem
        onClick={onClick}
        active={activeTab === label}
      >
        {label}
      </TabItem>
    );
  }
}


export default Tab;
