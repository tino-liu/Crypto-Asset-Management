import styled from "styled-components";
import React from "react";
import Image from "next/image";
import LogoImg from "../assets/logo.png";

const Sidebar = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <Image src={LogoImg} />
        </Logo>
      </LogoContainer>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: calc(100vh);
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  padding: 0 1rem;
`;

const LogoContainer = styled.div`
  margin: 1.5rem 0;
`;

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`;
