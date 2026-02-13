// app.js - Hauptanwendung für CO2-Emissions-Transparenz

'use strict';

/**
 * Hauptanwendungs-Modul (Module Pattern)
 * Kapselt alle Funktionalitäten und verhindert globale Variablen
 */
const CO2App = (function() {
    
    // ============================================
    // PRIVATE VARIABLEN
    // ============================================
    
    let emissionsData = [];
    let filteredData = [];
    let currentSort = {
        column: null,
        ascending: true
    };
    
    // DOM-Elemente (werden bei init() gesetzt)
    const elements = {
        table: null,
        tbody: null,
        filterForm: null,
        countryFilter: null,
        sectorFilter: null,
        searchInput: null,
        resultCount: null,
        mobileMenuBtn: null,
        mainNav: null
    };
    
    // ============================================
    // INITIALISIERUNG
    // ============================================
    
    /**
     * Initialisiert die Anwendung
     */
    function init() {
        log('info', 'CO2 Emissions App wird initialisiert...');
        
        // DOM-Elemente speichern
        cacheDOMElements();
        
        // Prüfen ob alle notwendigen Elemente vorhanden sind
        if (!validateDOMElements()) {
            log('error', 'Kritische DOM-Elemente fehlen!');
            return;
        }
        
        // Daten laden
        loadData();
        
        // Event Listeners registrieren
        setupEventListeners();
        
        // Initiale Darstellung
        renderTable(emissionsData);
        
        // Filter-Optionen populieren
        populateFilters();
        
        // Ergebnis-Zähler aktualisieren
        updateResultCount();
        
        log('info', 'Initialisierung abgeschlossen');
    }
    
    /**
     * Speichert Referenzen zu DOM-Elementen
     */
    function cacheDOMElements() {
        elements.table = document.getElementById('emissionsTable');
        elements.tbody = document.querySelector('#emissionsTable tbody');
        elements.filterForm = document.getElementById('filterForm');
        elements.countryFilter = document.getElementById('countryFilter');
        elements.sectorFilter = document.getElementById('sectorFilter');
        elements.searchInput = document.getElementById('searchInput');
        elements.resultCount = document.getElementById('resultCount');
        elements.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        elements.mainNav = document.querySelector('.main-nav');
    }
    
    /**
     * Validiert dass alle kritischen DOM-Elemente vorhanden sind
     * @returns {boolean} - true wenn alle vorhanden
     */
    function validateDOMElements() {
        const critical = ['table', 'tbody', 'filterForm', 'countryFilter', 
                         'sectorFilter', 'searchInput'];
        
        for (const key of critical) {
            if (!elements[key]) {
                console.error(`Kritisches Element fehlt: ${key}`);
                return false;
            }
        }
        return true;
    }
    
    // ============================================
    // DATEN-VERWALTUNG
    // ============================================
    
    /**
     * Lädt die CO2-Emissionsdaten
     */
    function loadData() {
        try {
            // In der Praxis würde hier ein API-Call erfolgen
            // Für diese Demo verwenden wir die statischen Daten
            if (typeof emissionsDataRaw === 'undefined') {
                throw new Error('Datenquelle nicht gefunden');
            }
            
            emissionsData = deepClone(emissionsDataRaw);
            filteredData = deepClone(emissionsData);
            
            log('info', `${emissionsData.length} Datensätze geladen`);
        } catch (error) {
            log('error', 'Fehler beim Laden der Daten', error);
            showError('Fehler beim Laden der Daten. Bitte Seite neu laden.', 
                     elements.filterForm.parentElement);
        }
    }
    
    // ============================================
    // TABELLEN-RENDERING
    // ============================================
    
    /**
     * Rendert die Datentabelle
     * @param {Array} data - Anzuzeigende Daten
     */
    function renderTable(data) {
        // Sicherheitscheck
        if (!elements.tbody) {
            log('error', 'Tabellen-Body nicht gefunden!');
            return;
        }
        
        // Performance-Messung
        measurePerformance('Tabelle rendern', () => {
            // Tabelle leeren
            elements.tbody.innerHTML = '';
            
            // Prüfen, ob Daten vorhanden
            if (!data || data.length === 0) {
                renderNoDataMessage();
                return;
            }
            
            // DocumentFragment für bessere Performance
            const fragment = document.createDocumentFragment();
            
            // Daten durchlaufen und Zeilen erstellen
            data.forEach(entry => {
                const row = createTableRow(entry);
                fragment.appendChild(row);
            });
            
            // Fragment in Tabelle einfügen (nur 1 Reflow!)
            elements.tbody.appendChild(fragment);
            
            log('info', `${data.length} Zeilen gerendert`);
        });
    }
    
    /**
     * Erstellt eine Tabellenzeile
     * @param {Object} entry - Dateneintrag
     * @returns {HTMLElement} - Tabellenzeile
     */
    function createTableRow(entry) {
        const row = document.createElement('tr');
        row.dataset.id = entry.id;
        
        // Zellen erstellen (WICHTIG: textContent für XSS-Schutz!)
        const cells = [
            { value: entry.country, label: 'Land' },
            { value: entry.company, label: 'Unternehmen' },
            { value: entry.sector, label: 'Sektor' },
            { value: formatNumber(entry.emissions), label: 'CO2-Emissionen', class: 'emissions-value' },
            { value: entry.year, label: 'Jahr' }
        ];
        
        cells.forEach(cellData => {
            const cell = document.createElement('td');
            cell.textContent = cellData.value; // Sicher gegen XSS!
            cell.dataset.label = cellData.label;
            if (cellData.class) {
                cell.className = cellData.class;
            }
            row.appendChild(cell);
        });
        
        return row;
    }
    
    /**
     * Zeigt "Keine Daten"-Nachricht an
     */
    function renderNoDataMessage() {
        elements.tbody.innerHTML = `
            <tr>
                <td colspan="5" class="no-data">
                    <p>Keine Daten gefunden.</p>
                    <p>Bitte passen Sie Ihre Filterkriterien an.</p>
                </td>
            </tr>
        `;
    }
    
    // ============================================
    // SORTIER-FUNKTIONALITÄT
    // ============================================
    
    /**
     * Sortiert die Daten nach Spalte
     * @param {string} column - Spaltenname
     */
    function sortData(column) {
        // Sortierrichtung umkehren, wenn gleiche Spalte
        if (currentSort.column === column) {
            currentSort.ascending = !currentSort.ascending;
        } else {
            currentSort.column = column;
            currentSort.ascending = true;
        }
        
        log('info', `Sortiere nach ${column} (${currentSort.ascending ? 'aufsteigend' : 'absteigend'})`);
        
        // Daten sortieren
        filteredData.sort((a, b) => {
            let valueA = a[column];
            let valueB = b[column];
            
            // String-Vergleich (case-insensitive)
            if (typeof valueA === 'string') {
                valueA = valueA.toLowerCase();
                valueB = valueB.toLowerCase();
            }
            
            // Vergleich durchführen
            let comparison = 0;
            if (valueA < valueB) {
                comparison = -1;
            } else if (valueA > valueB) {
                comparison = 1;
            }
            
            return currentSort.ascending ? comparison : -comparison;
        });
        
        // Tabelle neu rendern
        renderTable(filteredData);
        
        // Sortier-Indikatoren aktualisieren
        updateSortIndicators(column);
    }
    
    /**
     * Aktualisiert visuelle Sortier-Indikatoren
     * @param {string} column - Sortierte Spalte
     */
    function updateSortIndicators(column) {
        // Alle Sortier-Klassen entfernen
        document.querySelectorAll('.emissions-table th').forEach(th => {
            th.classList.remove('sort-asc', 'sort-desc');
        });
        
        // Aktuelle Sortierung markieren
        const th = document.querySelector(`th[data-column="${column}"]`);
        if (th) {
            th.classList.add(currentSort.ascending ? 'sort-asc' : 'sort-desc');
            
            // Accessibility: aria-sort Attribut setzen
            document.querySelectorAll('.emissions-table th').forEach(header => {
                header.removeAttribute('aria-sort');
            });
            th.setAttribute('aria-sort', currentSort.ascending ? 'ascending' : 'descending');
        }
    }
    
    // ============================================
    // FILTER-FUNKTIONALITÄT
    // ============================================
    
    /**
     * Filtert die Daten basierend auf Benutzer-Eingaben
     */
    function filterData() {
        const country = elements.countryFilter.value.toLowerCase().trim();
        const sector = elements.sectorFilter.value.toLowerCase().trim();
        const search = elements.searchInput.value.toLowerCase().trim();
        
        log('info', `Filtere: Land="${country}", Sektor="${sector}", Suche="${search}"`);
        
        // Validierung der Sucheingabe
        if (search && !validateSearchTerm(search)) {
            showError('Ungültige Zeichen im Suchbegriff. Nur Buchstaben, Zahlen und Standardzeichen erlaubt.', 
                     elements.filterForm);
            return;
        }
        
        // Daten filtern
        filteredData = emissionsData.filter(entry => {
            // Länder-Filter
            const matchesCountry = !country || 
                                  entry.country.toLowerCase() === country;
            
            // Sektor-Filter
            const matchesSector = !sector || 
                                 entry.sector.toLowerCase() === sector;
            
            // Such-Filter (Unternehmen)
            const matchesSearch = !search || 
                                 entry.company.toLowerCase().includes(search);
            
            return matchesCountry && matchesSector && matchesSearch;
        });
        
        // Sortierung beibehalten, wenn vorhanden
        if (currentSort.column) {
            sortData(currentSort.column);
        } else {
            renderTable(filteredData);
        }
        
        // Ergebnis-Anzeige aktualisieren
        updateResultCount();
        
        log('info', `${filteredData.length} Ergebnisse nach Filterung`);
    }
    
    /**
     * Aktualisiert die Ergebnis-Anzeige
     */
    function updateResultCount() {
        if (elements.resultCount) {
            const total = emissionsData.length;
            const filtered = filteredData.length;
            
            elements.resultCount.textContent = 
                `${filtered} von ${total} Einträgen`;
            
            // Aria-live für Screenreader
            elements.resultCount.setAttribute('aria-live', 'polite');
        }
    }
    
    /**
     * Füllt Filter-Dropdowns mit Optionen
     */
    function populateFilters() {
        // Einzigartige Länder extrahieren
        const countries = getUniqueValues(emissionsData, 'country');
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            elements.countryFilter.appendChild(option);
        });
        
        // Einzigartige Sektoren extrahieren
        const sectors = getUniqueValues(emissionsData, 'sector');
        sectors.forEach(sector => {
            const option = document.createElement('option');
            option.value = sector;
            option.textContent = sector;
            elements.sectorFilter.appendChild(option);
        });
        
        log('info', `Filter populiert: ${countries.length} Länder, ${sectors.length} Sektoren`);
    }
    
    /**
     * Setzt alle Filter zurück
     */
    function resetFilters() {
        elements.countryFilter.value = '';
        elements.sectorFilter.value = '';
        elements.searchInput.value = '';
        
        filteredData = deepClone(emissionsData);
        currentSort = { column: null, ascending: true };
        
        renderTable(filteredData);
        updateResultCount();
        updateSortIndicators(null);
        
        log('info', 'Filter zurückgesetzt');
    }
    
    // ============================================
    // EVENT LISTENERS
    // ============================================
    
    /**
     * Registriert alle Event Listeners
     */
    function setupEventListeners() {
        // Filter-Formular Submit
        elements.filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            filterData();
        });
        
        // Reset-Button
        elements.filterForm.addEventListener('reset', function(e) {
            // Kleine Verzögerung für das Reset
            setTimeout(resetFilters, 10);
        });
        
        // Live-Suche mit Debounce
        elements.searchInput.addEventListener('input', 
            debounce(filterData, 300)
        );
        
        // Dropdown-Filter
        elements.countryFilter.addEventListener('change', filterData);
        elements.sectorFilter.addEventListener('change', filterData);
        
        // Tabellen-Sortierung
        setupTableSorting();
        
        // Mobile Menu Toggle
        if (elements.mobileMenuBtn && elements.mainNav) {
            elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        }
        
        // Smooth Scrolling für Anker-Links
        setupSmoothScrolling();
        
        // Keyboard-Navigation
        setupKeyboardNavigation();
        
        log('info', 'Event Listeners registriert');
    }
    
    /**
     * Registriert Sortier-Funktionalität für Tabellenkopf
     */
    function setupTableSorting() {
        document.querySelectorAll('.emissions-table th[data-column]').forEach(th => {
            // Click-Event
            th.addEventListener('click', function() {
                const column = this.dataset.column;
                sortData(column);
            });
            
            // Keyboard-Support (Enter/Space)
            th.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const column = this.dataset.column;
                    sortData(column);
                }
            });
        });
    }
    
    /**
     * Mobile Menu Toggle-Funktionalität
     */
    function toggleMobileMenu() {
        const isExpanded = elements.mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        
        elements.mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
        elements.mainNav.classList.toggle('active');
        
        // Animation für Hamburger-Icon
        elements.mobileMenuBtn.classList.toggle('active');
    }
    
    /**
     * Smooth Scrolling für interne Links
     */
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Ignore wenn nur "#"
                if (href === '#') return;
                
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Focus für Accessibility
                    targetElement.focus({ preventScroll: true });
                    
                    // Mobile Menu schließen, falls offen
                    if (elements.mainNav.classList.contains('active')) {
                        toggleMobileMenu();
                    }
                }
            });
        });
    }
    
    /**
     * Keyboard-Navigation Setup
     */
    function setupKeyboardNavigation() {
        // Escape-Taste schließt Mobile Menu
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && elements.mainNav.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    }
    
    // ============================================
    // ÖFFENTLICHE API
    // ============================================
    
    return {
        init: init,
        filterData: filterData,
        sortData: sortData,
        resetFilters: resetFilters,
        getData: function() {
            return {
                all: emissionsData,
                filtered: filteredData,
                currentSort: currentSort
            };
        }
    };
    
})();

// ============================================
// APP STARTEN
// ============================================

// Warten bis DOM geladen ist
document.addEventListener('DOMContentLoaded', function() {
    CO2App.init();
});

// ============================================
// ZUSÄTZLICHE FEATURES
// ============================================

/**
 * Service Worker Registration (für PWA)
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service Worker würde hier registriert werden
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('SW registered'))
        //     .catch(err => console.log('SW registration failed'));
    });
}

/**
 * Warnung vor ungespeicherten Änderungen
 * (Würde aktiviert wenn Formulare mit Änderungen existieren)
 */
// window.addEventListener('beforeunload', function(e) {
//     if (hasUnsavedChanges) {
//         e.preventDefault();
//         e.returnValue = '';
//     }
// });

/**
 * Console-Ausgabe für Entwickler
 */
console.log('%c🌍 CO2-Emissions-Transparenz App', 
           'font-size: 20px; font-weight: bold; color: #2c5f2d;');
console.log('%cEntwickelt für mehr Transparenz im Klimaschutz', 
           'font-size: 12px; color: #666;');
console.log('%cReposit: https://github.com/username/co2-emissions-website', 
           'font-size: 12px; color: #0066cc;');
       
       
      
       
   
      
