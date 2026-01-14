// Cargar detalles de la propiedad
document.addEventListener('DOMContentLoaded', function() {
    // Obtener ID de la propiedad desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
    
    if (!propertyId) {
        showError();
        return;
    }
    
    // Obtener datos de la propiedad
    const property = getPropertyById(propertyId);
    
    if (!property) {
        showError();
        return;
    }
    
    // Mostrar datos de la propiedad
    displayProperty(property);
});

function showError() {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('error-state').classList.remove('hidden');
}

function displayProperty(property) {
    // Ocultar loading, mostrar contenido
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('property-content').classList.remove('hidden');
    
    // Actualizar breadcrumb
    document.getElementById('breadcrumb-title').textContent = property.title;
    
    // Imagen principal
    document.getElementById('main-image').src = property.image;
    document.getElementById('main-image').alt = property.title;
    
    // Galería de imágenes
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = '';
    property.images.forEach((img, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'relative h-20 md:h-24 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity';
        thumbnail.onclick = () => {
            document.getElementById('main-image').src = img;
        };
        const imgEl = document.createElement('img');
        imgEl.src = img;
        imgEl.alt = `${property.title} - Imagen ${index + 1}`;
        imgEl.className = 'w-full h-full object-cover';
        thumbnail.appendChild(imgEl);
        gallery.appendChild(thumbnail);
    });
    
    // Estado
    const statusEl = document.getElementById('property-status');
    statusEl.textContent = property.status;
    if (property.status === 'En Venta') {
        statusEl.className = 'bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold';
    } else {
        statusEl.className = 'bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold';
    }
    
    // Título
    document.getElementById('property-title').textContent = property.title;
    
    // Ubicación
    document.querySelector('#property-location span').textContent = property.location;
    
    // Precio
    document.getElementById('property-price').textContent = `$${property.price.toLocaleString()}`;
    
    // Tipo
    document.getElementById('property-type').textContent = property.type;
    
    // Características principales
    document.getElementById('property-bedrooms').innerHTML = `<i class="fas fa-bed mr-1"></i>${property.bedrooms}`;
    document.getElementById('property-bathrooms').innerHTML = `<i class="fas fa-bath mr-1"></i>${property.bathrooms}`;
    document.getElementById('property-area').textContent = `${property.area} m²`;
    document.getElementById('property-year').textContent = property.year;
    
    // Descripción
    document.getElementById('property-description').textContent = property.description;
    
    // Características
    const featuresEl = document.getElementById('property-features');
    featuresEl.innerHTML = '';
    property.features.forEach(feature => {
        const featureItem = document.createElement('div');
        featureItem.className = 'flex items-center text-gray-700';
        featureItem.innerHTML = `
            <i class="fas fa-check-circle text-green-500 mr-2"></i>
            <span>${feature}</span>
        `;
        featuresEl.appendChild(featureItem);
    });
    
    // Link de WhatsApp con mensaje personalizado
    const whatsappLink = document.getElementById('whatsapp-link');
    if (whatsappLink) {
        whatsappLink.href = getWhatsAppPropertyLink(property.title, property.price);
    }
    
    // Actualizar título de la página
    document.title = `${property.title} - Premier Realtors`;
}

function shareProperty() {
    if (navigator.share) {
        const property = getPropertyById(new URLSearchParams(window.location.search).get('id'));
        navigator.share({
            title: property.title,
            text: property.description,
            url: window.location.href
        }).catch(err => console.log('Error sharing', err));
    } else {
        // Fallback: copiar al portapapeles
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('¡Enlace copiado al portapapeles!');
        });
    }
}
