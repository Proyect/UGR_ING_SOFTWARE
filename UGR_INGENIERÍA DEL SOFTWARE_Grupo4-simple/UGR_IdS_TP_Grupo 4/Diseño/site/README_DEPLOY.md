# Deploy de ChurnGuard (sitio estático)

Este directorio contiene un **viewer** estático para navegar las pantallas ubicadas en `../HTML`.

## Cómo verlo localmente

Importante: no abrir `index.html` con doble click (`file://`) porque el navegador suele bloquear `fetch()`.

Opciones:

1) Con VS Code: usar la extensión **Live Server** y abrir `Diseño/site/index.html`.

2) Con Python (si lo tenés instalado):

```bash
python -m http.server 8000
```

Luego abrir:

- `http://localhost:8000/UGR_INGENIERÍA%20DEL%20SOFTWARE_Grupo4-simple/UGR_IdS_TP_Grupo%204/Diseño/site/index.html`

(la URL exacta depende desde dónde sirvas el repo).

## Publicarlo (link para la notebook)

Recomendado: **GitHub Pages**.

- Subí el repo a GitHub.
- En Settings -> Pages -> Build and deployment:
  - Source: Deploy from a branch
  - Branch: `main`
  - Folder: `/ (root)`

Luego, en la notebook, colocá el link a:

- `https://TU_USUARIO.github.io/TU_REPO/UGR_INGENIERÍA%20DEL%20SOFTWARE_Grupo4-simple/UGR_IdS_TP_Grupo%204/Diseño/site/`

Alternativa: Netlify (drag & drop) o Vercel (static).
