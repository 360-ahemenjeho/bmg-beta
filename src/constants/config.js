import axios from "axios";

export const backendBaseUrl = import.meta.env.API_BASE_URL + "/V1";
export const apiReq = axios.create({ baseURL: backendBaseUrl });
export const storageUrl = import.meta.env.STORAGE_URL;
