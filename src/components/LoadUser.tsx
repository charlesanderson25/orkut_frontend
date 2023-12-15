import { useEffect } from "react";
import { TokenStorage } from "../tokenStorage";
import { useGlobalStore } from "../useGlobalStore";
import { api } from "../api";

export function LoadUser() {
  const setUser = useGlobalStore((state) => state.setUser);
  const setIsAuthorized = useGlobalStore((state) => state.setIsAuthorized);

  async function loadUser() {
    const token = TokenStorage.getToken();
    if (!token) {
      return;
    }
    const request = await api.get("/auth/session");
    const user = request.data;
    setIsAuthorized(true);
    setUser({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      avatar: user.avatar,
    });
  }

  useEffect(() => {
    loadUser();
  }, []);
  return null;
}
