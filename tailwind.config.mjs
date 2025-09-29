// tailwind.config.mjs (Versão Corrigida)

import { defineConfig } from "tailwindcss";
import daisyui from "daisyui";

export default defineConfig({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // Mantenha extend vazio se não houver outras customizações
    },

    // NOVO BLOCO: font-family está DENTRO do objeto 'theme'
    fontFamily: {
      // Sobrescreve a fonte 'sans' padrão com a sua fonte
      sans: ["Big Shoulders", "sans-serif"],
      // Classe customizada opcional (font-big-shoulders)
      "big-shoulders": ["Big Shoulders", "sans-serif"],
    },
  }, // <-- Fechamento correto de 'theme' // Restante da Configuração
  plugins: [daisyui],
  daisyui: {
    themes: [
      /* ... */
    ],
  },
});
