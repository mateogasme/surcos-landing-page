# Equipo Surcos | Landing Page Oficial

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Repositorio oficial para la plataforma web de **Equipo Surcos**. Este proyecto representa una aplicación orientada al contenido de alto rendimiento, construida sobre una arquitectura moderna y desacoplada, priorizando el SEO, la accesibilidad y una experiencia de usuario excepcional en todos los dispositivos.

## 🚀 Arquitectura y Stack Tecnológico

La aplicación aprovecha un stack moderno de desarrollo web diseñado para la velocidad, escalabilidad y mantenibilidad:

* **Framework:** [Astro](https://astro.build/) - Seleccionado por su enfoque "zero-JS-by-default" (Arquitectura de Islas) asegurando un mínimo Tiempo hasta ser Interactivo (TTI) y métricas óptimas de Core Web Vitals.
* **Motor de Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) - Utilizando tokens de utilidad combinados con variables CSS globales para un sistema de diseño robusto, soportando tematización dinámica (Modo Claro/Oscuro).
* **Animaciones:** `tailwind-animations` combinado con keyframes CSS personalizados para micro-interacciones de alto rendimiento aceleradas por hardware.
* **Iconografía:** [Lucide Icons](https://lucide.dev/) - Una librería de iconos vectoriales comprensiva que asegura un renderizado nítido a cualquier resolución.
* **Tipografía:** [Onest](https://fonts.google.com/specimen/Onest) (Variable Font) - Carga optimizada mediante ejes variables para reducir los layout shifts (cambios de diseño inesperados) y el peso (payload) de la fuente.

## 📦 Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo local:

* **Node.js**: `v20.11.1` o superior (v20+ recomendado)
* **npm**: `v9.x` o superior (o gestor de paquetes equivalente)

## 🛠️ Instalación y Desarrollo Local

1. **Clona el repositorio:**
   ```bash
   git clone <repository_url>
   cd definitive-surcos-web
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:4321`. El Hot Module Replacement (HMR) está habilitado por defecto.

## 📁 Estructura del Proyecto

El código base sigue una estructura modular orientada a características para asegurar la escalabilidad:

```text
/
├── public/                 # Recursos estáticos servidos directamente en la raíz (ej., favicon, robots.txt)
├── src/
│   ├── assets/             # Recursos no compilados (SVGs vectoriales, imágenes raw) procesados por Astro
│   ├── components/         # Componentes UI atómicos reutilizables (Botones, Modales, Acordeones, Iconos)
│   ├── i18n/               # Motor de internacionalización: diccionarios de traducción y funciones helper
│   ├── layouts/            # Plantillas de página y wrappers globales (maneja `<head>`, SEO, meta tags)
│   ├── pages/              # Enrutamiento basado en archivos correspondiente a los endpoints (`index.astro`)
│   ├── sections/           # Macro-componentes de alto nivel (Hero, FAQ, Founder)
│   └── styles/             # Definiciones CSS globales, directivas de Tailwind y variables CSS
├── astro.config.mjs        # Configuración core de Astro (integraciones, servidor, opciones de build)
└── package.json            # Manifiesto del proyecto, registro de dependencias y definición de scripts
```

## 🌍 Arquitectura de Internacionalización (i18n)

La plataforma cuenta con un sistema de soporte bilingüe robusto e integrado (Español e Inglés).
* **Enrutamiento por Diccionarios:** Las traducciones están estrictamente tipadas y gestionadas a través de diccionarios JSON/TS ubicados en `src/i18n/`.
* **Separación de Contenido:** Las cadenas de texto literales están completamente desacopladas de los componentes UI, adhiriéndose al Principio de Responsabilidad Única (SRP) y facilitando las actualizaciones de localización.
* **View Transitions:** Se utilizan las View Transitions de Astro para asegurar la persistencia del estado y una navegación fluida entre las rutas localizadas.

## 🎨 Tematización y Accesibilidad (a11y)

* **HTML Semántico:** Uso profundo de etiquetas semánticas HTML5 combinadas con atributos ARIA apropiados.
* **Modo Claro/Oscuro:** Un sistema de tematización dinámico que respeta las preferencias del sistema (`prefers-color-scheme`) con capacidades de sobrescritura manual por parte del usuario. El estado se gestiona mediante clases y variables CSS para prevenir FOUC (Flash of Unstyled Content).
* **Diseño Responsivo:** La tipografía fluida y las container queries aseguran la integridad del diseño desde dispositivos móviles hasta pantallas de escritorio ultra anchas, previniendo activamente el Cumulative Layout Shift (CLS).
* **Gestión de Scroll:** Hooks y utilidades personalizadas para el bloqueo del scroll del body durante interacciones modales, con el fin de atrapar el foco y preservar el contexto de la disposición en pantalla.

## 📋 Scripts Disponibles

| Comando | Entorno | Descripción |
| :--- | :--- | :--- |
| `npm run dev` | Desarrollo | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build` | Producción | Ejecuta el pipeline de build para producción, generando los recursos en `dist/` |
| `npm run preview` | Producción | Sirve la carpeta `dist/` localmente para verificar el comportamiento de producción |
| `npm run astro` | Global | Ejecuta el CLI de Astro directamente |

---
*Mantenido con ❤️ por Equipo Surcos.*
