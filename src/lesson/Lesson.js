import styled from "styled-components";
import { Tick, Play } from "../based/Icon";
const Lesson = () => {
  const details_lessons = [
    {
      id: 1,
      title: "1. Giới thiệu khóa học",
      lessons: [
        {
          id: 1,
          title: "1. Mô hình Client - Server là gì?",
          time: "11:35",
        },
        {
          id: 2,
          title: "2. Các ngôn ngữ lập trình phổ biến",
          time: "10:35",
        },
      ],
    },
    {
      id: 2,
      title: "2. Môi trường, con người IT",
      lessons: [
        {
          id: 1,
          title: "3.Mô hình Client - Server là gì?",
          time: "11:35",
        },
        {
          id: 2,
          title: "4. Các ngôn ngữ lập trình phổ biến",
          time: "10:35",
        },
      ],
    },
  ];

  return (
    <LessonWrapper>
      <Header>
        <ItemLeft>
          <ItemLeftTitle>Kiến thức nhập môn IT</ItemLeftTitle>
        </ItemLeft>
        <ItemRight>
          <Process>0/12</Process>
          <Note>
            <IconNote></IconNote>
            <TitleNote>Ghi chú</TitleNote>
          </Note>
          <Intrust>
            <IconNote></IconNote>
            <TitleNote>Hướng dẫn</TitleNote>
          </Intrust>
        </ItemRight>
      </Header>
      <Body>
        <RightItem>
          <Content>
            {details_lessons.map((d, i) => (
              <>
                <LessonWrapper2>
                  <HeaderContent>
                    <ContentIR>
                      <TitleR>{d.title}</TitleR>
                    </ContentIR>
                  </HeaderContent>
                  <BodyContentLesson>
                    {d.lessons.map((l, i) => (
                      <p key={i}>
                        <ContentUl>
                          <ContentLi>
                            <ItemLiLeft>
                              <TitleLi>{l.title}</TitleLi>
                            </ItemLiLeft>
                            <ItemLiRight>
                              <IconPlayWrapper>
                                <Play active={true} />
                              </IconPlayWrapper>
                              <TitleLi>{l.time}</TitleLi>
                            </ItemLiRight>
                          </ContentLi>
                        </ContentUl>
                      </p>
                    ))}
                  </BodyContentLesson>
                </LessonWrapper2>
              </>
            ))}
          </Content>
        </RightItem>
        <LeftItem>
          <VideoLesson>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </VideoLesson>
          <Description>
            <DTitle>Mô hình Client - Server là gì?</DTitle>
            <DTime>Cập nhật tháng 11 năm 2022</DTime>
          </Description>
        </LeftItem>
      </Body>
      <Footer>
        <ButtonPrevios>
          <IconPreWrapper></IconPreWrapper>
          <Title>BÀI TRƯỚC</Title>
        </ButtonPrevios>
        <ButtonNext>
          <IconPreWrapper></IconPreWrapper>
          <Title>BÀI TIẾP THEO</Title>
        </ButtonNext>
      </Footer>
    </LessonWrapper>
  );
};

export default Lesson;

const LessonWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  background-color: #313a46;
  justify-content: space-between;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`;

const LeftItem = styled.div`
  width: 80%;
  overflow-y: scroll;
  height: 100%;
  border-left: 1px solid rgba(117, 117, 117, 0.5);
`;

const RightItem = styled.div`
  width: 30%;
  height: 100%;
`;

const ItemLeft = styled.div`
  width: 60%;
`;
const ItemRight = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
`;

const ItemLeftTitle = styled.div`
  color: #fff;
`;
const Process = styled.div`
  color: #fff;
`;

const Note = styled.div`
  display: flex;
`;
const Intrust = styled.div`
  display: flex;
`;

const IconNote = styled.div``;

const TitleNote = styled.h3`
  color: #fff;
`;

const VideoLesson = styled.div`
  width: 100%;
  height: 70%;
`;

const Content = styled.div``;

const HeaderContent = styled.div`
  background-color: #f7f8fa;

  border-bottom: 1px solid #dedfe0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 2;
`;

const LessonWrapper2 = styled.div``;

const ContentUl = styled.ul`
  padding: 10px 0px;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: rgba(240, 81, 35, 0.2);
  }
`;
const ContentLi = styled.li``;

const ContentIL = styled.div``;
const IconL = styled.div``;

const ContentIR = styled.div``;

const TitleR = styled.h3``;

const ItemLiLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ItemLiRight = styled.h3`
  display: flex;
`;

const IconPlayWrapper = styled.div`
  width: 15px;
  margin-right: 12px;
`;

const TitleLi = styled.h3`
  font-size: 16px;
`;

const BodyContentLesson = styled.div``;
const Description = styled.div`
  width: 80%;
  height: 35%;
  margin: 0 auto;
`;
const DTitle = styled.h3`
  font-size: 28px;
  margin: 48px 0 8px;
`;
const DTime = styled.h3`
  font-size: 16px;
`;
const Footer = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  justify-content: center;
  background-color: #f0f0f0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.1);
  z-index: 2;
  display: flex;
  align-items: center;
`;

const ButtonPrevios = styled.button`
  margin-left: 12px;
  border-radius: 6px;
  border: none;
  color: #404040;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 12px;
  transition: 0.3s ease;
`;
const ButtonNext = styled.button`
  border: 2px solid #f05123;
  margin-left: 12px;
  border-radius: 6px;
  color: #404040;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 12px;
  transition: 0.3s ease;
  color: #f05123;
`;
const IconPreWrapper = styled.div``;
const Title = styled.h3``;
