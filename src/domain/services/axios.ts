import axios from "axios";

const iAxios = axios;

iAxios.defaults.baseURL = 'http://localhost:8000';

export { iAxios };