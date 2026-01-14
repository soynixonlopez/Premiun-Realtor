// Variables globales
let allProperties = [];
let filteredProperties = [];

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Cargar todas las propiedades
    allProperties = getAllProperties();
    filteredProperties = [...allProperties];
    
    // Renderizar propiedades iniciales
    renderProperties(filteredProperties);
    updateResultsCount(filteredProperties.length);
    
    // Event listeners para filtros desktop
    const filterForm = document.getElementById('filter-form');
    if (filterForm) {
        filterForm.addEventListener('submit', handleFilterSubmit);
    }
    
    // Event listeners para filtros móvil
    const mobileFilterForm = document.getElementById('mobile-filter-form');
    if (mobileFilterForm) {
        mobileFilterForm.addEventListener('submit', handleMobileFilterSubmit);
    }
    
    // Limpiar filtros
    const clearFiltersBtn = document.getElementById('clear-filters');
    const clearFiltersBtn2 = document.getElementById('clear-filters-btn');
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
    if (clearFiltersBtn2) {
        clearFiltersBtn2.addEventListener('click', clearAllFilters);
    }
    
    // Ordenar propiedades
    const sortSelect = document.getElementById('sort-properties');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }
    
    // Mobile filter toggle
    const mobileFilterBtn = document.getElementById('mobile-filter-btn');
    const mobileFilterOverlay = document.getElementById('mobile-filter-overlay');
    const closeMobileFilters = document.getElementById('close-mobile-filters');
    
    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener('click', () => {
            mobileFilterOverlay.classList.remove('hidden');
        });
    }
    
    if (closeMobileFilters) {
        closeMobileFilters.addEventListener('click', () => {
            mobileFilterOverlay.classList.add('hidden');
        });
    }
    
    // Cerrar overlay al hacer clic fuera
    if (mobileFilterOverlay) {
        mobileFilterOverlay.addEventListener('click', (e) => {
            if (e.target === mobileFilterOverlay) {
                mobileFilterOverlay.classList.add('hidden');
            }
        });
    }
});

function handleFilterSubmit(e) {
    e.preventDefault();
    applyFilters();
}

function handleMobileFilterSubmit(e) {
    e.preventDefault();
    applyFilters(true);
    document.getElementById('mobile-filter-overlay').classList.add('hidden');
}

function applyFilters(isMobile = false) {
    const prefix = isMobile ? 'mobile-' : '';
    
    const filters = {
        type: document.getElementById(`${prefix}filter-type`).value,
        status: document.getElementById(`${prefix}filter-status`).value,
        minPrice: document.getElementById(`${prefix}filter-min-price`).value ? parseInt(document.getElementById(`${prefix}filter-min-price`).value) : null,
        maxPrice: document.getElementById(`${prefix}filter-max-price`).value ? parseInt(document.getElementById(`${prefix}filter-max-price`).value) : null,
        bedrooms: document.getElementById(`${prefix}filter-bedrooms`).value,
        bathrooms: document.getElementById(`${prefix}filter-bathrooms`).value
    };
    
    // Sincronizar filtros móvil y desktop
    if (isMobile) {
        document.getElementById('filter-type').value = filters.type;
        document.getElementById('filter-status').value = filters.status;
        document.getElementById('filter-min-price').value = filters.minPrice || '';
        document.getElementById('filter-max-price').value = filters.maxPrice || '';
        document.getElementById('filter-bedrooms').value = filters.bedrooms;
        document.getElementById('filter-bathrooms').value = filters.bathrooms;
    } else {
        document.getElementById('mobile-filter-type').value = filters.type;
        document.getElementById('mobile-filter-status').value = filters.status;
        document.getElementById('mobile-filter-min-price').value = filters.minPrice || '';
        document.getElementById('mobile-filter-max-price').value = filters.maxPrice || '';
        document.getElementById('mobile-filter-bedrooms').value = filters.bedrooms;
        document.getElementById('mobile-filter-bathrooms').value = filters.bathrooms;
    }
    
    // Aplicar filtros
    filteredProperties = filterProperties(filters);
    
    // Aplicar ordenamiento actual
    const sortValue = document.getElementById('sort-properties').value;
    sortProperties(sortValue);
    
    // Renderizar resultados
    renderProperties(filteredProperties);
    updateResultsCount(filteredProperties.length);
}

function clearAllFilters() {
    // Limpiar filtros desktop
    document.getElementById('filter-type').value = 'all';
    document.getElementById('filter-status').value = 'all';
    document.getElementById('filter-min-price').value = '';
    document.getElementById('filter-max-price').value = '';
    document.getElementById('filter-bedrooms').value = 'all';
    document.getElementById('filter-bathrooms').value = 'all';
    
    // Limpiar filtros móvil
    document.getElementById('mobile-filter-type').value = 'all';
    document.getElementById('mobile-filter-status').value = 'all';
    document.getElementById('mobile-filter-min-price').value = '';
    document.getElementById('mobile-filter-max-price').value = '';
    document.getElementById('mobile-filter-bedrooms').value = 'all';
    document.getElementById('mobile-filter-bathrooms').value = 'all';
    
    // Resetear propiedades
    filteredProperties = [...allProperties];
    document.getElementById('sort-properties').value = 'price-asc';
    sortProperties('price-asc');
    renderProperties(filteredProperties);
    updateResultsCount(filteredProperties.length);
}

function handleSort(e) {
    sortProperties(e.target.value);
    renderProperties(filteredProperties);
}

function sortProperties(sortValue) {
    switch(sortValue) {
        case 'price-asc':
            filteredProperties.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProperties.sort((a, b) => b.price - a.price);
            break;
        case 'area-asc':
            filteredProperties.sort((a, b) => a.area - b.area);
            break;
        case 'area-desc':
            filteredProperties.sort((a, b) => b.area - a.area);
            break;
        case 'newest':
            filteredProperties.sort((a, b) => b.year - a.year);
            break;
        default:
            break;
    }
}

function renderProperties(properties) {
    const grid = document.getElementById('properties-grid');
    const noResults = document.getElementById('no-results');
    
    if (properties.length === 0) {
        grid.innerHTML = '';
        grid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }
    
    grid.classList.remove('hidden');
    noResults.classList.add('hidden');
    
    grid.innerHTML = properties.map(property => `
        <div class="property-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative h-64 overflow-hidden">
                <img src="${property.image}" 
                     alt="${property.title}" 
                     class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                <div class="absolute top-4 right-4 ${property.status === 'En Venta' ? 'bg-blue-900' : 'bg-green-600'} text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${property.status}
                </div>
                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    <i class="fas fa-bed mr-1"></i>${property.bedrooms}
                    <i class="fas fa-bath ml-3 mr-1"></i>${property.bathrooms}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">${property.title}</h3>
                <p class="text-gray-600 mb-2 text-sm">
                    <span class="inline-block bg-blue-50 text-blue-900 px-2 py-1 rounded text-xs font-semibold mr-2">${property.type}</span>
                </p>
                <p class="text-gray-600 mb-4">
                    <i class="fas fa-map-marker-alt mr-2 text-blue-900"></i>
                    ${property.location}
                </p>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-3xl font-bold text-blue-900">$${property.price.toLocaleString()}</span>
                    <span class="text-gray-500">${property.area} m²</span>
                </div>
                <a href="details.html?id=${property.id}" class="block w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center">
                    Ver Detalles
                </a>
            </div>
        </div>
    `).join('');
    
    // Animar cards al aparecer
    const cards = grid.querySelectorAll('.property-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function updateResultsCount(count) {
    const countEl = document.getElementById('results-count');
    if (countEl) {
        countEl.textContent = count;
    }
}
