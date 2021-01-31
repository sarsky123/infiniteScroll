import axios from "axios";

const _BASE_URL = "https://api.github.com/";

const _API_PATH = {
  userRepo: userName => {
    return `users/${userName}/repos`;
  }
};

const _githubAPIInstance = axios.create({
  baseURL: _BASE_URL
});

export async function getUserRepo(userName, config, callback) {
  let url = `${_API_PATH.userRepo(userName)}`;
  let defaultConfig = {
    // recommended config
    accept: "application/vnd.github.v3+json"
  };
  config = Object.assign({}, defaultConfig, config);
  await _githubAPIInstance.get(url, config).then(response => {
    callback && callback(response);
  });
}
