<div align="center">
	<h1>Frambuesa</h1>
	<p><strong>Portfolio personal de una sola pagina</strong></p>
	<p>Estetica oscura, animaciones narrativas y transicion cinematica entre presentacion y proyectos.</p>

	<p>
		<a href="https://frambuesa.me">
			<img alt="Live" src="https://img.shields.io/badge/Live-frambuesa.me-8B0000?style=for-the-badge&labelColor=111111">
		</a>
		<img alt="HTML" src="https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&labelColor=111111">
		<img alt="CSS" src="https://img.shields.io/badge/CSS3-Visuals-1572B6?style=for-the-badge&labelColor=111111">
		<img alt="JS" src="https://img.shields.io/badge/JavaScript-Interactions-F7DF1E?style=for-the-badge&labelColor=111111&color=F7DF1E">
	</p>
</div>

---

## Demo

- Sitio en vivo: https://frambuesa.me

## Que Incluye

- Landing narrativa en dos fases (card inicial + portfolio full scroll).
- Animaciones con GSAP y ScrollTrigger para transiciones y reveals.
- Fondo atmosferico con tsParticles y Three.js.
- Secciones de proyectos, tech stack, musica y contacto.
- Navegacion suave y layout responsive para desktop/mobile.

## Stack Tecnico

| Area | Herramientas |
| --- | --- |
| Base | HTML5, CSS3, JavaScript Vanilla |
| Animacion | GSAP, ScrollTrigger |
| Fondo dinamico | tsParticles, Three.js |
| Hosting | GitHub Pages + CNAME |

## Estructura Del Proyecto

```text
.
|- CNAME
|- index.html
|- README.md
|- package.json
`- assets/
	 |- avatar.jpg
	 |- IMG_9843.png
	 `- a6464def-9da2-4d0e-a523-ae6d841dd4ca.jpg
```

## Ejecutar En Local

No requiere build step. Puedes abrir el archivo directamente o levantar un server local.

### Opcion A: abrir directo

1. Abre `index.html` en el navegador.

### Opcion B: server local (recomendado)

```bash
# en la raiz del proyecto
npx serve .
```

Luego abre la URL que indique la terminal (normalmente http://localhost:3000).

## Personalizacion Rapida

- Contenido y enlaces: editar en `index.html`.
- Paleta de color: variables CSS en `body` (`--accent`, `--bg`, `--text`, etc.).
- Proyectos: seccion `#projects`.
- Contacto y redes: seccion `#contact`.
- Dominio custom: archivo `CNAME`.

## Deploy

El proyecto esta preparado para GitHub Pages con dominio personalizado:

- `frambuesa.me`

Si publicas en otra cuenta o dominio, actualiza `CNAME` y la configuracion de Pages.

## Creditos

- Diseno y contenido: Frambuesa
- Librerias: GSAP, tsParticles, Three.js
