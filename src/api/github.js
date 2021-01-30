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

export function getUserRepo(userName, config) {
  let url = `${API_PATH.userRepo(userName)}`;
  githubAPIInstance.get(url, config).then(response => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
}
