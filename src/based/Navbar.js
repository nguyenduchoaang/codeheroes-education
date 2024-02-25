import styled from "styled-components";
import { Link } from "react-router-dom";
import { Home, Road, Blog } from "./Icon";
import logoCH2 from "../assets/logocodeheroes.png";
const MenuExercise = [
  {
    id: 1,
    href: "/",
    icon: Home,
    title: "Trang chủ",
  },
  {
    id: 2,
    href: "/road",
    icon: Road,
    title: "Lộ trình",
  },
  {
    id: 3,
    href: "/blog",
    icon: Blog,
    title: "Bài viết",
  },
];

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <HeaderTitle>
          <Logo src={logoCH2} />
        </HeaderTitle>

        <Body>
          <ItemMenu>
            <Title>Quản lý bài tập</Title>
            <MenuWrapper>
              {MenuExercise.map((item, index) => (
                <>
                  <ItemHover>
                    <Icon>
                      {" "}
                      <item.icon active={true} />
                    </Icon>
                    <Link to={item.href}>
                      <ItemMenuLi>{item.title}</ItemMenuLi>
                    </Link>
                  </ItemHover>
                </>
              ))}
            </MenuWrapper>
          </ItemMenu>
        </Body>
      </NavbarWrapper>
    </>
  );
};
export default Navbar;

const NavbarWrapper = styled.div`
  width: 13%;
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  background: var(--white);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.6s ease 0s;
  box-shadow: rgb(136, 136, 136) 10px 0px 4px -10px;
  z-index: 1000;
  background-color: #313a46;
`;

const HeaderTitle = styled.h3`
  margin-top: 10%;
  color: #fff;
`;

const Body = styled.div`
  margin-top: 15%;
  width: 100%;
`;

const ItemMenu = styled.div``;
const Title = styled.h3`
  font-size: 18px;
  color: #8ba6a4;
  margin-left: 12px;
  margin-bottom: 12px;
`;
const MenuWrapper = styled.ul`
  margin-top: 13px 0px;
`;

const ItemMenuLi = styled.li`
  margin-left: 12px;
  color: #8d939b;
  padding: 15px 0px;
  font-size: 16px;
  &:hover {
    color: #ffffff;
  }
`;
const ItemHover = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    background-color: #707681;
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 10%;
`;

const Logo = styled.img`
  width: 100%;
`;
