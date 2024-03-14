import styled from "styled-components";
import ModalComment from "./ModalComment";
import { useState, useEffect } from "react";
import {
  QAIcon,
  ReplyArrow,
  ArrowUpDown,
  SharedBlog,
  ThreeDot,
  Heart,
} from "../based/Icon";
import { useParams } from "react-router-dom";
import BlogServices from "../based/services/BlogServices";
const DetailBlog = () => {
  const { id } = useParams();
  const [isOpenModalComment, setIsOpenModalComment] = useState(false);
  const [likeBlog, setLikeBlog] = useState(0);
  const [blogDetail, setBlogDetail] = useState({});
  const [showCommentById, setShowCommentById] = useState(null);
  const [comment, setComment] = useState({
    content: "",
  });

  console.log("123");

  // const [reply, setReply] = useState({
  //   content: "",
  //   parent_id: 0,
  // });
  // const [listComment, setListComment] = useState([]);
  // const [listReplyComment, setListReplyComment] = useState([]);
  // const [showReplyById, setShowReplyById] = useState(null);

  // useEffect(() => {
  //   setSelectedLesson(lessonsSelected);
  //   async function fetchData() {
  //     await handleGetAllCommentOfLesson(lessonsSelected);
  //   }

  //   fetchData();
  // }, [isOpen, selectedLesson]);

  // async function handleGetAllCommentOfLesson(id) {
  //   const [err, data] = await LessonServices.GetAllCommentLesson(id);
  //   if (!err && data) {
  //     setListComment(data);
  //     const listReplyComment = data.filter((item) => item.parent_id !== null);
  //     setListReplyComment(listReplyComment);
  //   } else {
  //     console.log(err);
  //   }
  // }

  // async function CommentLesson(id, comment) {
  //   const [err, data] = await LessonServices.CommentLesson(id, comment);
  //   if (!err && data) {
  //     console.log("comment ne", data);
  //     setComment({ content: "" });
  //   } else {
  //     console.log(err);
  //   }
  // }
  // const handleButtonComment = async () => {
  //   setListComment([...listComment, comment]);
  //   await CommentLesson(selectedLesson, comment);
  // };

  // const handleButtonReply = () => {
  //   console.log("123");
  // };

  // console.log("rreply", reply);

  // const handleButtonReplyComment = async () => {
  //   const [err, data] = await LessonServices.CommentLesson(
  //     selectedLesson,
  //     reply
  //   );
  //   if (!err && data) {
  //     console.log("comment ne", data);
  //     setShowReplyById(null);
  //     handleGetAllCommentOfLesson(selectedLesson);
  //   } else {
  //     console.log(err);
  //   }
  // };

  const handleOpenModalComment = () => {
    setIsOpenModalComment(true);
  };

  const handleCloseModalComment = () => {
    setIsOpenModalComment(false);
  };

  const handleSaveModalComment = () => {
    console.log("Save comment");
  };

  console.log("id", id);

  useEffect(() => {
    GetBlogById();
  }, [id]);

  const GetBlogById = async () => {
    const [err, data] = await BlogServices.GetBlogById(id);
    if (!err && data) {
      setBlogDetail(data);
    }
  };

  console.log(blogDetail);

  return (
    <DetailBlogWrapper>
      <DetailBlogLeft>
        <QAIconWrapper>
          <QAIcon></QAIcon>
        </QAIconWrapper>
        <QATitle>Chia sẻ từ người dùng</QATitle>
        <User>
          <BlogWrapperHeader>
            {blogDetail && (
              <>
                <SubBlogTitle>
                  <ImgUser>
                    <img src="https://files.fullstack.edu.vn/f8-prod/user_avatars/309573/64af7196d84c6.png"></img>
                  </ImgUser>
                  <Author>
                    <AuthorBlog>Nguyễn Văn Alexander</AuthorBlog>
                    <TimeBlog>5 tháng trước</TimeBlog>
                  </Author>
                  <ThreeDotIcon>
                    <ThreeDot></ThreeDot>
                  </ThreeDotIcon>
                </SubBlogTitle>
                <BlogTitle>{blogDetail.title}</BlogTitle>
                <BlogContent>{blogDetail.content}</BlogContent>
              </>
            )}
          </BlogWrapperHeader>
          <ActionComment onClick={() => setLikeBlog(1)}>
            <p>
              <Heart active={likeBlog === 1 ? true : false}></Heart>
            </p>
            <SharedBlog></SharedBlog>
          </ActionComment>
        </User>
        <ReplyAdmin>
          <IconReply>
            <ReplyArrow></ReplyArrow>
          </IconReply>
          <TitleReply>Câu trả lời từ người quản trị</TitleReply>
        </ReplyAdmin>
        <User>
          <BlogWrapperHeader>
            {/* <BlogTitle>Blog Title</BlogTitle> */}
            <SubBlogTitle>
              <ImgUser>
                <img src="https://png.pngtree.com/png-clipart/20230409/original/pngtree-admin-and-customer-service-job-vacancies-png-image_9041264.png"></img>
              </ImgUser>
              <Author>
                <AuthorBlog>Nguyễn Đức Hoàng</AuthorBlog>
                <TimeBlog>1 tiếng trước</TimeBlog>
              </Author>
              <ThreeDotIcon>
                <ThreeDot></ThreeDot>
              </ThreeDotIcon>
            </SubBlogTitle>
          </BlogWrapperHeader>
          <BlogContent>
            Bài này dễ, bạn hãy tự làm để nâng cao thực lực của bạn thân nhé !
          </BlogContent>

          <ActionComment onClick={() => setLikeBlog(2)}>
            <p>
              <Heart active={likeBlog === 2 ? true : false}></Heart>
            </p>
            <SharedBlog></SharedBlog>
          </ActionComment>
        </User>
      </DetailBlogLeft>
      <DetailBlogRight>
        <QAWrapper>
          <UserCommentWrapper>
            <AvatarUserComment
              src={
                "https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
              }
            ></AvatarUserComment>
            <InputUserWrapper>
              {" "}
              <InputUserComment
                onChange={(e) => setCommentOfUser(e.target.value)}
                placeholder="Nhập bình luận của bạn..."
              ></InputUserComment>
            </InputUserWrapper>
          </UserCommentWrapper>
          <ActionCommentWrapper>
            <ButtonComment1 color="#888" bg="white">
              Hủy
            </ButtonComment1>
            <ButtonComment2
              onClick={() => handleButtonComment()}
              mr="25px"
              color="white"
              bg="#ccc"
            >
              Bình luận
            </ButtonComment2>
          </ActionCommentWrapper>
          <ListAnswerWrapper>
            <CommentWrapper>
              <LeftComment>
                <UserAvatar
                  src={
                    "https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                  }
                ></UserAvatar>
              </LeftComment>
              <RightContentWrapper>
                <RightComment>
                  <NameUserComment>User1</NameUserComment>
                  <ContentComment>
                    Tôi nghĩ admin không nên trả lời như vậy, rất không hay
                  </ContentComment>
                </RightComment>
                <ActionForComment>
                  <ActionLike>Thích</ActionLike>
                  <ActionReply>Trả lời</ActionReply>
                  <TimeReply>20 ngày trước</TimeReply>
                </ActionForComment>

                <DisplaySubComment onClick={() => setShowCommentById(1)}>
                  <ContentDisplay>Hiển thị câu trả lời</ContentDisplay>
                  <ArrowUpDown active={showCommentById === 1 ? true : false} />
                </DisplaySubComment>
                {/* --- Comment Reply --- */}
                <SubCommentOfComment
                  display={showCommentById === 1 ? "block" : "none"}
                >
                  <CommentWrapper>
                    <LeftComment>
                      <UserAvatar
                        src={
                          "https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                        }
                      ></UserAvatar>
                    </LeftComment>
                    <RightContentWrapper>
                      <RightComment2>
                        <NameUserComment>Người phản biện</NameUserComment>
                        <ContentComment>Có thiệt ko z</ContentComment>
                      </RightComment2>
                      <ActionForComment>
                        <ActionLike>Thích</ActionLike>
                        <ActionReply>Trả lời</ActionReply>
                        <TimeReply>20 ngày trước</TimeReply>
                      </ActionForComment>
                    </RightContentWrapper>
                  </CommentWrapper>
                </SubCommentOfComment>
              </RightContentWrapper>
            </CommentWrapper>
          </ListAnswerWrapper>
        </QAWrapper>
      </DetailBlogRight>
    </DetailBlogWrapper>
  );
};

export default DetailBlog;
const DetailBlogWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(241, 241, 241);
  display: flex;
  overflow-x: hidden;
`;
const DetailBlogLeft = styled.div`
  width: 60%;
  height: 100%;
  padding-left: 20px;
`;
const DetailBlogRight = styled.div`
  width: 40%;
  height: 100%;
  border-left: 1px solid #e0e0e0;
`;
const BlogWrapper = styled.div``;

const BlogTitle = styled.p`
  color: rgb(34, 34, 34);
  font-size: 20px;
  font-weight: 700;
`;
const BlogContent = styled.p``;
const BlogWrapperHeader = styled.div`
  width: 100%;
`;

const SubBlogTitle = styled.div`
  padding: 10px 0px;
  display: flex;
  position: relative;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImgUser = styled.div`
  align-items: center;
  background: linear-gradient(180deg, #ffd900, #b45264 93.68%);
  display: flex;
  width: 40px;
  border-radius: 50%;
  height: 40px;
  justify-content: center;
  padding: 3px;
  position: relative;
  margin-right: 12px;
`;

const Author = styled.div``;

const AuthorBlog = styled.p`
  font-weight: 500;
`;
const TimeBlog = styled.p`
  color: rgb(117, 117, 117);
  margin: 0px;
`;
const User = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 5px;
  padding: 12px;
  margin-top: 12px;
  background-color: white;
`;
const ReplyAdmin = styled.p``;
const IconReply = styled.div`
  width: 40px;
  position: absolute;
`;

const TitleReply = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 50px;
  padding-left: 8%;
`;
const QAIconWrapper = styled.div`
  width: 60px;
  position: absolute;
`;
const QATitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  padding-left: 10%;
  margin-top: 24px;
`;
const ThreeDotIcon = styled.div`
  position: absolute;
  right: 0;
  width: 14px;
  height: 14px;
`;
const ActionComment = styled.div`
  margin-top: 10px;
  display: flex;
  p {
    margin-right: 10px;
  }
`;

const QAWrapper = styled.div``;

const ListAnswerWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
`;

const AnswerItem = styled.div`
  display: flex;
  border: 1px solid;
  padding: 8px 12px;
  margin: 12px auto;
  width: 90%;
  cursor: pointer;
  border-radius: 12px;
`;

const AnswerCheckIcon = styled.div`
  margin-right: 12px;
`;

const ButtonAnswerWrapper = styled.div``;
const ButtonAnswer = styled.button`
  border: 2px solid;
  background-color: #e27252;
  border-radius: 6px;
  padding: 10px 20px;
  width: 200px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f05123;
  }
`;
const SubComment = styled.p`
  font-weight: 500;
`;

const CommentWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`;
const LeftComment = styled.div`
  margin-right: 20px;
`;
const UserAvatar = styled.img`
  width: 34px;
  border-radius: 16px;
`;
const RightComment = styled.div`
  max-width: 500px;
  min-width: 400px;

  background-color: #d3d4d79e;
  border-radius: 18px;
  color: #1c1e21;
  padding: 9px 12px;
  position: relative;
`;
const ContentComment = styled.p`
  margin: 12px 0px;
  font-size: 13px;
`;
const NameUserComment = styled.p`
  font-weight: 600;
  font-size: 14px;
`;
const UserCommentWrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  margin-top: 5%;
`;

const AvatarUserComment = styled.img`
  width: 34px;
  border-radius: 16px;
  height: 34px;
  margin-right: 20px;
  display: flex;
`;

const InputUserComment = styled.input`
  padding: 12px;
  border: none;
  outline: none;
  width: 100%;
`;
const InputUserWrapper = styled.div`
  background: #fff;
  border: 1px solid #999;

  color: #333;
  height: 150px;
  font-size: 14px;
  line-height: 1.7;
  outline: none;
  resize: none;
  width: 100%;
`;
const ActionCommentWrapper = styled.div`
  width: 100%;
  display: flex;

  justify-content: flex-end;
`;
const ButtonComment = styled.button`
  background: ${(props) => (props.bg ? props.bg : "#fff")};
  color: ${(props) => (props.color ? props.color : "#888")};
  border-radius: 20px;
  /* color: #888; */
  display: inline-block;
  font-weight: 600;
  padding: 12px 16px;
  font-size: 12px;

  border: none;
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};
  margin-top: 18px;
  cursor: pointer;
`;
const ActionForComment = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
`;

const ActionLike = styled.p`
  margin-right: 12px;
  color: #e87a5a;
  font-size: 13px;
`;

const ActionReply = styled.p`
  color: #e87a5a;
  font-size: 13px;
`;
const RightContentWrapper = styled.div``;

const TimeReply = styled.p`
  color: #999;
  font-size: 13px;
  margin-left: 12px;
`;

const SubComment2 = styled.p`
  color: #666;
  font-size: 13px;
  font-style: italic;
  line-height: 1.4;
  margin-top: 10px;
`;
const CommentWrapper2 = styled.div`
  margin-left: 30px;
`;
const ButtonComment1 = styled(ButtonComment)``;

const ButtonComment2 = styled(ButtonComment)`
  background-color: #e27252;

  &:hover {
    background-color: #f05123;
  }
`;
const SubCommentOfComment = styled.div`
  margin-top: 20px;
  display: ${(props) => (props.display ? props.display : "none")};
`;
const DisplaySubComment = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;
`;
const ContentDisplay = styled.p`
  font-size: 14px;
  margin-right: 8px;
  font-weight: 600;
  cursor: pointer;
`;
const RightComment2 = styled.div`
  max-width: 500px;
  min-width: 300px;

  background-color: #d3d4d79e;
  border-radius: 18px;
  color: #1c1e21;
  padding: 9px 12px;
  position: relative;
`;
