import { LogingAPIInstance, DefaultLogingAPIInstance } from "@/api";

export const AuthApi = {
  login(login, password) {
      const url = '/login';
      const data = {login, password};
    return LogingAPIInstance.post(url, data)
  },

  logout() {
    const url = '/logout'
    return DefaultLogingAPIInstance.post(url)
  }
}