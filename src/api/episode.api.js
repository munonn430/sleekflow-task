import axios from "../axiosConfig";

const episodeApi = {
  getEpisodes: ({ ids }) => axios.get(`/episode/[${ids}]`).then((res) => res),
};

export default episodeApi;
