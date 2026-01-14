// Configuración del sitio
const CONFIG = {
    // Número de WhatsApp Business (formato: código de país + número, sin + ni espacios)
    // Ejemplo: "1234567890" para +1 (555) 123-4567
    whatsappNumber: "1234567890",
    
    // Mensaje predeterminado para WhatsApp
    whatsappDefaultMessage: "Hola, me interesa conocer más sobre sus propiedades",
    
    // Información de contacto
    contact: {
        phone: "+1 (555) 123-4567",
        email: "info@premierrealtors.com",
        address: "Av. Principal 123, Zona Centro, Ciudad, País"
    },
    
    // Redes sociales
    social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        twitter: "#"
    }
};

// Función para generar link de WhatsApp
function getWhatsAppLink(message = null) {
    const msg = message || CONFIG.whatsappDefaultMessage;
    const encodedMessage = encodeURIComponent(msg);
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

// Función para generar link de WhatsApp con información de propiedad
function getWhatsAppPropertyLink(propertyTitle, propertyPrice) {
    const message = `Hola, me interesa esta propiedad: ${propertyTitle} - $${propertyPrice.toLocaleString()}`;
    return getWhatsAppLink(message);
}
