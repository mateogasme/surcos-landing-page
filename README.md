# Equipo Surcos Web

Sitio web oficial de **Equipo Surcos**, desarrollado con [Astro](https://astro.build/) y [Tailwind CSS v4](https://tailwindcss.com/).

## 🚀 Tecnologías Principales

- **Astro** - Un framework web extremadamente rápido diseñado para sitios web centrados en el contenido.
- **Tailwind CSS v4** - Para el estilado rápido usando utilidades y tokens.
- **Tailwind Animations** - Librería para agregar animaciones predefinidas elegantes.
- **Lucide Icons** - Conjunto de iconos moderno y limpio.
- **Fuente Onest** - Set tipográfico principal (variable font).

## 🧞 Comandos Útiles

Todos los comandos se ejecutan desde la raíz del proyecto a través de la terminal:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias del proyecto. |
| `npm run dev` | Inicia el servidor de desarrollo local en `localhost:4321`. |
| `npm run build` | Compila y optimiza el sitio para producción en el directorio `dist/`. |
| `npm run preview` | Levanta un servidor local estático para previsualizar el sitio de producción compilado. |

## 📁 Estructura del Proyecto

Dentro del proyecto verás una estructura de archivos de directorios similar a esta:

```text
/
├── public/                 # Archivos estáticos estáticos que no requieren ser procesados (ej. favicon)
├── src/
│   ├── assets/             # Recursos estáticos importados desde el código (imágenes, iconos vectoriales SVG)
│   ├── components/         # Componentes transversales reutilizables (Modales, Botones, Acordeones, etc.)
│   ├── i18n/               # Textos, diccionarios y funciones de internacionalización (ES / EN)
│   ├── layouts/            # Diseños genéricos o envolturas en donde se inyectan las páginas
│   ├── pages/              # Enrutamiento basado en archivos. Cada archivo Astro es una ruta (ej. index.astro)
│   ├── sections/           # Componentes más grandes o específicos de secciones de páginas (Trabajos, Founder, Home)
│   └── styles/             # Variables CSS globales, tipografías y configuración de Tailwind
├── package.json            # Scripts comunes e información de dependencias
└── astro.config.mjs        # Configuración principal de la herramienta de Astro
```

## 🌍 Internacionalización (i18n)

El sitio cuenta con soporte nativo bilingüe (Español e Inglés). La actualización de textos y gestión de traducciones se realizan a través de diccionarios en la carpeta `src/i18n/`, ayudando a mantener separada la lógica de visualización del contenido literal.

## 🛠 Accesibilidad y Diseño

El proyecto cuenta con especial atención al diseño responsivo, interacciones fluidas (uso de modales con prevención de scroll), preconfiguración para evitar cambios imprevistos de altura y maquetado (layout shifts), y cuenta con compatibilidad con **tema claro y oscuro**.
