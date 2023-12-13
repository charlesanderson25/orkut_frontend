const tokenPath = "token";

export abstract class TokenStorage {
  static getToken() {}

  static setToken(token: string) {
    localStorage.setItem(tokenPath, token);
  }

  static removeToken() {}
}
