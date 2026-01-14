// Base de datos de propiedades
const propertiesData = [
    {
        id: 1,
        title: "Apartamento Moderno Centro",
        type: "Apartamento",
        status: "En Venta",
        price: 350000,
        area: 150,
        bedrooms: 3,
        bathrooms: 2,
        location: "Zona Centro, Ciudad",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ],
        description: "Hermoso apartamento moderno en el corazón de la ciudad. Cuenta con amplios espacios, acabados de lujo y una ubicación privilegiada cerca de todos los servicios. Perfecto para profesionales que buscan comodidad y estilo.",
        features: ["Cocina equipada", "Balcón privado", "Estacionamiento", "Seguridad 24/7", "Gimnasio", "Piscina"],
        year: 2020,
        floor: 8,
        totalFloors: 15
    },
    {
        id: 2,
        title: "Villa de Lujo con Piscina",
        type: "Casa",
        status: "Disponible",
        price: 850000,
        area: 280,
        bedrooms: 4,
        bathrooms: 3,
        location: "Zona Residencial Premium",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ],
        description: "Espectacular villa de lujo con piscina privada y jardín extenso. Diseño arquitectónico moderno con acabados premium. Ideal para familias que buscan espacio, privacidad y comodidad.",
        features: ["Piscina privada", "Jardín", "Terraza", "Cocina gourmet", "Sala de cine", "Bodega"],
        year: 2018,
        floor: 1,
        totalFloors: 2
    },
    {
        id: 3,
        title: "Penthouse con Vista al Mar",
        type: "Penthouse",
        status: "En Venta",
        price: 1200000,
        area: 320,
        bedrooms: 5,
        bathrooms: 4,
        location: "Torre Residencial, Costa",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
        ],
        description: "Exclusivo penthouse con vistas panorámicas al mar. Diseño de lujo con terrazas privadas, acabados de primera calidad y todas las comodidades. La propiedad más exclusiva de la torre.",
        features: ["Vista al mar", "Terraza privada", "Jacuzzi", "Ascensor privado", "Concierge", "Spa"],
        year: 2022,
        floor: 25,
        totalFloors: 25
    },
    {
        id: 4,
        title: "Apartamento Minimalista",
        type: "Apartamento",
        status: "Disponible",
        price: 220000,
        area: 85,
        bedrooms: 2,
        bathrooms: 1,
        location: "Zona Moderna, Ciudad",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        images: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
        ],
        description: "Acogedor apartamento con diseño minimalista y funcional. Perfecto para jóvenes profesionales o parejas. Ubicado en zona moderna con fácil acceso a transporte público.",
        features: ["Diseño moderno", "Cocina integrada", "Balcón", "Seguridad", "Cerca del metro"],
        year: 2021,
        floor: 5,
        totalFloors: 10
    },
    {
        id: 5,
        title: "Casa Familiar Espaciosa",
        type: "Casa",
        status: "En Venta",
        price: 450000,
        area: 200,
        bedrooms: 3,
        bathrooms: 2,
        location: "Barrio Residencial Tranquilo",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        images: [
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
        ],
        description: "Casa familiar ideal con amplios espacios y jardín. Barrio tranquilo y seguro, perfecto para criar una familia. Cerca de escuelas, parques y centros comerciales.",
        features: ["Jardín", "Garaje", "Sala de juegos", "Patio trasero", "Zona escolar"],
        year: 2015,
        floor: 1,
        totalFloors: 2
    },
    {
        id: 6,
        title: "Loft Industrial Moderno",
        type: "Loft",
        status: "Disponible",
        price: 280000,
        area: 110,
        bedrooms: 1,
        bathrooms: 1,
        location: "Distrito Creativo, Centro",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
        images: [
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ],
        description: "Loft con estilo industrial en el corazón del distrito creativo. Espacios abiertos, techos altos y mucha luz natural. Ideal para artistas y creativos.",
        features: ["Estilo industrial", "Techos altos", "Ventanas grandes", "Espacio abierto", "Zona creativa"],
        year: 2019,
        floor: 3,
        totalFloors: 5
    },
    {
        id: 7,
        title: "Apartamento Ejecutivo",
        type: "Apartamento",
        status: "En Venta",
        price: 420000,
        area: 180,
        bedrooms: 3,
        bathrooms: 2,
        location: "Torre Ejecutiva, Zona Financiera",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
        ],
        description: "Apartamento ejecutivo de lujo en el corazón financiero. Diseñado para profesionales de alto nivel con todas las comodidades y servicios premium.",
        features: ["Vista panorámica", "Concierge 24/7", "Business center", "Gimnasio", "Spa", "Restaurante"],
        year: 2021,
        floor: 20,
        totalFloors: 30
    },
    {
        id: 8,
        title: "Casa Contemporánea",
        type: "Casa",
        status: "Disponible",
        price: 680000,
        area: 250,
        bedrooms: 4,
        bathrooms: 3,
        location: "Zona Residencial Exclusiva",
        image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        images: [
            "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
        ],
        description: "Casa contemporánea con diseño arquitectónico único. Amplios espacios, jardín paisajístico y todas las comodidades modernas para una vida de lujo.",
        features: ["Diseño arquitectónico", "Jardín paisajístico", "Piscina", "Terraza", "Cocina gourmet", "Home office"],
        year: 2020,
        floor: 1,
        totalFloors: 2
    },
    {
        id: 9,
        title: "Estudio Premium",
        type: "Estudio",
        status: "Disponible",
        price: 150000,
        area: 45,
        bedrooms: 0,
        bathrooms: 1,
        location: "Zona Universitaria",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ],
        description: "Estudio moderno y funcional perfecto para estudiantes o jóvenes profesionales. Ubicado cerca de universidades y transporte público.",
        features: ["Espacio funcional", "Cocina integrada", "Cerca de universidades", "Transporte público"],
        year: 2022,
        floor: 3,
        totalFloors: 8
    }
];

// Función para obtener propiedad por ID
function getPropertyById(id) {
    return propertiesData.find(property => property.id === parseInt(id));
}

// Función para obtener todas las propiedades
function getAllProperties() {
    return propertiesData;
}

// Función para filtrar propiedades
function filterProperties(filters) {
    let filtered = [...propertiesData];
    
    if (filters.type && filters.type !== 'all') {
        filtered = filtered.filter(p => p.type === filters.type);
    }
    
    if (filters.status && filters.status !== 'all') {
        filtered = filtered.filter(p => p.status === filters.status);
    }
    
    if (filters.minPrice) {
        filtered = filtered.filter(p => p.price >= filters.minPrice);
    }
    
    if (filters.maxPrice) {
        filtered = filtered.filter(p => p.price <= filters.maxPrice);
    }
    
    if (filters.bedrooms) {
        filtered = filtered.filter(p => p.bedrooms >= parseInt(filters.bedrooms));
    }
    
    if (filters.bathrooms) {
        filtered = filtered.filter(p => p.bathrooms >= parseInt(filters.bathrooms));
    }
    
    return filtered;
}
