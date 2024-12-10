import { apiHttp } from "../apiAxios";

export const getContactListAPI = () => apiHttp("GET", `/v1/client/contact`, null)

export const ContactAddAPI = (contactValues) => apiHttp("POST", `/v1/client/contact`, contactValues);

export const getUserAPI = (contactId) => apiHttp("GET", `/v1/client/contact/${contactId}`, null);

export const deleteContactAPI = (contactID) => apiHttp('DELETE', `/v1/client/contact/${contactID}`);



