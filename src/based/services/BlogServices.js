import BaseServices from "./BaseServices";

const BlogServices = {
  CreateBlog: async (model) => {
    return await BaseServices.Post(`/blogs/`, model);
  },
  GetAllBlog: async () => {
    return await BaseServices.Get(`/blogs/`);
  },
  GetBlogById: async (id) => {
    return await BaseServices.Get(`/blogs/${id}/`);
  },
};

export default BlogServices;
