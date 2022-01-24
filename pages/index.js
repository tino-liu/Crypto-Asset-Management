import styled from "styled-components";
import { useWeb3 } from "@3rdweb/hooks";
import Dashboard from "./Dashboard";

export default function Home() {
  const { address, connectWallet } = useWeb3();

  return (
    <Wrapper>
      {address ? (
        <Dashboard address={address} />
      ) : (
        <>
          <WelcomeTitle>Welcome to Tino's Crypto Asset Manager</WelcomeTitle>
          <WalletConnect>
            <Button onClick={() => connectWallet("injected")}>
              Connect Wallet
            </Button>
            <Details>
              Please use Chrome <br /> to run this app
            </Details>
          </WalletConnect>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`;

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeTitle = styled.p`
  position: relative;
  font-family: sans-serif;
  color: #fff;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #a2fffe, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }
`;

const Button = styled.a`
  cursor: pointer;
  position: relative;
  padding: 10px 30px;
  margin: 0 15px;
  color: #21ebff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 20px;
  transition: 0.5s;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);
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

const Details = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 4rem;
  font-weight: 500;
  color: #282b2f;
`;
