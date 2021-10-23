import {API_BASE_URL} from "@env"
const url = API_BASE_URL;


export const loginURL = `${url}/jwt-auth/v1/token`;
export const registerURL = `${url}/wp/v2/users/register`;
export const updateUserURL = `${url}/wp/v2/users/me`;

