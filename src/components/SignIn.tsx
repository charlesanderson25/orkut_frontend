import { useState } from "react";
import { Card } from "./Card";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { api } from "../api";

const initialForm = {
  email: "",
  password: "",
};

export function SignIn() {
  const [form, setForm] = useState(initialForm);

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await api.post("/auth/sign-in", form);
  }

  return (
    <div className="flex align-center justify-center w-full h-full">
      <Card>
        <h2 className="text-center text-2xl mb-3">Entrar na sua conta</h2>
        <form onSubmit={submitForm} className="flex flex-col gap-2 w-full">
          <TextField
            valor={form.email}
            quandoMudar={(email) => setForm({ ...form, email })}
            textoPadrao="Email"
          />
          <TextField
            valor={form.password}
            quandoMudar={(password) => setForm({ ...form, password })}
            textoPadrao="Senha"
            tipo="password"
          />
          <Button type="submit">Entrar</Button>
        </form>
      </Card>
    </div>
  );
}
