import Header from "./Header";
import Navbar from "./Navbar";
import styled from "styled-components";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultLayoutWrapper>
        <Header />
        <Navbar />
        <Body>{children}</Body>
      </DefaultLayoutWrapper>
    </>
  );
};

export default DefaultLayout;

const DefaultLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
`;
const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  position: absolute;
  top: 70px;
  right: 0px;
  width: calc(100% - 10%);
  height: calc(-70px + 100vh);
  transition: width 0.6s ease 0s;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
`;
