import styled from "styled-components";
import img_frontend_road from "../assets/frontend_road.png";
import img_backend_road from "../assets/backend_road.png";
import road_banner from "../assets/road_banner.png";
const Road = () => {
  return (
    <>
      <RoadWrapper>
        <RoadInner>
          <Top>
            <TitleTop>Lộ trình học</TitleTop>
            <ContentTop>
              <ContentDetail>
                Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ
                trình học. Ví dụ: Để đi làm với vị trí "Lập trình viên
                Front-end" bạn nên tập trung vào lộ trình "Front-end".
              </ContentDetail>
            </ContentTop>
          </Top>
          <Center>
            <ItemLeftWrapper>
              <ItemDetails>
                <DetailsLeft>
                  <TitleCenter>Lộ trình học Front-end</TitleCenter>
                  <ContentCenter>
                    Lập trình viên Front-end là người xây dựng ra giao diện
                    websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để
                    trở thành lập trình viên Front-end nhé.
                  </ContentCenter>
                </DetailsLeft>
                <DetailsRight>
                  <ImgWrapper>
                    <ImgDetails src={img_frontend_road}></ImgDetails>
                  </ImgWrapper>
                </DetailsRight>
              </ItemDetails>
              <ButtonDetails>Xem chi tiết</ButtonDetails>
            </ItemLeftWrapper>

            <ItemLeftWrapper>
              <ItemDetails>
                <DetailsLeft>
                  <TitleCenter>Lộ trình học Back-end</TitleCenter>
                  <ContentCenter>
                    Trái với Front-end thì lập trình viên Back-end là người làm
                    việc với dữ liệu, công việc thường nặng tính logic hơn.
                    Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.
                  </ContentCenter>
                </DetailsLeft>
                <DetailsRight>
                  <ImgWrapper>
                    <ImgDetails src={img_backend_road}></ImgDetails>
                  </ImgWrapper>
                </DetailsRight>
              </ItemDetails>
              <ButtonDetails>Xem chi tiết</ButtonDetails>
            </ItemLeftWrapper>
          </Center>
          <Bottom>
            <BottomWrapper>
              <ItemBotLeft>
                <IBLWrapper>
                  <TitleBottom>
                    Tham gia cộng đồng học viên CodeHeroes trên Facebook
                  </TitleBottom>
                  <ContentBottom>
                    Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy
                    tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học
                    nhé.
                  </ContentBottom>
                  <ActionBottom>Tham gia nhóm</ActionBottom>
                </IBLWrapper>
              </ItemBotLeft>
              <ItemRightLeft>
                <RoadBanner src={road_banner}></RoadBanner>
              </ItemRightLeft>
            </BottomWrapper>
          </Bottom>
        </RoadInner>
      </RoadWrapper>
    </>
  );
};
export default Road;

const RoadWrapper = styled.div`
  width: 100%;
`;

const Top = styled.div``;
const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div`
  width: 100%;
  margin-top: 15%;
`;

const ConfigTitle = styled.p`
  color: #242424;
  font-weight: 900;
  margin: 0.67em 0;
`;

const TitleTop = styled(ConfigTitle)`
  font-size: 28px;
`;

const ContentTop = styled.div``;

const ContentDetail = styled.p`
  margin: 6px 0;
  font-weight: unset;
`;

const RoadInner = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ItemLeftWrapper = styled.div`
  width: 40%;
  border: 2px solid #e8e8e8;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 500px;
`;

const ItemDetails = styled.div`
  display: flex;
`;

const ItemRightWrapper = styled.div`
  width: 40%;
`;

const TitleCenter = styled(ConfigTitle)`
  font-size: 20px;
`;

const DetailsLeft = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
`;

const DetailsRight = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
`;

const ContentCenter = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
`;

const ImgDetails = styled.img`
  border-radius: 50%;
  height: 98px;
  object-fit: cover;
  width: 98px;
`;

const ImgWrapper = styled.a`
  align-items: center;
  border: 5px solid #f05123;
  border-radius: 50%;
  display: flex;
  height: 122px;
  justify-content: center;
  overflow: hidden;
  width: 122px;
`;

const ButtonDetails = styled.button`
  background-color: #f05123;
  color: white;
  outline: none;
  border: 1px solid;
  border-radius: 999px !important;
  width: 25%;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  outline: none;
  padding: 9px 16px;
  text-align: center;
  transition: 0.3s ease;
  user-select: none;
  white-space: nowrap;
  margin-top: 5%;
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ItemBotLeft = styled.div`
  width: 50%;
`;

const TitleBottom = styled(ConfigTitle)`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ContentBottom = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const ActionBottom = styled.button`
  border: 2px solid #292929;
  border-radius: 999px;
  color: #292929;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  margin-top: 8px;
  padding: 10px 16px;
  text-align: center;
  transition: 0.2s ease;
`;

const ItemRightLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

const RoadBanner = styled.img`
  width: 360px;
`;

const IBLWrapper = styled.div`
  width: 60%;
`;
