import { create } from "apisauce";

const apiCient = create({
  baseURL: "http://192.168.0.42:9000/api",
});

export default apiClient;
