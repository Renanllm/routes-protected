import axios from "axios";

const token = localStorage.getItem("token") ?? "";

const client = axios.create({
  baseURL: "https://vila-bet-api.herokuapp.com"
});

if (token) {
  client.defaults.headers.common['Authorization'] = token;
}

export default client;