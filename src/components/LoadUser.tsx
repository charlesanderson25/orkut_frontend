import { useEffect } from "react";
import { api } from "../api";

export function LoadUser() {
  async function loadUser() {
    const request = await api.get("/auth/session");
    console.log(request.data);
  }

  useEffect(() => {
    loadUser();
  }, []);
  return null;
}
