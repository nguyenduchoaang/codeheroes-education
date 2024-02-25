import BaseServices from "./BaseServices";

const AccountServices = {
  Register: async (model) => {
    return await BaseServices.Post("/auth/register", model);
  },
  Login: async (model) => {
    return await BaseServices.Post("/auth/login", model);
  },
};

export default AccountServices;
