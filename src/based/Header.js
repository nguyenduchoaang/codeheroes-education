import { useState, useEffect } from "react";
import styled from "styled-components";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import useStore from "./store/useStore";
import { Bell, Search } from "./Icon";
const Header = () => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
  const [state, dispatch] = useStore();
  const [userInfo, setUserInfo] = useState({
    username: "",
  });

  useEffect(() => {
    if (state.userInfo) {
      setUserInfo(state.userInfo);
    }
  }, []);

  console.log("userInfo", userInfo);

  const handleOpenModalLogin = () => {
    setIsOpenModalLogin(true);
  };

  const handleCloseModalLogin = () => {
    setIsOpenModalLogin(false);
  };

  const handleSaveModalLogin = () => {
    setIsOpenModalLogin(false);
  };

  const handleOpenModalRegister = () => {
    setIsOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setIsOpenModalRegister(false);
  };

  const handleSaveModalRegister = () => {
    setIsOpenModalRegister(false);
  };

  return (
    <>
      <ModalLogin
        isOpen={isOpenModalLogin}
        onClose={handleCloseModalLogin}
        onSave={handleSaveModalLogin}
      ></ModalLogin>
      <ModalRegister
        isOpen={isOpenModalRegister}
        onClose={handleCloseModalRegister}
        onSave={handleSaveModalRegister}
      />
      <HeaderWrapper>
        <TempWrapper></TempWrapper>
        <SearchInputWrapper>
          <SearchIcon>
            <Search />
          </SearchIcon>
          <InputSearch placeholder="Tìm kiếm khóa học ,bài viết, video,..."></InputSearch>
        </SearchInputWrapper>
        <ActionHeaderWrapper>
          {userInfo.username ? (
            <>
              {" "}
              <UserInfoWrapper>
                {/* <IconBell>
                  {" "}
                  <Bell />
                </IconBell> */}

                <ImageAvatarWrapper>
                  <ImageAvatar src="https://files.fullstack.edu.vn/f8-prod/user_photos/283697/63be5534ea563.jpg"></ImageAvatar>
                </ImageAvatarWrapper>
              </UserInfoWrapper>
            </>
          ) : (
            <>
              <ButtonRegister onClick={handleOpenModalLogin}>
                Đăng nhập
              </ButtonRegister>
              <ButtonLogin onClick={handleOpenModalRegister}>
                Đăng ký
              </ButtonLogin>
            </>
          )}
        </ActionHeaderWrapper>
      </HeaderWrapper>
    </>
  );
};
export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: end;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 15px;
  z-index: 100;
  background: rgb(241, 241, 241);
  border-bottom: 1px solid rgb(207, 207, 207);
`;

const ActionHeaderWrapper = styled.div``;

const configButton = styled.button`
  border-radius: 99px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 9px 20px;
  transition: opacity 0.25s;
  border: none;
`;

const ButtonRegister = styled(configButton)`
  margin-right: 12px;
`;

const ButtonLogin = styled(configButton)`
  background: linear-gradient(to right bottom, #ff8f26, #ff5117);
  color: #fff;
`;

const ImageAvatarWrapper = styled.div`
  background: transparent;
  border-radius: 50%;
`;

const ImageAvatar = styled.img`
  border-radius: 50%;
  height: 28px;
  object-fit: cover;
  width: 28px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
`;

const IconBell = styled.div`
  width: 18px;
  height: 20px;
`;

const SearchInputWrapper = styled.div`
  border: 2px solid #e8e8e8;
  height: 40px;
  position: relative;
  border-radius: 20px;
  width: 420px;
`;

const InputSearch = styled.input`
  border: none;
  width: 100%;
  border-radius: 20px;
  height: 100%;
  outline: none;
  padding: 0x 10px;
  padding-left: 40px;
`;
const TempWrapper = styled.div``;
const SearchIcon = styled.div`
  position: absolute;
  top: 8px;
  width: 12px;
  left: 10px;
`;
