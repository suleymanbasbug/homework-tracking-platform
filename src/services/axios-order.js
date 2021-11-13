import axios from "axios";

const instance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,HEAD,PUT,OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
  baseURL:
    "https://smartface-7c5c7-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
