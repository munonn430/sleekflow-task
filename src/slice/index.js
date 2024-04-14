import contactReducer, { reset } from "./contact/contact.slice";
import episodeReducer from "./episode/episode.slice";
import { fetchContacts, fetchContactById } from "./contact/contact.thunkAction";
import { fetchEpisodes } from "./episode/episode.thunkAction";

export const action = {
  fetchContacts,
  fetchContactById,
  fetchEpisodes,
  reset,
};
export const reducer = {
  contact: contactReducer,
  episode: episodeReducer,
};
