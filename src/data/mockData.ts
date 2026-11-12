import { Artwork, ExhibitionEvent, ArtCourse, ArtistProfile } from '../types';

export const ARTISTS_DATA: ArtistProfile[] = [
  {
    id: 'art-1',
    name: 'Valentina Restrepo Gil',
    city: 'Bogotá, Colombia',
    birthYear: 1991,
    specialty: 'Pintura al óleo y pigmentos botánicos andinos',
    statement: 'Mi obra indaga en las capas invisibles del páramo de Sumapaz y la memoria mineral de la Cordillera Oriental. A través de la superposición de veladuras de aceite de linaza y tierras recolectadas, busco atrapar la densidad de la niebla matutina.',
    bio: 'Maestra en Artes Plásticas por la Universidad Nacional de Colombia con maestría en Conservación Textil en Barcelona. Ha participado en la Bienal de Cuenca y el Salón Nacional de Artistas.',
    exhibitionsCount: 14,
    awards: ['Premio Nacional de Arte Joven 2023', 'Beca de Residencia Artística Banff Centre 2024'],
    videoTitle: 'Cápsula de Taller: La alquimia de los óxidos y la niebla andina',
    videoDuration: '3:45 min',
    videoTranscript: 'En este proceso utilizo pigmentos extraídos manualmente de piedras de pizarra y arcilla de Boyacá. Cada capa tarda entre 12 y 18 días en secar por completo...'
  },
  {
    id: 'art-2',
    name: 'Camilo Santamaría Mora',
    city: 'Medellín, Colombia',
    birthYear: 1985,
    specialty: 'Escultura en bronce a la cera perdida y madera recuperada',
    statement: 'Investigo la tensión entre la rigidez del metal fundido y la fragilidad de las maderas de demolición urbana. Las piezas dialogan sobre los vestigios arquitectónicos y la persistencia de la naturaleza.',
    bio: 'Escultor egresado de la Universidad de Antioquia con estancia en la Accademia di Belle Arti di Firenze. Sus obras monumentales forman parte de colecciones públicas y privadas en Colombia, México y Francia.',
    exhibitionsCount: 22,
    awards: ['Mención de Honor Salón Regional de Escultura 2022', 'Premio Adquisición Colección Bancolombia'],
    videoTitle: 'Vaciado en bronce: De la cera efímera a la solidez geológica',
    videoDuration: '4:12 min',
    videoTranscript: 'El fuego transforma la forma orgánica inicial. Cuando la fundición alcanza los 1150°C, no hay margen de error: el bronce ocupa el espacio exacto que dejó la cera vegetal...'
  },
  {
    id: 'art-3',
    name: 'Daniela Alarcón Vega',
    city: 'Cali, Colombia',
    birthYear: 1996,
    specialty: 'Arte generativo digital, gráfica fractal y serigrafía experimental',
    statement: 'Codifico algoritmos basados en los ritmos del río Pance y los mapas de viento del Valle del Cauca para generar piezas visuales de alta precisión que posteriormente transfiero a papel de algodón mediante tintas de base mineral.',
    bio: 'Diseñadora de Medios Interactivos por la Universidad Icesi con estudios en Arte y Tecnología en Linz (Ars Electronica). Pionera en la curaduría de arte computacional en el suroccidente colombiano.',
    exhibitionsCount: 9,
    awards: ['Premio Nuevos Medios Artec Bogotá 2025', 'Selección Oficial Mutek Festival'],
    videoTitle: 'Algoritmos y marea: Cómo el código se convierte en fibra impresa',
    videoDuration: '2:50 min',
    videoTranscript: 'El código matemático genera una matriz que nunca se repite. Selecciono instantes de congelación del sistema caótico y los imprimo en prensas serigráficas tradicionales...'
  },
  {
    id: 'art-4',
    name: 'Mateo Echeverry Londoño',
    city: 'Manizales, Colombia',
    birthYear: 1988,
    specialty: 'Acuarela contemporánea y pigmentos de café orgánico',
    statement: 'Mi exploración plástica reivindica el papel de la luz solar como modelador de la atmósfera cafetera. Los claroscuros de mis aguadas registran el paso del tiempo en los caminos de herradura.',
    bio: 'Pintor e ilustrador botánico de la Universidad de Caldas. Sus acuarelas han ilustrado monografías del Instituto Alexander von Humboldt y publicaciones del Jardín Botánico de Bogotá.',
    exhibitionsCount: 11,
    awards: ['Primer Puesto Salón de Acuarelistas Andinos 2024'],
    videoTitle: 'Control del agua: La frontera entre la mancha viva y el dibujo seco',
    videoDuration: '3:15 min',
    videoTranscript: 'La acuarela es un diálogo con el azar. Humedezco el papel Arches de 300 gramos y dejo que la densidad del pigmento trace su propio relieve antes de evaporarse...'
  }
];

export const ARTWORKS_DATA: Artwork[] = [
  {
    id: 'ob-101',
    title: 'Ecos del Páramo I: Umbral de Niebla',
    artistId: 'art-1',
    artistName: 'Valentina Restrepo Gil',
    artistBioSnippet: 'Maestra en Artes Plásticas UNAL · Especialista en pigmentos botánicos y tierras de Boyacá',
    year: 2025,
    technique: 'Pintura al Óleo',
    mediumDetails: 'Óleo y tierras minerales sobre lino belga preparado con imprimación tradicional de creta',
    dimensions: '90 × 70 cm',
    weight: '3.4 kg',
    framed: true,
    priceCOP: 1850000,
    isAvailable: true,
    accessionNumber: 'LUM-2026-ART-0101',
    description: 'Composición atmosférica que explora la disolución del paisaje en las alturas del altiplano. La superficie combina capas translúcidas de azul cerúleo apagado, ocres calizos y grises volcánicos.',
    conceptStatement: 'Buscaba recrear la sensación de ceguera momentánea cuando la niebla espesa entra por el cañón montañoso, donde las formas rocosas se vuelven meras sombras poéticas.',
    curatorNotes: 'Pieza seleccionada para la muestra principal de Primavera 2026. Destaca por su impecable factura matérica y su capacidad de serenar cualquier estancia arquitectónica.',
    wallPalette: ['#E6E2D8', '#C3B8A8', '#4A535D', '#8C959E'],
    visualSvg: {
      type: 'landscape',
      primaryColor: '#536577',
      secondaryColor: '#A09789',
      accentColor: '#D1C6B4',
      bgColor: '#EBE7DE'
    },
    provenance: ['Taller de la artista (Bogotá)', 'Galería Lumina (Exhibición actual)'],
    certificateHash: '0x7F9B2C4E8A1D336594C8B1E03D45F92A721',
    shippingTimeDays: 4
  },
  {
    id: 'ob-102',
    title: 'Fragmento Botánico: Caléndula Silvestre',
    artistId: 'art-4',
    artistName: 'Mateo Echeverry Londoño',
    artistBioSnippet: 'Pintor botánico Universidad de Caldas · Primer Puesto Acuarelistas Andinos 2024',
    year: 2026,
    technique: 'Acuarela y Tinta',
    mediumDetails: 'Acuarela Winsor & Newton y tinta ferrogálica sobre papel Saunders Waterford 300g 100% algodón',
    dimensions: '35 × 25 cm',
    weight: '0.8 kg',
    framed: true,
    priceCOP: 380000, // < $500.000 COP (Accesible para Jóvenes Exploradores)
    isAvailable: true,
    accessionNumber: 'LUM-2026-ART-0102',
    description: 'Estudio delicado de inflorescencias silvestres recolectadas en los senderos de Choachí. Formato íntimo ideal para primeros coleccionistas e iniciación en arte original.',
    conceptStatement: 'Una oda a las plantas que crecen en las grietas del asfalto y en los bordes de carretera sin pedir permiso a nadie.',
    curatorNotes: 'Obra de entrada con costo accesible garantizado, certificada directamente por el artista con sello seco en el papel.',
    wallPalette: ['#F9F6F0', '#E5CE9F', '#C4823F', '#4A5B43'],
    visualSvg: {
      type: 'flora',
      primaryColor: '#D97724',
      secondaryColor: '#4A6B45',
      accentColor: '#F2CA65',
      bgColor: '#FAF6EE'
    },
    provenance: ['Taller Manizales', 'Catálogo de Entrada Lumina Joven'],
    certificateHash: '0x3E1C8490B4A77D2F18C92B5A01948C7F003',
    shippingTimeDays: 3
  },
  {
    id: 'ob-103',
    title: 'Tensión Geológica: Ensamble Nº 4',
    artistId: 'art-2',
    artistName: 'Camilo Santamaría Mora',
    artistBioSnippet: 'Escultor Accademia di Firenze · Mención Salón Regional de Escultura',
    year: 2025,
    technique: 'Escultura y Relieve',
    mediumDetails: 'Bronce fundido con pátina sulfurosa al fuego montado sobre bloque de nogal cafetero centenario',
    dimensions: '42 × 28 × 22 cm',
    weight: '8.2 kg',
    framed: false,
    priceCOP: 4200000,
    isAvailable: true,
    accessionNumber: 'LUM-2026-ART-0103',
    description: 'Volumen escultórico que contrasta las aristas vivas del bronce pulido con la veta rugosa y agrietada de madera de demolición de una casona de 1920.',
    conceptStatement: 'El peso de la materia como ancla frente a la virtualidad acelerada. Requiere ser contemplada desde todos los ángulos de giro.',
    curatorNotes: 'Pieza de colección destacada con pedestal incluido de acero termolacado negro mate.',
    wallPalette: ['#1C1917', '#78350F', '#B45309', '#E7E5E4'],
    visualSvg: {
      type: 'sculpture',
      primaryColor: '#8C5228',
      secondaryColor: '#2B2621',
      accentColor: '#D99B52',
      bgColor: '#F5EFE6'
    },
    provenance: ['Estudio Santamaría (Sabaneta)', 'Bienal de Escultura 2025', 'Colección Galería Lumina'],
    certificateHash: '0x99A410EF72D0B437C118B80492EFA7368B1',
    shippingTimeDays: 5
  },
  {
    id: 'ob-104',
    title: 'Topología Caótica: Matriz Viento 08',
    artistId: 'art-3',
    artistName: 'Daniela Alarcón Vega',
    artistBioSnippet: 'Pionera en arte computacional Ars Electronica Linz · Icesi Cali',
    year: 2026,
    technique: 'Arte Digital',
    mediumDetails: 'Giclée Fine Art de 12 tintas pigmentadas UltraChrome PRO sobre Hahnemühle Photo Rag 308g',
    dimensions: '50 × 50 cm',
    weight: '1.2 kg',
    framed: true,
    priceCOP: 460000, // < $500.000 COP (Accesible para Jóvenes Exploradores)
    isAvailable: true,
    accessionNumber: 'LUM-2026-ART-0104',
    description: 'Impresión de edición limitada (tiraje 1 de 10) firmada a mano por la artista con código criptográfico de autenticación de autoría.',
    conceptStatement: 'Traduje dos semanas de mediciones barométricas del cañón de Dapa en una ecuación matemática de atractores extraños.',
    curatorNotes: 'Edición exclusiva para Galería Lumina. Incluye certificado físico con código QR verificable en blockchain pública.',
    wallPalette: ['#0F172A', '#2563EB', '#06B6D4', '#F8FAFC'],
    visualSvg: {
      type: 'abstract-geo',
      primaryColor: '#1D4ED8',
      secondaryColor: '#0E7490',
      accentColor: '#38BDF8',
      bgColor: '#F0F9FF'
    },
    provenance: ['Laboratorio Digital Cali', 'Edición Limitada Lumina'],
    certificateHash: '0x5C29A78B3F11E49890CD1A4287B943A6104',
    shippingTimeDays: 3
  },
  {
    id: 'ob-105',
    title: 'Horizonte de Ceniza y Resina',
    artistId: 'art-1',
    artistName: 'Valentina Restrepo Gil',
    artistBioSnippet: 'Maestra UNAL · Beca Banff Centre',
    year: 2025,
    technique: 'Técnicas Mixtas',
    mediumDetails: 'Resina damar natural, carbón vegetal de encino, grafito y pan de oro de 22 quilates sobre panel de abedul',
    dimensions: '60 × 60 cm',
    weight: '2.9 kg',
    framed: true,
    priceCOP: 1250000,
    isAvailable: true,
    accessionNumber: 'LUM-2026-ART-0105',
    description: 'Cuadrícula sutil intervenida con veladuras oscuras y un destello dorado que refracta la luz natural dependiendo de la hora del día en el espacio.',
    conceptStatement: 'El oro en esta pieza no es ostentación, sino la pequeña chispa de esperanza que subsiste tras la quema y la ceniza.',
    curatorNotes: 'Marco de nogal con vidrio museo anti-reflejo UV 99%.',
    wallPalette: ['#1E1E1E', '#C5A059', '#E8E5DD', '#6B6862'],
    visualSvg: {
      type: 'minimalist',
      primaryColor: '#262422',
      secondaryColor: '#BFA054',
      accentColor: '#E6D3A3',
      bgColor: '#F2EFEB'
    },
    provenance: ['Taller Bogotá', 'Colección Galería Lumina'],
    certificateHash: '0x88F73B90A2E4459C76210A88BC54398E129',
    shippingTimeDays: 4
  },
  {
    id: 'ob-106',
    title: 'Estudio de Sombras: Casona del Tequendama',
    artistId: 'art-4',
    artistName: 'Mateo Echeverry Londoño',
    artistBioSnippet: 'Pintor botánico y acuarelista Universidad de Caldas',
    year: 2026,
    technique: 'Acuarela y Tinta',
    mediumDetails: 'Acuarela sobre papel Fabriano Artistico 300g grano satinado con marco de roble claro',
    dimensions: '40 × 30 cm',
    weight: '1.1 kg',
    framed: true,
    priceCOP: 420000, // < $500.000 COP (Accesible para Jóvenes Exploradores)
    isAvailable: true,
    accessionNumber: 'LUM-2026-ART-0106',
    description: 'Vista arquitectónica nostálgica de las ventanas góticas del Salto del Tequendama bañadas por la bruma de la cascada.',
    conceptStatement: 'Capturar el peso de la humedad y la memoria colonial en un formato limpio que dialogue con interiores modernos.',
    curatorNotes: 'Pieza perfecta para iniciar una colección de arte gráfico colombiano contemporáneo.',
    wallPalette: ['#EBE6DF', '#7C8A94', '#2E3A44', '#FAF7F2'],
    visualSvg: {
      type: 'portrait',
      primaryColor: '#4A5D6E',
      secondaryColor: '#788998',
      accentColor: '#C9D4DC',
      bgColor: '#F5F2EC'
    },
    provenance: ['Exposición Itinerante Paisaje Andino', 'Galería Lumina'],
    certificateHash: '0x1A2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D7E8',
    shippingTimeDays: 3
  }
];

export const EXHIBITIONS_DATA: ExhibitionEvent[] = [
  {
    id: 'ev-01',
    title: 'Luz y Sedimento: Diálogos de la Cordillera',
    subtitle: 'Gran Exposición Colectiva de Pintura Contemporánea y Escultura Andina',
    curator: 'Dra. Diana Ruth Martínez Suárez & Comité Curatorial Lumina',
    dates: '15 de Marzo – 30 de Abril, 2026',
    startDate: '2026-03-15',
    endDate: '2026-04-30',
    location: 'Galería Lumina · Sede Bosque Popular (Bogotá D.C.)',
    room: 'Sala Principal y Patio de Esculturas',
    accessType: 'Entrada Libre', // Responsive al 41% que no sabía si requería inscripción
    priceCOP: 0,
    dressCode: 'Casual cultural libre (sin restricciones formales)',
    parkingInfo: 'Parqueadero cubierto gratuito para visitantes (acceso por Calle 64G Nº 73A-22)',
    transitRoutes: 'TransMilenio Calle 63 / Av. Boyacá · Rutas SITP 330, C131, P500 a 150m de la entrada',
    capacityMax: 120,
    capacityRegistered: 74,
    description: 'Una inmersión sensible en cómo las materias primas del territorio colombiano —arcillas, óxidos, maderas centenarias y pigmentos vegetales— configuran un nuevo lenguaje plástico en el siglo XXI.',
    highlights: [
      'Visita guiada con los artistas los sábados a las 11:00 am',
      'Catálogo impreso de cortesía para los primeros 50 asistentes',
      'Estación interactiva con muestras táctiles de pigmentos minerales puros'
    ],
    featuredArtists: ['Valentina Restrepo Gil', 'Camilo Santamaría Mora', 'Mateo Echeverry Londoño'],
    visualColor: '#8C5228'
  },
  {
    id: 'ev-02',
    title: 'Vernissage Nocturno: Algoritmos y Territorio',
    subtitle: 'Noche de Apertura Exclusiva y Performance Audiovisual en Directo',
    curator: 'Daniela Alarcón Vega',
    dates: 'Jueves 26 de Marzo, 2026 · 6:30 pm a 10:00 pm',
    startDate: '2026-03-26',
    endDate: '2026-03-26',
    location: 'Galería Lumina · Sala Experimental Distrito Creativo',
    room: 'Caja Negra y Terraza Lounge',
    accessType: 'Inscripción Previa Requerida', // Claramente señalado con cupos
    priceCOP: 0, // Entrada gratuita con ticket QR
    dressCode: 'Cóctel contemporáneo o creativo',
    parkingInfo: 'Convenio con estacionamiento Carrera 7ma con Calle 72 (50% descuento con ticket Lumina)',
    transitRoutes: 'Estación Flores / Calle 72 TransMilenio · Ciclorruta Carrera 11',
    capacityMax: 80,
    capacityRegistered: 63,
    description: 'Noche de inauguración con copa de bienvenida, diálogo con la artista y visualización en tiempo real de código generativo sincronizado con música ambiental andina.',
    highlights: [
      'Cóctel botánico de bienvenida y maridaje de café de origen',
      'Performance audiovisual de 30 minutos a las 8:00 pm',
      'Preventa exclusiva de serigrafías con 15% de beneficio para registrados'
    ],
    featuredArtists: ['Daniela Alarcón Vega', 'Colectivo Sintético'],
    visualColor: '#1D4ED8'
  },
  {
    id: 'ev-03',
    title: 'El Oficio del Bronce: Demostración de Pátinas al Fuego',
    subtitle: 'Taller Abierto y Conversatorio sobre la Escultura en Metal',
    curator: 'Camilo Santamaría Mora',
    dates: 'Sábado 11 de Abril, 2026 · 3:00 pm a 6:00 pm',
    startDate: '2026-04-11',
    endDate: '2026-04-11',
    location: 'Taller Abierto Galería Lumina · Patio Central',
    room: 'Pabellón de Fundición Demostrativa',
    accessType: 'Entrada Libre',
    priceCOP: 0,
    dressCode: 'Ropa cómoda apta para taller de escultura',
    parkingInfo: 'Zona de estacionamiento gratuito para bicicletas y autos en el campus',
    transitRoutes: 'SITP Paradero Bosque Popular Avenida Rojas',
    capacityMax: 60,
    capacityRegistered: 28,
    description: 'Una sesión práctica en la que el maestro Camilo Santamaría demostrará en vivo la aplicación de sales de cobre y sopletes para conseguir pátinas verdosas y turquesas sobre piezas escultóricas.',
    highlights: [
      'Demostración en directo con medidas de seguridad para espectadores',
      'Espacio abierto de preguntas y respuestas',
      'Muestra de maquetas y moldes de silicona previos'
    ],
    featuredArtists: ['Camilo Santamaría Mora'],
    visualColor: '#0E7490'
  }
];

export const COURSES_DATA: ArtCourse[] = [
  {
    id: 'cur-01',
    title: 'Técnicas de Óleo Tradicional y Veladuras Contemporáneas',
    instructorName: 'Valentina Restrepo Gil',
    instructorTitle: 'Maestra en Artes UNAL · Especialista en Conservación y Técnica Matérica',
    modality: '100% Presencial en Taller',
    durationWeeks: 6,
    totalHours: 24,
    schedule: 'Sábados de 9:00 am a 1:00 pm',
    startDate: 'Sábado 4 de Abril de 2026',
    priceCOP: 480000, // < $500.000 COP (Responde al presupuesto del 82%)
    seatsAvailable: 5,
    materialsIncluded: [
      'Set de 8 óleos de grado profesional (tubos de 40ml)',
      '2 lienzos de lino preparados de 40 × 50 cm',
      'Pinceles de cerda marta y sintéticos de precisión',
      'Esencias minerales y aceite de linaza purificado',
      'Paleta de madera noble y manual impreso'
    ],
    syllabus: [
      {
        sessionNumber: 1,
        title: 'La preparación del soporte y química del aglutinante',
        duration: '4 horas',
        topics: ['Tipos de telas y encolados', 'Imprimación magra vs grasa', 'Elaboración de gesso tradicional']
      },
      {
        sessionNumber: 2,
        title: 'Boceto tonal (Grisalla) y arquitectura de las luces',
        duration: '4 horas',
        topics: ['Monocromía en tierra de sombra', 'Gradientes de valor', 'Secado y capas base']
      },
      {
        sessionNumber: 3,
        title: 'La teoría del color matérico y paleta restringida',
        duration: '4 horas',
        topics: ['Primarios cálidos y fríos', 'Neutralización de tonos', 'Pigmentos opacos vs transparentes']
      },
      {
        sessionNumber: 4,
        title: 'Aplicación de veladuras y efectos ópticos',
        duration: '4 horas',
        topics: ['Medios de barnizado', 'Fórmula de resina veneciana', 'Luminosidad por transparencia']
      },
      {
        sessionNumber: 5,
        title: 'Empastes matéricos y texturas con espátula',
        duration: '4 horas',
        topics: ['Espesantes naturales', 'Uso de cargas minerales', 'Direccionalidad del trazo']
      },
      {
        sessionNumber: 6,
        title: 'Barnizado final, conservación y montaje profesional',
        duration: '4 horas',
        topics: ['Tiempos de oxidación del óleo', 'Barniz de retoque vs final', 'Presentación para exhibición']
      }
    ],
    certificationBadge: 'Diplomado de Extensión Práctica Avalado por Galería Lumina (24 horas presenciales)',
    targetLevel: 'Iniciación a Intermedio',
    description: 'Aprende los secretos ancestrales de la pintura al óleo adaptados al lenguaje estético moderno. No requieres experiencia previa: desarrollarás dos obras completas guiado paso a paso.',
    bannerColor: '#9A3412'
  },
  {
    id: 'cur-02',
    title: 'Acuarela Botánica y Cuaderno de Campo',
    instructorName: 'Mateo Echeverry Londoño',
    instructorTitle: 'Ilustrador Botánico Universidad de Caldas',
    modality: 'Modalidad Híbrida (Virtual + Taller)',
    durationWeeks: 4,
    totalHours: 16,
    schedule: 'Clases teóricas virtuales los Jueves 7:00 pm + 2 Salidas prácticas de campo los Sábados',
    startDate: 'Jueves 9 de Abril de 2026',
    priceCOP: 320000, // < $500.000 COP
    seatsAvailable: 8,
    materialsIncluded: [
      'Cuaderno de campo papel 100% algodón 300g tamaño A5',
      'Godete cerámico para mezclas',
      'Pincel recargable con depósito de agua',
      'Acceso vitalicio a la biblioteca de videos y guías botánicas en PDF'
    ],
    syllabus: [
      {
        sessionNumber: 1,
        title: 'Morfología vegetal y control del agua en papel',
        duration: '2.5 horas (Virtual en vivo)',
        topics: ['Húmedo sobre húmedo', 'Húmedo sobre seco', 'Anatomía de pétalos y nervaduras']
      },
      {
        sessionNumber: 2,
        title: 'Salida de campo: Bocetado en el Jardín Botánico',
        duration: '5 horas (Presencial Bogotá)',
        topics: ['Observación directa de flora altoandina', 'Captura de luz cambiante', 'Paleta de verdes naturales']
      },
      {
        sessionNumber: 3,
        title: 'Detalles hiperrealistas y capas de veladura fina',
        duration: '2.5 horas (Virtual en vivo)',
        topics: ['Texturas de hojas cerosas', 'Puntas secas con pincel fino Nº 00', 'Sombras cromáticas']
      },
      {
        sessionNumber: 4,
        title: 'Edición final y digitalización para portafolio',
        duration: '6 horas (Taller Lumina)',
        topics: ['Montaje en paspartú libre de ácido', 'Digitalización fotográfica en alta resolución', 'Entrega de certificados']
      }
    ],
    certificationBadge: 'Certificado de Asistencia y Acreditación de Habilidades Prácticas (16 horas)',
    targetLevel: 'Todos los niveles',
    description: 'La modalidad híbrida favorita de nuestros estudiantes: combina la comodidad de aprender teoría desde casa con salidas presenciales guiadas para pintar la flora bogotana.',
    bannerColor: '#2D5A27'
  },
  {
    id: 'cur-03',
    title: 'Arte Digital Generativo y Programación Creativa',
    instructorName: 'Daniela Alarcón Vega',
    instructorTitle: 'Curadora y Diseñadora de Medios Interactivos Ars Electronica',
    modality: 'Virtual a tu Propio Ritmo',
    durationWeeks: 5,
    totalHours: 20,
    schedule: 'Acceso 24/7 a la plataforma de video + Sesiones semanales de asesoría personalizada',
    startDate: 'Acceso Inmediato tras la Inscripción',
    priceCOP: 260000, // < $500.000 COP (Súper accesible)
    seatsAvailable: 25,
    materialsIncluded: [
      'Código fuente documentado en p5.js y Processing',
      'Archivos de configuración y presets exportables para impresión Fine Art',
      'Comunidad privada en Discord con retroalimentación semanal de la docente',
      'Guía técnica para enviar a imprimir en serigrafía o giclée'
    ],
    syllabus: [
      {
        sessionNumber: 1,
        title: 'Fundamentos de código creativo: Geometría, bucles y color computacional',
        duration: '4 horas (Módulos interactivos)',
        topics: ['Entorno web p5.js', 'Vectores y trigonometría visual', 'Ruido Perlin y aleatoriedad guiada']
      },
      {
        sessionNumber: 2,
        title: 'Sistemas caóticos y atractores matemáticos',
        duration: '4 horas',
        topics: ['Fractales naturales', 'Simulación de fluidos y vientos', 'Paletas armónicas automatizadas']
      },
      {
        sessionNumber: 3,
        title: 'Interactividad con el usuario y captura de audio',
        duration: '4 horas',
        topics: ['Generación reactiva a la voz', 'Controladores MIDI y teclado', 'Exportación vectorial SVG']
      },
      {
        sessionNumber: 4,
        title: 'Preparación para el mundo físico: De la pantalla a la galería',
        duration: '4 horas',
        topics: ['Resoluciones 300 DPI y perfiles CMYK', 'Soportes de algodón', 'Certificación de obra digital']
      },
      {
        sessionNumber: 5,
        title: 'Proyecto final y exhibición virtual colectiva',
        duration: '4 horas',
        topics: ['Curaduría de tu serie', 'Montaje en la galería digital Lumina', 'Revisión final de Daniela']
      }
    ],
    certificationBadge: 'Insignia Digital Verificable y Diploma Institucional Lumina',
    targetLevel: 'Iniciación (No requiere conocimientos previos de programación)',
    description: 'Domina las herramientas de arte algorítmico más demandadas a nivel internacional con lecciones grabadas en video 4K y acompañamiento directo en foros de discusión.',
    bannerColor: '#1E3A8A'
  }
];
