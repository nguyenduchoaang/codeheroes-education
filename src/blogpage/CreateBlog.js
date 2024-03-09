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
  BookRule,
} from "../based/Icon";
const CreateBlog = () => {
  return (
    <CreateBlogWrapper>
      <CreateBlogInner>
        <SubBlogTitle>
          <ImgUser>
            <img src="https://files.fullstack.edu.vn/f8-prod/user_avatars/309573/64af7196d84c6.png"></img>
          </ImgUser>
          <Author>
            <AuthorBlog>Nguyễn Văn Alexander</AuthorBlog>
            <TimeBlog>
              <BookRule />
              <p>Quy tắc</p>
            </TimeBlog>
          </Author>
        </SubBlogTitle>
        <CreateBlogHeader>
          <CreateBlogTitle>Tạo bài viết mới</CreateBlogTitle>
          <CreateBlogAction>
            <CreateBlogButton>Đăng bài</CreateBlogButton>
          </CreateBlogAction>
        </CreateBlogHeader>
        <CreateBlogBody>
          <CreateBlogItem>
            <CreateBlogLabel>Tiêu đề</CreateBlogLabel>
            <CreateBlogInput
              type="text"
              placeholder="Nhập tiêu đề"
            ></CreateBlogInput>
          </CreateBlogItem>
          <CreateBlogItem>
            <CreateBlogLabel>Nội dung</CreateBlogLabel>
            <CreateBlogTextArea placeholder="Nhập nội dung"></CreateBlogTextArea>
          </CreateBlogItem>
        </CreateBlogBody>
      </CreateBlogInner>
    </CreateBlogWrapper>
  );
};

const CreateBlogWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const CreateBlogInner = styled.div`
  width: 60%;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const CreateBlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--border);
`;

const CreateBlogTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
`;

const CreateBlogAction = styled.div``;

const CreateBlogButton = styled.button`
  padding: 10px 20px;
  background: #0866ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: blue;
  }
`;

const CreateBlogBody = styled.div`
  padding: 20px;
`;

const CreateBlogItem = styled.div`
  margin-bottom: 20px;
`;

const CreateBlogLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
`;

const CreateBlogInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 5px;
`;

const CreateBlogTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 5px;
  min-height: 200px;
  resize: vertical;
`;

const SubBlogTitle = styled.div`
  padding: 10px 20px;
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
  width: 80px;
  padding: 5px 0px;
  text-align: center;
  font-size: 13px;
  border-radius: 6px;
  background: #e4e6eb;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-left: 5px;
    margin-bottom: 3px;
  }
`;

export default CreateBlog;
