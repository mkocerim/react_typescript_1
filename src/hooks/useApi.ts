import axios from "axios";

export type ApiType = "jsonplaceholder" | "adoptez";

export default function useApi(selectedType: ApiType) {
  let baseApiUrl = "";

  if (selectedType === "jsonplaceholder") {
    baseApiUrl = "https://jsonplaceholder.typicode.com/";
  } else if (selectedType === "adoptez") {
    baseApiUrl = "https://api.adoptez1artisan.com/";

    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
    }
  }
  axios.defaults.baseURL = baseApiUrl;

  return axios;
}
