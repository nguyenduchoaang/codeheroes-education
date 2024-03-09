import styled from "styled-components";
import { useEffect, useState } from "react";
import cookie from "react-cookies";
import { ArrowLeft, Cancel, Check } from "../based/Icon";

const ModalAnswerQuestion = ({ isOpen, onSave, onClose }) => {
  const [selectedLoginAccount, setSelectedLoginAccount] = useState(false);

  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });
  const [checkAnswer, setCheckAnswer] = useState(0);
  const [lessonQuestion, setLessonQuestion] = useState({
    id: 1,
    lesson_id: 1,
    score: 1,
    content: "Sass là ngôn ngữ gì?",
  });

  const [lessonAnswer, setLessonAnswer] = useState([
    {
      id: 1,
      content: "Ngôn ngữ định kiểu theo tầng",
      is_correct: 1,
      question_id: 1,
    },
    {
      id: 2,
      content: "Ngôn ngữ đánh dấu",
      is_correct: 0,
      question_id: 1,
    },
    {
      id: 3,
      content: "Ngôn ngữ tiền xử lý SCSS",
      is_correct: 0,
      question_id: 1,
    },
  ]);

  console.log(formLogin);

  return (
    <ModalAnswerQuestionWrapper style={{ display: isOpen ? "flex" : "none" }}>
      <ModalAnswerQuestionInner>
        <ActionHeader>
          <CancelAction onClick={onClose}>
            {" "}
            <Cancel />
          </CancelAction>
        </ActionHeader>

        <Header>
          <IconArrowLeft
            active={selectedLoginAccount ? true : false}
            onClick={() => setSelectedLoginAccount(false)}
          >
            <ArrowLeft active={true} />
          </IconArrowLeft>
          <HeaderTitle></HeaderTitle>
          <HeaderWarning></HeaderWarning>
        </Header>
        <Body>
          <QAWrapper>
            <QuestionTitle>{lessonQuestion.content}</QuestionTitle>
            <ListAnswerWrapper>
              {lessonAnswer.map((item, index) => {
                return (
                  <>
                    <AnswerItem onClick={() => setCheckAnswer(item.id)}>
                      <AnswerCheckIcon>
                        <Check
                          active={checkAnswer === item.id ? true : false}
                        />
                      </AnswerCheckIcon>
                      <AnswerTitle>{item.content}</AnswerTitle>
                    </AnswerItem>
                  </>
                );
              })}
            </ListAnswerWrapper>
          </QAWrapper>

          <RegisterAccount>
            <TitleRegister></TitleRegister>
            <ButtonAnswerWrapper onClick={() => onSave(true)}>
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
  background-color: #fff;

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
