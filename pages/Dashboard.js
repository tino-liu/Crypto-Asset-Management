import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../components/Main";

const Dashboard = ({ address, switchWallet }) => {
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header walletAddress={address} switchWallet={switchWallet} />
        <Main />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh);
  width: 100%;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;
