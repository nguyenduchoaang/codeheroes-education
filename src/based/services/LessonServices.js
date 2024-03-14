import BaseServices from "./BaseServices";

const LessonServices = {
  GetLessonById: async (id) => {
    return await BaseServices.Get(`/lessons/${id}/`);
  },
  CommentLesson: async (selectedLesson, data) => {
    return await BaseServices.Post(
      `/lessons/${selectedLesson}/comments/`,
      data
    );
  },
  GetAllCommentLesson: async (id) => {
    return await BaseServices.Get(`/lessons/${id}/comments/`);
  },
  // ReplyComment : async (id, data) => {
  //   return await BaseServices.Post(`/comments/${id}/replies/`, data);
  // }
};

export default LessonServices;
