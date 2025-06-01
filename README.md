# Antigüedades Sthandier - Sitio Web Informativo

## Descripción

Este proyecto corresponde al desarrollo de un sitio web informativo para el emprendimiento **Antigüedades Sthandier**, como parte de la Evaluación Sumativa de la Unidad III de la asignatura Desarrollo Frontend.  
El objetivo es fortalecer la presencia digital del negocio dedicado a la venta de objetos antiguos, ofreciendo una plataforma moderna, accesible y visualmente atractiva donde los usuarios pueden conocer los productos y servicios de forma clara y eficiente.

---

## Tecnologías Utilizadas

- **React.js** (creado con Vite)
- CSS modularizado para cada componente
- Librería **Swiper** para el carrusel de productos
- Consumo de APIs REST para contenido dinámico
- Uso de **react-icons** para íconos sociales
- Diseño responsivo y buenas prácticas de accesibilidad

---

## Funcionalidades Principales

- **Navegación SPA** con secciones: Quiénes Somos, Preguntas Frecuentes y Contacto.
- **Carrusel de productos** con navegación táctil y paginación accesible.
- **Carga dinámica de contenido** (productos, historia, FAQ) desde APIs externas.
- **Formulario de contacto** con validación, selección dinámica del producto consultado y captcha simple.
- **Diseño responsivo** para dispositivos móviles y escritorio.
- **Manejo de estados globales** para comunicación entre componentes (productos y formulario).

---

## Estructura del Proyecto

- `App.jsx`: Componente raíz que maneja estados globales y organiza secciones.
- `Header.jsx`: Encabezado fijo con navegación interna.
- `Banner.jsx`: Imagen de presentación con mensaje destacado.
- `ProductsServices.jsx`: Obtiene y muestra productos desde API.
- `ProductCard.jsx`: Tarjeta individual de producto con opción de selección.
- `ProductCarousel.jsx`: Carrusel visual de productos usando Swiper.
- `AboutUs.jsx`: Sección “Quiénes Somos” con contenido dinámico.
- `Faq.jsx`: Preguntas frecuentes cargadas desde API.
- `ContactForm.jsx`: Formulario de contacto con validación y selección dinámica.
- `Footer.jsx`: Pie de página con información de contacto y redes sociales.
- Archivos CSS asociados para cada componente.

---

## Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   cd antiguedades-sthandier
