import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**'],
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,

  // Aquí es donde puedes agregar o sobreescribir tus reglas:
  {
    rules: {
      // 1. console.log(): Advertencia amarilla para que no los olvides.
      'no-console': 'warn',

      // 2. Variables sin usar: Modo súper estricto (Error rojo)
      'no-unused-vars': 'off', // Apagamos la regla genérica de JS
      '@typescript-eslint/no-unused-vars': 'error', // Usamos la de TypeScript como error

      // 3. Comparaciones estrictas: Requerir siempre === (Error rojo)
      eqeqeq: 'error',

      // 4. Prohibir var: Solo permitiremos const y let (Error rojo)
      'no-var': 'error',

      // 5. Punto y coma (;): No agregamos reglas de estilo en ESLint.
      // Dejaremos que Prettier (el formateador) se encargue de la apariencia visual y punto y comas.
    },
  },
]
