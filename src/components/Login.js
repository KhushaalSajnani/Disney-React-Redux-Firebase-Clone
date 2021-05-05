import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <ContentBox>
        <Logo1 src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THESE</SignUp>
        <Description>
          Get Premier Access to Raya and Last Dragon for an additional fee with
          a Disney+ subscription. As of 03/04/21, the price of Disney+ and The
          Disney Bundle will increase by $1.
        </Description>
        <Logo2 src="/images/cta-logo-two.png" />
      </ContentBox>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 80px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-image: url("/images/login-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;

const ContentBox = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const Logo1 = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 13px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const Logo2 = styled.img`
  width: 90%;
`;
