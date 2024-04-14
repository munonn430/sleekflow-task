import axios from "../axiosConfig";

const contactApi = {
  getContacts: ({ page, name, status, gender }) => {
    return axios.get("/character", {
      params: {
        page,
        name,
        status,
        gender,
      },
    });
  },
  getContactById: ({ id }) => axios.get(`/character/${id}`).then((res) => res),
};

export default contactApi;
