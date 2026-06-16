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
    ],
    // NUEVO ARRAY (Agrega esto al final del objeto DATA)
    tarjetas_historicas: [
        { y: 1966, amarillo: 21, rojo: 5 }, { y: 1970, amarillo: 51, rojo: 0 },
        { y: 1974, amarillo: 86, rojo: 5 }, { y: 1978, amarillo: 59, rojo: 3 },
        { y: 1982, amarillo: 99, rojo: 5 }, { y: 1986, amarillo: 137, rojo: 8 },
        { y: 1990, amarillo: 165, rojo: 16 }, { y: 1994, amarillo: 221, rojo: 15 },
        { y: 1998, amarillo: 250, rojo: 22 }, { y: 2002, amarillo: 261, rojo: 16 }, 
        { y: 2006, amarillo: 304, rojo: 28 }, { y: 2010, amarillo: 242, rojo: 16 },
        { y: 2014, amarillo: 181, rojo: 10 }, { y: 2018, amarillo: 219, rojo: 4 },
        { y: 2022, amarillo: 221, rojo: 4 }
    ],
    peru_wc: [
        { y: 1930, w: 0, d: 0, l: 2, g: 1 }, { y: 1970, w: 2, d: 0, l: 2, g: 9 },
        { y: 1978, w: 2, d: 1, l: 3, g: 7 }, { y: 1982, w: 0, d: 2, l: 1, g: 2 },
        { y: 2018, w: 1, d: 0, l: 2, g: 2 }
    ],
    peru_goleadores: [
        { n: 'Teófilo Cubillas', g: 10 }, { n: 'Alberto Gallardo', g: 2 }, { n: 'L. de Souza Ferreira', g: 1 },
        { n: 'Héctor Chumpitaz', g: 1 }, { n: 'José Velásquez', g: 1 }, { n: 'César Cueto', g: 1 },
        { n: 'Roberto Chale', g: 1 }, { n: 'Guillermo la Rosa', g: 1 }, { n: 'Rubén Díaz', g: 1 },
        { n: 'Paolo Guerrero', g: 1 }, { n: 'André Carrillo', g: 1 }
    ],
    coordenadas_paises: {
        'MEX': [23.6, -102.5], 'ITA': [41.8, 20.5], 'FRA': [46.2, -10], 
        'BRA': [-14.2, -51.9], 'DEU': [51.1, 30.4], 'ARG': [-50, -55.6], 
        'USA': [39.0, -98.0], 'URY': [-32.5, -40.7], 'CHE': [58, 10.8], 
        'SWE': [73.1, 18.6], 'CHL': [-35.6, -83.5], 'GBR': [60.0, -25.5], 
        'ESP': [30.4,-15.7], 'JPN': [36.2, 150.2], 'KOR': [40, 115.7], 
        'ZAF': [-40, 22.9], 'RUS': [61.5, 95.0], 'QAT': [15.3, 51.1], 
        'CAN': [56.1, -106.3]
    },
};

const CONFIG = {
    geojsonUrl: "https://fabmonge.github.io/Especial_Mundial_Historia/custom.geo.json",
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
        1: { centro: esMovil ? [25, 0] : [30, 10], zoom: esMovil ? 1 : 2.1 },
        2: { centro: esMovil ? [25, 0] : [30, 10], zoom: esMovil ? 1 : 2 },
        3: { centro: esMovil ? [25, 0] : [35, 20], zoom: esMovil ? 1 : 2.2 },
        4: { centro: esMovil ? [25, 0] : [30, 10], zoom: esMovil ? 1 : 2.1 },
        5: { centro: esMovil ? [25, 0] : [50, 20], zoom: esMovil ? 1 : 2.8 },
        6: { centro: esMovil ? [25, 0] : [30, 15], zoom: esMovil ? 1 : 2.1 },
        7: { centro: esMovil ? [25, 0] : [30, 10], zoom: esMovil ? 1 : 2.3 },
        8: { centro: esMovil ? [25, 0] : [18, -102], zoom: esMovil ? 1 : 5.5 }
    }
};

// ===============================================
// 3. INICIALIZACIÓN LEAFLET 
// ===============================================
const map = L.map('map', {
    zoomControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false, touchZoom: false, attributionControl: false
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

    //layer.bindTooltip(tooltipHTML, { sticky: true, className: 'custom-tooltip' });
    
    if (!esMovil) {
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
}

document.getElementById('btn-comenzar').addEventListener('click', () => {
    // 1. Desbloqueamos el scroll del cuerpo de la página
    document.body.classList.remove('locked'); 
    
    // 2. Encendemos los controles flotantes de navegación
    const nav = document.getElementById('nav-controls');
    if (nav) nav.classList.remove('ui-hidden');

    // 3. Desplazamiento nativo suave (Exactamente el mismo efecto que la flecha hacia abajo)
    const primerPaso = document.querySelector('.step[data-step="1"]');
    if (primerPaso) primerPaso.scrollIntoView({ behavior: 'smooth' });
});

// Lógica de los botones de navegación
// ===============================================
// NAVEGACIÓN ESTILO APP (1 GESTO = 1 ESCENA)
// ===============================================
let isScrolling = false;
const cooldownTiempo = 1000; // 1 segundo de seguridad para no saltar escenas por accidente

function ejecutarSalto(elementoDestino) {
    if (elementoDestino) {
        isScrolling = true;
        if (esMovil) {
            // MÓVIL: Transición "Fade In/Fade Out" anulando el deslizamiento
            gsap.to(document.querySelectorAll('.step-wrap'), { opacity: 0, duration: 0.2, overwrite: true, onComplete: () => {
                elementoDestino.scrollIntoView({ behavior: 'auto' }); // Salto instantáneo
                setTimeout(() => { isScrolling = false; }, 800);
            }});
        } else {
            // ESCRITORIO: Deslizamiento suave clásico
            elementoDestino.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => { isScrolling = false; }, cooldownTiempo);
        }
    }
}

function moverEscena(direccion) {
    if (document.body.classList.contains('locked') || isScrolling) return;
    
    // Detecta si el usuario está hasta abajo (en los créditos del Footer)
    const scrollAlFondo = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;

    if (direccion === 'abajo') {
        let nextPaso = pasoActualGlobal + 1;
        if (esMovil && nextPaso === 7) nextPaso = 8; // MÓVIL: Oculta la escena 7 saltando directo a la 8
        
        if (pasoActualGlobal < 19) {
            ejecutarSalto(document.querySelector(`.step[data-step="${nextPaso}"]`));
        } else if (pasoActualGlobal === 19 && !scrollAlFondo) {
            isScrolling = true;
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            setTimeout(() => { isScrolling = false; }, cooldownTiempo);
        }
    } 
    else if (direccion === 'arriba') {
        let prevPaso = pasoActualGlobal - 1;
        if (esMovil && prevPaso === 7) prevPaso = 6; // MÓVIL: Salta de la 8 a la 6 de retroceso
        
        if (scrollAlFondo) {
            ejecutarSalto(document.querySelector('.step[data-step="19"]'));
        } else if (pasoActualGlobal > 1) {
            ejecutarSalto(document.querySelector(`.step[data-step="${prevPaso}"]`));
        }
    }
}

// 0. Conectamos los botones físicos de flechas a la función maestra
document.getElementById('btn-up').addEventListener('click', () => moverEscena('arriba'));
document.getElementById('btn-down').addEventListener('click', () => moverEscena('abajo'));

// 1. Detección Inteligente de Ratón (PC)
window.addEventListener('wheel', (e) => {
    if (document.body.classList.contains('locked')) return;
    e.preventDefault(); // Apaga el scroll tosco del navegador
    moverEscena(e.deltaY > 0 ? 'abajo' : 'arriba');
}, { passive: false });

// 2. Detección Inteligente de Teclado (Flechas y Espacio)
window.addEventListener('keydown', (e) => {
    if (document.body.classList.contains('locked')) return;
    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault(); 
        moverEscena('abajo');
    } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault(); 
        moverEscena('arriba');
    }
}, { passive: false });

// 3. Detección Inteligente Táctil (Celulares/Tablets)
let touchStartY = 0;
window.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; }, { passive: false });
window.addEventListener('touchmove', (e) => {
    if (document.body.classList.contains('locked')) return;
    e.preventDefault(); // Evita que la pantalla se arrastre libremente
    let deltaY = touchStartY - e.touches[0].clientY;
    if (deltaY > 40) moverEscena('abajo');
    else if (deltaY < -40) moverEscena('arriba');
}, { passive: false });


// ===============================================
// 5. CONTROLADOR NARRATIVO 
// ===============================================
// NUEVA FUNCIÓN PARA LOS PINES DE CIUDADES
// NUEVA FUNCIÓN PARA LOS PINES DE CIUDADES (Dualidad Histórica vs Nueva)
function gestionarPines(paso) {
    capaPines.clearLayers();
    if (esMovil && paso === 7) return; // Bloquea los pines de ciudades en móvil

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
let animacionDashboardJugada = false; // Nueva bandera para el Paso 12

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
    if (esMovil) return; // Bloquea las banderas en móvil
    
    // Banderas para el Paso 1 (Todos los 19 anfitriones)
    if (paso === 1) {
        DATA.anfitriones.forEach(iso => {
            const coords = DATA.coordenadas_paises[iso];
            const info = PAISES_TRADUCCION[iso];
            
            if (coords && info) {
                const htmlBandera = `<img src="https://flagcdn.com/w40/${info.flag}.png" class="flag-rectangular" alt="${info.es}">`;
                const iconoBandera = L.divIcon({ 
                    html: htmlBandera, 
                    className: 'map-flag-icon', 
                    iconSize: [45, 30], 
                    iconAnchor: [22, 15] 
                });
                L.marker(coords, { icon: iconoBandera }).addTo(capaBanderas);
            }
        });
    } 
    // Banderas para el Paso 3 (Corea/Japón y Norteamérica)
    else if (paso === 3) {
        DATA.banderas.forEach(b => {
            const htmlBandera = `<img src="https://flagcdn.com/w40/${b.iso2}.png" class="flag-rectangular" alt="${b.iso}">`;
            const iconoBandera = L.divIcon({ 
                html: htmlBandera, 
                className: 'map-flag-icon', 
                iconSize: [45, 30], 
                iconAnchor: [22, 15] 
            });
            L.marker([b.lat, b.lng], { icon: iconoBandera }).addTo(capaBanderas);
        });
    }

    else if (paso === 6) {
        DATA.campeones_locales.forEach(iso => {
            const coords = DATA.coordenadas_paises[iso];
            const info = PAISES_TRADUCCION[iso];
            
            if (coords && info) {
                const htmlBandera = `<img src="https://flagcdn.com/w40/${info.flag}.png" class="flag-rectangular" alt="${info.es}" style="box-shadow: 0 0 15px #f1c40f; border-color: #f1c40f;">`;
                const iconoBandera = L.divIcon({ html: htmlBandera, className: 'map-flag-icon', iconSize: [45, 30], iconAnchor: [22, 15] });
                L.marker(coords, { icon: iconoBandera }).addTo(capaBanderas);
            }
        });
    }
}

function actualizarLeyenda(paso) {
    const contenedor = document.getElementById('leyenda-dinamica');
    if (CONFIG.leyendas[paso]) {
        
        // LÓGICA DE TÍTULO DE LEYENDA
        const tituloLeyenda = paso === 2 ? "Copas del Mundo organizadas" : "Leyenda";
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
let contadoresViz = { pros: 0, wc: 0, golesTotales: 0, penales: 0 };

function procesarPasoNarrativo(paso) {
    if (!geoJsonLayer) return;

    // FILTRO ANTI-BUGS: Si el mapa ya pintó este paso, ignora el scroll repetido.
    if (pasoRenderizado === paso) return; 
    pasoRenderizado = paso; // Registra que ya se procesó
    pasoActualGlobal = paso; 

    const btnUp = document.getElementById('btn-up');
    const btnDown = document.getElementById('btn-down');
    if (btnUp && btnDown) {
        btnUp.disabled = paso === 1;
        btnDown.disabled = paso === 19;
    }

    actualizarLeyenda(paso);
    gestionarBanderas(paso);
    gestionarPines(paso);

    // 1. APAGAR TODOS LOS PANELES UI (Método limpio y optimizado)
    const paneles = [
        'panel-extintos', 'panel-mexico', 'viz-imposibilidad', 'viz-goles', 
        'viz-rostros', 'viz-tiempos', 'viz-tarjetas', 'viz-club-6', 
        'viz-mas-partidos', 'viz-cerca-trono', 'viz-peru', 'viz-peru-goleadores'
    ];
    paneles.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.classList.add('ui-hidden');
    });

    // 2. APAGAR/PRENDER EL MAPA (A partir del paso 9, el mapa y leyenda desaparecen)
    const ocultarMapa = paso >= 9;
    document.getElementById('map').style.opacity = ocultarMapa ? "0" : "1";
    document.getElementById('ui-overlays').style.opacity = ocultarMapa ? "0" : "1";
    
    const customVizStage = document.getElementById('custom-viz-stage');
    if (ocultarMapa && customVizStage) customVizStage.classList.remove('ui-hidden');
    else if (customVizStage) customVizStage.classList.add('ui-hidden');

    // 3. ENCENDIDO ESPECÍFICO SEGÚN EL PASO
    if(paso === 5) document.getElementById('panel-extintos').classList.remove('ui-hidden');
    if(paso === 8) document.getElementById('panel-mexico').classList.remove('ui-hidden');
    if(paso === 9) document.getElementById('viz-imposibilidad').classList.remove('ui-hidden');
    if(paso === 10) document.getElementById('viz-goles').classList.remove('ui-hidden');
    if(paso === 11) document.getElementById('viz-rostros').classList.remove('ui-hidden');
    if(paso === 12) document.getElementById('viz-tiempos').classList.remove('ui-hidden');
    if(paso === 13) document.getElementById('viz-tarjetas').classList.remove('ui-hidden');
    const stickyTitle = document.getElementById('sticky-records-title');
    if (stickyTitle) {
        if (paso >= 15 && paso <= 17) stickyTitle.classList.remove('ui-hidden');
        else stickyTitle.classList.add('ui-hidden');
    }
    if(paso === 15) document.getElementById('viz-club-6').classList.remove('ui-hidden');
    if(paso === 16) document.getElementById('viz-mas-partidos').classList.remove('ui-hidden');
    if(paso === 17) document.getElementById('viz-cerca-trono').classList.remove('ui-hidden');
    if(paso === 18) document.getElementById('viz-peru').classList.remove('ui-hidden');
    if(paso === 19) document.getElementById('viz-peru-goleadores').classList.remove('ui-hidden');

    // ============================================
    // ANIMACIONES ESPECÍFICAS DE GSAP (ESCENAS SIN MAPA)
    // ============================================
    
    // Paso 9: Contadores Waffle
    if(paso === 9 && typeof animaciónImposibilidadJugada !== 'undefined' && !animaciónImposibilidadJugada) {
        gsap.to(contadoresViz, { pros: 128694, duration: 2.5, ease: "power2.out", onUpdate: () => document.getElementById("count-pros").innerHTML = Math.round(contadoresViz.pros).toLocaleString('en-US') });
        gsap.to(contadoresViz, { wc: 1248, duration: 2.5, delay: 0.5, ease: "power2.out", onUpdate: () => document.getElementById("count-wc").innerHTML = Math.round(contadoresViz.wc).toLocaleString('en-US') });
        animaciónImposibilidadJugada = true;
    }

    // Paso 10: Barras de Goles
    gsap.killTweensOf(".goal-bar-fill");
    if(paso === 10) {
        gsap.to(".goal-bar-fill", { width: function(i, t) { return t.getAttribute("data-width") + "%"; }, duration: 1.2, ease: "power3.out", stagger: 0.15 });
    } else {
        gsap.set(".goal-bar-fill", { width: "0%" });
    }

    // Paso 12: Cronómetro de Tiempos
    gsap.killTweensOf(".chrono-segment, .mg-bar, #penalty-donut");
    if(paso === 12) {
        // 1. Animar el cronómetro
        gsap.to(".chrono-segment", { width: function(i, t) { return t.getAttribute("data-width") + "%"; }, duration: 1.5, ease: "power3.out", stagger: 0.2 });
        // 2. Animar mini barras Top 5
        gsap.to(".mg-bar", { width: function(i, t) { return t.getAttribute("data-width") + "%"; }, duration: 1.2, ease: "power3.out", stagger: 0.1 });
        // 3. Animar gráfico de Dona (Actualizando variable CSS)
        gsap.to("#penalty-donut", { "--p": 7.87, duration: 2, ease: "power2.out" });
        
        // 4. Animar los Contadores numéricos (solo una vez)
        if (!animacionDashboardJugada) {
            gsap.to(contadoresViz, { 
                golesTotales: 2720, duration: 2.5, ease: "power2.out", 
                onUpdate: () => document.getElementById("count-total-goals").innerHTML = Math.round(contadoresViz.golesTotales).toLocaleString('en-US') 
            });
            gsap.to(contadoresViz, { 
                penales: 214, duration: 2.5, delay: 0.5, ease: "power2.out", 
                onUpdate: () => document.getElementById("count-penalties").innerHTML = Math.round(contadoresViz.penales) 
            });
            animacionDashboardJugada = true;
        }
    } else {
        // Reset visual si el usuario sale del paso 12
        gsap.set(".chrono-segment, .mg-bar", { width: "0%" });
        gsap.set("#penalty-donut", { "--p": 0 });
    }
    
    // Paso 13: Gráfico Disruptivo de Tarjetas (Stem Chart)
    gsap.killTweensOf(".line-path, .dot-yellow, .dot-red");
    if(paso === 13) {
        // Magia GSAP: Anima el "dibujado" de las líneas SVG
        gsap.fromTo(".line-path", 
            { strokeDasharray: 2000, strokeDashoffset: 2000 }, 
            { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }
        );
        // Aparecen los puntos de datos suavemente al final
        gsap.fromTo([".dot-yellow", ".dot-red"], 
            { attr: { r: 0 }, opacity: 0 }, 
            { attr: { r: 5 }, opacity: 1, duration: 0.5, stagger: 0.05, delay: 0.8 }
        );
    } else {
        gsap.set(".line-path", { strokeDashoffset: 2000, strokeDasharray: 2000 });
        gsap.set([".dot-yellow", ".dot-red"], { attr: { r: 0 }, opacity: 0 });
    }

    gsap.killTweensOf(".comp-bar, .klose-bar, .messi-bar, .check-item, .peru-anim-bar, .peru-anim-bar-w, .gol-peru-bar");

    if(paso === 16) gsap.fromTo(".comp-bar", { height: "0%" }, { height: (i, t) => t.getAttribute("data-h"), duration: 1.2, ease: "power3.out", stagger: 0.1 });
    else gsap.set(".comp-bar", { height: "0%" });

    if(paso === 17) {
        gsap.fromTo(".klose-bar, .messi-bar", { width: "0%" }, { width: (i, t) => t.getAttribute("data-width") + "%", duration: 1.2, ease: "power3.out", stagger: 0.2 });
        gsap.fromTo(".check-item", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "back.out(1.5)" });
    } else { gsap.set(".klose-bar, .messi-bar", { width: "0%" }); gsap.set(".check-item", { opacity: 0, y: 20 }); }

    // PASO 18 AHORA ANIMA HEIGHT Y WIDTH
    if(paso === 18) {
        gsap.fromTo(".peru-anim-bar", { height: "0%" }, { height: (i, t) => t.getAttribute("data-h"), duration: 1.5, ease: "elastic.out(1, 0.7)", stagger: 0.05 });
        gsap.fromTo(".peru-anim-bar-w", { width: "0%" }, { width: (i, t) => t.getAttribute("data-w"), duration: 1.2, ease: "power3.out", stagger: 0.1 });
    } else { 
        gsap.set(".peru-anim-bar", { height: "0%" }); 
        gsap.set(".peru-anim-bar-w", { width: "0%" }); 
    }

    if(paso === 19) gsap.fromTo(".gol-peru-bar", { width: "0%" }, { width: (i, t) => t.getAttribute("data-width") + "%", duration: 1.2, ease: "power3.out", stagger: 0.1 });
    else gsap.set(".gol-peru-bar", { width: "0%" });

    
   // CONTROL DE MAPA Y VECTORES (Solo si el mapa es visible)
    // ============================================
    
    // OPTIMIZACIÓN DE RENDIMIENTO
    if (!ocultarMapa) {
        if (CONFIG.camaras[paso]) {
            if (esMovil) {
                // MÓVIL: Transición Fade In/Out limpia
                gsap.killTweensOf('#map'); // <-- Seguro anti-atascos al hacer scroll rápido
                
                gsap.to('#map', { opacity: 0, duration: 0.25, onComplete: () => {
                    map.setView(CONFIG.camaras[paso].centro, CONFIG.camaras[paso].zoom);
                    gsap.to('#map', { opacity: 1, duration: 0.35 });
                }});
            } else {
                // ESCRITORIO: Vuelo suave tradicional
                map.flyTo(CONFIG.camaras[paso].centro, CONFIG.camaras[paso].zoom, {
                    duration: 1.5, easeLinearity: 0.25
                });
            }
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

// ===============================================
// GENERADORES DE GRÁFICOS PERSONALIZADOS (13)
// ===============================================

// 1. Datos históricos de tarjetas
DATA.tarjetas_historicas = [
    { y: 1966, amarillo: 21, rojo: 5 }, { y: 1970, amarillo: 51, rojo: 0 },
    { y: 1974, amarillo: 86, rojo: 5 }, { y: 1978, amarillo: 59, rojo: 3 },
    { y: 1982, amarillo: 99, rojo: 5 }, { y: 1986, amarillo: 137, rojo: 8 },
    { y: 1990, amarillo: 165, rojo: 16 }, { y: 1994, amarillo: 221, rojo: 15 },
    { y: 1998, amarillo: 250, rojo: 22 }, { y: 2002, amarillo: 261, rojo: 16 }, 
    { y: 2006, amarillo: 304, rojo: 28 }, { y: 2010, amarillo: 242, rojo: 16 },
    { y: 2014, amarillo: 181, rojo: 10 }, { y: 2018, amarillo: 219, rojo: 4 },
    { y: 2022, amarillo: 221, rojo: 4 }
];


// 2. Función que dibuja el gráfico de Líneas de Doble Eje Y (SVG Nativo)
function generarGraficoTarjetas() {
    const contenedor = document.getElementById('cards-chart');
    if (!contenedor) return; 

    contenedor.innerHTML = '';
    
    // Escalas Independientes para los dos ejes
    const maxYellow = 350; // Eje izquierdo (Amarillas)
    const maxRed = 30;     // Eje derecho (Rojas)
    
    const width = 1000;
    const height = 300;
    const dataLen = DATA.tarjetas_historicas.length;

    // Vectores SVG
    let pathYellow = `M 0,${height - (DATA.tarjetas_historicas[0].amarillo / maxYellow) * height}`;
    let pathRed = `M 0,${height - (DATA.tarjetas_historicas[0].rojo / maxRed) * height}`;

    let dotsHTML = '';
    let hoverZonesHTML = '';
    let xAxisHTML = '';

    DATA.tarjetas_historicas.forEach((d, i) => {
        const x = (i / (dataLen - 1)) * width;
        const xPercent = (i / (dataLen - 1)) * 100;
        const yYellow = height - (d.amarillo / maxYellow) * height;
        const yRed = height - (d.rojo / maxRed) * height;

        if (i > 0) {
            pathYellow += ` L ${x},${yYellow}`;
            pathRed += ` L ${x},${yRed}`;
        }

        // Círculos vectoriales (puntos)
        dotsHTML += `
            <circle cx="${x}" cy="${yYellow}" r="5" class="dot-yellow" />
            <circle cx="${x}" cy="${yRed}" r="5" class="dot-red" />
        `;

        // Zonas de Hover HTML (Invisibles, sobre el SVG para tooltips perfectos)
        hoverZonesHTML += `
            <div class="hover-zone tooltip-trigger" data-tooltip="Edición ${d.y}: ${d.amarillo} Tarjetas amarillas" style="left: ${xPercent}%; top: ${(yYellow/height)*100}%;"></div>
            <div class="hover-zone tooltip-trigger" data-tooltip="Edición ${d.y}: ${d.rojo} Tarjetas rojas" style="left: ${xPercent}%; top: ${(yRed/height)*100}%;"></div>
        `;

        // Etiquetas del Eje X (Años)
        xAxisHTML += `<div class="x-label" style="left: ${xPercent}%;">${d.y}</div>`;
    });

    // Ensamblaje del DOM
    const svgHTML = `
        <svg viewBox="-10 -10 1020 320" class="dual-line-svg" preserveAspectRatio="none">
            <line x1="0" y1="300" x2="1000" y2="300" class="grid-line" />
            <line x1="0" y1="150" x2="1000" y2="150" class="grid-line" />
            <line x1="0" y1="0" x2="1000" y2="0" class="grid-line" />

            <path d="${pathYellow}" class="line-path line-yellow" />
            <path d="${pathRed}" class="line-path line-red" />
            ${dotsHTML}
        </svg>
    `;

    const finalHTML = `
        <div class="dual-chart-wrapper">
            <div class="y-axis left-axis"><span>350</span><span>175</span><span>0</span></div>
            
            <div class="chart-core">
                ${svgHTML}
                <div class="html-tooltip-overlay">${hoverZonesHTML}</div>
                <div class="x-axis-container">${xAxisHTML}</div>
            </div>
            
            <div class="y-axis right-axis"><span>30</span><span>15</span><span>0</span></div>
        </div>
    `;

    contenedor.innerHTML = finalHTML;
}
generarGraficoTarjetas();

function generarGraficosPeru() {
    const wdlGrid = document.getElementById('peru-wdl-grid');
    const goalsList = document.getElementById('peru-goals-list'); // Nuevo ID para horizontales
    
    if(wdlGrid && goalsList) {
        let htmlWDL = '';
        let htmlGoals = '';
        const maxMatches = 4; 
        const maxGoals = 10;  
        
        DATA.peru_wc.forEach(d => {
            // HTML para Resultados (Columnas Verticales)
            htmlWDL += `
                <div class="peru-year-group">
                    <div class="peru-wdl-wrap">
                        <div class="p-bar bg-w peru-anim-bar tooltip-trigger" data-h="${(d.w/maxMatches)*100}%" data-tooltip="${d.w} Victorias"><span class="p-val">${d.w > 0 ? d.w : ''}</span></div>
                        <div class="p-bar bg-d peru-anim-bar tooltip-trigger" data-h="${(d.d/maxMatches)*100}%" data-tooltip="${d.d} Empates"><span class="p-val">${d.d > 0 ? d.d : ''}</span></div>
                        <div class="p-bar bg-l peru-anim-bar tooltip-trigger" data-h="${(d.l/maxMatches)*100}%" data-tooltip="${d.l} Derrotas"><span class="p-val">${d.l > 0 ? d.l : ''}</span></div>
                    </div>
                    <div class="peru-axis-year">${d.y}</div>
                </div>`;
                
            // HTML para Goles (Barras Horizontales)
            htmlGoals += `
                <div class="peru-goal-row-h">
                    <span class="peru-year-label-h">${d.y}</span>
                    <div class="peru-bar-bg-h">
                        <div class="p-bar-h bg-g peru-anim-bar-w tooltip-trigger" data-w="${(d.g/maxGoals)*100}%" data-tooltip="${d.g} Goles">
                            <span class="p-val-h" style="color:#000;">${d.g > 0 ? d.g : ''}</span>
                        </div>
                    </div>
                </div>`;
        });
        wdlGrid.innerHTML = htmlWDL;
        goalsList.innerHTML = htmlGoals;
    }

    const list = document.getElementById('peru-goleadores-list');
    if(list) {
        let htmlList = '';
        DATA.peru_goleadores.forEach(p => {
            htmlList += `
            <div class="goal-row" style="margin-bottom: 12px;">
                <div class="goal-track">
                    <div class="goal-info"><span class="goal-country">${p.n}</span> <span class="goal-count">${p.g}</span></div>
                    <div class="goal-bar-bg"><div class="goal-bar-fill gol-peru-bar" data-width="${(p.g/10)*100}" style="background-color: #d32f2f;"></div></div>
                </div>
            </div>`;
        });
        list.innerHTML = htmlList;
    }
}
generarGraficosPeru();