import { apiHttp } from "../apiAxios";

export const getContactListAPI = () => apiHttp("GET", `/v1/client/contact`, null)

export const ContactAddAPI = (contactValues) => apiHttp("POST", `/v1/client/contact`, contactValues);

export const ContactUpdateAPI = (contactId, updatedContactValues) =>
  apiHttp("PATCH", `/v1/client/contact/${contactId}`, updatedContactValues);

