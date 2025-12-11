// data.js - CO2-Emissionsdaten (Fiktiv für Demonstrationszwecke)

const emissionsDataRaw = [
    {
        id: 1,
        country: "China",
        company: "China Energy Investment Corporation",
        sector: "Energie",
        emissions: 1542.5,
        year: 2024
    },
    {
        id: 2,
        country: "USA",
        company: "ExxonMobil",
        sector: "Öl & Gas",
        emissions: 126.8,
        year: 2024
    },
    {
        id: 3,
        country: "Indien",
        company: "Coal India",
        sector: "Bergbau",
        emissions: 687.3,
        year: 2024
    },
    {
        id: 4,
        country: "Deutschland",
        company: "RWE",
        sector: "Energie",
        emissions: 82.4,
        year: 2024
    },
    {
        id: 5,
        country: "Saudi-Arabien",
        company: "Saudi Aramco",
        sector: "Öl & Gas",
        emissions: 234.6,
        year: 2024
    },
    {
        id: 6,
        country: "Russland",
        company: "Gazprom",
        sector: "Öl & Gas",
        emissions: 198.3,
        year: 2024
    },
    {
        id: 7,
        country: "Japan",
        company: "JERA",
        sector: "Energie",
        emissions: 156.7,
        year: 2024
    },
    {
        id: 8,
        country: "Südkorea",
        company: "POSCO",
        sector: "Stahl",
        emissions: 134.2,
        year: 2024
    },
    {
        id: 9,
        country: "USA",
        company: "Chevron",
        sector: "Öl & Gas",
        emissions: 112.5,
        year: 2024
    },
    {
        id: 10,
        country: "China",
        company: "Sinopec",
        sector: "Öl & Gas",
        emissions: 298.4,
        year: 2024
    },
    {
        id: 11,
        country: "Brasilien",
        company: "Vale",
        sector: "Bergbau",
        emissions: 89.6,
        year: 2024
    },
    {
        id: 12,
        country: "Australien",
        company: "BHP",
        sector: "Bergbau",
        emissions: 76.3,
        year: 2024
    },
    {
        id: 13,
        country: "Indien",
        company: "NTPC",
        sector: "Energie",
        emissions: 245.8,
        year: 2024
    },
    {
        id: 14,
        country: "Deutschland",
        company: "ThyssenKrupp",
        sector: "Stahl",
        emissions: 67.9,
        year: 2024
    },
    {
        id: 15,
        country: "Frankreich",
        company: "TotalEnergies",
        sector: "Öl & Gas",
        emissions: 98.7,
        year: 2024
    },
    {
        id: 16,
        country: "Großbritannien",
        company: "BP",
        sector: "Öl & Gas",
        emissions: 87.3,
        year: 2024
    },
    {
        id: 17,
        country: "Italien",
        company: "Eni",
        sector: "Öl & Gas",
        emissions: 72.1,
        year: 2024
    },
    {
        id: 18,
        country: "Spanien",
        company: "Repsol",
        sector: "Öl & Gas",
        emissions: 54.6,
        year: 2024
    },
    {
        id: 19,
        country: "Kanada",
        company: "Suncor Energy",
        sector: "Öl & Gas",
        emissions: 91.2,
        year: 2024
    },
    {
        id: 20,
        country: "Mexiko",
        company: "Pemex",
        sector: "Öl & Gas",
        emissions: 105.8,
        year: 2024
    },
    {
        id: 21,
        country: "Norwegen",
        company: "Equinor",
        sector: "Öl & Gas",
        emissions: 45.3,
        year: 2024
    },
    {
        id: 22,
        country: "Polen",
        company: "PGE",
        sector: "Energie",
        emissions: 78.4,
        year: 2024
    },
    {
        id: 23,
        country: "Türkei",
        company: "EÜAŞ",
        sector: "Energie",
        emissions: 92.7,
        year: 2024
    },
    {
        id: 24,
        country: "Südafrika",
        company: "Eskom",
        sector: "Energie",
        emissions: 198.5,
        year: 2024
    },
    {
        id: 25,
        country: "Indonesien",
        company: "PT Perusahaan Listrik Negara",
        sector: "Energie",
        emissions: 167.9,
        year: 2024
    },
    {
        id: 26,
        country: "Vietnam",
        company: "EVN",
        sector: "Energie",
        emissions: 89.3,
        year: 2024
    },
    {
        id: 27,
        country: "Thailand",
        company: "EGAT",
        sector: "Energie",
        emissions: 76.8,
        year: 2024
    },
    {
        id: 28,
        country: "Malaysia",
        company: "Petronas",
        sector: "Öl & Gas",
        emissions: 68.4,
        year: 2024
    },
    {
        id: 29,
        country: "Singapur",
        company: "Singapore Refining Company",
        sector: "Öl & Gas",
        emissions: 34.2,
        year: 2024
    },
    {
        id: 30,
        country: "Vereinigte Arabische Emirate",
        company: "ADNOC",
        sector: "Öl & Gas",
        emissions: 156.9,
        year: 2024
    },
    {
        id: 31,
        country: "Katar",
        company: "Qatar Petroleum",
        sector: "Öl & Gas",
        emissions: 112.3,
        year: 2024
    },
    {
        id: 32,
        country: "Kuwait",
        company: "Kuwait Petroleum Corporation",
        sector: "Öl & Gas",
        emissions: 94.6,
        year: 2024
    },
    {
        id: 33,
        country: "Iran",
        company: "National Iranian Oil Company",
        sector: "Öl & Gas",
        emissions: 187.4,
        year: 2024
    },
    {
        id: 34,
        country: "Irak",
        company: "Iraq National Oil Company",
        sector: "Öl & Gas",
        emissions: 143.8,
        year: 2024
    },
    {
        id: 35,
        country: "Nigeria",
        company: "Nigerian National Petroleum Corporation",
        sector: "Öl & Gas",
        emissions: 98.2,
        year: 2024
    },
    {
        id: 36,
        country: "Algerien",
        company: "Sonatrach",
        sector: "Öl & Gas",
        emissions: 76.5,
        year: 2024
    },
    {
        id: 37,
        country: "Ägypten",
        company: "Egyptian General Petroleum Corporation",
        sector: "Öl & Gas",
        emissions: 67.9,
        year: 2024
    },
    {
        id: 38,
        country: "Argentinien",
        company: "YPF",
        sector: "Öl & Gas",
        emissions: 54.3,
        year: 2024
    },
    {
        id: 39,
        country: "Chile",
        company: "Codelco",
        sector: "Bergbau",
        emissions: 45.7,
        year: 2024
    },
    {
        id: 40,
        country: "Kolumbien",
        company: "Ecopetrol",
        sector: "Öl & Gas",
        emissions: 58.9,
        year: 2024
    }
];
// utils.js - Hilfsfunktionen

'use strict';

/**
 * Formatiert eine Zahl im deutschen Format (1.234,5)
 * @param {number} num - Die zu formatierende Zahl
 * @returns {string} - Formatierte Zahl
 */
function formatNumber(num) {
    return new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    }).format(num);
}

/**
 * Sanitiert Benutzereingaben um XSS-Attacken zu verhindern
 * @param {string} input - Die zu sanitierende Eingabe
 * @returns {string} - Sanitierte Eingabe
 */
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

/**
 * Debounce-Funktion für Performance-Optimierung
 * Verzögert die Ausführung einer Funktion
 * @param {Function} func - Die zu verzögernde Funktion
 * @param {number} wait - Wartezeit in Millisekunden
 * @returns {Function} - Debounced Funktion
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Zeigt eine Fehler-Nachricht an
 * @param {string} message - Die Fehlermeldung
 * @param {HTMLElement} container - Container für die Fehlermeldung
 */
function showError(message, container) {
    // Alte Fehler entfernen
    const oldError = container.querySelector('.error-message');
    if (oldError) oldError.remove();
    
    // Neue Fehlermeldung erstellen
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    
    // Einfügen am Anfang des Containers
    container.insertBefore(errorDiv, container.firstChild);
    
    // Nach 5 Sekunden automatisch entfernen
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

/**
 * Validiert einen Suchbegriff
 * @param {string} searchTerm - Der zu validierende Suchbegriff
 * @returns {boolean} - true wenn valid, false wenn invalid
 */
function validateSearchTerm(searchTerm) {
    // Längen-Prüfung
    if (searchTerm.length > 100) {
        return false;
    }
    
    // Pattern-Prüfung (nur alphanumerisch und Leerzeichen)
    const validPattern = /^[a-zA-ZäöüÄÖÜß0-9\s\-&.]*$/;
    return validPattern.test(searchTerm);
}

/**
 * Scrollt sanft zu einem Element
 * @param {string} elementId - ID des Ziel-Elements
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Performance-Messung für Funktionen
 * @param {string} functionName - Name der Funktion
 * @param {Function} fn - Auszuführende Funktion
 */
function measurePerformance(functionName, fn) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`⏱️ ${functionName}: ${(end - start).toFixed(2)}ms`);
}

/**
 * Erstellt eine Kopie eines Arrays/Objekts (Deep Clone)
 * @param {*} obj - Zu kopierendes Objekt
 * @returns {*} - Kopie des Objekts
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Extrahiert einzigartige Werte aus einem Array von Objekten
 * @param {Array} array - Das Array
 * @param {string} key - Der Schlüssel
 * @returns {Array} - Array mit einzigartigen Werten
 */
function getUniqueValues(array, key) {
    return [...new Set(array.map(item => item[key]))].sort();
}

/**
 * Logging-Funktion für Entwicklung
 * @param {string} type - Log-Typ (info, warn, error)
 * @param {string} message - Log-Nachricht
 * @param {*} data - Zusätzliche Daten
 */
function log(type, message, data) {
    // Nur in Development-Mode loggen
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        const timestamp = new Date().toISOString();
        const prefix = `[${timestamp}] ${type.toUpperCase()}:`;
        
        if (data) {
            console[type](prefix, message, data);
        } else {
            console[type](prefix, message);
        }
    }
}