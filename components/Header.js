import React from "react";
import styled from "styled-components";

const Header = ({ walletAddress, disconnectWallet }) => {
  return (
    <Wrapper>
      <Title>Assets</Title>
      <WalletLink>
        <WalletTitle>Wallet Connected</WalletTitle>
        <WalletAddress>
          {walletAddress.slice(0, 7)}...{walletAddress.slice(35)}
        </WalletAddress>
      </WalletLink>
      <ButtonsContainer>
        <SwitchWallet onClick={() => disconnectWallet()}>
          Switch Wallet
        </SwitchWallet>
        <BuySell>Buy / Sell</BuySell>
        <SendReceive>Send / Receive</SendReceive>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`;

const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 1px solid #282b2f;
  border-radius: 10px;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WalletTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`;

const WalletAddress = styled.div`
  font-size: 0.8rem;
`;

// Buttons
const ButtonsContainer = styled.div`
  display: flex;
`;

const SwitchWallet = styled.a`
  cursor: pointer;
  position: relative;
  padding: 10px 30px;
  margin: 0 15px;
  color: #ff66e3;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.1rem;
  transition: 0.5s;
  overflow: hidden;
  :hover {
    background: #ff66e3;
    color: #111;
    box-shadow: 0 0 50px #ff66e3;
    transition-delay: 0.5s;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #ff66e3;
    border-right: 2px solid #ff66e3;
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  :hover:before {
    width: 100%;
    height: 100%;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #ff66e3;
    border-left: 2px solid #ff66e3;
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  :hover:after {
    width: 100%;
    height: 100%;
  }
`;

const BuySell = styled.a`
  cursor: pointer;
  position: relative;
  padding: 10px 30px;
  margin: 0 15px;
  color: #21ebff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.1rem;
  transition: 0.5s;
  overflow: hidden;
  :hover {
    background: #21ebff;
    color: #111;
    box-shadow: 0 0 50px #21ebff;
    transition-delay: 0.5s;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #21ebff;
    border-left: 2px solid #21ebff;
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  :hover:before {
    width: 100%;
    height: 100%;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #21ebff;
    border-right: 2px solid #21ebff;
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  :hover:after {
    width: 100%;
    height: 100%;
  }
`;

const SendReceive = styled.a`
  cursor: pointer;
  position: relative;
  padding: 10px 30px;
  margin: 0 15px;
  color: #ffcc6e;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.1rem;
  transition: 0.5s;
  overflow: hidden;
  :hover {
    background: #ffcc6e;
    color: #111;
    box-shadow: 0 0 50px #ffcc6e;
    transition-delay: 0.5s;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #ffcc6e;
    border-right: 2px solid #ffcc6e;
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  :hover:before {
    width: 100%;
    height: 100%;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #ffcc6e;
    border-left: 2px solid #ffcc6e;
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  :hover:after {
    width: 100%;
    height: 100%;
  }
`;
