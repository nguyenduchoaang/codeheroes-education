import styled from "styled-components";
import BannerCodeheroes from "../assets/BannerCodeHeroes.png";
import course1 from "../assets/anh1.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CourseServices from "../based/services/CousreServices";
import useStore from "../based/store/useStore";

const Homepage = () => {
  const [listCourse, setListCourse] = useState([]);
  const [state, dispatch] = useStore();
  async function GetAllCourse() {
    const [err, data] = await CourseServices.GetAllCourse();
    if (!err) setListCourse(data);
    else console.log(err);
  }

  useEffect(() => {
    GetAllCourse();
  }, []);
  const handleFileChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      //  reader.onloadend = () => {
      //    Request.UploadStockPhoto(file)
      //      .then((res) => {
      //        if (res && res.data) {
      //          setThumbnail(res.data.imageUrl);
      //        } else {
      //          let errMsg =
      //            res.errors && res.errors.length > 0
      //              ? res.errors.reduce((prev, item, idx) => {
      //                  return `${prev}${item.value}<br/>`;
      //                }, "")
      //              : "" || CONSTANTS.MSG_ERROR;
      //          Notify(NOTIFY.ERROR, NOTIFY.ERROR, errMsg);
      //        }
      //        setLoading(false);
      //      })
      //      .catch((err) => {
      //        setLoading(false);
      //      });
      //  };
      console.log(file);

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <HomeWrapper>
        <HomeTop>
          <input type="file" onChange={handleFileChange} />
          <Banner>
            <ImgBanner src={BannerCodeheroes}></ImgBanner>
          </Banner>
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
                        <ImgCourse src={course1} alt="#"></ImgCourse>
                      </ImgWrapper>
                      <TitleCourse>{item.name}</TitleCourse>
                      <PriceWrapper>
                        <Price>{item.price} đ</Price>
                        {/* <SalePrice>{item.sale_price} đ</SalePrice> */}
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
  width: 90%;
`;

const ProCourse = styled.div``;

const Title = styled.h3``;

const CourseWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 12px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item = styled.div`
  width: 25%;
  height: auto;
`;
const ImgCourse = styled.img`
  width: 100%;
  height: 100%;
`;

const TitleCourse = styled.h3`
  color: #292929;
  font-size: 18px;
  line-height: 1.4;
  overflow: hidden;
`;

const PriceWrapper = styled.h3`
  display: flex;
  align-items: center;
`;

const Price = styled.h3`
  font-family: '"Honk", system-ui;';
  margin-right: 10px;
  font-size: 14px;
  margin-right: 8px;
  text-decoration: line-through;
`;

const SalePrice = styled.h3`
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
