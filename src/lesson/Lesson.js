import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Play } from "../based/Icon";
import CourseServices from "../based/services/CousreServices";
import ChapterServices from "../based/services/ChapterServices";
import Common from "../based/Common";
import { ArrowUpDown, QALesson } from "../based/Icon";
import ModalAnswerQuestion from "./ModalAnswerQuestion";
import ModalComment from "./ModalComment";
import LessonServices from "../based/services/LessonServices";
const Lesson = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [detailsChapter, setDetailsChapter] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [selectedLesson, setSelectedLesson] = useState();
  const [dataQuestionSelectedLesson, setDataQuestionSelectedLesson] = useState(
    []
  );

  const [isOpenModalAnswerQuestion, setIsOpenModalAnswerQuestion] =
    useState(false);
  const [isOpenModalComment, setIsOpenModalComment] = useState(false);

  const handleOpenModalAnswerQuestion = () => {
    setIsOpenModalAnswerQuestion(true);
  };

  const handleCloseModalAnswerQuestion = () => {
    setIsOpenModalAnswerQuestion(false);
  };

  const handleSaveModalAnswerQuestion = () => {
    setIsOpenModalAnswerQuestion(false);
  };

  const handleOpenModalComment = () => {
    setIsOpenModalComment(true);
  };

  const handleCloseModalComment = () => {
    setIsOpenModalComment(false);
  };

  const handleSaveModalComment = () => {
    setIsOpenModalComment(false);
  };

  async function GetDetailsChapterById() {
    const [err, data] = await ChapterServices.GetDetailsChapterById(
      selectedChapter
    );
    if (!err && data) {
      setDetailsChapter(data);
    } else {
      console.log(err);
    }
  }

  async function GetcourseDetailsById(id) {
    const [err, data] = await CourseServices.GetCourseById(id);
    if (!err && data) {
      setCourseDetails(data);
    } else {
      console.log(err);
    }
  }
  async function GetLessonById(id) {
    const [err, data] = await LessonServices.GetLessonById(id);
    if (!err && data) {
      setDataQuestionSelectedLesson(data.questions);
    } else {
      console.log(err);
    }
  }

  useEffect(() => {
    GetDetailsChapterById();
  }, [selectedChapter]);

  useEffect(() => {
    GetLessonById(selectedLesson);
  }, [selectedLesson]);

  useEffect(() => {
    GetcourseDetailsById(id);
    // GetLessonById();
  }, [id]);

  console.log(selectedLesson);

  return (
    <LessonWrapper>
      <ModalAnswerQuestion
        isOpen={isOpenModalAnswerQuestion}
        onClose={handleCloseModalAnswerQuestion}
        onSave={handleSaveModalAnswerQuestion}
        dataQuestion={dataQuestionSelectedLesson}
      />

      <ModalComment
        isOpen={isOpenModalComment}
        onClose={handleCloseModalComment}
        onSave={handleSaveModalComment}
        lessonsSelected={selectedLesson}
      />

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
            {courseDetails.chapters &&
              courseDetails.chapters.map((d, i) => (
                <>
                  <LessonWrapper key={i}>
                    <HeaderContent>
                      <ContentHeaderLeft>
                        <ContentIL>
                          <IconL>{i + 1}. </IconL>
                        </ContentIL>
                        <ContentIR onClick={() => setSelectedChapter(d.id)}>
                          <TitleR>{d.name}</TitleR>
                        </ContentIR>
                      </ContentHeaderLeft>
                      <ArrowUpDownWrapper>
                        <ArrowUpDown
                          active={d.id === selectedChapter ? true : false}
                        />
                      </ArrowUpDownWrapper>
                    </HeaderContent>
                    <ContentUl>
                      {detailsChapter.id == d.id &&
                        detailsChapter.lessons.map((l, i) => (
                          <ContentLi
                            bg={
                              selectedLesson === l.id
                                ? "rgba(240, 81, 35, 0.2)"
                                : ""
                            }
                            onClick={() => {
                              setSelectedLesson(l.id);
                              setVideoUrl(l.video_url);
                            }}
                            key={i}
                          >
                            <ItemLiLeft>
                              <IconPlayWrapper>
                                {" "}
                                <Play active={true} />
                              </IconPlayWrapper>
                              <TitleLi>{l.title}</TitleLi>
                            </ItemLiLeft>
                            <ItemLiRight>
                              {Common.convertToMinutesAndSeconds(l.duration)}
                            </ItemLiRight>
                          </ContentLi>
                        ))}
                    </ContentUl>
                  </LessonWrapper>
                </>
              ))}
          </Content>
        </RightItem>
        <LeftItem>
          <VideoLesson>
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </VideoLesson>
          <Description>
            <DTitle>
              <p>Mô hình Client - Server là gì?</p>
              <ButtonAnswerWrapper>
                <ButtonAnswer2 onClick={() => setIsOpenModalComment(true)}>
                  <QALesson />
                  Hỏi đáp
                </ButtonAnswer2>
                <ButtonAnswer
                  disabled={
                    dataQuestionSelectedLesson &&
                    dataQuestionSelectedLesson.length > 0
                      ? false
                      : true
                  }
                  color={
                    dataQuestionSelectedLesson &&
                    dataQuestionSelectedLesson.length > 0
                      ? "#e27252"
                      : "#b1b0b0"
                  }
                  onClick={() => setIsOpenModalAnswerQuestion(true)}
                >
                  Trả lời câu hỏi
                </ButtonAnswer>
              </ButtonAnswerWrapper>
            </DTitle>
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
  height: auto;
  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  align-items: center;
  overflow: hidden;
  display: flex;
  background-color: #313a46;
  justify-content: space-between;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const LeftItem = styled.div`
  width: 80%;
  overflow-y: hidden;

  height: 100%;
  margin-top: 50px;
  border-left: 1px solid rgba(117, 117, 117, 0.5);
`;

const RightItem = styled.div`
  width: 20%;
  height: 100%;
  margin-top: 50px;
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

const TitleNote = styled.p`
  color: #fff;
`;

const VideoLesson = styled.div`
  width: 100%;
  height: 70%;
  padding: 0px 8%;
  background: black;
`;

const Content = styled.div``;

const HeaderContent = styled.div`
  background-color: #f7f8fa;
  border-bottom: 1px solid #dedfe0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 8px 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  z-index: 2;
`;

const LessonWrapper2 = styled.div``;

const ContentUl = styled.ul`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const ContentLi = styled.li`
  cursor: pointer;
  padding: 8px 12px;
  background-color: ${(props) => (props.bg ? props.bg : " #f7f8fa")};
  transition: all 0.3s ease-in-out;
  &:hover {
    background: rgba(240, 81, 35, 0.2);
  }
`;

const ContentIL = styled.div``;

const IconL = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const ContentIR = styled.div`
  cursor: pointer;
`;

const TitleR = styled.p`
  margin-left: 8px;
  font-size: 16px;
`;

const ItemLiLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ItemLiRight = styled.p`
  display: flex;
  font-size: 15px;
`;

const IconPlayWrapper = styled.div`
  width: 15px;
  margin-right: 12px;
`;

const TitleLi = styled.p`
  font-size: 15px;
`;

const BodyContentLesson = styled.div``;

const Description = styled.div`
  width: 80%;
  height: 35%;
  margin: 0 auto;
`;

const DTitle = styled.div`
  font-size: 28px;
  display: flex;
  margin: 48px 0 8px;
  align-items: center;
  justify-content: space-between;
`;

const DTime = styled.p`
  font-size: 10px;
  font-weight: 400;
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

const Title = styled.p``;
const ArrowUpDownWrapper = styled.div`
  width: 14px;
`;
const ContentHeaderLeft = styled.div`
  display: flex;
`;
const ButtonAnswerWrapper = styled.div``;

const ButtonAnswer = styled.button`
  border: 2px solid;

  background-color: ${(props) => props.color};

  border-radius: 6px;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  /* &:hover {
    background-color: #f05123;
  } */
`;
const ButtonAnswer2 = styled.button`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #f05123;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 12px;
  position: absolute;
  bottom: 7%;
  outline: none;
  border: none;
  right: 5%;
`;
