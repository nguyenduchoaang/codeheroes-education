import BaseServices from "./BaseServices";

const CourseServices = {
  GetAllCourse: async () => {
    return await BaseServices.Get(`/courses/`);
  },
  GetCourseById: async (id) => {
    return await BaseServices.Get(`/courses/${id}/`);
  },
  CreateCourse: async (model) => {
    return await BaseServices.Post(`/courses/`, model);
  },
  DeleteCourseById: async (id) => {
    return await BaseServices.Delete(`/courses/${id}/`);
  },
  UpdateCourseById: async (id, model) => {
    return await BaseServices.Put(`/courses/${id}/`, model);
  },
  EnrollCourse: async (id) => {
    return await BaseServices.Post(`/courses/${id}/enroll/`);
  },
};

export default CourseServices;
