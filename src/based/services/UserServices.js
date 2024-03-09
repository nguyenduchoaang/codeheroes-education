import BaseServices from "./BaseServices";

const UserServices = {
  EnrollCourse: async (id) => {
    return await BaseServices.Post(`/courses/${id}/enroll/`);
  },
  GetCourseOfUser: async (id) => {
    return await BaseServices.Get(`/users/${id}/enrollments/`);
  },
};

export default UserServices;
