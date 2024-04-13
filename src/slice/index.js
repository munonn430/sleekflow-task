import contactReducer from "./contact.slice";
import episodeReducer from "./episode.slice";
import { fetchContacts, fetchContactById } from "./contact.thunkAction";
import { fetchEpisodes } from "./episode.thunkAction";

export const action = {
  fetchContacts,
  fetchContactById,
  fetchEpisodes,
};
export const reducer = {
  contact: contactReducer,
  episode: episodeReducer,
};
