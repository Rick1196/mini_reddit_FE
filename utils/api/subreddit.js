import customAxios from "../axios";
import { getQuery } from "../getQuery";

const subRedditAPI = {
  post: ({ name, type, isNSFW }) =>
    customAxios.post("/subreddits", { name, type, isNSFW }),
  get: (subRedditId) => customAxios.get(`/subReddit/${subRedditId}`),
  getAll: () => customAxios.get("/subreddits"),
  getPaginated: (page, limit = 10) =>
    customAxios.get(
      `subReddit?${author ? "author=" + author : ""}&${
        tags ? "tags=" + JSON.stringify(tags) : ""
      }&${getQuery(page, limit)}`
    ),
  delete: (subRedditId, userEmail) =>
    customAxios.delete(`/subReddit/${id}/${email}`),
};

export default subRedditAPI;
