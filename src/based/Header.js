import styled from "styled-components"

const Header = () => {
    return (
        <>
            <HeaderWrapper><h1>User</h1></HeaderWrapper>
        </>
    )
}
export default Header


const HeaderWrapper = styled.div`
      position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 15px;
    z-index: 100;
    background: rgb(241, 241, 241);
    border-bottom: 1px solid rgb(207, 207, 207);
  
`;