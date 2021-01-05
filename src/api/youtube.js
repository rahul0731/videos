import axios from "axios";

const KEY = "AIzaSyDaJL6IjHU68UX044zlvJ2cZ8pmDFOd66A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
