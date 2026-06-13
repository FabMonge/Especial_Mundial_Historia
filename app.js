gsap.registerPlugin(ScrollTrigger);
const esMovil = window.innerWidth <= 768;

// ===============================================
// 1. DICCIONARIO DE TRADUCCIÓN Y BANDERAS (CDN)
// ===============================================
const PAISES_TRADUCCION = {
    'MEX': { es: 'México', flag: 'mx' }, 'ITA': { es: 'Italia', flag: 'it' }, 'FRA': { es: 'Francia', flag: 'fr' },
    'BRA': { es: 'Brasil', flag: 'br' }, 'DEU': { es: 'Alemania', flag: 'de' }, 'ARG': { es: 'Argentina', flag: 'ar' },
    'USA': { es: 'Estados Unidos', flag: 'us' }, 'URY': { es: 'Uruguay', flag: 'uy' }, 'CHE': { es: 'Suiza', flag: 'ch' },
    'SWE': { es: 'Suecia', flag: 'se' }, 'CHL': { es: 'Chile', flag: 'cl' }, 'GBR': { es: 'Reino Unido', flag: 'gb' },
    'ESP': { es: 'España', flag: 'es' }, 'JPN': { es: 'Japón', flag: 'jp' }, 'KOR': { es: 'Corea del Sur', flag: 'kr' },
    'ZAF': { es: 'Sudáfrica', flag: 'za' }, 'RUS': { es: 'Rusia', flag: 'ru' }, 'QAT': { es: 'Catar', flag: 'qa' },
    'CAN': { es: 'Canadá', flag: 'ca' }, 'DZA': { es: 'Argelia', flag: 'dz' }, 'AUS': { es: 'Australia', flag: 'au' },
    'AUT': { es: 'Austria', flag: 'at' }, 'BEL': { es: 'Bélgica', flag: 'be' }, 'BIH': { es: 'Bosnia y Herz.', flag: 'ba' },
    'CPV': { es: 'Cabo Verde', flag: 'cv' }, 'COL': { es: 'Colombia', flag: 'co' }, 'HRV': { es: 'Croacia', flag: 'hr' },
    'CUW': { es: 'Curazao', flag: 'cw' }, 'CZE': { es: 'República Checa', flag: 'cz' }, 'COD': { es: 'RD Congo', flag: 'cd' },
    'ECU': { es: 'Ecuador', flag: 'ec' }, 'EGY': { es: 'Egipto', flag: 'eg' }, 'GHA': { es: 'Ghana', flag: 'gh' },
    'HTI': { es: 'Haití', flag: 'ht' }, 'IRN': { es: 'Irán', flag: 'ir' }, 'IRQ': { es: 'Irak', flag: 'iq' },
    'CIV': { es: 'Costa de Marfil', flag: 'ci' }, 'JOR': { es: 'Jordania', flag: 'jo' }, 'MAR': { es: 'Marruecos', flag: 'ma' },
    'NLD': { es: 'Países Bajos', flag: 'nl' }, 'NZL': { es: 'Nueva Zelanda', flag: 'nz' }, 'NOR': { es: 'Noruega', flag: 'no' },
    'PAN': { es: 'Panamá', flag: 'pa' }, 'PRY': { es: 'Paraguay', flag: 'py' }, 'PRT': { es: 'Portugal', flag: 'pt' },
    'SAU': { es: 'Arabia Saudita', flag: 'sa' }, 'SEN': { es: 'Senegal', flag: 'sn' }, 'TUN': { es: 'Túnez', flag: 'tn' },
    'TUR': { es: 'Turquía', flag: 'tr' }, 'UZB': { es: 'Uzbekistán', flag: 'uz' }, 'HUN': { es: 'Hungría', flag: 'hu' },
    'POL': { es: 'Polonia', flag: 'pl' }, 'BGR': { es: 'Bulgaria', flag: 'bg' }, 'BOL': { es: 'Bolivia', flag: 'bo' },
    'PER': { es: 'Perú', flag: 'pe' }, 'ROU': { es: 'Rumania', flag: 'ro' }, 'DNK': { es: 'Dinamarca', flag: 'dk' },
    'IRL': { es: 'Irlanda', flag: 'ie' }, 'GRC': { es: 'Grecia', flag: 'gr' }, 'IDN': { es: 'Indonesia', flag: 'id' },
    'SLV': { es: 'El Salvador', flag: 'sv' }, 'UKR': { es: 'Ucrania', flag: 'ua' }, 'PRK': { es: 'C. del Norte', flag: 'kp' },
    'ISR': { es: 'Israel', flag: 'il' }, 'HND': { es: 'Honduras', flag: 'hn' }, 'CRI': { es: 'Costa Rica', flag: 'cr' },
    'NGA': { es: 'Nigeria', flag: 'ng' }, 'CMR': { es: 'Camerún', flag: 'cm' }, 'TTO': { es: 'Trin. y Tobago', flag: 'tt' },
    'KWT': { es: 'Kuwait', flag: 'kw' }, 'JAM': { es: 'Jamaica', flag: 'jm' }, 'ARE': { es: 'EAU', flag: 'ae' },
    'AGO': { es: 'Angola', flag: 'ao' }, 'TGO': { es: 'Togo', flag: 'tg' }, 'CHN': { es: 'China', flag: 'cn' },
    'SVN': { es: 'Eslovenia', flag: 'si' }, 'ISL': { es: 'Islandia', flag: 'is' }, 'SVK': { es: 'Eslovaquia', flag: 'sk' }
};

// ===============================================
// 2. BASE DE DATOS Y CONFIGURACIÓN NARRATIVA
// ===============================================
const DATA = {
    anfitriones: ['MEX', 'ITA', 'FRA', 'BRA', 'DEU', 'ARG', 'USA', 'URY', 'CHE', 'SWE', 'CHL', 'GBR', 'ESP', 'JPN', 'KOR', 'ZAF', 'RUS', 'QAT', 'CAN'],
    continentes: {
        'MEX': 'America', 'BRA': 'America', 'ARG': 'America', 'USA': 'America', 'URY': 'America', 'CHL': 'America', 'CAN': 'America',
        'ITA': 'Europa', 'FRA': 'Europa', 'DEU': 'Europa', 'CHE': 'Europa', 'SWE': 'Europa', 'GBR': 'Europa', 'ESP': 'Europa', 'RUS': 'Europa',
        'JPN': 'Asia', 'KOR': 'Asia', 'QAT': 'Asia', 'ZAF': 'Africa'
    },
// NUEVO: Se usan códigos ISO2 para llamar a la imagen de FlagCDN
    banderas: [
        { iso: 'USA', lat: 39.0, lng: -98.0, iso2: 'us', grupo: '2026' },
        { iso: 'MEX', lat: 23.6, lng: -102.5, iso2: 'mx', grupo: '2026' },
        { iso: 'CAN', lat: 56.1, lng: -106.3, iso2: 'ca', grupo: '2026' },
        { iso: 'JPN', lat: 36.0, lng: 150.2, iso2: 'jp', grupo: '2002' },
        { iso: 'KOR', lat: 45.5, lng: 124.7, iso2: 'kr', grupo: '2002' }
    ],
    participantes_2026: [
        'DZA','ARG','AUS','AUT','BEL','BIH','BRA','CAN','CPV','COL','HRV','CUW','CZE','COD',
        'ECU','EGY','GBR','FRA','DEU','GHA','HTI','IRN','IRQ','CIV','JPN','JOR','MEX','MAR',
        'NLD','NZL','NOR','PAN','PRY','PRT','QAT','SAU','SEN','ZAF','KOR','ESP','SWE','CHE',
        'TUN','TUR','USA','URY','UZB'
    ],
    historicos_fuera: [
        'ITA','CHL','HUN','POL','BGR','BOL','PER','ROU','DNK','IRL','GRC','IDN','SLV','UKR',
        'PRK','ISR','HND','CRI','NGA','CMR','TTO','KWT','JAM','ARE','AGO','TGO','CHN','SVN',
        'ISL','SVK'
    ],

    // NUEVOS ARRAYS AÑADIDOS AL FINAL DE "DATA"
    campeones_locales: ['URY', 'ITA', 'GBR', 'DEU', 'ARG', 'FRA'],
    no_campeones_locales: ['MEX', 'BRA', 'CHE', 'SWE', 'CHL', 'ESP', 'USA', 'JPN', 'KOR', 'ZAF', 'RUS', 'QAT', 'CAN'],
    ciudades_nuevas: [
        { nombre: 'Atlanta', lat: 33.749, lng: -84.388 }, 
        { nombre: 'Boston', lat: 42.3601, lng: -71.0589 },
        { nombre: 'Dallas', lat: 32.7767, lng: -96.797 }, 
        { nombre: 'Houston', lat: 29.7604, lng: -95.3698 },
        { nombre: 'Kansas City', lat: 39.0997, lng: -94.5786 }, 
        { nombre: 'Los Ángeles', lat: 34.0522, lng: -118.2437 },
        { nombre: 'Miami', lat: 25.7617, lng: -80.1918 }, 
        { nombre: 'Nueva Jersey', lat: 40.0583, lng: -74.4057 },
        { nombre: 'Filadelfia', lat: 39.9526, lng: -75.1652 }, 
        { nombre: 'San Francisco', lat: 37.7749, lng: -122.4194 },
        { nombre: 'Seattle', lat: 47.6062, lng: -122.3321 }, 
        { nombre: 'Guadalajara', lat: 20.6597, lng: -103.3496 },
        { nombre: 'Monterrey', lat: 25.6866, lng: -100.3161 }, 
        { nombre: 'Toronto', lat: 43.6532, lng: -79.3832 },
        { nombre: 'Vancouver', lat: 49.2827, lng: -123.1207 }
    ],
    ciudades_historicas: [
        { nombre: 'Montevideo', lat: -34.9011, lng: -56.1645 }, { nombre: 'Milán', lat: 45.4654, lng: 9.1859 },
        { nombre: 'Boloña', lat: 44.4949, lng: 11.3426 }, { nombre: 'Roma', lat: 41.9028, lng: 12.4964 },
        { nombre: 'Florencia', lat: 43.7696, lng: 11.2558 }, { nombre: 'Nápoles', lat: 40.8518, lng: 14.2681 },
        { nombre: 'Génova', lat: 44.4056, lng: 8.9463 }, { nombre: 'Turín', lat: 45.0703, lng: 7.6869 },
        { nombre: 'Trieste', lat: 45.6495, lng: 13.7768 }, { nombre: 'Toulouse', lat: 43.6047, lng: 1.4442 },
        { nombre: 'Estrasburgo', lat: 48.5734, lng: 7.7521 }, { nombre: 'El Havre', lat: 49.4938, lng: 0.1077 },
        { nombre: 'Antibes', lat: 43.5808, lng: 7.1239 }, { nombre: 'Burdeos', lat: 44.8378, lng: -0.5792 },
        { nombre: 'París', lat: 48.8566, lng: 2.3522 }, { nombre: 'Marsella', lat: 43.2965, lng: 5.3698 },
        { nombre: 'Reims', lat: 49.2583, lng: 4.0317 }, { nombre: 'Lille', lat: 50.6292, lng: 3.0573 },
        { nombre: 'Curitiba', lat: -25.4284, lng: -49.2733 }, { nombre: 'Porto Alegre', lat: -30.0346, lng: -51.2177 },
        { nombre: 'Recife', lat: -8.0476, lng: -34.877 }, { nombre: 'Belo Horizonte', lat: -19.9167, lng: -43.9345 },
        { nombre: 'Río de Janeiro', lat: -22.9068, lng: -43.1729 }, { nombre: 'Sao Paulo', lat: -23.5505, lng: -46.6333 },
        { nombre: 'Lausana', lat: 46.5197, lng: 6.6323 }, { nombre: 'Ginebra', lat: 46.2044, lng: 6.1432 },
        { nombre: 'Zurich', lat: 47.3769, lng: 8.5417 }, { nombre: 'Berna', lat: 46.948, lng: 7.4474 },
        { nombre: 'Basilea', lat: 47.5596, lng: 7.5886 }, { nombre: 'Lugano', lat: 46.0037, lng: 8.9511 },
        { nombre: 'Halmstad', lat: 56.6745, lng: 12.8578 }, { nombre: 'Malmo', lat: 55.605, lng: 13.0038 },
        { nombre: 'Helsinborg', lat: 56.0465, lng: 12.6945 }, { nombre: 'Vasteras', lat: 59.611, lng: 16.5448 },
        { nombre: 'Norrkoping', lat: 58.5877, lng: 16.1924 }, { nombre: 'Orebro', lat: 59.2741, lng: 15.2066 },
        { nombre: 'Eskilstuna', lat: 59.3666, lng: 16.5077 }, { nombre: 'Solna', lat: 59.3618, lng: 18.0000 },
        { nombre: 'Sandviken', lat: 60.6167, lng: 16.7833 }, { nombre: 'Uddevalla', lat: 58.3491, lng: 11.9382 },
        { nombre: 'Gotemgurgo', lat: 57.7089, lng: 11.9746 }, { nombre: 'Boras', lat: 57.721, lng: 12.9401 },
        { nombre: 'Arica', lat: -18.4783, lng: -70.3126 }, { nombre: 'Santiago', lat: -33.4489, lng: -70.6693 },
        { nombre: 'Viña del Mar', lat: -33.0245, lng: -71.5518 }, { nombre: 'Rancagua', lat: -34.1708, lng: -70.7394 },
        { nombre: 'Londres', lat: 51.5074, lng: -0.1278 }, { nombre: 'Sheffield', lat: 53.3811, lng: -1.4701 },
        { nombre: 'Birmingham', lat: 52.4862, lng: -1.8904 }, { nombre: 'Liverpool', lat: 53.4084, lng: -2.9916 },
        { nombre: 'Manchester', lat: 53.4808, lng: -2.2426 }, { nombre: 'Middlesbrough', lat: 54.5742, lng: -1.2348 },
        { nombre: 'Sunderland', lat: 54.9069, lng: -1.3838 }, { nombre: 'Puebla', lat: 19.0414, lng: -98.2063 },
        { nombre: 'Toluca', lat: 19.2826, lng: -99.6557 }, { nombre: 'León', lat: 21.1221, lng: -101.6823 },
        { nombre: 'Berlín', lat: 52.52, lng: 13.405 }, { nombre: 'Hamburgo', lat: 53.5753, lng: 10.0153 },
        { nombre: 'Fráncfort del Meno', lat: 50.1109, lng: 8.6821 }, { nombre: 'Dortmund', lat: 51.5136, lng: 7.4653 },
        { nombre: 'Gelsenkirchen', lat: 51.5177, lng: 7.0857 }, { nombre: 'Hannover', lat: 52.3759, lng: 9.732 },
        { nombre: 'Dusseldorf', lat: 51.2217, lng: 6.7762 }, { nombre: 'Múnich', lat: 48.135, lng: 11.582 },
        { nombre: 'Mar del Plata', lat: -38.0055, lng: -57.5426 }, { nombre: 'Buenos Aires', lat: -34.6037, lng: -58.3816 },
        { nombre: 'Rosario', lat: -32.9468, lng: -60.6393 }, { nombre: 'Córdoba', lat: -31.4201, lng: -64.1888 },
        { nombre: 'Mendoza', lat: -32.8908, lng: -68.8272 }, { nombre: 'Vigo', lat: 42.2328, lng: -8.7226 },
        { nombre: 'La Coruña', lat: 43.3623, lng: -8.4115 }, { nombre: 'Gijón', lat: 43.5322, lng: -5.6611 },
        { nombre: 'Oviedo', lat: 43.3614, lng: -5.8593 }, { nombre: 'Barcelona', lat: 41.385, lng: 2.1734 },
        { nombre: 'Elche', lat: 38.2669, lng: -0.6983 }, { nombre: 'Alicante', lat: 38.3452, lng: -0.481 },
        { nombre: 'Bilbao', lat: 43.263, lng: -2.935 }, { nombre: 'Valladolid', lat: 41.6523, lng: -4.7245 },
        { nombre: 'Valencia', lat: 39.4699, lng: -0.3763 }, { nombre: 'Zaragoza', lat: 41.6561, lng: -0.8773 },
        { nombre: 'Sevilla', lat: 37.3891, lng: -5.9845 }, { nombre: 'Málaga', lat: 36.7213, lng: -4.4214 },
        { nombre: 'Madrid', lat: 40.4168, lng: -3.7038 }, { nombre: 'Irapuato', lat: 20.6736, lng: -101.3549 },
        { nombre: 'Querétaro', lat: 20.5888, lng: -100.3899 }, { nombre: 'Nezahualcoyotl', lat: 19.4015, lng: -89.0153 },
        { nombre: 'Bari', lat: 41.1177, lng: 16.8512 }, { nombre: 'Verona', lat: 45.4384, lng: 10.9916 },
        { nombre: 'Udine', lat: 46.0711, lng: 13.2343 }, { nombre: 'Cagliari', lat: 39.2238, lng: 9.1217 },
        { nombre: 'Palermo', lat: 38.1157, lng: 13.3615 }, { nombre: 'Detroit', lat: 42.3314, lng: -83.0458 },
        { nombre: 'Chicago', lat: 41.8781, lng: -87.6298 }, { nombre: 'Washington DC', lat: 38.9072, lng: -77.0369 },
        { nombre: 'Orlando', lat: 28.5383, lng: -81.3792 }, { nombre: 'Saint Denis', lat: 48.9356, lng: 2.3539 },
        { nombre: 'Montpellier', lat: 43.6108, lng: 3.8767 }, { nombre: 'Nantes', lat: 47.2184, lng: -1.5536 },
        { nombre: 'Saint Étienne', lat: 45.4397, lng: 4.3872 }, { nombre: 'Lens', lat: 50.4322, lng: 2.8317 },
        { nombre: 'Lyon', lat: 45.764, lng: 4.8357 }, { nombre: 'Seúl', lat: 37.5665, lng: 126.978 },
        { nombre: 'Ulsan', lat: 35.5384, lng: 129.3114 }, { nombre: 'Busan', lat: 35.1796, lng: 129.0756 },
        { nombre: 'Daegu', lat: 35.8714, lng: 128.6014 }, { nombre: 'Suwon', lat: 37.2636, lng: 127.0286 },
        { nombre: 'Incheon', lat: 37.4563, lng: 126.7052 }, { nombre: 'Gwangju', lat: 35.1595, lng: 126.8526 },
        { nombre: 'Jeonju', lat: 35.8242, lng: 127.148 }, { nombre: 'Daejeon', lat: 36.3504, lng: 127.3845 },
        { nombre: 'Seogwipo', lat: 33.2541, lng: 126.56 }, { nombre: 'Niigata', lat: 37.9161, lng: 139.0364 },
        { nombre: 'Sapporo', lat: 43.0618, lng: 141.3545 }, { nombre: 'Ibaraki', lat: 34.8154, lng: 135.5686 },
        { nombre: 'Saitama', lat: 35.8617, lng: 139.6455 }, { nombre: 'Shizuoka', lat: 34.9769, lng: 138.3831 },
        { nombre: 'Yokohama', lat: 35.4437, lng: 139.638 }, { nombre: 'Kobe', lat: 34.6901, lng: 135.1956 },
        { nombre: 'Miyagi', lat: 38.2688, lng: 140.8721 }, { nombre: 'Osaka', lat: 34.6937, lng: 135.5023 },
        { nombre: 'Oita', lat: 33.2382, lng: 131.6126 }, { nombre: 'Nuremberg', lat: 49.4521, lng: 11.0767 },
        { nombre: 'Colonia', lat: 50.9333, lng: 6.95 }, { nombre: 'Kaiserslautern', lat: 49.444, lng: 7.7689 },
        { nombre: 'Leipzig', lat: 51.3397, lng: 12.3731 }, { nombre: 'Johanesburgo', lat: -26.2041, lng: 28.0473 },
        { nombre: 'Cape Town', lat: -33.9249, lng: 18.4241 }, { nombre: 'Pretoria', lat: -25.7479, lng: 28.2293 },
        { nombre: 'Polokwane', lat: -23.9045, lng: 29.4689 }, { nombre: 'Bloemfontein', lat: -29.0852, lng: 26.1596 },
        { nombre: 'Phokeng', lat: -25.6167, lng: 27.1167 }, { nombre: 'Puerto Elizabeth', lat: -33.9608, lng: 25.6022 },
        { nombre: 'Durban', lat: -29.8587, lng: 31.0218 }, { nombre: 'Mbombela', lat: -25.4753, lng: 30.9694 },
        { nombre: 'Natal', lat: -5.7945, lng: -35.211 }, { nombre: 'Fortaleza', lat: -3.7172, lng: -38.5434 },
        { nombre: 'Manaos', lat: -3.119, lng: -60.0217 }, { nombre: 'Brasilia', lat: -15.7801, lng: -47.9292 },
        { nombre: 'Sao Lorenzo da Mata', lat: -8.3667, lng: -35.0333 }, { nombre: 'Salvador', lat: -12.9714, lng: -38.5014 },
        { nombre: 'Cuiabá', lat: -15.6014, lng: -56.0979 }, { nombre: 'Moscú', lat: 55.7558, lng: 37.6173 },
        { nombre: 'Ekaterinburgo', lat: 56.8389, lng: 60.6057 }, { nombre: 'San Petersburgo', lat: 59.9343, lng: 30.3351 },
        { nombre: 'Rostov del Don', lat: 47.2357, lng: 39.7015 }, { nombre: 'Samara', lat: 53.2038, lng: 50.1606 },
        { nombre: 'Volgogrado', lat: 48.708, lng: 44.5133 }, { nombre: 'Sochi', lat: 43.6028, lng: 39.7342 },
        { nombre: 'Kazán', lat: 55.8304, lng: 49.0661 }, { nombre: 'Saransk', lat: 54.1878, lng: 45.1831 },
        { nombre: 'Kaliningrado', lat: 54.7104, lng: 20.4522 }, { nombre: 'Nizhni Nóvgorod', lat: 56.2965, lng: 43.9361 },
        { nombre: 'Doha', lat: 25.2854, lng: 51.531 }, { nombre: 'Lusail', lat: 25.4278, lng: 51.4919 },
        { nombre: 'Al Rayyan', lat: 25.2919, lng: 51.4244 }, { nombre: 'Al Khor', lat: 25.69, lng: 51.4965 },
        { nombre: 'Al Wakrah', lat: 25.166, lng: 51.5985 }, { nombre: 'Nueva York', lat: 40.7128, lng: -74.006 }
    ]
};

const CONFIG = {
    // Si ya descargaste el mapa de alta resolución, déjalo como "custom.geo.json". 
    // Si no, puedes usar este enlace directo: "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"
    geojsonUrl: "custom.geo.json",
    colores: {
        vacio: "#151515",      
        base: "#222222",       
        borde: "#555555",     
        anfitrion: "#f1c40f", 
        america: "#2ecc71",   
        europa: "#3498db",    
        asia: "#e67e22",      
        africa: "#9b59b6",    
        co_2026: "#00ffcc",   
        co_2002: "#ff0055",   
        part_2026: "#3498db",
        part_hist: "#7f8c8d",
        campeon_local: "#f1c40f",
        no_campeon: "#e74c3c",
    },
    leyendas: {
        1: [ { texto: "Países que han sido anfitriones de la Copa del Mundo", color: "#f1c40f" } ],
        2: [
            // NUEVO: Agregamos "valor" y "max" para generar el gráfico de barras CSS
            { texto: "Europa", color: "#3498db", valor: 11, max: 11 },
            { texto: "América", color: "#2ecc71", valor: 9, max: 11 },
            { texto: "Asia", color: "#e67e22", valor: 2, max: 11 },
            { texto: "África", color: "#9b59b6", valor: 1, max: 11 }
        ],
        3: [
            { texto: "Copa del Mundo 2026", color: "#00ffcc" },
            { texto: "Copa del Mundo 2002", color: "#ff0055" }
        ],
        4: [
            { texto: "Clasificados a la Copa del Mundo 2026", color: "#3498db" },
            { texto: "Países que han jugado al menos una Copa del Mundo", color: "#7f8c8d" }
        ],
        6: [ { texto: "Fueron campeones siendo locales (6)", color: "#f1c40f" }, { texto: "Organizaron pero no ganaron (13)", color: "#e74c3c" } ],

        7: [ { texto: "Nuevas ciudades sede 2026", color: "#00ffcc" } ,
            { texto: "Sedes históricas (1930 - 2022)", color: "#bdc3c7" }
        ]



    },
    camaras: {
        1: { centro: esMovil ? [20, 0] : [30, 10], zoom: esMovil ? 1.0 : 2.1 },
        2: { centro: esMovil ? [20, 0] : [30, 10], zoom: esMovil ? 1.0 : 2 },
        3: { centro: esMovil ? [20, 0] : [35, 20], zoom: esMovil ? 1.2 : 2.2 },
        4: { centro: esMovil ? [20, 0] : [30, 10], zoom: esMovil ? 1.2 : 2.1 },
        5: { centro: esMovil ? [45, 15] : [50, 20], zoom: esMovil ? 1.5 : 2.8 },
        6: { centro: esMovil ? [20, 0] : [30, 10], zoom: esMovil ? 1.0 : 2.1 },
        7: { centro: esMovil ? [20, 0] : [30, -30], zoom: esMovil ? 1.0 : 2.3 },
        8: { centro: esMovil ? [20, -100] : [23, -102], zoom: esMovil ? 2.5 : 3.8 }
        
    }
};

// ===============================================
// 3. INICIALIZACIÓN LEAFLET 
// ===============================================
const map = L.map('map', {
    zoomControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false, touchZoom: false
}).setView(CONFIG.camaras[1].centro, CONFIG.camaras[1].zoom);

let geoJsonLayer;
let capaBanderas = L.layerGroup().addTo(map);
let capaPines = L.layerGroup().addTo(map);

fetch(CONFIG.geojsonUrl)
    .then(res => res.json())
    .then(data => {
        geoJsonLayer = L.geoJSON(data, { 
            style: () => ({ fillColor: CONFIG.colores.base, weight: 0.9, color: CONFIG.colores.borde, fillOpacity: 0.8 }),
            onEachFeature: configurarHover
        }).addTo(map);
        
        procesarPasoNarrativo(1); // Enciende el mapa antes de scrollear
        iniciarMotorGSAP();
    });

// ===============================================
// 4. TOOLTIPS CON NOMBRES EN ESPAÑOL Y BANDERAS
// ===============================================
function configurarHover(feature, layer) {
    // BLINDAJE: Busca el código ISO esté en mayúscula o minúscula
    const prop = feature.properties;
    const iso = prop.ISO_A3 || prop.iso_a3 || prop.adm0_a3;
    
    let nombreFinal = prop.ADMIN || prop.name || prop.admin || "País"; 
    let imgBandera = '';

    if (iso && PAISES_TRADUCCION[iso]) {
        nombreFinal = PAISES_TRADUCCION[iso].es;
        const codIso2 = PAISES_TRADUCCION[iso].flag;
        imgBandera = `<img src="https://flagcdn.com/w20/${codIso2}.png" alt="${nombreFinal}">`;
    }

    const tooltipHTML = `<div class="tooltip-content">${imgBandera}<span>${nombreFinal}</span></div>`;

    layer.bindTooltip(tooltipHTML, { sticky: true, className: 'custom-tooltip' });
    
    layer.on({
        mouseover: (e) => { 
            e.target.setStyle({ weight: 2, color: '#ffffff' });
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }
        },
        mouseout: (e) => { 
            // Restaura el borde pero respeta el neón si estaba activo
            const esNeon = e.target.options.className === 'pais-neon';
            e.target.setStyle({ 
                weight: esNeon ? 1.5 : 0.9, 
                color: esNeon ? e.target.options.fillColor : CONFIG.colores.borde 
            }); 
        }
    });
}

document.getElementById('btn-comenzar').addEventListener('click', () => {
    document.getElementById('gsap-pin-container').scrollIntoView({ behavior: 'smooth' });
});

// ===============================================
// 5. CONTROLADOR NARRATIVO 
// ===============================================
// NUEVA FUNCIÓN PARA LOS PINES DE CIUDADES
// NUEVA FUNCIÓN PARA LOS PINES DE CIUDADES (Dualidad Histórica vs Nueva)
function gestionarPines(paso) {
    capaPines.clearLayers();
    
    if (paso === 7) {
        // 1. Dibuja primero las históricas (Quedan de fondo)
        DATA.ciudades_historicas.forEach(c => {
            const iconoHist = L.divIcon({ className: 'city-pin-historica', iconSize: [8, 8] });
            L.marker([c.lat, c.lng], { icon: iconoHist })
             .bindTooltip(c.nombre, { className: 'custom-tooltip', direction: 'top' })
             .addTo(capaPines);
        });

        // 2. Dibuja las nuevas encima (Destacan en color cian)
        DATA.ciudades_nuevas.forEach(c => {
            const iconoNueva = L.divIcon({ className: 'city-pin-nueva', iconSize: [10, 10] }); // Ligeramente más grandes
            L.marker([c.lat, c.lng], { icon: iconoNueva })
             .bindTooltip(c.nombre, { className: 'custom-tooltip', direction: 'top' })
             .addTo(capaPines);
        });
        
    } else if (paso === 8) {
        // En el paso 8 muestra SOLO Ciudad de México, con un pin especial
        const iconoMx = L.divIcon({ className: 'city-pin-mexico', iconSize: [18, 18] });
        L.marker([19.4326, -99.1332], { icon: iconoMx })
             .bindTooltip("Ciudad de México", { className: 'custom-tooltip', direction: 'top', permanent: true })
             .addTo(capaPines);
    }
}

// VARIABLES GLOBALES PARA VIZ 9
let animaciónImposibilidadJugada = false;

function generarWaffleChart() {
    const contenedor = document.getElementById('waffle-grid');
    contenedor.innerHTML = ''; 
    // Creamos 100 puntitos (100%)
    for(let i = 0; i < 100; i++) {
        let dot = document.createElement('div');
        dot.className = 'waffle-dot';
        // Solo el último punto brilla (representa el 0.9% redondeado a 1)
        if (i === 99) dot.classList.add('active');
        contenedor.appendChild(dot);
    }
}
// Ejecutamos la creación del grid al inicio
generarWaffleChart();


function gestionarBanderas(paso) {
    capaBanderas.clearLayers();
    if (paso === 3) {
        DATA.banderas.forEach(b => {
            // Uso de la nueva clase rectangular
            const htmlBandera = `<img src="https://flagcdn.com/w40/${b.iso2}.png" class="flag-rectangular" alt="${b.iso}">`;
            const iconoBandera = L.divIcon({ 
                html: htmlBandera, 
                className: 'map-flag-icon', 
                iconSize: [45, 30], 
                iconAnchor: [22, 15] // Centra el rectángulo
            });
            L.marker([b.lat, b.lng], { icon: iconoBandera }).addTo(capaBanderas);
        });
    }
}

function actualizarLeyenda(paso) {
    const contenedor = document.getElementById('leyenda-dinamica');
    if (CONFIG.leyendas[paso]) {
        
        // LÓGICA DE TÍTULO DE LEYENDA
        const tituloLeyenda = paso === 2 ? "Campeonatos del mundo organizados" : "Leyenda";
        let html = `<div class="legend-title">${tituloLeyenda}</div>`;
        
        CONFIG.leyendas[paso].forEach(item => {
            if (item.valor !== undefined) {
                const porcentaje = (item.valor / item.max) * 100;
                html += `
                <div class="legend-item-group">
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: ${item.color}; box-shadow: 0 0 8px ${item.color};"></div>
                        ${item.texto}
                    </div>
                    <div class="legend-bar-wrapper">
                        <div class="legend-bar-bg">
                            <div class="legend-bar-fill" style="width: ${porcentaje}%; background-color: ${item.color};"></div>
                        </div>
                        <div class="legend-bar-value">${item.valor}</div>
                    </div>
                </div>`;
            } else {
                html += `<div class="legend-item"><div class="legend-color" style="background-color: ${item.color}; box-shadow: 0 0 8px ${item.color};"></div>${item.texto}</div>`;
            }
        });
        contenedor.innerHTML = html;
        contenedor.classList.remove('ui-hidden');
    } else {
        contenedor.classList.add('ui-hidden');
    }
}

let pasoRenderizado = 0; 
// NUEVO: Objeto fantasma para animar los números de forma segura, sin romper GSAP con las comas
let contadoresViz = { pros: 0, wc: 0 };

function procesarPasoNarrativo(paso) {
    if (!geoJsonLayer) return;

    // FILTRO ANTI-BUGS: Si el mapa ya pintó este paso, ignora el scroll repetido.
    if (pasoRenderizado === paso) return; 
    pasoRenderizado = paso; // Registra que ya se procesó
    pasoActualGlobal = paso; 

    actualizarLeyenda(paso);
    gestionarBanderas(paso);
    gestionarPines(paso);

    // 1. APAGAR TODOS LOS PANELES Y ESCENARIOS POR DEFECTO
    document.getElementById('panel-extintos').classList.add('ui-hidden');
    document.getElementById('panel-mexico').classList.add('ui-hidden');
    
    const customVizStage = document.getElementById('custom-viz-stage');
    const vizImposibilidad = document.getElementById('viz-imposibilidad');
    const vizGoles = document.getElementById('viz-goles');
    
    if(customVizStage) customVizStage.classList.add('ui-hidden');
    if(vizImposibilidad) vizImposibilidad.classList.add('ui-hidden');
    if(vizGoles) vizGoles.classList.add('ui-hidden');

    // 2. APAGAR/PRENDER EL MAPA (A partir del paso 9, el mapa y leyenda desaparecen)
    const ocultarMapa = paso >= 9;
    document.getElementById('map').style.opacity = ocultarMapa ? "0" : "1";
    document.getElementById('ui-overlays').style.opacity = ocultarMapa ? "0" : "1";

    if (ocultarMapa && customVizStage) {
        customVizStage.classList.remove('ui-hidden');
    }

    // 3. ENCENDIDO DE PANELES ESPECÍFICOS SEGÚN EL PASO
    if(paso === 5) document.getElementById('panel-extintos').classList.remove('ui-hidden');
    if(paso === 8) document.getElementById('panel-mexico').classList.remove('ui-hidden');

    // ============================================
    // ESCENAS PERSONALIZADAS SIN MAPA (9 y 10)
    // ============================================
    
    // PASO 9: VISUALIZACIÓN DE IMPOSIBILIDAD ESTADÍSTICA
    if(paso === 9 && vizImposibilidad) {
        vizImposibilidad.classList.remove('ui-hidden');
        
        if (typeof animaciónImposibilidadJugada !== 'undefined' && !animaciónImposibilidadJugada) {
            // FIX: Animamos el objeto "contadoresViz" y solo actualizamos el HTML con el formato al final
            gsap.to(contadoresViz, {
                pros: 128694,
                duration: 2.5,
                ease: "power2.out",
                onUpdate: () => {
                    document.getElementById("count-pros").innerHTML = Math.round(contadoresViz.pros).toLocaleString('en-US');
                }
            });
            
            gsap.to(contadoresViz, {
                wc: 1248,
                duration: 2.5,
                delay: 0.5,
                ease: "power2.out",
                onUpdate: () => {
                    document.getElementById("count-wc").innerHTML = Math.round(contadoresViz.wc).toLocaleString('en-US');
                }
            });
            animaciónImposibilidadJugada = true;
        }
    }

    // PASO 10: GRÁFICO DE GOLES HISTÓRICOS
    if(paso === 10 && vizGoles) {
        vizGoles.classList.remove('ui-hidden');
        
        // FIX: Matamos cualquier animación previa para que no pelee con el nuevo estado
        gsap.killTweensOf(".goal-bar-fill");
        
        gsap.to(".goal-bar-fill", {
            width: function(index, target) {
                return target.getAttribute("data-width") + "%";
            },
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.15 
        });
    } else {
        // FIX: Matamos la animación antes de forzar el reseteo a 0%
        gsap.killTweensOf(".goal-bar-fill");
        gsap.set(".goal-bar-fill", { width: "0%" });
    }

    // ============================================
    // CONTROL DE MAPA Y VECTORES (Solo si el mapa es visible)
    // ============================================
    
    // OPTIMIZACIÓN DE RENDIMIENTO
    if (!ocultarMapa) {
        
        if (CONFIG.camaras[paso]) {
            map.flyTo(CONFIG.camaras[paso].centro, CONFIG.camaras[paso].zoom, {
                duration: 1.5, easeLinearity: 0.25
            });
        }

        geoJsonLayer.eachLayer(layer => {
            const prop = layer.feature.properties;
            const iso = prop.ISO_A3 || prop.iso_a3 || prop.adm0_a3;
            
            let colorFondo = CONFIG.colores.base;
            let opacidad = 0.8;
            let tieneNeon = false;

            switch(paso) {
                case 1:
                    if (DATA.anfitriones.includes(iso)) { colorFondo = CONFIG.colores.anfitrion; tieneNeon = true; }
                    else { colorFondo = CONFIG.colores.vacio; opacidad = 0.3; }
                    break;
                case 2:
                    if (DATA.anfitriones.includes(iso)) {
                        const cont = DATA.continentes[iso];
                        if (cont === 'America') colorFondo = CONFIG.colores.america;
                        else if (cont === 'Europa') colorFondo = CONFIG.colores.europa;
                        else if (cont === 'Asia') colorFondo = CONFIG.colores.asia;
                        else if (cont === 'Africa') colorFondo = CONFIG.colores.africa;
                        tieneNeon = true;
                    } else { colorFondo = CONFIG.colores.vacio; opacidad = 0.3; }
                    break;
                case 3:
                    if (['USA', 'MEX', 'CAN'].includes(iso)) { colorFondo = CONFIG.colores.co_2026; tieneNeon = true; }
                    else if (['JPN', 'KOR'].includes(iso)) { colorFondo = CONFIG.colores.co_2002; tieneNeon = true; }
                    else { colorFondo = CONFIG.colores.vacio; opacidad = 0.3; }
                    break;
                case 4:
                    if (DATA.participantes_2026.includes(iso)) { colorFondo = CONFIG.colores.part_2026; tieneNeon = true; }
                    else if (DATA.historicos_fuera.includes(iso)) { colorFondo = CONFIG.colores.part_hist; tieneNeon = true;}
                    else { colorFondo = CONFIG.colores.vacio; opacidad = 0.3; }
                    break;
                case 5: 
                    colorFondo = CONFIG.colores.vacio; 
                    opacidad = 0.15;
                    break;
                case 6: 
                    if (DATA.campeones_locales.includes(iso)) { colorFondo = CONFIG.colores.campeon_local; tieneNeon = true; }
                    else if (DATA.no_campeones_locales.includes(iso)) { colorFondo = CONFIG.colores.no_campeon; tieneNeon = true; }
                    else { colorFondo = CONFIG.colores.vacio; opacidad = 0.3; }
                    break;
                case 7: 
                    colorFondo = CONFIG.colores.vacio; 
                    opacidad = 0.15; 
                    break;
                case 8: 
                    if (iso === 'MEX') { colorFondo = CONFIG.colores.america; tieneNeon = true; }
                    else { colorFondo = CONFIG.colores.vacio; opacidad = 0.15; }
                    break;
            }

            layer.setStyle({ 
                fillColor: colorFondo, 
                fillOpacity: opacidad,
                color: tieneNeon ? colorFondo : CONFIG.colores.borde,
                weight: tieneNeon ? 1.5 : 0.9,
                className: tieneNeon ? 'pais-neon' : ''
            });
            
            if(tieneNeon) {
                layer.bringToFront();
            }
        });
    }
}



// ===============================================
// MOTOR GSAP SCROLL-JACKING (ACTUALIZADO)
// ===============================================
function iniciarMotorGSAP() {
    ScrollTrigger.create({ trigger: "#gsap-pin-container", start: "top top", end: "bottom bottom", pin: "#map-stage", pinSpacing: false });
    
    gsap.utils.toArray('.step').forEach((step) => {
        let nPaso = parseInt(step.getAttribute("data-step"));
        let card = step.querySelector('.step-wrap') || step.querySelector('.step-card');
        
        ScrollTrigger.create({
            trigger: step, 
            start: "top 50%", /* Se dispara exactamente al medio del imán */
            end: "bottom 50%",
            onEnter: () => { 
                gsap.to(card, { opacity: 1, duration: 0.4, overwrite: true }); 
                procesarPasoNarrativo(nPaso); 
            },
            onEnterBack: () => { 
                gsap.to(card, { opacity: 1, duration: 0.4, overwrite: true }); 
                procesarPasoNarrativo(nPaso); 
            },
            onLeave: () => gsap.to(card, { opacity: 0.2, duration: 0.4, overwrite: true }),
            onLeaveBack: () => gsap.to(card, { opacity: 0.2, duration: 0.4, overwrite: true })
        });
    });
}