import axios from "../axiosConfig";

const contactApi = {
  getContacts: ({ name, status, gender }) =>
    axios
      .get("/character", {
        params: {
          name,
          status,
          gender,
        },
      })
      .then((res) => res),
  getContactById: ({ id }) => axios.get(`/character/${id}`).then((res) => res),
};

export default contactApi;
