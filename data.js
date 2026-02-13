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
