// Mobile Navigation
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Map Initialization
document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('map');
    
    if (mapElement && typeof L !== 'undefined') {
        const laPazCoords = [-16.5000, -68.1500];
        
        const map = L.map('map').setView(laPazCoords, 12);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(map);
        
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: '<div style="background: #1a1a1a; width: 30px; height: 30px; border-radius: 50%; border: 4px solid #E8D8D8; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        const marker = L.marker(laPazCoords, { icon: customIcon }).addTo(map);
        
        marker.bindPopup(`
            <div style="font-family: -apple-system, sans-serif; text-align: center; padding: 5px;">
                <strong style="color: #1a1a1a; font-size: 14px;">La Paz, Bolivia</strong><br>
                <span style="color: #666666; font-size: 12px;">Silvana Cachi</span>
            </div>
        `).openPopup();
        
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
});

console.log('Portfolio loaded successfully');
