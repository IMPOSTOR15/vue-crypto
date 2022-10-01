import axios from "axios";

const loginConfig = {
  baseURL: process.env.VUE_APP_BASE_URL,
  headres: {
    'Content-Type' : 'application/json'
  }
}

export const LogingAPIInstance = axios.create(loginConfig);

defaultConfig = {
  baseURL: process.env.VUE_APP_BASE_URL,
  headres: {
    'Content-Type' : 'application/json'
  }
}

export const DefaultLogingAPIInstance = axios.create(loginConfig);