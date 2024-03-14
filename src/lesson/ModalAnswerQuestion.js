import styled from "styled-components";
import { useEffect, useState } from "react";
import cookie from "react-cookies";
import { ArrowLeft, Cancel, Check, QAIcon } from "../based/Icon";
import { notify } from "../based/Notification";
import Notification from "../based/Notification";
const ModalAnswerQuestion = ({ isOpen, onSave, onClose, dataQuestion }) => {
  const [checkAnswer, setCheckAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [dataQuestionLesson, setDataQuestionLesson] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);

  useEffect(() => {
    console.log("dataQuestion nek, ", dataQuestion);
    setDataQuestionLesson(dataQuestion);
    for (let i = 0; i < dataQuestion.length; i++) {
      for (let j = 0; j < dataQuestion[i].choices.length; j++) {
        if (dataQuestion[i].choices[j].is_correct === true) {
          setCorrectAnswer(dataQuestion[i].choices[j].id);
        }
      }
    }
  }, [isOpen]);

  const handleCheckAnswer = () => {
    if (answeredCount >= 3) {
      notify("warning", "Bạn đã trả lời tối đa 3 câu hỏi!"); // Thông báo khi người dùng đã trả lời tối đa 3 câu hỏi
      return; // Không thực hiện kiểm tra nếu đã trả lời tối đa
    }

    if (checkAnswer === correctAnswer) {
      notify("success", "Câu trả lời đúng!", "", 1000);
      setTimeout(() => {
        onSave();
      }, 1000);
    } else {
      notify(
        "error",
        `Câu trả lời chưa đúng! bạn còn ${2 - answeredCount} lần trả lời!`
      );
    }

    setAnsweredCount((prevCount) => prevCount + 1);
  };

  return (
    <ModalAnswerQuestionWrapper style={{ display: isOpen ? "flex" : "none" }}>
      <ModalAnswerQuestionInner>
        <Notification />
        <ActionHeader>
          <CancelAction onClick={onClose}>
            {" "}
            <Cancel active={false} />
          </CancelAction>
        </ActionHeader>
        <Header>
          <QAIconWrapper>
            {" "}
            <QAIcon />
          </QAIconWrapper>
        </Header>
        <Body>
          <QAWrapper>
            <ListAnswerWrapper>
              {dataQuestionLesson &&
                dataQuestionLesson.map((item, index) => {
                  return (
                    <>
                      <QuestionTitle>{item.content}</QuestionTitle>
                      {item.choices.map((c, i) => {
                        return (
                          <>
                            <AnswerItem onClick={() => setCheckAnswer(c.id)}>
                              <AnswerCheckIcon>
                                <Check
                                  active={checkAnswer === c.id ? true : false}
                                />
                              </AnswerCheckIcon>
                              <AnswerTitle>{c.content}</AnswerTitle>
                            </AnswerItem>
                          </>
                        );
                      })}
                    </>
                  );
                })}
            </ListAnswerWrapper>
          </QAWrapper>

          <RegisterAccount>
            <TitleRegister></TitleRegister>
            <ButtonAnswerWrapper onClick={() => handleCheckAnswer()}>
              <ButtonAnswer>Trả lời</ButtonAnswer>
            </ButtonAnswerWrapper>
            {/* <ActionRegister>Đăng ký</ActionRegister> */}
          </RegisterAccount>
          <ItemBottom>
            Hãy suy nghĩ kĩ trước khi lựa chọn trả lời, điểm số của bạn sẽ được
            theo dõi để{" "}
            <a href="https://fullstack.edu.vn/terms" target="_top">
              thống kê quá trình học tập
            </a>{" "}
            của bạn
          </ItemBottom>
        </Body>
      </ModalAnswerQuestionInner>
    </ModalAnswerQuestionWrapper>
  );
};

const ModalAnswerQuestionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background: rgba(0, 0, 0, 0.4);
`;
const ModalAnswerQuestionInner = styled.div`
  width: 540px;
  height: 600px;
  border-radius: 20px;
  background: #191d1e;

  position: relative;

  z-index: 1;
`;

export default ModalAnswerQuestion;
const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 20px;
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
  color: #fff;
  font-size: 12px;
  width: 80%;
  margin-top: 20px;
  a {
    color: #ff7420;
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
  width: 80%;
  margin: 0 auto;
  color: white;
`;

const ListAnswerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AnswerItem = styled.div`
  display: flex;
  padding: 8px 12px;
  margin: 12px auto;
  width: 90%;
  cursor: pointer;
  border-radius: 12px;
  background: #323c4a;
  border: none;
  align-items: center;
  color: white;
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
const QAIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  width: 83px;
  position: absolute;
  top: -48px;
`;
