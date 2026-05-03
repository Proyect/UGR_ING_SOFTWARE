# SaaS Churn Predictor

Aplicación web que visualiza el análisis de cancelaciones de suscripciones en empresas SaaS, desarrollada como parte del trabajo práctico de Ingeniería del Software aplicando la metodología CRISP-DM.

## ¿Qué hace?

Muestra de forma visual los resultados del análisis de datos: qué empresas tienen riesgo de cancelar su suscripción, cómo se comportan en comparación con las que siguen activas, y qué tan bien funciona el modelo predictivo utilizado.

## Cómo fluyen los datos

El equipo de análisis es responsable de generar los archivos de datos y publicarlos en la carpeta `/data` del repositorio. La aplicación web los lee automáticamente al abrirse, sin necesidad de ninguna configuración adicional.

```
Equipo de Análisis
      │
      │  genera y sube archivos .csv a /data/
      ▼
  Repositorio GitHub
      │
      │  la web los lee al abrirse
      ▼
  Aplicación Web (GitHub Pages)
```

## Estructura del proyecto

```
/
├── index.html       → estructura de la página
├── style.css        → estilos visuales
├── main.js          → lógica de lectura de datos y renderizado
└── data/
    └── *.csv        → archivos generados por el equipo de análisis
```

## Tecnologías

- HTML / CSS / JavaScript
- GitHub Pages — publicación del sitio