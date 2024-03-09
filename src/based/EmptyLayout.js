import styled from "styled-components";
const EmptyLayout = ({ children }) => {
  return (
    <>
      <Body>{children}</Body>
    </>
  );
};

export default EmptyLayout;

const Body = styled.div``;
