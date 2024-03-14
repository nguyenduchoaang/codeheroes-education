import styled from "styled-components";
import { useEffect, useState } from "react";
import { BookMark, ThreeDot } from "../based/Icon";
import { Link } from "react-router-dom";
import BlogServices from "../based/services/BlogServices";
// const listBlog = [
//   {
//     id: 1,
//     title: "Authentication & Authorization trong ReactJS",
//     content:
//       "Authentication và Authorization là một phần quan trọng trong việc phát triển phần mềm, giúp chúng ta xác thực và phân quyền...",
//     createdBy: {
//       id: 1,
//       name: "Nguyễn Văn A",
//       avt: "https://files.fullstack.edu.vn/f8-prod/user_avatars/309573/64af7196d84c6.png",
//     },
//     img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/8306/65299d0ce743e.png",
//     tag: "ReactJs",
//     timeCreated: "4 tháng trước",
//     timeRead: "5 phút đọc",
//   },
//   {
//     id: 1,
//     title: "Authentication & Authorization trong ReactJS",
//     content:
//       "Authentication và Authorization là một phần quan trọng trong việc phát triển phần mềm, giúp chúng ta xác thực và phân quyền...",
//     createdBy: {
//       id: 1,
//       name: "Nguyễn Văn A",
//       avt: "https://files.fullstack.edu.vn/f8-prod/user_avatars/309573/64af7196d84c6.png",
//     },
//     tag: "ReactJs",
//     timeCreated: "4 tháng trước",
//     timeRead: "5 phút đọc",
//   },
// ];

const Blog = () => {
  const [listBlog, setListBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const [err, data] = await BlogServices.GetAllBlog();
      if (!err && data) {
        setListBlog(data);
      }
    };
    fetchBlog();
  }, []);

  console.log(listBlog);

  return (
    <>
      <BlogWrapper>
        <BlogInner>
          <Top>
            <TitleTop>Bài viết nổi bật</TitleTop>
            <ContentTop>
              <ContentDetail>
                Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình
                online và các kỹ thuật lập trình web.
              </ContentDetail>
            </ContentTop>
          </Top>
          <RecommendTopic>
            <TitleRecommend>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</TitleRecommend>
            <ListTopic>
              <Topic>
                <TopicLink>Front-end / Mobile apps</TopicLink>
              </Topic>
            </ListTopic>
          </RecommendTopic>
          <Center>
            <LeftItem>
              {listBlog.map((item, index) => (
                <>
                  <Link to={`/blog/${item.id}`}>
                    <Item>
                      <HeaderItem>
                        <ActionLeft>
                          <AvtWrapper>
                            <AvtUser></AvtUser>
                          </AvtWrapper>
                          <NameUser></NameUser>
                        </ActionLeft>
                        <ActionRight>
                          <ActionIcon>
                            <BookMark active={true}></BookMark>
                          </ActionIcon>
                          <ActionIcon>
                            <ThreeDot active={true}></ThreeDot>
                          </ActionIcon>
                        </ActionRight>
                      </HeaderItem>
                      <BodyItem>
                        <LeftBodyItem>
                          <TitleBlog>{item.title}</TitleBlog>
                          <ContentBlog>{item.content}</ContentBlog>
                          <SubItem>
                            <TagBlog></TagBlog>
                            <ContentDetail></ContentDetail>
                            <ContentDetail></ContentDetail>
                          </SubItem>
                        </LeftBodyItem>
                        <RightBodyItem>
                          {/* <ImgBlog src={item.img}></ImgBlog> */}
                        </RightBodyItem>
                      </BodyItem>
                    </Item>
                  </Link>
                </>
              ))}
            </LeftItem>
            <RightItem></RightItem>
          </Center>
        </BlogInner>
      </BlogWrapper>
    </>
  );
};
export default Blog;

const BlogWrapper = styled.div`
  width: 100%;
`;

const Top = styled.div``;
const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

const ContentDetail = styled.span`
  margin: 6px 0;
  font-weight: unset;
  font-size: 14px;
`;

const BlogInner = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const LeftItem = styled.div`
  width: 75%;
`;

const RightItem = styled.div``;

const Item = styled.div`
  border: 2px solid #e8e8e8;
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  margin-bottom: 3%;
`;

const HeaderItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BodyItem = styled.div`
  display: flex;
`;
const LeftBodyItem = styled.div`
  width: 70%;
`;

const RightBodyItem = styled.div`
  width: 30%;
`;

const AvtUser = styled.img`
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const ActionLeft = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const NameUser = styled.p`
  color: #292929;
  font-size: 12px;
  font-weight: 600;
  margin-left: 8px;
`;

const ActionRight = styled.div`
  width: 5%;
  display: flex;
  justify-content: space-between;
  height: 26px;
`;

const ActionIcon = styled.div`
  width: 12px;
  height: 16px;
`;
const TitleBlog = styled.p`
  color: #292929;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 0;
  margin-top: 8px;
`;

const ContentBlog = styled.p`
  color: #505050;
  font-size: 15px;
  line-height: 1.6;
  margin-top: 4px;
`;

const TagBlog = styled.div`
  background-color: #f2f2f2;
  border-radius: 100px;
  color: #333;
  font-weight: 500;
  line-height: 2rem;
  margin-right: 12px;
  padding: 4px 10px;
`;

const ImgBlog = styled.img`
  background: #ebebeb;
  border-radius: 15px;
  color: #757575;
  display: block;
  font-size: 1.4rem;
  line-height: 1.8;
  max-height: 120px;
  object-fit: cover;
  overflow: hidden;
  text-align: center;
  width: 200px;
`;

const RecommendTopic = styled.div`
  margin-top: 8%;
  margin-bottom: 2%;
`;

const TitleRecommend = styled.div`
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.8;
  margin-bottom: 2%;
  text-transform: uppercase;
`;

const ListTopic = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  padding-left: 0;
`;

const Topic = styled.li``;

const SubItem = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`;
const TopicLink = styled.a`
  background-color: #f2f2f2;
  border-radius: 30px;
  color: #333;
  display: block;
  font-weight: 500;
  line-height: 1.8;
  margin: 0 8px 8px 0;
  padding: 6px 16px;

  user-select: none;
`;

const AvtWrapper = styled.div`
  align-items: center;
  background: linear-gradient(180deg, #ffd900, #b45264 93.68%);
  display: flex;
  justify-content: center;
  width: 24px;
  padding: 1.7px;
  border-radius: 50%;
  position: relative;
`;
