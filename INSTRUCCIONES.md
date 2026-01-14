# Instrucciones de Uso - Premier Realtors

## 🚀 Inicio Rápido

1. **Abrir el sitio**: Abre `index.html` en tu navegador
2. **O usar servidor local**:
   ```bash
   python -m http.server 8000
   ```
   Luego visita: `http://localhost:8000`

## ⚙️ Configuración Inicial

### 1. Configurar WhatsApp Business

Edita `config.js` y cambia el número:

```javascript
whatsappNumber: "1234567890", // Tu número de WhatsApp Business
```

**Formato**: Código de país + número (sin + ni espacios)
- Ejemplo: "1234567890" para +1 (555) 123-4567
- Ejemplo: "521234567890" para +52 12 3456 7890 (México)

### 2. Actualizar Información de Contacto

En `config.js`, actualiza:

```javascript
contact: {
    phone: "+1 (555) 123-4567",
    email: "info@premierrealtors.com",
    address: "Av. Principal 123, Zona Centro, Ciudad, País"
}
```

## 📝 Agregar Propiedades

Edita `properties-data.js` y agrega un nuevo objeto al array:

```javascript
{
    id: 10, // ID único (siguiente número disponible)
    title: "Nombre de la Propiedad",
    type: "Apartamento", // Opciones: Apartamento, Casa, Penthouse, Loft, Estudio
    status: "En Venta", // Opciones: "En Venta" o "Disponible"
    price: 350000,
    area: 150, // en m²
    bedrooms: 3,
    bathrooms: 2,
    location: "Zona Centro, Ciudad",
    image: "https://images.unsplash.com/photo-...", // URL de imagen principal
    images: [
        "https://images.unsplash.com/photo-...", // Imagen 1
        "https://images.unsplash.com/photo-...", // Imagen 2
        "https://images.unsplash.com/photo-..."  // Imagen 3
    ],
    description: "Descripción detallada de la propiedad...",
    features: [
        "Cocina equipada",
        "Balcón privado",
        "Estacionamiento",
        "Seguridad 24/7"
    ],
    year: 2020, // Año de construcción
    floor: 8, // Piso (si aplica)
    totalFloors: 15 // Total de pisos del edificio
}
```

## 🎨 Personalizar Colores

Los colores principales están en las clases de Tailwind. Busca y reemplaza:

- `bg-blue-900` → Tu color principal
- `text-blue-900` → Tu color de texto principal
- `bg-[#25D366]` → Color de WhatsApp (verde)

## 📱 Funcionalidades

### Página Principal (index.html)
- Hero section con call-to-action
- Propiedades destacadas (6 propiedades)
- Servicios
- Sobre nosotros
- Testimonios
- Formulario de contacto

### Página de Propiedades (properties.html)
- **Sidebar de Filtros** (izquierda):
  - Tipo de propiedad
  - Estado (En Venta/Disponible)
  - Rango de precio
  - Habitaciones
  - Baños
- **Grid de Propiedades** (derecha):
  - Cards con información
  - Ordenamiento (precio, área, más recientes)
  - Contador de resultados

### Página de Detalles (details.html)
- Se actualiza automáticamente según el ID de la propiedad
- Galería de imágenes con vista previa
- Información completa
- Características destacadas
- Botón de WhatsApp con mensaje personalizado

## 🔗 Navegación

- **Header**: Siempre visible con botón WhatsApp verde
- **Enlaces**:
  - "Ver Detalles" → `details.html?id=X`
  - "Ver Todas las Propiedades" → `properties.html`
  - Botón WhatsApp → Abre WhatsApp Business

## 📂 Archivos Importantes

- `config.js` - Configuración centralizada
- `properties-data.js` - Base de datos de propiedades
- `index.html` - Página principal
- `properties.html` - Listado con filtros
- `details.html` - Detalles de propiedad
- `styles.css` - Estilos personalizados
- `script.js` - JavaScript principal

## 🐛 Solución de Problemas

### Los enlaces de WhatsApp no funcionan
- Verifica que `config.js` esté cargado antes que otros scripts
- Revisa el formato del número en `config.js`

### Las propiedades no se muestran
- Verifica que `properties-data.js` esté cargado
- Revisa la consola del navegador (F12) para errores

### Los filtros no funcionan
- Asegúrate de que `properties.js` esté cargado
- Verifica que `properties-data.js` esté antes que `properties.js`

## 📞 Soporte

Para más ayuda, revisa el código o contacta al desarrollador.

---

**¡Listo para usar!** 🎉
