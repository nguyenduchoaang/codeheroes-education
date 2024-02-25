import BaseServices from "./BaseServices";

const UserServices = {
  EnrollCourse: async (id) => {
    return await BaseServices.Post(`/courses/${id}/enroll/`);
  },
};

export default UserServices;
