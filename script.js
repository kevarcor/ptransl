document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Animación de Elementos al Hacer Scroll (Fade-in-up) ---
    const animatedElements = document.querySelectorAll('.fade-in-up');

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.2 };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });


    // --- 2. Funcionalidad de Cambio de Idioma (Español/Inglés) ---
    
    // Diccionario de Traducciones
    // NOTA: Se añadieron 'nav_about', 'nav_services', 'nav_process', 'nav_contact' para los enlaces de navegación.
    const translations = {
        'es': {
            'nav_about': 'Nosotros',
            'nav_services': 'Servicios',
            'nav_process': 'Proceso',
            'nav_contact': 'Contacto',
            
            'hero_subtitle': 'Conectamos tu negocio con el mundo a través de soluciones de transporte rápidas, seguras y adaptables.',
            'hero_cta': 'Descubre nuestros servicios',
            'about_title': 'Quiénes Somos',
            'about_text': '🔷 Fundada el 15 de Agosto del 2016. <br>🔷 Dedicada al transporte terrestre de contenedores. <br>🔷 Ubicados en el puerto de Lázaro Cárdenas,Michoacán. <br> 🔷 Certificados en norma ISO 9001:2015. <br>',
            'services_title': 'Nuestros Servicios',
            'service_terrestre_title': 'Transporte Terrestre',
            'service_terrestre_text': 'Rutas optimizadas y la flota más moderna para entregas locales y de larga distancia, priorizando la seguridad.',
            'service_control_title': 'Control de Ruta Inteligente',
            'service_control_text': 'Monitoreo en tiempo real 24/7 y sistemas GPS avanzados para asegurar la trazabilidad y eficiencia total de su envío.',
            'service_infra_title': 'Infraestructura en Patio',
            'service_infra_text': 'Espacios seguros y optimizados para el manejo, inspección y resguardo temporal de su mercancía.',
            'process_title': 'Nuestro Proceso de Transporte',
            'step1_title': 'Recolección',
            'step1_text': 'Coordinación y carga segura en origen.',
            'step2_title': 'Monitoreo',
            'step2_text': 'Seguimiento 24/7 y control de calidad en ruta.',
            'step3_title': 'Logística',
            'step3_text': 'Manejo de documentación y aduanas.',
            'step4_title': 'Entrega',
            'step4_text': 'Descarga segura y confirmación final.',
            'contact_title': 'Contáctanos',
            'contact_cta': 'Enviar Consulta',
            'footer_email': 'Email: operaciones@ptransl.com',
            'footer_phone': 'Tel: +52 753 102 9665',
            'footer_social_title': 'Síguenos',
            'footer_copy': '© 2025 Port Trans Logistic. Todos los derechos reservados.',
            'contact_cta_main_title': '¿Listo para impulsar tu logística?',
            'contact_cta_text': 'Agenda una llamada o envíanos un mensaje. Nuestro equipo está listo para crear tu solución personalizada.',
            'contact_form_title': 'Contacto Rápido',
            'contact_cta_button': 'Hablar con un experto',
            'service_terrestre_text_short': 'Rutas optimizadas y la flota más moderna...',
            'process_title': 'Nuestro Proceso de Transporte Detallado',
            'step1_title': 'RECEPCIÓN DE MANIOBRAS',
            'step2_title': 'DATOS DE UNIDAD',
            'step3_title': 'REGISTRO DE UNIDAD EN ASLA',
            'step4_title': 'INGRESO A PUERTO',
            'step5_title': 'CARGA DE CONTENEDORES',
            'step6_title': 'RESULTADO DE MODULACIÓN',
            'step7_title': 'LIBERACIÓN DE EMBARQUE',
            'step8_title': 'INICIO DE RUTA',
            'step9_title': 'LLEGADA A DESTINO',
            'step10_title': 'INGRESO DE VACÍOS',
            'unit_info_title': 'Notificaciones en tiempo real',
            'unit_placas': 'PLACAS',
            'unit_economico': 'ECONÓMICO',
            'unit_operador': 'NOMBRE DEL OPERADOR',
            'unit_licencia': 'NÚMERO DE LICENCIA',
            'contact_wha_button': 'Contactar por WhatsApp'
        },
        'en': {
            'nav_about': 'About Us',
            'nav_services': 'Services',
            'nav_process': 'Process',
            'nav_contact': 'Contact',
            
            'hero_subtitle': 'We connect your business with the world through fast, secure, and adaptable transport solutions.',
            'hero_cta': 'Discover our services',
            'about_title': 'About Us',
            'about_text': '🔷 Founded on August 15, 2016. <br>🔷 Dedicated to ground transportation of containers. <br>🔷 Located at the port of Lázaro Cárdenas, Michoacán. <br> 🔷 Certified in ISO 9001:2015 standard. <br>',
            'services_title': 'Our Services',
            'service_terrestre_title': 'Ground Transportation',
            'service_terrestre_text': 'Optimized routes and the most modern fleet for local and long-distance deliveries, prioritizing security.',
            'service_control_title': 'Smart Route Control',
            'service_control_text': '24/7 real-time monitoring and advanced GPS systems to ensure complete traceability and efficiency of your shipment.',
            'service_infra_title': 'Yard Infrastructure',
            'service_infra_text': 'Secure and optimized spaces for the handling, inspection, and temporary safeguarding of your merchandise.',
            'process_title': 'Our Transport Process',
            'step1_title': 'Collection',
            'step1_text': 'Coordination and secure loading at origin.',
            'step2_title': 'Monitoring',
            'step2_text': '24/7 tracking and quality control en route.',
            'step3_title': 'Logistics',
            'step3_text': 'Handling of documentation and customs.',
            'step4_title': 'Delivery',
            'step4_text': 'Secure unloading and final confirmation.',
            'contact_title': 'Contact Us',
            'contact_cta': 'Send Inquiry',
            'footer_email': 'Email: operaciones@ptransl.com',
            'footer_phone': 'Phone: +52 753 102 9665',
            'footer_social_title': 'Follow Us',
            'footer_copy': '© 2025 Port Trans Logistic. All rights reserved.',
            'contact_cta_main_title': 'Ready to boost your logistics?',
            'contact_cta_text': 'Schedule a call or send us a message. Our team is ready to create your personalized solution.',
            'contact_form_title': 'Contact Us',
            'contact_cta_button': 'Talk to an Expert',
            'service_terrestre_text_short': 'Optimized routes and the most modern fleet...',
            'process_title': 'Our Detailed Transport Process',
            'step1_title': 'MANEUVER RECEPTION',
            'step2_title': 'UNIT DATA',
            'step3_title': 'UNIT REGISTRATION IN ASLA',
            'step4_title': 'PORT ENTRY',
            'step5_title': 'CONTAINER LOADING',
            'step6_title': 'MODULATION RESULT',
            'step7_title': 'SHIPMENT RELEASE',
            'step8_title': 'ROUTE START',
            'step9_title': 'ARRIVAL AT DESTINATION',
            'step10_title': 'EMPTY CONTAINER RETURN',
            'unit_info_title': 'Real-time notifications',
            'unit_placas': 'LICENSE PLATES',
            'unit_economico': 'UNIT ID',
            'unit_operador': 'OPERATOR NAME',
            'unit_licencia': 'LICENSE NUMBER',
            'contact_wha_button': 'Contact on WhatsApp'
        }
    };

    const langToggle = document.getElementById('lang-toggle');
    let currentLang = 'es'; // Idioma predeterminado

    // Función para aplicar la traducción
    function setLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key]; 
            }
        });
        // Actualizar el botón de idioma
        langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
        langToggle.setAttribute('aria-label', lang === 'es' ? 'Cambiar idioma a Inglés' : 'Change language to Spanish');
    }

    // Evento del botón de cambio de idioma
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(currentLang);
    });

    // Iniciar con el idioma predeterminado
    setLanguage(currentLang);
    
    // La funcionalidad de menú móvil ahora es manejada por Bootstrap JS (bootstrap.bundle.min.js)
});