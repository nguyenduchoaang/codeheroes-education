import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tick, Play } from "../based/Icon";
import ChapterServices from "../based/services/ChapterServices";
import CourseServices from "../based/services/CousreServices";
import UserServices from "../based/services/UserServices";
import Common from "../based/Common";

const course_detail = {
  title: "Kiến Thức Nhập Môn IT",
  sub_title:
    "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
  experience: [
    "Có cái nhìn tổng quan về ngành IT - Lập trình web",
    "Có kiến thức cơ bản về ngôn ngữ lập trình",
    "Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng",
    "Hiểu hơn về cách internet và máy vi tính hoạt động",
  ],
  chapters: 4,
  lessons: 20,
  time: "03 giờ 26 phút",
};

const DetailCourse = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [detailsChapter, setDetailsChapter] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState();

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

  useEffect(() => {
    GetDetailsChapterById();
  }, [selectedChapter]);

  async function GetcourseDetailsById(id) {
    const [err, data] = await CourseServices.GetCourseById(id);
    if (!err && data) {
      setCourseDetails(data);
    } else {
      console.log(err);
    }
  }

  async function EnrollCourse() {
    const [err, data] = await UserServices.EnrollCourse(id);
    if (!err && data) {
      console.log(data);
    } else {
      console.log(err);
    }
  }

  async function HandleEnrollCourse() {
    await EnrollCourse();
  }

  useEffect(() => {
    GetcourseDetailsById(id);
  }, [id]);

  console.log("details chapter", detailsChapter);
  console.log("course details", courseDetails);

  return (
    <DetailCourseWrapper>
      <DetailCourseInner>
        <DCLeft>
          <Header>
            <TitleHeader>{courseDetails.name}</TitleHeader>
            <SubHeader>
              <SubHeaderTitle>{courseDetails.description}</SubHeaderTitle>
            </SubHeader>
            <Experience>
              <ContentTitle>Bạn sẽ học được gì</ContentTitle>
              <EWrapper>
                {course_detail.experience.map((e, i) => (
                  <ELi key={i}>
                    <TickWrapper>
                      <Tick active={true} />
                    </TickWrapper>
                    <ETitle>{e}</ETitle>
                  </ELi>
                ))}
              </EWrapper>
            </Experience>
          </Header>
          <Body>
            <ContentTitle>Nội dung khóa học</ContentTitle>
            <SubTitle>
              <LeftContent>
                <Item>
                  <ItemTitle>{course_detail.chapters}</ItemTitle>
                  <SubItemTitle>chương</SubItemTitle>
                  <span>•</span>
                </Item>
                <Item>
                  <ItemTitle>{course_detail.lessons}</ItemTitle>
                  <SubItemTitle>bài học</SubItemTitle>
                  <span>•</span>
                </Item>
                <Item>
                  <SubItemTitle>Thời lượng</SubItemTitle>
                  <ItemTitle>{course_detail.time}</ItemTitle>
                  <span>•</span>
                </Item>
              </LeftContent>
              <RightContent>
                <RTitle>Mở rộng tất cả</RTitle>
              </RightContent>
            </SubTitle>

            <Content>
              {courseDetails.chapters &&
                courseDetails.chapters.map((d, i) => (
                  <>
                    <LessonWrapper key={i}>
                      <HeaderContent>
                        <ContentIL>
                          <IconL>-</IconL>
                        </ContentIL>
                        <ContentIR onClick={() => setSelectedChapter(d.id)}>
                          <TitleR>
                            {i + 1}. {d.name}
                          </TitleR>
                        </ContentIR>
                      </HeaderContent>
                      <ContentUl>
                        {detailsChapter.id == d.id &&
                          detailsChapter.lessons.map((l, i) => (
                            <ContentLi key={i}>
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
          </Body>
        </DCLeft>
        <DCRight>
          <DCRightCourse></DCRightCourse>
          <DCRContent>
            <DCRTitle>Miễn phí</DCRTitle>

            <DCRButton onClick={() => EnrollCourse()}>
              Đăng kí khóa học
            </DCRButton>
          </DCRContent>
        </DCRight>
      </DetailCourseInner>
    </DetailCourseWrapper>
  );
};
export default DetailCourse;

const DetailCourseWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const DetailCourseInner = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  margin: 0 auto;
`;

const Header = styled.div``;

const TitleHeader = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-top: 16px;

  min-height: 33px;
`;

const SubHeader = styled.div`
  margin-top: 20px;
`;

const SubHeaderTitle = styled.p``;

const Experience = styled.div`
  margin-top: 20px;
`;

const EWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ETitle = styled.div``;
const ELi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  width: 45%;
`;
const TickWrapper = styled.div`
  width: 14px;
  display: flex;
  margin-right: 10px;
  align-items: center;
`;
const ContentTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 12px;
  margin-top: 10px;
`;

const Body = styled.div``;

const SubTitle = styled.div`
  display: flex;
  margin-top: 20px;
`;

const LeftContent = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

const RightContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

const Item = styled.div`
  display: flex;
`;

const ItemTitle = styled.p`
  margin-right: 5px;
  font-weight: 700;
`;
const SubItemTitle = styled.span`
  margin-right: 5px;
`;

const RTitle = styled.p`
  margin-right: 20px;
`;

const Content = styled.div``;

const HeaderContent = styled.div`
  display: flex;
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  border-radius: 6px;
  padding: 0;
  position: -webkit-sticky;
  position: sticky;
  top: 147px;
  z-index: 1;
  padding: 12px 0px;
`;

const ContentUl = styled.ul``;
const ContentLi = styled.li`
  padding: 12px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3%;
`;

const ContentIL = styled.div`
  margin-right: 10px;
  position: relative;
  padding-left: 5%;
`;
const IconL = styled.div`
  color: #f05123;
  font-size: 40px;
  position: absolute;
  bottom: -10px;
`;

const ContentIR = styled.div``;

const TitleR = styled.p`
  margin-left: 16px;
`;

const LessonWrapper = styled.div`
  margin-bottom: 8px;
  cursor: pointer;
`;

const TitleLi = styled.p``;
const IconPlayWrapper = styled.div`
  width: 15px;
  display: flex;
  margin-right: 10px;
  align-items: center;
`;

const ItemLiLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ItemLiRight = styled.p``;

const DCLeft = styled.div`
  width: 70%;
`;

const DCRight = styled.div`
  width: 30%;
  height: 100%;
  margin-top: 20px;
`;

const DCRightCourse = styled.div`
  background-image: url("https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding-top: 56.25%;
  width: 100%;
`;

const DCRContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DCRTitle = styled.p``;

const DCRButton = styled.button`
  font-size: 16px;
  margin-top: 16px;
  min-width: 180px;
  padding: 10px 16px;
  background-color: #f05123;
  border: none;
  color: #fff;
  border-radius: 999px;
`;
