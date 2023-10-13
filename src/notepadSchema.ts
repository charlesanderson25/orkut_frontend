import { z } from "zod";

const title = z
  .string()

  .min(3, {
    message: "Mínimo de 3 caracteres para o título.",
  })
  .max(16, {
    message: "Máximo de 16 caracteres para o título",
  });

const subtitle = z
  .string()

  .min(7, {
    message: "Mínimo de 7 caracteres para o subtítulo.",
  })
  .max(24, {
    message: "Máximo de 24 caracteres para o subtítulo",
  });

const content = z
  .string()

  .min(16, {
    message: "Mínimo de 16 caracteres para o conteúdo.",
  })
  .max(140, {
    message: "Máximo de 140 caracteres para o conteúdo",
  });

export const notepadSchema = z.object({
  title,
  subtitle,
  content,
});
