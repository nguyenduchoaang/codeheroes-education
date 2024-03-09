import styled from "styled-components";
import BannderCodeHeroes from "../assets/banner1.png";
import BannderCodeHeroes2 from "../assets/banner2.png";
import BannderCodeHeroes3 from "../assets/banner3.png";
import course1 from "../assets/anh1.png";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import CourseServices from "../based/services/CousreServices";
import useStore from "../based/store/useStore";
import { UserCount } from "../based/Icon";

const colors = ["", "", ""];
const delay = 2500;
const banner = {
  1: BannderCodeHeroes,
  2: BannderCodeHeroes2,
  3: BannderCodeHeroes3,
};

const Homepage = () => {
  const [listCourse, setListCourse] = useState([]);
  const [state, dispatch] = useStore();
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  async function GetAllCourse() {
    const [err, data] = await CourseServices.GetAllCourse();
    if (!err) setListCourse(data);
    else console.log(err);
  }

  useEffect(() => {
    GetAllCourse();
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <HomeWrapper>
        <HomeTop>
          {/* <input type="file" onChange={handleFileChange} /> */}
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {colors.map((backgroundColor, index) => (
                <div className="slide" key={index} style={{ backgroundColor }}>
                  <ImgBanner src={banner[index + 1]}></ImgBanner>
                </div>
              ))}
            </div>

            <div className="slideshowDots">
              {colors.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
          <Banner></Banner>
        </HomeTop>
        <HomeCenter>
          <ProCourse>
            <Title>Khóa học Pro</Title>
            <CourseWrapper>
              {listCourse &&
                listCourse.map((item, index) => (
                  <>
                    <Item key={index}>
                      <ImgWrapper>
                        <ModalShowCourse>
                          <Link to={`course/${item.id}`}>
                            {" "}
                            <ButtonModal>Xem khóa học</ButtonModal>
                          </Link>
                        </ModalShowCourse>
                        <ImgCourse
                          src={`http://localhost:5000/${item.img_url}`}
                          alt="#"
                        ></ImgCourse>
                      </ImgWrapper>
                      <TitleCourse>{item.name}</TitleCourse>
                      <PriceWrapper>
                        {/* <Price>{item.price} đ</Price> */}
                        <UserCountWrapper>
                          <UserCount />
                          <p>{item.users_count}</p>
                        </UserCountWrapper>
                      </PriceWrapper>
                    </Item>
                  </>
                ))}
            </CourseWrapper>
          </ProCourse>
        </HomeCenter>
      </HomeWrapper>
    </>
  );
};

export default Homepage;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const HomeTop = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Banner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const HomeCenter = styled.div`
  width: 90%;
  margin: 0 auto;
  background: #fff;
`;

const ImgBanner = styled.img`
  width: 100%;
  border-radius: 16px;
`;

const ProCourse = styled.div``;

const Title = styled.p``;

const CourseWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 12px;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 25%;
  height: auto;
`;
const ImgCourse = styled.img`
  width: 100%;
  height: 100%;
`;

const TitleCourse = styled.p`
  color: #292929;
  font-size: 16px;
  line-height: 1.4;
  overflow: hidden;
`;

const PriceWrapper = styled.p`
  display: flex;
  align-items: center;
`;

const Price = styled.p`
  font-family: '"Honk", system-ui;';
  margin-right: 10px;
  font-size: 14px;
  margin-right: 8px;
  text-decoration: line-through;
`;

const SalePrice = styled.p`
  color: #f05123;
  font-family: '"Honk", system-ui;';
  font-size: 14px;
`;
const ModalShowCourse = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
`;
const ButtonModal = styled.button`
  background-color: #fff;
  border-color: #fff;
  color: #000;
  left: 50%;
  opacity: 0;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: all 0.3s ease 0s;
  visibility: hidden;
  z-index: 1;
  width: 60%;
  padding: 5px 12px;
  border-radius: 999px;
  outline: none;
  cursor: pointer;
  font-weight: 600;
`;

const ImgWrapper = styled.div`
  height: auto;
  width: 80%;
  position: relative;
  &:hover ${ModalShowCourse} {
    opacity: 1;
    visibility: visible;
  }
  &:hover ${ButtonModal} {
    opacity: 1;
    visibility: visible;
  }
`;

const UserCountWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 12px;
  }
`;
