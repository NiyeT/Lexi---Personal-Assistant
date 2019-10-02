import React, { Component } from 'react';
import Tab from './Tab';
import styled from 'styled-components'
import { CSSTransition, TransitionGroup, } from 'react-transition-group'

const TabsContainer = styled.div`
  margin-top: 1.5em;
`
const TabsList = styled.ol`
  display: flex;  
  width: 100%;
  border-bottom: 1px solid #ccc;  
`
const TabItems = styled.ol`
  display: flex;  
  width: 100%;
`
const TabContent = styled.div`
  padding: 1em 1em 1em 1em;
  min-height: 280px;
`

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: props.initialTab || props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab }, () => {
      this.props.setActiveTab(tab);
    });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <TabsContainer>
        <TabsList>
          <>
            <TabItems>
                {children.map((child) => {
                  const { label } = child.props;

                  return (
                    <Tab
                      activeTab={activeTab}
                      key={label}
                      label={label}
                      onClick={onClickTabItem}
                    />
                  );
                })}
            </TabItems>
          </>
        </TabsList>
        <TabContent>
          <TransitionGroup className="tab-content">
            {
              React.Children.map(this.props.children, (child, index) => {
                return (
                  child.props.label === activeTab &&
                  <CSSTransition
                    key={child.props.label}
                    timeout={200}
                    classNames="item"
                  >
                    {child}
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </TabContent>
      </TabsContainer>
    );
  }
}

export default Tabs;
