import axios from "axios";
export function fetchUser() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}
