import React,  { Component, Fragment } from 'react'
import BlockUi from 'react-block-ui';
import styled from 'styled-components'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import  'react-block-ui/style.css';
import theme from './../styles/theme';

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = (e) => {
    e.preventDefault();

    return email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  }

  return (
    <BlockUi tag="div" blocking={status === "sending"}>
    <CustomFormContainer
    >
    {status === "success" ? null : <SignUpNewsletters>Sign Up for our Newsletter</SignUpNewsletters> }
    <FormBlock>
      {/* {status === "sending" && <InfoMsg >sending...</InfoMsg>} */}
      {status === "success" ? (
        <SuccessMsg
        dangerouslySetInnerHTML={{ __html: `${message} 😍` }}
        />
        )
        :
        (
          <Fragment>
          <EmailInput
            ref={node => (email = node)}
            type="email"
            placeholder="Your email"
            required
            />
          <SubmitButton type="submit" onClick={submit}>
            Subscribe
          </SubmitButton>
        </Fragment>
      )

    }
    </FormBlock>
    {status === "error" && (
      <DangerMsg
        dangerouslySetInnerHTML={{ __html: message }}
      />
    )}
    </CustomFormContainer>
    </BlockUi>
  );
};


class NewsLetter extends Component {
    render() {
        const url =
        "https://bambooasia.us9.list-manage.com/subscribe/post?u=953f91b277d54331f42b4a278&amp;id=a48ebb83c1";
        return(
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                      status={status}
                      message={message}
                      onValidated={formData => subscribe(formData)}
                    />
                )}
             />
        );
        }
    }

export default NewsLetter

const SignUpNewsletters = styled.p`
font-size: 17px
`;

const FormBlock = styled.form`
  background: ${theme.colors.tertiary};
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CustomFormContainer = styled.div`
  background: ${theme.colors.tertiary};
  padding: 30px;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const SubmitButton = styled.button`
font-size: 19px;
padding: 5px 26px;
height: fit-content;
border: 2px solid ${theme.colors.secondary};
color: ${theme.colors.secondary};
background: white;
margin-left: 1%;
cursor: pointer;
@media (max-width: ${props => props.theme.responsive.small}) {
  width: 100%;
  margin-left: 0;
  margin-top: 4%;
}
&:hover {
  border: 2px solid ${theme.colors.base};
  color: ${theme.colors.base};
}`;

const EmailInput = styled.input`
  font-size: 19px;
  padding: 5px 6px;
  border: 2px solid ${theme.colors.brandSecondary};
  background: white;
  width: 40%;
  @media (max-width: ${props => props.theme.responsive.small}) {
    width: 100%;
    text-align: center;
  }
  &:hover {
    border: 2px solid ${theme.colors.base};
    color: ${theme.colors.base};
  }`

const DangerMsg = styled.div`
color: red`;

const SuccessMsg = styled.div`
color: black;
font-size: 19px;`;

