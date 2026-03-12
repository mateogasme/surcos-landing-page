# Guía de Diseño — Surcos Design System

Guía de referencia para replicar el lenguaje visual del sitio web de Equipo Surcos en otros proyectos. Cubre paleta de colores, tipografía, estructura, componentes, interacciones y patrones de UX/UI.

---

## 1. Filosofía de Diseño

| Pilar | Descripción |
|---|---|
| **Minimalismo sofisticado** | Interfaz limpia, sin ruido visual. Cada elemento tiene un propósito. |
| **Contenido primero** | El diseño se subordina al contenido — no decora, amplifica. |
| **Elegancia sutil** | Micro-animaciones, transiciones suaves y transparencias en lugar de efectos llamativos. |
| **Accesibilidad nativa** | Dark mode, skip links, ARIA labels, focus visible, contraste adecuado. |

---

## 2. Paleta de Colores

### 2.1 Sistema Dual-Tone (Light / Dark)

El diseño no usa paletas complejas. Se basa en un **sistema binario invertible**: dos colores base que intercambian roles según el tema.

| Token | Light Mode | Dark Mode | Uso |
|---|---|---|---|
| `--primary` | `#131313` (casi negro) | `#f5f5f5` (casi blanco) | Textos, iconos, elementos principales |
| `--secondary` | `#f5f5f5` (casi blanco) | `#131313` (casi negro) | Fondos, superficies base |
| `--blue-color` | `#004aca` (azul profundo) | `#689fff` (azul claro) | Acento, links, focus rings |

> [!IMPORTANT]
> **Nunca** usar negro puro (`#000`) ni blanco puro (`#fff`). Siempre usar los valores suavizados `#131313` y `#f5f5f5` para una experiencia visual más cálida y elegante.

### 2.2 Colores Semánticos (para iconos y acentos)

Se usan colores de la paleta estándar de Tailwind **únicamente con opacidad reducida** como fondo de iconos o indicadores visuales:

| Color | Uso típico | Fondo (light) | Fondo (dark) | Texto (light) | Texto (dark) |
|---|---|---|---|---|---|
| **Blue** | Primer acento / email | `blue-500/10` | `blue-500/20` | `blue-600` | `blue-400` |
| **Emerald** | Segundo acento / WhatsApp | `emerald-500/10` | `emerald-500/20` | `emerald-600` | `emerald-400` |
| **Amber** | Tercer acento / teléfono | `amber-500/10` | `amber-500/20` | `amber-600` | `amber-400` |
| **Orange** | Proyectos comunitarios | `orange-500/10` | `orange-500/20` | `orange-600` | `orange-400` |
| **Purple** | Servicios educativos | `purple-500/10` | `purple-500/20` | `purple-600` | `purple-400` |
| **Indigo** | Acento adicional | `indigo-500/10` | — | `indigo-500` | — |

> [!TIP]
> Los fondos de iconos siempre son **la versión /10 (light)** o **/20 (dark)** del color del icono. Esto crea un efecto de "pastilla suave" que no compite con el texto.

### 2.3 Opacidades del Color Primario

Es la columna vertebral del sistema visual. Se usa `primary` con diferentes opacidades para crear jerarquía:

| Valor | Uso |
|---|---|
| `primary` (100%) | Títulos principales, botones CTA |
| `primary/90` | Títulos de cards, texto importante |
| `primary/80` | Texto de párrafo hero |
| `primary/70` | Texto de párrafo estándar, descripciones |
| `primary/60` | Texto secundario, links de nav inactivos, labels |
| `primary/40` | Iconos terciarios |
| `primary/20` | Bordes de botones outline |
| `primary/10` | Bordes de cards |
| `primary/5` | Bordes sutiles, separadores internos, hover bg |
| `primary/4` | Bordes del header |

---

## 3. Tipografía

### 3.1 Fuente

- **Familia**: [Onest Variable](https://fontsource.org/fonts/onest) (sans-serif)
- **Fallback**: `sans-serif`
- **Carga**: `@fontsource-variable/onest` (variable font para performance)

### 3.2 Escala Tipográfica

| Elemento | Tamaño | Peso | Tracking | Extras |
|---|---|---|---|---|
| **H1 (Hero)** | `16–17px` | `normal (400)` | — | `leading-relaxed`, `text-primary/80` |
| **H1 (Subpágina)** | `2xl → 3xl` | `semibold (600)` | `tracking-tight` | Bicolor: title1 `primary/60` + title2 `primary` |
| **H2 (Sección)** | `2xl → 3xl` | `bold (700)` | `tracking-tight` | `leading-[1.15]` |
| **H3 (Card)** | `xl` (20px) | `semibold (600)` | — | `text-primary/90`, `leading-snug` |
| **Cuerpo** | `0.95rem` (~15.2px) | `normal (400)` | — | `text-primary/70`, `leading-relaxed` |
| **Botones** | `0.875rem` (14px) | `medium (500)` | — | — |
| **Nav (desktop)** | `sm` (14px) | `medium (500)` | — | `text-primary/60` |
| **Nav (mobile)** | `base` (16px) | `medium (500)` | — | — |
| **Labels pequeños** | `0.85rem` (~13.6px) | `medium (500)` | `tracking-wide` | `text-primary/60` |
| **Tooltips** | `11px` | `medium (500)` | — | `bg-primary`, `text-secondary` |
| **Footer** | `xs` (12px) | `medium (500)` | — | `text-primary/70` |

> [!NOTE]
> El H1 del Hero es intencionalmente pequeño (16–17px). El logo es el protagonista visual; el H1 funciona como subtítulo descriptivo. **Esto rompe la convención deliberadamente** para priorizar la marca.

### 3.3 Reglas de Texto

- **`text-pretty`** en todos los párrafos para evitar líneas huérfanas (CSS `text-wrap: pretty`)
- **`text-balance`** en títulos de subpáginas para equilibriar visualmente
- **`leading-relaxed`** (`line-height: 1.625`) como default para texto de cuerpo
- **`leading-snug`** (`line-height: 1.375`) para títulos dentro de cards

---

## 4. Layout y Estructura

### 4.1 Contenedores

| Contenedor | Ancho máximo | Uso |
|---|---|---|
| `max-w-175` | `700px` (44rem) | Contenedor global principal (secciones, footer, header) |
| `max-w-160` | `640px` (40rem) | Hero (más estrecho para lectura óptima) |
| `max-w-2xl` | `672px` | Modal del fundador |
| `max-w-sm` | `384px` | Modal estándar |

> [!IMPORTANT]
> El diseño es deliberadamente estrecho (`700px` máximo). Esto **no es un error** — es una decisión para maximizar legibilidad y mantener la estética editorial/minimalista. Es mucho más estrecho que los `1200px` convencionales.

### 4.2 Padding Horizontal

| Dispositivo | Padding |
|---|---|
| Mobile | `px-6` (24px) |
| Desktop (≥ md) | `px-0` (el contenedor `max-w` con `mx-auto` se encarga) |

### 4.3 Espaciado Vertical entre Secciones

| Contexto | Valor |
|---|---|
| Hero → top | `mt-12` (48px) mobile, `mt-16` (64px) desktop |
| Sección → sección | `mt-24` / `mb-16` (96px / 64px) |
| Dentro de sección | `gap-6` (24px) o `gap-8` (32px) |
| Cards entre sí | `gap-6` (24px), `lg:gap-8` (32px) |

### 4.4 Estructura de Página

```
┌──────────────────────────────────┐
│ Header (sticky, z-50)            │
├──────────────────────────────────┤
│ Main (flex-col, items-center)    │
│ ┌──────────────────────────────┐ │
│ │ Hero / PageHeader            │ │
│ ├──────────────────────────────┤ │
│ │ Sección de Contenido         │ │
│ ├──────────────────────────────┤ │
│ │ Sección de Contenido         │ │
│ ├──────────────────────────────┤ │
│ │ Contact                      │ │
│ └──────────────────────────────┘ │
├──────────────────────────────────┤
│ Footer (mt-auto, sticky bottom)  │
└──────────────────────────────────┘
```

- **Home**: Hero → About (Cards) → Friends (Bento Grid) → Contact
- **Subpáginas**: PageHeader (bicolor) → Contenido (cards) → Contact

### 4.5 Estructura del Header

- **Sticky**, `top-0`, `z-50`
- Desktop: fondo **semi-transparente** (`bg-secondary/80`) con `backdrop-blur-md`
- Mobile: fondo **sólido** (`bg-secondary`) — el blur se omite
- Altura fija: `h-16` (64px)
- Borde inferior sutil: `border-primary/4`
- Nav links a la izquierda, controles (idioma + tema) a la derecha
- Mobile: hamburger menu con animación de `opacity + translate-y`

---

## 5. Sistema de Componentes

### 5.1 Cards (el componente más importante)

Las cards son el bloque de construcción principal de todo el contenido:

```
┌─────────────────────────────────┐
│  [Ícono con fondo color/10]     │
│                                 │
│  Título (xl, semibold)          │
│                                 │
│  Párrafo descriptivo            │
│  (0.95rem, primary/70)          │
└─────────────────────────────────┘
```

**Estilos base de la card:**

| Propiedad | Valor |
|---|---|
| Background | `bg-white/50` / `dark:bg-zinc-900/50` |
| Border | `border border-primary/10` / `dark:border-white/10` |
| Border radius | `rounded-2xl` (16px) |
| Padding | `p-8` (32px) |
| Shadow | `shadow-sm` (reposo) → `shadow-md` (hover) |
| Hover | `-translate-y-1` (sube 4px) |
| Transición | `transition-all duration-200` |
| Gap interno | `gap-4` (16px) |

> [!TIP]
> El fondo de las cards es **semi-transparente** (`white/50`, `zinc-900/50`). Esto crea un efecto de glassmorphism sutil sin necesidad de backdrop-blur en las cards.

**Icono de la card:**

| Propiedad | Valor |
|---|---|
| Contenedor | `w-12 h-12` (48×48px) |
| Border radius | `rounded-xl` (12px) |
| Fondo | Color semántico al 10% (light) / 20% (dark) |
| Icono | SVG `24×24`, `stroke-width: 2` |

**Layout de cards en grilla:**

| Patrón | Descripción |
|---|---|
| **2 columnas + 1 full** | Dos cards a 50% width + una full width (Home About) |
| **Lista vertical** | Cards apiladas al 100% (subpáginas detail) |
| **2 columnas iguales** | Dos cards a 50% width en desktop, stack en mobile |

### 5.2 Botones

#### ButtonCTA (Primario / Sólido)

| Propiedad | Valor |
|---|---|
| Background | `bg-primary` |
| Texto | `text-secondary` |
| Padding | `px-8 py-3` |
| Border radius | `rounded-lg` (8px) |
| Sombra | `shadow-md` (reposo) → `shadow-lg` (hover) |
| Hover fondo | `bg-primary/90` |
| Active | `scale-95` |
| Transición | `transition-all duration-200 ease-in-out` |
| Ancho | `w-full` mobile → `sm:w-auto` desktop |

#### ButtonOutline (Secundario / Transparente)

| Propiedad | Valor |
|---|---|
| Background | `bg-transparent` |
| Borde | `border border-primary/20` |
| Texto | `text-primary` |
| Padding | `px-8 py-3` |
| Hover bg | `bg-primary/5` |
| Hover borde | `border-primary/40` |
| Active | `scale-95` |

> [!NOTE]
> Ambos botones se comportan como `<a>` o `<button>` según se pase `href` o no. Se apilan en mobile (`flex-col`) y van lado a lado en desktop (`sm:flex-row`).

### 5.3 Tooltips

| Propiedad | Valor |
|---|---|
| Background | `bg-primary` |
| Texto | `text-secondary` |
| Font size | `11px` |
| Padding | `px-2.5 py-1.5` |
| Border radius | `rounded-md` (6px) |
| Sombra | `shadow-lg` |
| Aparición | `opacity-0 → opacity-100` con `group-hover` |
| Flecha | Triángulo CSS con `border-4 border-transparent border-t-primary` |
| Transición | `transition-opacity duration-200` |

### 5.4 Modal

| Propiedad | Valor |
|---|---|
| Elemento | `<dialog>` nativo HTML |
| Background | `bg-secondary` |
| Border | `border border-primary/5` |
| Border radius | `rounded-3xl` (24px) |
| Padding | `p-8` (32px) |
| Sombra | `shadow-2xl shadow-black/20` |
| Backdrop | `rgba(0,0,0,0.4)` + `backdrop-filter: blur(8px)` |
| Apertura | `scale(0.95) translateY(10px)` → `scale(1) translateY(0)` |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like) |
| Cierre | Animación inversa con clase `.closing` |
| Duración | `200ms` |
| Z-index | `z-100` |

### 5.5 Accordion (FAQ)

| Propiedad | Valor |
|---|---|
| Elemento | `<details>` / `<summary>` nativo HTML |
| Background | `bg-white/50` / `dark:bg-zinc-900/50` (cerrado) → `bg-white` / `dark:bg-zinc-900` (abierto) |
| Border | `border border-primary/10 dark:border-white/10` |
| Border radius | `rounded-2xl` |
| Pregunta | `font-semibold text-primary/90 text-[1.1rem]` |
| Respuesta | `text-[0.95rem] text-primary/70 leading-relaxed` |
| Icono chevron | Rotación `0deg → 180deg` con `transition-transform duration-200` |
| Animación | Max-height transition para expand/collapse suave |

### 5.6 Contact Cards (Items de contacto)

Variación especial de card para items de contacto interactivos:

| Propiedad | Valor |
|---|---|
| Background | `bg-white` / `dark:bg-zinc-800` (sólido, no transparente) |
| Hover | `-translate-y-0.5` (sube 2px, más sutil que cards normales) |
| Ícono | `w-10 h-10` con bg semántica al 10%/20% |
| Hover del ícono | `group-hover:scale-110 group-hover:rotate-3` |
| Ícono de acción (derecha) | `text-primary/40` → `group-hover:text-primary` |
| Layout interno | Flex row: ícono + textos (2 líneas: label + valor) + acción |

### 5.7 PageHeader (Subpáginas)

| Propiedad | Valor |
|---|---|
| H1 | Dos spans: `title1` en `primary/60` + `title2` en `primary` |
| Font size | `2xl → 3xl` responsive |
| Peso | `semibold (600)` |
| Borde inferior | `border-b border-primary/10 dark:border-white/10` |
| Padding bottom | `pb-6` |
| Margin bottom | `mb-8` |

### 5.8 Bento Grid (Friends / Partners)

| Propiedad | Valor |
|---|---|
| Grid | `grid-cols-2` mobile → `grid-cols-4` desktop |
| Altura de celda | `h-35` (140px) |
| Separación | Bordes `border-r border-b border-primary/10` (sin gap, estilo tabla) |
| Hover | `bg-primary/5` fondo + escala imagen `group-hover:scale-105` |
| Icono externo | Aparece con `opacity-0 → opacity-100` y `translate-y-2 → translate-y-0` |
| Span variable | Algunos items ocupan `col-span-2` |

---

## 6. Animaciones y Transiciones

### 6.1 Animación de Entrada: `fade-in-up`

Es la **única animación de entrada** usada en todo el sitio:

- **Nombre**: `animate-fade-in-up`
- **Efecto**: Elemento sube desde abajo con fade de opacidad
- **Duración estimada**: ~400ms
- **Easing**: ease-out
- **Stagger**: Se retrasa con `animation-delay` en incrementos de `150–200ms`

Ejemplo de secuencia escalonada:
```
Logo:   delay 0ms
Texto:  delay 200ms
Botón:  delay 400ms
Card 1: delay 600ms
Card 2: delay 750ms
Card 3: delay 900ms
```

### 6.2 Transiciones de Estado

Todas las transiciones de estado usan `duration-200` (200ms):

| Elemento | Propiedad | Easing |
|---|---|---|
| Cards | `shadow, transform, all` | default (ease) |
| Links | `color` | default |
| Botones | `all` | `ease-in-out` |
| Tooltips | `opacity` | default |
| Modal | `opacity, transform` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Iconos de contacto | `transform` | default |
| Accordion | `transform` (chevron) + `max-height` (contenido) | `ease-in-out` |

### 6.3 Patrones de Hover

| Componente | Efecto |
|---|---|
| **Cards** | `shadow-sm → shadow-md` + `-translate-y-1` (sube 4px) |
| **Contact items** | `shadow-sm → shadow-md` + `-translate-y-0.5` (sube 2px) |
| **Nav links** | `text-primary/60 → text-primary` |
| **Botón CTA** | `bg-primary → bg-primary/90` + `shadow-md → shadow-lg` |
| **Botón Outline** | `bg-transparent → bg-primary/5` + `border-primary/20 → /40` |
| **Iconos (contacto)** | `scale-110 rotate-3` |
| **Bento items** | `bg-transparent → bg-primary/5` + imagen `scale-105` |
| **Botones/controles** | `active:scale-95` (feedback táctil) |

---

## 7. Bordes y Separadores

### Regla General de Bordes

Todas las separaciones usan **bordes con opacidad muy baja del color primario**:

| Contexto | Valor Light | Valor Dark |
|---|---|---|
| **Card exterior** | `border-primary/10` | `border-white/10` |
| **Separador interno** | `border-primary/5` | `border-white/5` |
| **Header** | `border-primary/4` | `border-primary/4` |
| **Botón outline** | `border-primary/20` | `border-primary/20` |
| **Contact card** | `border-primary/5` | `border-white/10` |

> [!TIP]
> Nunca usar bordes opacos (`border-gray-300`). Siempre usar el color primario con opacidad 4–10%. Esto mantiene la cohesión visual y se adapta automáticamente al dark mode.

---

## 8. Sombras

| Nivel | Clase | Uso |
|---|---|---|
| **Reposo** | `shadow-sm` | Cards, contact items |
| **Hover** | `shadow-md` | Cards en hover |
| **Elevado** | `shadow-lg` | Botón CTA hover, tooltips |
| **Overlay** | `shadow-2xl shadow-black/20` | Modal |
| **Nav mobile** | `shadow-2xl shadow-black/10` | Menú desplegable |

---

## 9. Border Radius

| Elemento | Value | Pixels |
|---|---|---|
| **Card** | `rounded-2xl` | 16px |
| **Modal** | `rounded-3xl` | 24px |
| **Botón** | `rounded-lg` | 8px |
| **Contenedor de ícono** | `rounded-xl` | 12px |
| **Tooltip** | `rounded-md` | 6px |
| **Control de header** | `rounded-lg` | 8px |
| **Bullet points** | `rounded-full` | ∞ |

---

## 10. Iconografía

- **Fuente**: [Lucide Icons](https://lucide.dev/)
- **Tamaño estándar**: `24×24` para icons principales, `16×16` para acciones secundarias
- **Stroke width**: `2` (standard) o `2.5` (checkmarks/chevrons)
- **Color**: Hereda del texto, controlado por clases de color del contenedor
- **Método**: Inline SVG (no icon font)
- **Contenedor del ícono**: `48×48px` con fondo semántico redondeado

---

## 11. Dark Mode

### Implementación

- **Método**: Clase `.dark` en `<html>` (class-based, no `prefers-color-scheme`)
- **Persistencia**: `localStorage.setItem('theme', ...)`
- **Default**: Sigue la preferencia del sistema (`prefers-color-scheme: dark`)
- **Toggle**: Botón con ícono luna/sol en el header

### Diferencias Clave Light → Dark

| Propiedad | Light | Dark |
|---|---|---|
| Fondo body | `#f5f5f5` | `#131313` |
| Texto | `#131313` | `#f5f5f5` |
| Azul acento | `#004aca` | `#689fff` |
| Card bg | `white/50` | `zinc-900/50` |
| Card border | `primary/10` | `white/10` |
| Contact card bg | `white` | `zinc-800` |
| Icon bg intensidad | Color `/10` | Color `/20` |
| Icon text | Color `-600` | Color `-400` |
| theme-color meta | `#ffffff` | `#131313` |

> [!IMPORTANT]
> Las opacidades de los fondos de iconos **se duplican** en dark mode (`/10` → `/20`). Esto compensa la absorción visual del fondo oscuro y mantiene el mismo peso perceptual.

---

## 12. Responsive Design

### Breakpoints Usados

| Breakpoint | Ancho | Uso principal |
|---|---|---|
| `sm` | `640px` | Botones side-by-side |
| `md` | `768px` | Layout principal (nav, cards en grid, padding) |
| `lg` | `1024px` | Gap en cards, texto de títulos |

### Patrones Mobile → Desktop

| Componente | Mobile | Desktop |
|---|---|---|
| **Nav** | Hamburger menu, dropdown full-width | Inline links horizontales |
| **Cards** | Stack vertical full-width | 2 columnas (50% width) |
| **Botones** | Stack vertical full-width | Side-by-side, auto-width |
| **Contact** | Stack vertical | 2 columnas (45%/55%) |
| **Bento** | 2 columnas | 4 columnas |
| **Footer** | Stack centrado | Flex row, copyright izq, nav der |
| **Padding** | `px-6` (24px) | `px-0` |

---

## 13. Patrones UX/UI

### 13.1 Feedback de Interacción

| Acción | Feedback |
|---|---|
| **Copiar al portapapeles** | Ícono cambia: Copy → Check verde, tooltip "Copiado", revierte tras 2s |
| **Hover en card** | Sube 4px + sombra crece |
| **Click en botón** | `scale(0.95)` instantáneo |
| **Abrir modal** | Scale up + fade in con easing spring |
| **Abrir accordion** | Chevron rota 180° + contenido expande con max-height |
| **Hover en partner** | Fondo sutil + imagen escala + ícono externo aparece |

### 13.2 Jerarquía Visual

```
1. Logo (imagen hero, máxima atención)
2. Títulos de sección (H2, bold, tracking-tight)
3. Títulos de card (H3, semibold, primary/90)
4. Texto de cuerpo (0.95rem, primary/70)
5. Texto terciario (labels, meta — primary/60, tamaño xs–0.85rem)
6. Bordes y separadores (primary/5–10%, apenas visibles)
```

### 13.3 Scroll Behavior

- **`scroll-behavior: smooth`** en `html`
- **`scroll-padding-top: 5rem`** para compensar el header sticky
- **`scrollbar-gutter: stable`** para evitar layout shift al aparecer scrollbar

### 13.4 Copy-to-Clipboard Pattern

- Botón con `data-copy="valor"`
- Al hacer click: copia al portapapeles, ícono cambia a ✓ verde, tooltip muestra "¡Copiado!", `aria-live` region anuncia a screen readers
- Auto-revert tras 2000ms

### 13.5 Accesibilidad

| Feature | Implementación |
|---|---|
| **Skip to content** | Link `sr-only` visible en focus |
| **Focus visible** | `focus-visible:ring-2 ring-blue ring-offset-2 ring-offset-secondary` |
| **aria-current** | En links de nav activos |
| **aria-labelledby** | Todas las secciones con `id` en H2 |
| **aria-live polite** | Region para feedback de copiar |
| **prefers-color-scheme** | Respetado como default del tema |
| **Modal** | `<dialog>` nativo, trap focus, return focus on close |

---

## 14. Resumen de Tokens Rápidos

Para iniciar un nuevo proyecto con este estilo:

```css
:root {
  --primary: #131313;
  --secondary: #f5f5f5;
  --blue: #004aca;
  --font-sans: 'Onest Variable', sans-serif;
  --radius-card: 16px;    /* rounded-2xl */
  --radius-button: 8px;   /* rounded-lg */
  --radius-modal: 24px;   /* rounded-3xl */
  --radius-icon: 12px;    /* rounded-xl */
  --duration: 200ms;
  --max-w: 700px;         /* max-w-175 */
  --max-w-narrow: 640px;  /* max-w-160 */
}

:root.dark {
  --primary: #f5f5f5;
  --secondary: #131313;
  --blue: #689fff;
}
```

---

## 15. Checklist de Implementación

Al crear un nuevo proyecto con este estilo, verificar:

- [ ] Fuente Onest Variable instalada y como font-family base
- [ ] Sistema de colores `--primary` / `--secondary` invertibles
- [ ] Dark mode con clase `.dark` en `<html>` y persistencia en localStorage
- [ ] Contenedor principal estrecho (`~700px`)
- [ ] Cards con fondo semi-transparente, borde 10%, rounded-2xl, hover lift
- [ ] Animación fade-in-up con stagger (delays incrementales de 150–200ms)
- [ ] Botones con `active:scale-95` y transición suave
- [ ] Tooltips con fondo primary/secondary invertidos
- [ ] Bordes sutiles (5–10% opacidad del color primario)
- [ ] Texto en jerarquía de opacidad (100→90→80→70→60)
- [ ] `scroll-behavior: smooth` + `scroll-padding-top` para header sticky
- [ ] Todas las transiciones de 200ms como duración base
- [ ] Iconos Lucide inline SVG en contenedores con fondo color/10
- [ ] Focus visible con ring azul + offset del color de fondo
- [ ] `text-pretty` en párrafos, `text-balance` en títulos
