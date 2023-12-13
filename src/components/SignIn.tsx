import { useState } from "react";
import ButtonSubmitForm from "./ButtonSubmitForm";
import { Card } from "./Card";
import { TextField } from "./TextField";
import { Button } from "./Button";

const initialForm = {
  email: "",
  password: "",
};

export function SignIn() {
  const [form, setForm] = useState(initialForm);

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`
      email: ${form.email}
      senha: ${form.password}
    `);
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
