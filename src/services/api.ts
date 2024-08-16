import axios from "axios";

// json-server --watch db.json
export const api = axios.create({
  baseURL: "https://cart-context-bira.vercel.app/",
});
