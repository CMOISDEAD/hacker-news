import axios from "axios";

const instance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/",
  timeout: 1000,
});

export default instance;
