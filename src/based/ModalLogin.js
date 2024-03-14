import styled from "styled-components";
import { useEffect, useState } from "react";
import { UserLogin, Cancel, Google, FaceBook } from "./Icon";
import logoCodeHeroes from "../assets/codeheroes.png";
import { Link } from "react-router-dom";
import AccountServices from "./services/AccountServices";
import cookie from "react-cookies";
import { ArrowLeft } from "./Icon";
import { jwtDecode } from "jwt-decode";
const ModalLogin = ({ isOpen, onSave, onClose }) => {
  const [selectedLoginAccount, setSelectedLoginAccount] = useState(false);
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const handelLoginAccount = async () => {
    const [err, data] = await AccountServices.Login(formLogin);
    if (!err && data) {
      cookie.save("token", data.access_token);
      const userName = jwtDecode(data.access_token).sub.username;
      cookie.save("username", userName);
      onSave();
      window.location.reload();
    }
  };

  console.log(formLogin);

  return (
    <ModalLoginWrapper style={{ display: isOpen ? "flex" : "none" }}>
      <ModalLoginInner>
        <ActionHeader>
          <CancelAction onClick={onClose}>
            {" "}
            <Cancel />
          </CancelAction>
        </ActionHeader>

        <Header>
          <IconArrowLeft
            active={selectedLoginAccount ? true : false}
            onClick={() => setSelectedLoginAccount(false)}
          >
            <ArrowLeft active={true} />
          </IconArrowLeft>
          <ImgLogo src={logoCodeHeroes} />
          <HeaderTitle>Đăng nhập vào Code Heroes</HeaderTitle>
          <HeaderWarning>
            Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử
            dụng chung có thể sẽ bị khóa.
          </HeaderWarning>
        </Header>
        <Body>
          {!selectedLoginAccount && (
            <>
              <Item onClick={() => setSelectedLoginAccount(true)}>
                <Icon>
                  <UserLogin />
                </Icon>
                <Tittle>Sử dụng tài khoản cá nhân</Tittle>
              </Item>
              <Item>
                <Icon>
                  <Google />
                </Icon>
                <Tittle>Đăng nhập với Google</Tittle>
              </Item>
              <Item>
                <Icon>
                  <FaceBook />
                </Icon>
                <Tittle>Đăng nhập với FaceBook</Tittle>
              </Item>
            </>
          )}
          {selectedLoginAccount && (
            <>
              <div>
                <Input
                  onChange={(e) => {
                    setFormLogin({ ...formLogin, username: e.target.value });
                  }}
                  type="text"
                  placeholder=" Tài khoản"
                ></Input>
                <Input
                  onChange={(e) => {
                    setFormLogin({ ...formLogin, password: e.target.value });
                  }}
                  type="password"
                  placeholder=" Mật khẩu"
                ></Input>
                <ButtonLogin onClick={() => handelLoginAccount()}>
                  Đăng nhập
                </ButtonLogin>
              </div>
            </>
          )}

          <RegisterAccount>
            <TitleRegister>Bạn chưa có tài khoản ?</TitleRegister>

            <ActionRegister>Đăng ký</ActionRegister>
          </RegisterAccount>
          <ItemBottom>
            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{" "}
            <a href="https://fullstack.edu.vn/terms" target="_top">
              điều khoản sử dụng
            </a>{" "}
            của chúng tôi.
          </ItemBottom>
        </Body>
      </ModalLoginInner>
    </ModalLoginWrapper>
  );
};

const ModalLoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
`;
const ModalLoginInner = styled.div`
  width: 540px;
  height: 600px;
  border-radius: 20px;
  background-color: #fff;

  position: relative;

  z-index: 1;
`;

export default ModalLogin;
const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 20px;
  flex-direction: column;
`;
const HeaderWarning = styled.p`
  width: 80%;
  text-align: center;
  margin-top: 30px;
  color: red;
  margin: 0 auto;
`;
const HeaderTitle = styled.p`
  margin-bottom: 20px;
`;
const Body = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Item = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  --height: 44px;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(220, 224, 227);
  border-radius: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--height);
  line-height: var(--height);
  padding-left: 16px;
  position: relative;
  text-align: center;
  width: 320px;
  position: relative;
`;
const Icon = styled.div`
  display: flex;
  position: absolute;
  left: 16px;
`;
const Tittle = styled.p``;

const ActionHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 12px;
`;

const ImgLogo = styled.img`
  width: 40px;
  margin-bottom: 20px;
`;

const RegisterAccount = styled.div`
  display: flex;
  margin-top: 50px;
`;
const TitleRegister = styled.p``;
const ActionRegister = styled.p`
  color: red;
`;
const ItemBottom = styled.div`
  text-align: center;
  font-size: 12px;
  width: 80%;
  margin-top: 20px;
  a {
    color: red;
  }
`;
const CancelAction = styled.div`
  cursor: pointer;
`;
const Input = styled.input`
  margin-bottom: 20px;
  --height: 44px;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(220, 224, 227);
  border-radius: 44px;
  display: flex;
  height: var(--height);
  line-height: var(--height);
  padding-left: 14px;
  position: relative;
  width: 320px;
  position: relative;
`;

const ButtonLogin = styled.button`
  width: 320px;
  border-radius: 44px;
  border: none;
  color: white;
  font-weight: 600;
  padding: 8px 16px;
  background-color: #22dfbf;
`;

const IconArrowLeft = styled.div`
  width: 14px;
  position: absolute;
  left: 25px;
  top: -20px;
  opacity: 0.4;
  display: ${(props) => (props.active === true ? "block" : "none")};
  cursor: pointer;
`;
