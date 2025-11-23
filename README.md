# Grup de Teatre Jove - Vacarisses

Lloc web de l'associació cultural sense ànim de lucre dedicada al teatre a Vacarisses.

## 🎭 Sobre el Projecte

Aquest és un lloc web d'una sola pàgina (single page) que presenta l'associació, la seva missió i els propers projectes teatrals. El lloc està construït amb [Astro](https://astro.build/), un framework modern per crear llocs web ràpids i optimitzats.

## 📋 Característiques

- **Presentació**: Informació sobre qui som i què fem
- **Missió**: Els nostres objectius i valors
- **Propers Projectes**: Tallers, obres i esdeveniments amb dates d'estrena
- **Xarxes Socials**: Enllaços a la comunitat de WhatsApp i Instagram
- **Disseny Responsiu**: Funciona perfectament en ordinadors i dispositius mòbils
- **Optimitzat**: Construït amb Astro per màxim rendiment

## 🚀 Com Utilitzar

### Requisits Previs

- Node.js 18 o superior
- npm (inclòs amb Node.js)

### Desenvolupament Local

1. Instal·la les dependències:
   ```bash
   npm install
   ```

2. Inicia el servidor de desenvolupament:
   ```bash
   npm run dev
   ```

3. Obre el navegador a `http://localhost:4321`

### Construcció per Producció

Per generar la versió optimitzada del lloc:

```bash
npm run build
```

Els fitxers generats es crearan a la carpeta `dist/`.

### Previsualització de la Construcció

Per previsualitzar la versió de producció localment:

```bash
npm run preview
```

### Desplegament

#### Desplegament Automàtic a GitHub Pages

Aquest projecte inclou una configuració de GitHub Actions que desplega automàticament el lloc a GitHub Pages cada vegada que es fa push a la branca `main`.

**Configuració inicial (només cal fer-ho una vegada):**

1. Ves a la configuració del repositori a GitHub
2. Navega a **Settings** > **Pages**
3. A **Source**, selecciona **GitHub Actions**

El lloc estarà disponible a: `https://bismartbiss.github.io/Grup-teatre-jove/`

**Desplegament manual:**

També pots desplegar manualment des de la pestanya **Actions** a GitHub seleccionant el workflow "Deploy to GitHub Pages" i clicant "Run workflow".

#### Altres Serveis Gratuïts

El lloc també es pot desplegar en:
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## ⚙️ Personalització

### Actualitzar els Enllaços de Xarxes Socials

Edita el fitxer `src/pages/index.astro` i busca les seccions marcades amb `<!-- TODO -->`:

1. **WhatsApp**: Substitueix `https://chat.whatsapp.com/vostra-comunitat` amb l'enllaç real del grup de WhatsApp
2. **Instagram**: Substitueix `grupteatrejove` amb el nom d'usuari real d'Instagram

### Actualitzar els Projectes

Modifica la secció "Propers Projectes" al fitxer `src/pages/index.astro` per afegir, eliminar o actualitzar projectes segons sigui necessari.

### Estructura del Projecte

```
/
├── public/              # Fitxers estàtics (imatges, fonts, etc.)
├── src/
│   ├── components/      # Components reutilitzables d'Astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ProjectCard.astro
│   ├── layouts/         # Plantilles de pàgina
│   │   └── BaseLayout.astro
│   ├── pages/           # Pàgines del lloc (ruta automàtica)
│   │   └── index.astro
│   └── styles/          # Fitxers CSS globals
│       └── global.css
├── astro.config.mjs     # Configuració d'Astro
└── package.json         # Dependències del projecte
```

## 📱 Xarxes Socials

- WhatsApp: [Enllaç per configurar]
- Instagram: [Enllaç per configurar]

## 📄 Llicència

© 2025 Grup de Teatre Jove - Vacarisses. Tots els drets reservats.