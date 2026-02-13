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
