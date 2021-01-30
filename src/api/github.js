import axios from "axios";

const BASE_URL = "https://api.github.com/";

const API_PATH = {
  userRepo: userName => {
    return `users/${userName}/repos`;
  }
};

const githubAPIInstance = axios.create({
  baseURL: BASE_URL
});

export function getUserRepo(userName, config, callback) {
  let url = `${API_PATH.userRepo(userName)}`;
  let defaultConfig = {
    // recommended config
    accept: "application/vnd.github.v3+json"
  };
  config = Object.assign({}, defaultConfig, config);
  githubAPIInstance.get(url, config).then(response => {
    callback && callback(response);
  });
}
