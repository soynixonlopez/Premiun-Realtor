# Premier Realtors - Sitio Web Profesional

Sitio web profesional para Premier Realtors, especialistas en bienes raíces. Diseñado con HTML, CSS, Tailwind CSS y JavaScript vanilla para facilitar el mantenimiento y la expansión.

## 🚀 Características

- **Diseño Responsive**: Adaptado para todos los dispositivos (móvil, tablet, desktop)
- **Animaciones Suaves**: Efectos visuales profesionales y elegantes
- **Navegación Intuitiva**: Menú fijo con scroll suave y diseño profesional mejorado
- **Botón WhatsApp Business**: Integración directa con WhatsApp Business (verde con icono)
- **Página de Detalles**: Página dinámica que se actualiza automáticamente según la propiedad seleccionada
- **Página de Todas las Propiedades**: Con sidebar de filtros avanzados a la izquierda
- **Sistema de Filtros**: Filtra por tipo, precio, habitaciones, baños y estado
- **Secciones Completas**:
  - Hero section con call-to-action
  - Propiedades destacadas con cards interactivas
  - Servicios ofrecidos
  - Sobre nosotros
  - Testimonios de clientes
  - Formulario de contacto
  - Footer completo

## 📁 Estructura del Proyecto

```
realstate-project/
│
├── index.html          # Página principal
├── properties.html     # Página de todas las propiedades con filtros
├── details.html        # Página de detalles de propiedad (dinámica)
├── styles.css          # Estilos personalizados
├── script.js           # JavaScript principal para interactividad
├── properties-data.js  # Base de datos de propiedades
├── properties.js       # Lógica de filtros y visualización
├── details.js          # Lógica de página de detalles
├── config.js           # Configuración (WhatsApp, contacto, etc.)
└── README.md          # Documentación
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **Tailwind CSS**: Framework CSS utility-first (via CDN)
- **CSS3**: Estilos personalizados y animaciones
- **JavaScript (Vanilla)**: Interactividad sin dependencias
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografías (Playfair Display, Inter)

## 🎨 Características de Diseño

- Paleta de colores profesional (azul oscuro y blanco)
- Tipografía elegante y legible
- Imágenes de alta calidad de Unsplash
- Efectos hover en cards y botones
- Animaciones de entrada al hacer scroll
- Contador animado de estadísticas

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1280px+)

## 🚀 Cómo Usar

1. **Abrir el sitio**: Simplemente abre `index.html` en tu navegador
2. **Servidor local (recomendado)**: 
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```
3. Accede a `http://localhost:8000`

## 📄 Páginas del Sitio

- **index.html**: Página principal con hero, propiedades destacadas, servicios, testimonios y contacto
- **properties.html**: Página con todas las propiedades y sistema de filtros avanzado
- **details.html**: Página de detalles de cada propiedad (se actualiza dinámicamente según el ID)

## 🎯 Flujo de Navegación

1. Usuario visita `index.html` y ve propiedades destacadas
2. Hace clic en "Ver Detalles" → va a `details.html?id=X`
3. O hace clic en "Ver Todas las Propiedades" → va a `properties.html`
4. En `properties.html` puede filtrar y ordenar propiedades
5. Al hacer clic en cualquier propiedad → va a `details.html?id=X`
6. En cualquier momento puede contactar por WhatsApp desde el botón verde del header

## 🔧 Personalización

### Configurar WhatsApp Business

Edita el archivo `config.js` para cambiar el número de WhatsApp:

```javascript
const CONFIG = {
    whatsappNumber: "1234567890", // Cambia este número
    // ...
};
```

El formato debe ser: código de país + número (sin + ni espacios)
Ejemplo: "1234567890" para +1 (555) 123-4567

### Agregar Propiedades

Edita el archivo `properties-data.js` y agrega un nuevo objeto al array `propertiesData`:

```javascript
{
    id: 7, // ID único
    title: "Nombre de la Propiedad",
    type: "Apartamento", // Apartamento, Casa, Penthouse, Loft, Estudio
    status: "En Venta", // En Venta o Disponible
    price: 350000,
    area: 150,
    bedrooms: 3,
    bathrooms: 2,
    location: "Ubicación",
    image: "URL de imagen principal",
    images: ["URL1", "URL2", "URL3"], // Galería de imágenes
    description: "Descripción detallada...",
    features: ["Característica 1", "Característica 2"],
    year: 2020,
    floor: 8,
    totalFloors: 15
}
```

### Cambiar Colores

Los colores principales están en Tailwind. Busca las clases `bg-blue-900`, `text-blue-900`, etc. y reemplázalas con tus colores preferidos.

### Modificar Contenido

- **Página principal**: Edita `index.html`
- **Información de contacto**: Edita `config.js`
- **Propiedades**: Edita `properties-data.js`

## ✨ Funcionalidades Implementadas

- ✅ **Sistema de Filtros Avanzado**: Filtra propiedades por tipo, precio, habitaciones, baños y estado
- ✅ **Página de Detalles Dinámica**: Se actualiza automáticamente según la propiedad seleccionada
- ✅ **Galería de Imágenes**: Múltiples imágenes por propiedad con vista previa
- ✅ **Integración WhatsApp Business**: Botón verde con icono de WhatsApp en el header
- ✅ **Navegación Mejorada**: Header profesional con logo y diseño elegante
- ✅ **Responsive Completo**: Funciona perfectamente en móvil, tablet y desktop
- ✅ **Ordenamiento**: Ordena propiedades por precio o área
- ✅ **Búsqueda Visual**: Filtros en sidebar con resultados en tiempo real

## 📝 Próximas Mejoras Sugeridas

- [ ] Integración con base de datos para propiedades
- [ ] Búsqueda por texto (nombre, ubicación)
- [ ] Integración con Google Maps
- [ ] Formulario de contacto funcional (backend)
- [ ] Blog de noticias inmobiliarias
- [ ] Calculadora de hipoteca
- [ ] Tours virtuales 360°
- [ ] Favoritos/Guardar propiedades
- [ ] Comparador de propiedades

## 🌐 Imágenes

Las imágenes utilizadas son de [Unsplash](https://unsplash.com) y están optimizadas para web. En producción, se recomienda:
- Usar imágenes propias de las propiedades
- Optimizar imágenes (WebP, compresión)
- Implementar lazy loading completo

## 📞 Soporte

Para preguntas o soporte, contacta al equipo de desarrollo.

## 📄 Licencia

Este proyecto es propiedad de Premier Realtors.

---

**Desarrollado con ❤️ para Premier Realtors**
