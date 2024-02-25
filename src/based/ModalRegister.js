import styled from "styled-components";
import { useEffect, useState } from "react";
import { UserLogin, Cancel, Google, FaceBook } from "./Icon";
import logoCodeHeroes from "../assets/codeheroes.png";
import { Link } from "react-router-dom";
import AccountServices from "./services/AccountServices";
import cookie from "react-cookies";
const ModalRegister = ({ isOpen, onSave, onClose }) => {
  const [formRegister, setFormRegister] = useState({
    username: "",
    password: "",
  });

  const handelRegisterAccount = async () => {
    const [err, data] = await AccountServices.Register(formRegister);
    if (!err && data) {
      // cookie.save("token", data.access_token);
      console.log("dataa");
      onSave();
    }
  };

  console.log(formRegister);

  return (
    <ModalRegisterWrapper style={{ display: isOpen ? "flex" : "none" }}>
      <ModalRegisterInner>
        <ActionHeader>
          <CancelAction onClick={onClose}>
            {" "}
            <Cancel />
          </CancelAction>
        </ActionHeader>
        <Header>
          <ImgLogo src={logoCodeHeroes} />
          <HeaderTitle>Đăng ký tài khoản Code Heroes</HeaderTitle>
          <HeaderWarning>
            Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử
            dụng chung có thể sẽ bị khóa.
          </HeaderWarning>
        </Header>
        <Body>
          <ItemRegister>
            <Label for="username">Nhập tên tài khoản</Label>
            <Input
              id="username"
              onChange={(e) => {
                setFormRegister({
                  ...formRegister,
                  username: e.target.value,
                });
              }}
              type="text"
              placeholder=" Tài khoản"
            ></Input>
          </ItemRegister>
          <ItemRegister>
            <Label for="password">Nhập mật khẩu</Label>
            <Input
              id="password"
              onChange={(e) => {
                setFormRegister({
                  ...formRegister,
                  password: e.target.value,
                });
              }}
              type="password"
              placeholder=" Mật khẩu"
            ></Input>
          </ItemRegister>
          <ButtonRegister onClick={() => handelRegisterAccount()}>
            Đăng nhập
          </ButtonRegister>

          <RegisterAccount>
            <TitleRegister>Bạn chưa có tài khoản ?</TitleRegister>
            <Link to="/register">
              <ActionRegister>Đăng ký</ActionRegister>
            </Link>
          </RegisterAccount>
          <ItemBottom>
            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{" "}
            <a href="https://fullstack.edu.vn/terms" target="_top">
              điều khoản sử dụng
            </a>{" "}
            của chúng tôi.
          </ItemBottom>
        </Body>
      </ModalRegisterInner>
    </ModalRegisterWrapper>
  );
};

const ModalRegisterWrapper = styled.div`
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
const ModalRegisterInner = styled.div`
  width: 540px;
  height: 600px;
  border-radius: 20px;
  background-color: #fff;

  position: relative;

  z-index: 1;
`;

export default ModalRegister;
const Header = styled.div`
  display: flex;
  align-items: center;
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

const ButtonRegister = styled.button`
  width: 320px;
  border-radius: 44px;
  border: none;
  color: white;
  font-weight: 600;
  padding: 8px 16px;
  background-color: #22dfbf;
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-left: 8px;
`;
const ItemRegister = styled.div``;
