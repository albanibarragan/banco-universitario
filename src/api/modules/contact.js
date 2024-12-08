import { apiHttp } from "../apiAxios";

export const getContactListAPI = () => apiHttp("GET", `/v1/client/contact`, null)