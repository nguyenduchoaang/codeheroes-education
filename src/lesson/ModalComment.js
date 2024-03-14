import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cookie from "react-cookies";
import { ArrowLeft, ArrowUpDown, Cancel } from "../based/Icon";
import LessonServices from "../based/services/LessonServices";
const ModalComment = ({ isOpen, onSave, onClose, lessonsSelected }) => {
  const [selectedLesson, setSelectedLesson] = useState();
  const [showCommentById, setShowCommentById] = useState(null);
  const [comment, setComment] = useState({
    content: "",
  });

  console.log("123");

  const [reply, setReply] = useState({
    content: "",
    parent_id: 0,
  });
  const [listComment, setListComment] = useState([]);
  const [listReplyComment, setListReplyComment] = useState([]);
  const [showReplyById, setShowReplyById] = useState(null);

  useEffect(() => {
    setSelectedLesson(lessonsSelected);
    async function fetchData() {
      await handleGetAllCommentOfLesson(lessonsSelected);
    }

    fetchData();
  }, [isOpen, selectedLesson]);

  async function handleGetAllCommentOfLesson(id) {
    const [err, data] = await LessonServices.GetAllCommentLesson(id);
    if (!err && data) {
      setListComment(data);
      const listReplyComment = data.filter((item) => item.parent_id !== null);
      setListReplyComment(listReplyComment);
    } else {
      console.log(err);
    }
  }

  async function CommentLesson(id, comment) {
    const [err, data] = await LessonServices.CommentLesson(id, comment);
    if (!err && data) {
      console.log("comment ne", data);
      setComment({ content: "" });
    } else {
      console.log(err);
    }
  }
  const handleButtonComment = async () => {
    setListComment([...listComment, comment]);
    await CommentLesson(selectedLesson, comment);
  };

  const handleButtonReply = () => {
    console.log("123");
  };

  console.log("rreply", reply);

  const handleButtonReplyComment = async () => {
    const [err, data] = await LessonServices.CommentLesson(
      selectedLesson,
      reply
    );
    if (!err && data) {
      console.log("comment ne", data);
      setShowReplyById(null);
      handleGetAllCommentOfLesson(selectedLesson);
    } else {
      console.log(err);
    }
  };

  return (
    <ModalCommentWrapper style={{ display: isOpen ? "flex" : "none" }}>
      <ModalCommentInner>
        <Header>
          <ActionHeader>
            <CancelAction onClick={onClose}>
              {" "}
              <Cancel />
            </CancelAction>
          </ActionHeader>
          <HeaderWarning></HeaderWarning>
        </Header>
        <CommentWrapper2>
          <SubComment>{listComment.length} bình luận</SubComment>
          <SubComment2>
            (Hãy bình luận và tạo ra 1 cộng đồng văn minh, lịch sự nhé!)
          </SubComment2>
        </CommentWrapper2>
        <UserCommentWrapper>
          <AvatarUserComment
            src={
              "https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
            }
          ></AvatarUserComment>
          <InputUserWrapper>
            {" "}
            <InputUserComment
              value={comment.content}
              onChange={(e) => {
                setComment({ content: e.target.value });
              }}
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
        <Body>
          <QAWrapper>
            <ListAnswerWrapper>
              {listComment &&
                listComment.length > 0 &&
                listComment
                  .filter((itemFilter) => itemFilter.parent_id == null)
                  .map((item, index) => {
                    return (
                      <>
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
                              <ContentComment>{item.content}</ContentComment>
                            </RightComment>
                            <ActionForComment>
                              <ActionLike>Thích</ActionLike>
                              <ActionReply
                                onClick={() => {
                                  setShowReplyById(item.id);
                                  setReply({ ...reply, parent_id: item.id });
                                }}
                              >
                                Trả lời
                              </ActionReply>

                              <TimeReply>{item.created_date}</TimeReply>
                            </ActionForComment>
                            {listReplyComment.some(
                              (itemFilter) => itemFilter.parent_id === item.id
                            ) && (
                              <>
                                <DisplaySubComment
                                  onClick={() => {
                                    if (showCommentById === item.id) {
                                      setShowCommentById(null);
                                    } else {
                                      setShowCommentById(item.id);
                                    }
                                  }}
                                >
                                  <ContentDisplay>
                                    Hiển thị câu trả lời
                                  </ContentDisplay>
                                  <ArrowUpDown active={false} />
                                </DisplaySubComment>
                              </>
                            )}
                            {showReplyById === item.id && (
                              <>
                                <UserCommentWrapper>
                                  <AvatarUserComment
                                    src={
                                      "https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                                    }
                                  ></AvatarUserComment>
                                  <InputUserWrapper>
                                    {" "}
                                    <InputUserComment
                                      onChange={(e) => {
                                        setReply({
                                          ...reply,
                                          content: e.target.value,
                                        });
                                      }}
                                      placeholder="Nhập bình luận của bạn..."
                                    ></InputUserComment>
                                  </InputUserWrapper>
                                </UserCommentWrapper>
                                <ActionCommentWrapper>
                                  <ButtonComment1 color="#888" bg="white">
                                    Hủy
                                  </ButtonComment1>
                                  <ButtonComment2
                                    onClick={() => handleButtonReplyComment()}
                                    mr="25px"
                                    color="white"
                                    bg="#ccc"
                                  >
                                    Bình luận
                                  </ButtonComment2>
                                </ActionCommentWrapper>
                              </>
                            )}

                            {/* --- Comment Reply --- */}
                            {listReplyComment &&
                              listReplyComment
                                .filter(
                                  (itemFilter) =>
                                    itemFilter.parent_id === item.id
                                )
                                .map((itemReply, indexR) => (
                                  <>
                                    <SubCommentOfComment
                                      key={indexR} // Thêm key vào đây
                                      display={
                                        showCommentById === item.id
                                          ? "block"
                                          : "none"
                                      }
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
                                          <RightComment
                                            onClick={() => console.log("123")}
                                          >
                                            <NameUserComment>
                                              User1
                                            </NameUserComment>
                                            <ContentComment>
                                              {itemReply.content}
                                            </ContentComment>
                                          </RightComment>
                                          <ActionForComment
                                            onClick={() => handleButtonReply()}
                                          >
                                            <ActionLike>Thích ne</ActionLike>
                                            <ActionReply>Trả lời</ActionReply>
                                            <TimeReply>20 ngày trước</TimeReply>
                                          </ActionForComment>
                                        </RightContentWrapper>
                                      </CommentWrapper>
                                    </SubCommentOfComment>
                                  </>
                                ))}
                          </RightContentWrapper>
                        </CommentWrapper>
                      </>
                    );
                  })}
            </ListAnswerWrapper>
          </QAWrapper>

          <RegisterAccount>
            <TitleRegister></TitleRegister>
            <ButtonAnswerWrapper
              onClick={() => onSave(true)}
            ></ButtonAnswerWrapper>
            {/* <ActionRegister>Đăng ký</ActionRegister> */}
          </RegisterAccount>
        </Body>
      </ModalCommentInner>
    </ModalCommentWrapper>
  );
};
const fadeInAnimation = keyframes`
 from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ModalCommentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  overflow: hidden;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background: rgba(0, 0, 0, 0.4);
`;
const ModalCommentInner = styled.div`
  width: 40%;
  height: 100%;
  overflow-y: scroll;

  background-color: #fff;

  position: absolute;
  right: 0;
  z-index: 1;
  animation: ${fadeInAnimation} 0.2s ease-in forwards;
`;

export default ModalComment;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 20px;
`;
const HeaderWarning = styled.p`
  width: 80%;
  text-align: center;
  margin-top: 30px;
  color: red;
  margin: 0 auto;
`;
const HeaderTitle = styled.p`
  text-align: center;
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
  position: absolute;
  right: 0;
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

const QAWrapper = styled.div`
  width: 100%;
`;

const AnswerTitle = styled.p``;

const QuestionTitle = styled.p`
  font-size: 26px;
  margin-bottom: 20px;
  text-align: center;
`;

const ListAnswerWrapper = styled.div`
  width: 100%;
  display: flex;
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
  margin-bottom: 15px;
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

  background-color: #f2f3f5;
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
  z-index: 2;
`;

const ActionLike = styled.p`
  margin-right: 12px;
  color: #e87a5a;
  font-size: 13px;
  cursor: pointer;
`;

const ActionReply = styled.p`
  color: #e87a5a;
  font-size: 13px;
  cursor: pointer;
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
const ShowReplyWrapper = styled.div`
  display: flex;
`;
