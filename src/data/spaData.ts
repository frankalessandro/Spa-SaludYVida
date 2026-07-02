/**
 * Data extraída de Spa Salud y Vida (spa-saludyvida) para reutilizar en un nuevo proyecto.
 * Fuente: src/data/servicesData.js, src/components/ServiciosPages/*.jsx,
 * src/components/NavbarWithMegaMenu.jsx, src/components/Footer.jsx, src/pages/Home.jsx
 *
 * Nota sobre precios: los "planes de precios" definidos dentro de cada página de servicio
 * (heroPricingPlans) a veces difieren de precio_por_sesion/precio_tratamiento_completo en
 * servicesData.js (ej. Drenajes: 60.000 en servicesData.js vs 200.000/1.200.000 en la página,
 * que parece copiado sin actualizar del template de Colonterapia). Se conservan ambos valores
 * tal cual existen en el código fuente.
 */

export type NivelInvasion = "Bajo" | "Medio" | "Alto";

export interface ServiceCore {
  slug: string;
  nombre: string;
  categoria: "facial" | "corporal" | "salud";
  descripcion_long?: string | null;
  descripcion_short: string;
  beneficios?: string[];
  contraindicaciones?: string | null;
  cuidados?: string | null;
  duracion?: string | null;
  precio_por_sesion: number;
  precio_tratamiento_completo?: string | number | null;
  edad_minima: number;
  edad_maxima: number;
  requiereConsulta: boolean;
  nivel_invasion: NivelInvasion;
  imagenes: {
    cover: string; // ruta relativa dentro de src/assets/img
    galeria?: string[]; // rutas relativas dentro de src/assets/img/<carpeta>
  };
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  icon: string; // nombre del icono lucide-react
}

export interface BenefitSlide {
  items: { text: string; icon: string }[];
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

export interface ServicePageContent {
  slug: string;
  heroEyebrow: string; // texto pequeño sobre el título, ej "Experiencia Exclusiva"
  heroTitle: string; // título gigante, ej "ULTHERAPY", "Plasma"
  heroSubtitle: string; // subtítulo, ej "Tecnología HIFU 7D"
  heroText: string; // párrafo bajo el subtítulo (typed text en algunos casos)
  introTitle: string; // título de la sección "Tratamiento Avanzado"
  introText: string;
  introTitleSecondary: string; // segundo bloque de texto en la misma sección
  introTextSecondary: string;
  timelineItems: TimelineItem[];
  timelineTitle: string;
  timelineDescription: string;
  benefitsSlider: BenefitSlide[];
  whyChooseUs: WhyChooseUsItem[];
  whyChooseUsIntro: string;
  pricingIntro: string;
  pricingPlans: PricingPlan[];
}

// ---------------------------------------------------------------------------
// SERVICIOS FACIALES
// ---------------------------------------------------------------------------

export const facialServices: ServiceCore[] = [
  {
    slug: "hifu",
    nombre: "HIFU 7D",
    categoria: "facial",
    descripcion_long:
      'Es un tratamiento que consigue los resultados de un "lifting facial" sin ningún tipo de cirugía. Consiste en la aplicación de un ultrasonido de alta frecuencia, localizando el calor que la maquina realiza y permite tocar la primera capa de la piel, produciendo una regeneración y estimulación de colágeno para un efecto tensor de la piel. Una técnica no invasiva, que trae múltiples ventajas.',
    descripcion_short:
      "Tratamiento no quirúrgico de ultrasonido para un efecto lifting en el rostro que estimula la producción de colágeno.",
    beneficios: ["Eleva", "Redefine", "Mejora flacidez y líneas de expresión", "Hidrata y produce colágeno"],
    contraindicaciones:
      "No tiene contraindicaciones significativas, pero puede causar enrojecimiento e inflamación leve que desaparece en dos días.",
    cuidados: "Evitar sol directo, piscina, jacuzzi y licor durante el tratamiento.",
    duracion: "1 hora y media",
    precio_por_sesion: 1000000,
    precio_tratamiento_completo: "2.000.000 a 2.500.000",
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Bajo",
    imagenes: {
      cover: "Hifu.jpg",
      galeria: ["hifu/hifu1.webp", "hifu/hifu2.webp", "hifu/hifu3.webp", "hifu/hifu4.webp"],
    },
  },
  {
    slug: "plasma",
    nombre: "Plasma",
    categoria: "facial",
    descripcion_long:
      "La técnica consiste en la extracción de plasma del propio paciente, que se inyecta en la zona deseada para lograr la regeneración celular de los tejidos y combatir los signos del envejecimiento. Un componente nutritivo que llevamos en la sangre.",
    descripcion_short:
      "Tratamiento con plasma del propio paciente para regenerar tejidos y combatir el envejecimiento.",
    beneficios: ["Estimula colágeno", "Mejora la luminosidad y tersura de la piel"],
    contraindicaciones: null,
    cuidados: "Evitar exposición solar directa, piscina y licor durante el tratamiento.",
    duracion: "30 a 40 minutos",
    precio_por_sesion: 200000,
    precio_tratamiento_completo: "2 a 4 sesiones recomendadas",
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Medio",
    imagenes: { cover: "Plasma.jpg" },
  },
  {
    slug: "dermapen",
    nombre: "Dermapen",
    categoria: "facial",
    descripcion_long:
      "Es una técnica totalmente aprobada con registro de INVIMA médico, que funciona mediante micropunciones en la piel, las que favorecen la entrada de los principios activos, los que según el tipo de piel, la especialista podrá incluir vitaminas, silicio, ácido hialurónico, etc. obligando a la misma a producir el colágeno para actuar en esas punciones.",
    descripcion_short:
      "Técnica aprobada por INVIMA que utiliza micropunciones para introducir principios activos y estimular la producción de colágeno.",
    beneficios: ["Reduce manchas", "Cicatrices", "Líneas de expresión", "Arrugas"],
    contraindicaciones: null,
    cuidados: null,
    duracion: null,
    precio_por_sesion: 300000,
    precio_tratamiento_completo: null,
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Medio",
    imagenes: { cover: "Dermapen.jpg" },
  },
];

// ---------------------------------------------------------------------------
// SERVICIOS CORPORALES
// ---------------------------------------------------------------------------

export const bodyServices: ServiceCore[] = [
  {
    slug: "criolipolisis",
    nombre: "Criolipolisis",
    categoria: "corporal",
    descripcion_long:
      "Es un tratamiento NO quirúrgico, que se realiza por medio de una aparatologia medica avanzada de nuestro spa, donde se trata por medio de enfriamiento controlado que realiza la máquina en la zona a tratar, previamente con una aplicación de una membrana anticongelante para un mejor resultado y con sus cuidados profesionales y posterior a ello se complementa con masajes corporales sobre la zona.",
    descripcion_short:
      "Tratamiento NO quirúrgico que se realiza mediante aparatología médica avanzada, usando enfriamiento controlado para eliminar grasa localizada.",
    beneficios: ["Elimina grasa localizada", "Mejora la flacidez", "Aporta colágeno", "Elimina celulitis y estrías"],
    contraindicaciones:
      "No tiene contraindicaciones significativas, posibles efectos leves como morados e inflamación que desaparecen en dos semanas.",
    cuidados: "Protegerse del sol y mantener una buena alimentación.",
    duracion: "1 hora",
    precio_por_sesion: 450000,
    precio_tratamiento_completo: "2.000.000 a 2.500.000",
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Bajo",
    imagenes: { cover: "Criolipolisis.jpg", galeria: ["criolipolisis/criolipolisis_bg.webp", "criolipolisis/criolipolisis_bg2.webp"] },
  },
  {
    slug: "max-muscle",
    nombre: "Max Muscle",
    categoria: "corporal",
    descripcion_long:
      "Es un tratamiento NO quirúrgico, que se realiza por medio de una aparatología medica avanzada de nuestro spa, donde se trata por medio de unas pulsaciones que realiza la maquina simulando abdominales que vuelve la grasa en músculo. Este tratamiento es un complemento para tus rutinas de ejercicio, si eres una persona activa físicamente, de lo contrario si tu interés va mas en eliminar grasa localizada y reducción de medidas se complementa con otro e nuestros servicios enfocados en ello.",
    descripcion_short:
      "Tratamiento no quirúrgico que simula abdominales y convierte grasa en músculo. Ideal como complemento para personas activas físicamente.",
    beneficios: ["Fortalece la piel", "Tonifica el cuerpo", "Disminuye grasa localizada", "Reduce flacidez"],
    contraindicaciones: "No recomendado si se tiene una hernia.",
    cuidados: "No requiere cuidados externos.",
    duracion: "30 minutos",
    precio_por_sesion: 200000,
    precio_tratamiento_completo: "1.000.000 a 2.000.000",
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Bajo",
    imagenes: { cover: "Max Muscle.jpg" },
  },
  {
    slug: "biosueros",
    nombre: "Biosueros",
    categoria: "corporal",
    descripcion_long:
      "Es un bioestiestimulante natural que se inyecta en el área a trabajar para que en complemento con las vitaminas y la aparatología medica lograr aumentar la masa muscular, reafirmar la piel y reducir la flacidez de la zona, logrando así un resultado natural, notorio y lindo en los glúteos.",
    descripcion_short:
      "Bioestimulante natural inyectado en la zona a tratar para aumentar masa muscular y reafirmar la piel, reduciendo la flacidez.",
    precio_por_sesion: 250000,
    precio_tratamiento_completo: "1.500.000",
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Medio",
    imagenes: { cover: "Biosueros.jpg" },
  },
  {
    slug: "tensamax",
    nombre: "Tensamax",
    categoria: "corporal",
    descripcion_long:
      "Es una tecnología avanzada de regeneración celular que se utiliza para la estimulación profunda de colágeno, se basa en la radiofrecuencia monopolar, un método que por medio de dos tipos de energía combinadas que realiza esta maquina consigue emitir un calor controlado sobre la piel proporcionando un efecto tensor de manera uniforme.",
    descripcion_short:
      "Tratamiento con radiofrecuencia monopolar que estimula profundamente el colágeno y regenera las células.",
    beneficios: ["Trata flacidez", "Fibrosis", "Celulitis", "Estimulación de colágeno", "Tensado y reafirmación de la piel"],
    cuidados: "Se recomienda usar una faja y aplicar crema hidratante para mejores resultados.",
    duracion: "20 minutos",
    precio_por_sesion: 120000,
    precio_tratamiento_completo: 600000,
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Bajo",
    imagenes: { cover: "Tensamax.jpg" },
  },
];

// ---------------------------------------------------------------------------
// CUIDA TU SALUD
// ---------------------------------------------------------------------------

export const healthServices: ServiceCore[] = [
  {
    slug: "colonterapia",
    nombre: "Colonterapia",
    categoria: "salud",
    descripcion_short:
      "Proceso mecánico de limpieza del intestino grueso utilizando un equipo avanzado y ozónico.",
    precio_por_sesion: 200000,
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Medio",
    imagenes: { cover: "Colonterapia.jpg", galeria: ["colonterapia/colon1.webp", "colonterapia/colon2.webp", "colonterapia/colon3.webp"] },
  },
  {
    slug: "drenajes",
    nombre: "Drenajes",
    categoria: "salud",
    descripcion_long:
      "Es un tratamiento que se usa para poder extraer los fluidos, como la sangre, de la parte del cuerpo del paciente que ha sido intervenida. ¿Para qué sirve? Principalmente para evitar la presión que pueda ejercer la acumulación de estos líquidos sobre la zona operada.",
    descripcion_short: "Tratamiento para extraer líquidos postquirúrgicos y reducir la acumulación en zonas operadas.",
    precio_por_sesion: 60000,
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: false,
    nivel_invasion: "Bajo",
    imagenes: { cover: "Drenajes.jpg", galeria: ["drenajes/drenaje1.webp", "drenajes/drenaje2.webp"] },
  },
];

export const allServices: ServiceCore[] = [...facialServices, ...bodyServices, ...healthServices];

// ---------------------------------------------------------------------------
// CONTENIDO DETALLADO DE CADA PÁGINA DE SERVICIO
// (proceso/timeline, slider de beneficios, "por qué escogernos", planes de precio
// mostrados en el hero de cada landing — extraído de src/components/ServiciosPages/*.jsx)
// ---------------------------------------------------------------------------

export const servicePagesContent: ServicePageContent[] = [
  {
    slug: "hifu",
    heroEyebrow: "Experiencia Exclusiva",
    heroTitle: "ULTHERAPY",
    heroSubtitle: "Tecnología HIFU 7D",
    heroText: "Mínima invasividad para combatir el envejecimiento",
    introTitle: "HIFU y renueva la piel sin cirugías.",
    introText:
      "Lift-!N es la más reciente tecnología estética HIFU (High-Intensity Focused Ultrasound) que focaliza toda su energía en un haz de ultrasonido de alta frecuencia a una zona específica de la piel, sin hacer incisiones o utilizar agujas en el paciente, con el fin de remodelar su tejido mediante ablación térmica.",
    introTitleSecondary: "Tratamiento HIFU Avanzado",
    introTextSecondary:
      "Lift-!N es la más reciente tecnología estética HIFU (High-Intensity Focused Ultrasound) que focaliza toda su energía en un haz de ultrasonido de alta frecuencia a una zona específica de la piel, sin hacer incisiones o utilizar agujas en el paciente, con el fin de remodelar su tejido mediante ablación térmica.",
    timelineTitle: "Proceso de Hifu 7d",
    timelineDescription: "Transformación paso a paso con tecnología avanzada",
    timelineItems: [
      {
        time: "Antes del Tratamiento",
        title: "Estado Inicial",
        description: "Signos visibles de envejecimiento y pérdida de elasticidad",
        features: ["Evaluación facial completa", "Análisis de elasticidad cutánea", "Plan personalizado de tratamiento"],
        icon: "Clock",
        benefits: ["Diagnóstico profesional", "Valoración sin compromiso", "Plan adaptado a tus necesidades"],
      },
      {
        time: "Durante el Proceso",
        title: "Aplicación HIFU",
        description: "Tratamiento no invasivo con ultrasonido focalizado de alta intensidad",
        features: ["Duración: 45-60 minutos", "Tecnología de última generación", "Proceso indoloro y seguro"],
        icon: "Star",
        benefits: ["Sin tiempo de recuperación", "Máxima precisión", "Confort durante el tratamiento"],
      },
      {
        time: "Primeras Semanas",
        title: "Evolución Visible",
        description: "Piel rejuvenecida, más firme y luminosa",
        features: ["Resultados progresivos", "Mejora en la textura", "Mayor firmeza facial"],
        icon: "ShieldCheck",
        benefits: ["Efecto natural", "Mejora continua", "Seguimiento profesional"],
      },
      {
        time: "Resultado Final",
        title: "Transformación Completa",
        description: "Rejuvenecimiento integral con resultados duraderos",
        features: ["Lifting natural sin cirugía", "Definición mejorada del contorno", "Piel revitalizada"],
        icon: "Award",
        benefits: ["Resultados duraderos", "Aspecto natural", "Satisfacción garantizada"],
      },
    ],
    benefitsSlider: [
      {
        items: [
          { text: "Rejuvenecimiento facial sin cirugía", icon: "Smile" },
          { text: "Tecnología HIFU avanzada", icon: "Cpu" },
          { text: "Resultados visibles", icon: "ScanEye" },
        ],
      },
      {
        items: [
          { text: "Sin tiempo de recuperación", icon: "History" },
          { text: "Tratamiento no invasivo", icon: "PersonStanding" },
          { text: "Estimulación de colágeno", icon: "HandCoins" },
        ],
      },
      {
        items: [
          { text: "Sin tiempo de recuperación", icon: "SmilePlus" },
          { text: "Tratamiento no invasivo", icon: "PersonStanding" },
          { text: "Estimulación de colágeno", icon: "HandCoins" },
        ],
      },
    ],
    whyChooseUsIntro: "Descubre por qué nuestro tratamiento HIFU 7D es la mejor elección para el cuidado de tu piel.",
    whyChooseUs: [
      { title: "Efectos de Lifting No Quirúrgico", description: "Logra una apariencia más juvenil al tensar y levantar la piel sin necesidad de cirugía." },
      { title: "Tecnología Avanzada", description: "Utilizamos el sistema HIFU 7D de última generación, reconocido por su eficacia y seguridad." },
      { title: "Resultados Personalizados", description: "Adaptamos cada tratamiento a las necesidades únicas de tu piel para garantizar el mejor resultado." },
      { title: "Experiencia Confiable", description: "Nuestro equipo está altamente capacitado, asegurando un tratamiento profesional y confortable." },
    ],
    pricingIntro: "Descubre nuestros exclusivos tratamientos premium",
    pricingPlans: [
      { title: "Sesión Individual", price: "$1,000,000", features: ["1 sesión completa de HIFU 7D", "Valoración personalizada", "Seguimiento post-tratamiento"] },
      { title: "Tratamiento Completo", price: "$2,500,000", features: ["Múltiples sesiones de HIFU 7D", "Plasma rico en plaquetas", "Limpieza facial profunda", "Plan de cuidado personalizado"] },
    ],
  },
  {
    slug: "plasma",
    heroEyebrow: "Renovación Holística",
    heroTitle: "Plasma",
    heroSubtitle: "Rejuvenecimiento Celular",
    heroText: "Revitaliza tu piel y promueve la regeneración celular con tratamientos de plasma no invasivos.",
    introTitle: "Plasma: Regenera tu piel de forma natural.",
    introText:
      "Nuestros tratamientos de plasma aprovechan el poder regenerativo de tu propio cuerpo, estimulando la producción de colágeno y elastina sin necesidad de cirugías ni procedimientos invasivos. Ideal para rejuvenecer y revitalizar tu piel de manera holística.",
    introTitleSecondary: "Tratamiento Regenerativo con Plasma",
    introTextSecondary:
      "Descubre el poder del plasma en la estética holística: un tratamiento avanzado que utiliza tu propio plasma para estimular la regeneración celular, revitalizar tu piel y mejorar su textura sin cirugías ni procedimientos invasivos.",
    timelineTitle: "Proceso de Regeneración con Plasma",
    timelineDescription: "Revitalización paso a paso con tratamientos naturales y efectivos",
    timelineItems: [
      {
        time: "Antes del Tratamiento",
        title: "Estado Inicial",
        description: "Signos visibles de envejecimiento y pérdida de elasticidad",
        features: ["Evaluación facial completa", "Análisis de elasticidad cutánea", "Plan personalizado de tratamiento"],
        icon: "Clock",
        benefits: ["Diagnóstico profesional", "Valoración sin compromiso", "Plan adaptado a tus necesidades"],
      },
      {
        time: "Durante el Proceso",
        title: "Aplicación HIFU",
        description: "Tratamiento no invasivo con ultrasonido focalizado de alta intensidad",
        features: ["Duración: 45-60 minutos", "Tecnología de última generación", "Proceso indoloro y seguro"],
        icon: "Star",
        benefits: ["Sin tiempo de recuperación", "Máxima precisión", "Confort durante el tratamiento"],
      },
      {
        time: "Primeras Semanas",
        title: "Evolución Visible",
        description: "Piel rejuvenecida, más firme y luminosa",
        features: ["Resultados progresivos", "Mejora en la textura", "Mayor firmeza facial"],
        icon: "ShieldCheck",
        benefits: ["Efecto natural", "Mejora continua", "Seguimiento profesional"],
      },
      {
        time: "Resultado Final",
        title: "Transformación Completa",
        description: "Rejuvenecimiento integral con resultados duraderos",
        features: ["Lifting natural sin cirugía", "Definición mejorada del contorno", "Piel revitalizada"],
        icon: "Award",
        benefits: ["Resultados duraderos", "Aspecto natural", "Satisfacción garantizada"],
      },
    ],
    benefitsSlider: [
      {
        items: [
          { text: "Estimulación de colágeno y elastina", icon: "Smile" },
          { text: "Técnica aprobada con registro médico INVIMA", icon: "Cpu" },
          { text: "Regeneración celular y rejuvenecimiento", icon: "ScanEye" },
        ],
      },
      {
        items: [
          { text: "Piel más tersa y luminosa", icon: "History" },
          { text: "Tratamiento no invasivo y seguro", icon: "PersonStanding" },
          { text: "Mejora visible desde los primeros días", icon: "HandCoins" },
        ],
      },
      {
        items: [
          { text: "Sin tiempo de recuperación", icon: "SmilePlus" },
          { text: "Reducción de signos de envejecimiento", icon: "PersonStanding" },
          { text: "Resultados óptimos con 2-4 sesiones recomendadas", icon: "HandCoins" },
        ],
      },
    ],
    whyChooseUsIntro:
      "Descubre por qué nuestros tratamientos con plasma regenerativo son la mejor elección para revitalizar y cuidar tu piel de manera natural.",
    whyChooseUs: [
      { title: "Regeneración Celular Natural", description: "Promovemos la renovación celular utilizando tu propio plasma, garantizando resultados efectivos y naturales." },
      { title: "Técnicas No Invasivas", description: "Nuestros tratamientos con plasma se realizan sin procedimientos quirúrgicos, respetando tu bienestar integral." },
      { title: "Resultados Personalizados", description: "Diseñamos cada terapia de plasma según las necesidades específicas de tu piel y objetivos estéticos." },
      { title: "Ambiente Relajante y Seguro", description: "Disfruta de un entorno holístico y profesional, ideal para tu comodidad y recuperación." },
    ],
    pricingIntro: "Descubre nuestros exclusivos tratamientos premium",
    pricingPlans: [
      { title: "Sesión Individual", price: "$200,000", features: ["1 sesión completa de PLASMA", "Valoración personalizada", "Seguimiento post-tratamiento"] },
      { title: "Tratamiento Completo", price: "$500,000", features: ["Múltiples sesiones de PLASMA", "Plasma rico en plaquetas", "Limpieza facial profunda", "Plan de cuidado personalizado"] },
    ],
  },
  {
    slug: "dermapen",
    heroEyebrow: "Renovación Holística",
    heroTitle: "Dermapen",
    heroSubtitle: "Rejuvenecimiento Natural",
    heroText: "Estimula la regeneración natural de la piel y mejora su textura con nuestro tratamiento de microneedling.",
    introTitle: "Dermapen: Rejuvenece tu piel de forma natural.",
    introText:
      "Nuestro tratamiento con Dermapen estimula la regeneración natural de la piel, promoviendo la producción de colágeno y elastina sin necesidad de cirugías ni procedimientos invasivos. Ideal para revitalizar tu piel y mejorar su textura de manera holística.",
    introTitleSecondary: "Tratamiento Regenerativo con Dermapen",
    introTextSecondary:
      "Descubre el poder del microneedling en la estética holística: un tratamiento avanzado que utiliza microagujas para estimular la regeneración celular, revitalizar tu piel y mejorar su textura sin cirugías ni procedimientos invasivos.",
    timelineTitle: "Proceso de Regeneración con Dermapen",
    timelineDescription: "Revitalización paso a paso con tratamientos naturales y efectivos",
    timelineItems: [
      {
        time: "Antes del Tratamiento",
        title: "Evaluación Inicial",
        description: "Análisis de la piel y preparación para el tratamiento con Dermapen.",
        features: ["Consulta personalizada", "Evaluación de la salud de la piel", "Plan de tratamiento adaptado"],
        icon: "Clock",
        benefits: ["Diagnóstico detallado", "Plan exclusivo según tus necesidades", "Preparación integral para resultados óptimos"],
      },
      {
        time: "Durante el Proceso",
        title: "Aplicación de Dermapen",
        description: "Tratamiento de microneedling para estimular la regeneración de la piel.",
        features: ["Duración: 45-60 minutos", "Técnica mínimamente invasiva", "Proceso indoloro con anestesia tópica"],
        icon: "Star",
        benefits: ["Poco tiempo de recuperación", "Estimulación de colágeno y elastina", "Confort durante el tratamiento"],
      },
      {
        time: "Primeras Semanas",
        title: "Evolución Progresiva",
        description: "Resultados visibles con piel más firme, luminosa y rejuvenecida.",
        features: ["Mejora en la textura y tono de la piel", "Reducción de poros dilatados", "Aumento de la elasticidad"],
        icon: "ShieldCheck",
        benefits: ["Resultados naturales y progresivos", "Piel más suave y uniforme", "Seguimiento personalizado"],
      },
      {
        time: "Resultado Final",
        title: "Rejuvenecimiento Completo",
        description: "Transformación duradera con una piel revitalizada y rejuvenecida.",
        features: ["Textura y firmeza mejoradas", "Reducción de líneas y cicatrices", "Aspecto natural y saludable"],
        icon: "Award",
        benefits: ["Resultados duraderos", "Mejor calidad de piel", "Satisfacción garantizada"],
      },
    ],
    benefitsSlider: [
      {
        items: [
          { text: "Estimulación natural de colágeno y elastina", icon: "Smile" },
          { text: "Técnica aprobada y segura con registro médico", icon: "Cpu" },
          { text: "Mejora de la textura y firmeza de la piel", icon: "ScanEye" },
        ],
      },
      {
        items: [
          { text: "Piel más luminosa y rejuvenecida", icon: "History" },
          { text: "Tratamiento mínimamente invasivo y cómodo", icon: "PersonStanding" },
          { text: "Resultados visibles en las primeras semanas", icon: "HandCoins" },
        ],
      },
      {
        items: [
          { text: "Sin tiempo de recuperación prolongado", icon: "SmilePlus" },
          { text: "Reducción de cicatrices y poros dilatados", icon: "PersonStanding" },
          { text: "Recomendado en sesiones personalizadas", icon: "HandCoins" },
        ],
      },
    ],
    whyChooseUsIntro:
      "Descubre por qué nuestros tratamientos con plasma regenerativo son la mejor elección para revitalizar y cuidar tu piel de manera natural. (nota: texto copiado del template de Plasma, sin actualizar en el código fuente)",
    whyChooseUs: [
      { title: "Regeneración Natural de la Piel", description: "Nuestro tratamiento con Dermapen promueve la renovación celular y la producción de colágeno de manera natural." },
      { title: "Técnica Mínimamente Invasiva", description: "El Dermapen es seguro y no requiere cirugía, respetando la integridad y bienestar de tu piel." },
      { title: "Resultados Adaptados a Ti", description: "Cada tratamiento se personaliza según las características de tu piel y tus objetivos estéticos." },
      { title: "Ambiente Holístico y Relajante", description: "Disfruta de un entorno de spa que favorece tu relajación y bienestar durante el tratamiento." },
    ],
    pricingIntro: "Descubre nuestros exclusivos tratamientos de microneedling para revitalizar tu piel",
    pricingPlans: [
      { title: "Sesión Individual", price: "$300,000", features: ["1 sesión completa de Dermapen", "Valoración personalizada", "Seguimiento post-tratamiento"] },
      { title: "Tratamiento Completo", price: "$600,000", features: ["Múltiples sesiones de Dermapen", "Plasma rico en plaquetas", "Limpieza facial profunda", "Plan de cuidado personalizado"] },
    ],
  },
  {
    slug: "criolipolisis",
    heroEyebrow: "Renovación Corporal",
    heroTitle: "Criolipólisis",
    heroSubtitle: "Reducción Natural de Grasa",
    heroText: "Reduce la grasa localizada y esculpe tu cuerpo de manera no invasiva con nuestro tratamiento de criolipólisis.",
    introTitle: "Criolipólisis: Reducción de Grasa de Forma Natural.",
    introText:
      "Nuestro tratamiento de criolipólisis elimina la grasa localizada de manera no invasiva, utilizando tecnología de frío controlado para esculpir y definir tu cuerpo sin necesidad de cirugías. Ideal para reducir áreas específicas de grasa y mejorar tu contorno de forma holística.",
    introTitleSecondary: "Tratamiento Regenerativo con Criolipólisis",
    introTextSecondary:
      "Descubre el poder de la Criolipólisis, un tratamiento avanzado de escultura corporal que utiliza el frío para eliminar grasa de manera no invasiva. Este proceso estimula la reducción de tejido graso y mejora la definición corporal, dejando tu piel más firme y tonificada. Ideal para esculpir tu figura y obtener resultados naturales sin necesidad de cirugías.",
    timelineTitle: "Proceso de Escultura Corporal con Criolipólisis",
    timelineDescription: "Reducción de grasa y tonificación de la piel con tratamientos avanzados y no invasivos",
    timelineItems: [
      {
        time: "Antes del Tratamiento",
        title: "Evaluación Inicial",
        description: "Análisis de áreas a tratar y preparación para el tratamiento de criolipólisis.",
        features: ["Consulta personalizada", "Evaluación de la zona a tratar", "Plan de tratamiento adaptado"],
        icon: "Clock",
        benefits: ["Diagnóstico detallado", "Plan exclusivo según tus necesidades", "Preparación integral para resultados óptimos"],
      },
      {
        time: "Durante el Proceso",
        title: "Aplicación de Criolipólisis",
        description: "Tratamiento no invasivo que utiliza frío controlado para reducir la grasa localizada.",
        features: ["Duración: 60-90 minutos por zona", "Tecnología de enfriamiento avanzado", "Proceso cómodo y sin anestesia"],
        icon: "Star",
        benefits: ["Sin tiempo de recuperación", "Reducción de grasa de forma natural", "Confort durante el tratamiento"],
      },
      {
        time: "Primeras Semanas",
        title: "Evolución Progresiva",
        description: "Resultados visibles con reducción de grasa y contorno más definido.",
        features: ["Pérdida gradual de grasa", "Mejora en la textura de la piel", "Zona tratada más tonificada"],
        icon: "ShieldCheck",
        benefits: ["Resultados naturales y progresivos", "Reducción de grasa localizada", "Seguimiento personalizado"],
      },
      {
        time: "Resultado Final",
        title: "Transformación Completa",
        description: "Resultados duraderos con un contorno corporal más esculpido y saludable.",
        features: ["Reducción de grasa efectiva", "Mejora en la firmeza y apariencia de la piel", "Resultados visibles en pocas semanas"],
        icon: "Award",
        benefits: ["Resultados duraderos", "Aspecto natural y saludable", "Satisfacción garantizada"],
      },
    ],
    benefitsSlider: [
      {
        items: [
          { text: "Estimulación natural de colágeno y elastina", icon: "Smile" },
          { text: "Técnica aprobada y segura con registro médico", icon: "Cpu" },
          { text: "Mejora de la textura y firmeza de la piel", icon: "ScanEye" },
        ],
      },
      {
        items: [
          { text: "Piel más luminosa y rejuvenecida", icon: "History" },
          { text: "Tratamiento mínimamente invasivo y cómodo", icon: "PersonStanding" },
          { text: "Resultados visibles en las primeras semanas", icon: "HandCoins" },
        ],
      },
      {
        items: [
          { text: "Sin tiempo de recuperación prolongado", icon: "SmilePlus" },
          { text: "Reducción de cicatrices y poros dilatados", icon: "PersonStanding" },
          { text: "Recomendado en sesiones personalizadas", icon: "HandCoins" },
        ],
      },
    ],
    whyChooseUsIntro:
      "Descubre por qué nuestros tratamientos de Criolipólisis son la mejor elección para esculpir y revitalizar tu cuerpo de manera natural y efectiva.",
    whyChooseUs: [
      { title: "Escultura Corporal Natural", description: "Nuestros tratamientos de Criolipólisis ayudan a esculpir y definir el contorno corporal de manera natural, reduciendo la grasa localizada." },
      { title: "Tecnología No Invasiva", description: "La Criolipólisis es un procedimiento seguro y sin cirugía que actúa de forma precisa para eliminar grasa sin dañar los tejidos circundantes." },
      { title: "Resultados Visibles y Duraderos", description: "Cada sesión de Criolipólisis ofrece resultados progresivos que se mantienen a largo plazo, mejorando la forma de tu cuerpo de manera natural." },
      { title: "Bienestar Integral", description: "Disfruta de un entorno relajante y profesional que prioriza tu comodidad y optimiza tu experiencia durante el tratamiento." },
    ],
    pricingIntro:
      "Redescubre la vitalidad de tu piel con nuestros exclusivos tratamientos de microneedling, diseñados para estimular la regeneración natural y mejorar la textura de forma no invasiva. (nota: texto copiado del template de Dermapen, sin actualizar en el código fuente)",
    pricingPlans: [
      { title: "Sesión Individual", price: "$450,000", features: ["1 sesión completa de Criolipólisis", "Valoración personalizada", "Seguimiento post-tratamiento"] },
      { title: "Tratamiento Completo", price: "$2,500,000", features: ["Múltiples sesiones de Criolipólisis", "Plasma rico en plaquetas", "Limpieza facial profunda", "Plan de cuidado personalizado"] },
    ],
  },
  {
    slug: "max-muscle",
    heroEyebrow: "Potencia y Rendimiento",
    heroTitle: "MaxMuscle",
    heroSubtitle: "Fortalecimiento y Tonificación para tu Cuerpo",
    heroText: "MaxMuscle potencia tu fuerza y resistencia, estimulando la regeneración muscular de forma no invasiva.",
    introTitle: "MaxMuscle: Fuerza y Rendimiento Natural para tu Cuerpo.",
    introText:
      "Tratamiento no invasivo que utiliza tecnología avanzada y bioestimulantes para fortalecer y tonificar los músculos.",
    introTitleSecondary: "Tratamiento Regenerativo con MaxMuscle",
    introTextSecondary:
      "MaxMuscle estimula la regeneración y fortalecimiento de las fibras musculares mediante tecnología avanzada, mejorando resistencia, fuerza y tonicidad sin necesidad de cirugía.",
    timelineTitle: "Proceso de Fortalecimiento y Recuperación con MaxMuscle",
    timelineDescription: "Estimulación natural de los músculos y mejora de la resistencia con tratamientos avanzados y no invasivos",
    timelineItems: [
      {
        time: "Antes del Tratamiento",
        title: "Evaluación Inicial",
        description: "Análisis de la salud muscular y planificación para la aplicación de MaxMuscle, un tratamiento de estimulación y fortalecimiento.",
        features: ["Consulta personalizada", "Evaluación de la condición muscular", "Plan de tratamiento adaptado"],
        icon: "Clock",
        benefits: ["Diagnóstico detallado", "Plan exclusivo según tus objetivos de entrenamiento", "Preparación integral para resultados óptimos"],
      },
      {
        time: "Durante el Proceso",
        title: "Aplicación de MaxMuscle",
        description: "Tratamiento no invasivo que utiliza tecnología avanzada y bioestimulantes para fortalecer y revitalizar los músculos.",
        features: ["Duración: 45-60 minutos", "Formulación específica de MaxMuscle", "Proceso cómodo y relajante"],
        icon: "Star",
        benefits: ["Sin tiempo de recuperación", "Estimulación de la producción de colágeno y desarrollo muscular", "Confort durante el tratamiento"],
      },
      {
        time: "Primeras Semanas",
        title: "Evolución Progresiva",
        description: "Resultados visibles con músculos más firmes, tonificados y energizados.",
        features: ["Mejora en la resistencia y fuerza muscular", "Reducción de la fatiga muscular", "Tonificación y revitalización"],
        icon: "ShieldCheck",
        benefits: ["Resultados naturales y progresivos", "Músculos más firmes y saludables", "Seguimiento personalizado"],
      },
      {
        time: "Resultado Final",
        title: "Transformación Completa",
        description: "Resultados duraderos con músculos revitalizados, más fuertes y energizados.",
        features: ["Estimulación de la regeneración y fortaleza muscular", "Aumento de la resistencia y tonicidad", "Resultados visibles y sostenibles"],
        icon: "Award",
        benefits: ["Resultados duraderos", "Aspecto natural y saludable", "Satisfacción garantizada"],
      },
    ],
    benefitsSlider: [
      {
        items: [
          { text: "Fortalecimiento muscular efectivo", icon: "Smile" },
          { text: "Tratamiento con MaxMuscle para optimizar el rendimiento", icon: "Cpu" },
          { text: "Mejora visible de la fuerza y resistencia muscular", icon: "ScanEye" },
        ],
      },
      {
        items: [
          { text: "Músculos revitalizados y tonificados", icon: "History" },
          { text: "Tratamiento no invasivo y relajante", icon: "PersonStanding" },
          { text: "Resultados visibles en pocas sesiones", icon: "HandCoins" },
        ],
      },
      {
        items: [
          { text: "Sin tiempo de recuperación", icon: "SmilePlus" },
          { text: "Estimulación natural de la regeneración muscular", icon: "PersonStanding" },
          { text: "Tratamientos personalizados para tus objetivos", icon: "HandCoins" },
        ],
      },
    ],
    whyChooseUsIntro:
      "Descubre por qué nuestros tratamientos con MAX MUSCLE son la mejor elección para fortalecer y tonificar tus músculos de manera natural y efectiva.",
    whyChooseUs: [
      { title: "Fortalecimiento y Tonificación Muscular", description: "MaxMuscle está diseñado para estimular el crecimiento y fortalecimiento muscular, mejorando la resistencia y el rendimiento de forma natural." },
      { title: "Estimulación Avanzada de la Regeneración", description: "La tecnología de MaxMuscle potencia la regeneración de las fibras musculares, apoyando la recuperación y el desarrollo de la fuerza." },
      { title: "Resultados Rápidos y Duraderos", description: "Este tratamiento permite una mejora visible en la fuerza, resistencia y tonificación muscular, con efectos prolongados en el tiempo." },
      { title: "Tratamiento Seguro y No Invasivo", description: "MaxMuscle es una opción completamente segura, no invasiva y diseñada para proporcionar una experiencia cómoda y efectiva." },
    ],
    pricingIntro:
      "Redescubre la vitalidad y potencia de tu cuerpo con nuestros exclusivos tratamientos de MaxMuscle, formulados para estimular la musculatura y mejorar la recuperación de forma no invasiva, aumentando la resistencia, fuerza y bienestar general para una apariencia más tonificada y saludable.",
    pricingPlans: [
      { title: "Sesión Individual", price: "$200,000", features: ["1 sesión de tratamiento MAX MUSCLE", "Valoración personalizada", "Seguimiento post-tratamiento"] },
      { title: "Tratamiento Completo", price: "$1,500,000 - $2,000,000", features: ["Múltiples sesiones de tratamiento MAX MUSCLE", "Plasma rico en plaquetas", "Limpieza facial profunda", "Plan de cuidado personalizado"] },
    ],
  },
  {
    slug: "biosueros",
    heroEyebrow: "Renovación Holística",
    heroTitle: "Biosueros",
    heroSubtitle: "Hidratación y Vitalidad para tu Piel",
    heroText: "Hidrata y regenera tu piel con nuestros biosueros, mejorando su textura, firmeza y luminosidad de forma natural y no invasiva.",
    introTitle: "Biosueros: Hidratación y Vitalidad para tu Piel.",
    introText:
      "Nuestros biosueros están formulados para hidratar y revitalizar la piel en profundidad, estimulando su regeneración natural sin cirugías ni procedimientos invasivos.",
    introTitleSecondary: "Tratamiento Regenerativo con Criolipólisis",
    introTextSecondary:
      "(nota: título/párrafo copiado literalmente del template de Criolipólisis, sin actualizar en el código fuente original)",
    timelineTitle: "Proceso de Regeneración con Biosueros",
    timelineDescription: "Revitalización paso a paso con tratamientos naturales y efectivos",
    timelineItems: [
      {
        time: "Antes del Tratamiento",
        title: "Evaluación Inicial",
        description: "Análisis de la piel y preparación para la aplicación de biosueros regenerativos.",
        features: ["Consulta personalizada", "Evaluación de la salud de la piel", "Plan de tratamiento adaptado"],
        icon: "Clock",
        benefits: ["Diagnóstico detallado", "Plan exclusivo según tus necesidades", "Preparación integral para resultados óptimos"],
      },
      {
        time: "Durante el Proceso",
        title: "Aplicación de Biosueros",
        description: "Tratamiento no invasivo que utiliza sueros naturales y enriquecidos para revitalizar y nutrir la piel.",
        features: ["Duración: 45-60 minutos", "Formulación de biosueros con ingredientes específicos", "Proceso cómodo y relajante"],
        icon: "Star",
        benefits: ["Sin tiempo de recuperación", "Estimulación de la regeneración celular", "Confort durante el tratamiento"],
      },
      {
        time: "Primeras Semanas",
        title: "Evolución Progresiva",
        description: "Resultados visibles con piel más luminosa, hidratada y rejuvenecida.",
        features: ["Mejora en la textura y elasticidad", "Reducción de signos de envejecimiento", "Hidratación profunda y prolongada"],
        icon: "ShieldCheck",
        benefits: ["Resultados naturales y progresivos", "Piel más suave y saludable", "Seguimiento personalizado"],
      },
      {
        time: "Resultado Final",
        title: "Transformación Completa",
        description: "Resultados duraderos con una piel revitalizada, fresca y rejuvenecida.",
        features: ["Regeneración celular estimulada", "Aumento de la firmeza y luminosidad", "Resultados visibles y sostenibles"],
        icon: "Award",
        benefits: ["Resultados duraderos", "Aspecto natural y saludable", "Satisfacción garantizada"],
      },
    ],
    benefitsSlider: [
      {
        items: [
          { text: "Hidratación profunda y duradera", icon: "Smile" },
          { text: "Biosueros enriquecidos con ingredientes naturales", icon: "Cpu" },
          { text: "Mejora visible de la textura y luminosidad de la piel", icon: "ScanEye" },
        ],
      },
      {
        items: [
          { text: "Piel revitalizada y rejuvenecida", icon: "History" },
          { text: "Tratamiento no invasivo y relajante", icon: "PersonStanding" },
          { text: "Resultados visibles en pocas sesiones", icon: "HandCoins" },
        ],
      },
      {
        items: [
          { text: "Sin tiempo de recuperación", icon: "SmilePlus" },
          { text: "Estimulación natural de la regeneración celular", icon: "PersonStanding" },
          { text: "Tratamientos adaptados a tus necesidades", icon: "HandCoins" },
        ],
      },
    ],
    whyChooseUsIntro:
      "Descubre por qué nuestros tratamientos con biosueros son la mejor elección para revitalizar y nutrir tu piel de manera natural y efectiva.",
    whyChooseUs: [
      { title: "Hidratación Profunda y Natural", description: "Nuestros biosueros están formulados para penetrar profundamente en la piel, proporcionando una hidratación intensa y duradera de forma natural." },
      { title: "Ingredientes Naturales y Potentes", description: "Utilizamos biosueros enriquecidos con extractos y nutrientes naturales para revitalizar la piel, estimulando su regeneración y salud." },
      { title: "Mejora de la Textura y Luminosidad", description: "Los biosueros ayudan a suavizar la piel, mejorar su textura y devolverle un brillo saludable y radiante en poco tiempo." },
      { title: "Tratamiento Relajante y No Invasivo", description: "Nuestros tratamientos con biosueros son completamente seguros, no invasivos y están diseñados para ofrecerte una experiencia relajante y placentera." },
    ],
    pricingIntro: "Descubre nuestros exclusivos tratamientos premium",
    pricingPlans: [
      { title: "Sesión Individual", price: "$250,000", features: ["1 sesión de tratamiento con biosueros", "Valoración personalizada", "Seguimiento post-tratamiento"] },
      { title: "Tratamiento Completo", price: "$1,500,000", features: ["Múltiples sesiones de tratamiento con biosueros", "Plasma rico en plaquetas", "Limpieza facial profunda", "Plan de cuidado personalizado"] },
    ],
  },
  {
    slug: "tensamax",
    heroEyebrow: "Renovación Holística",
    heroTitle: "TensaMax",
    heroSubtitle: "Tensión y Firmeza para tu Piel",
    heroText: "Reafirma tu piel con biosueros y bioestimulantes que activan la producción de colágeno de forma natural.",
    introTitle: "TensaMax: Firmeza y Juventud Natural para tu Piel.",
    introText:
      "TensaMax utiliza biosueros enriquecidos y bioestimulantes para reafirmar la piel y estimular la producción de colágeno de forma no invasiva.",
    introTitleSecondary: "Tratamiento Regenerativo con TensaMax",
    introTextSecondary:
      "Descubre el poder de TensaMax: un tratamiento avanzado que utiliza biosueros para estimular la regeneración celular, revitalizar tu piel y mejorar su firmeza sin cirugías ni procedimientos invasivos.",
    timelineTitle: "Proceso de Reafirmación con TensaMax",
    timelineDescription: "Tonificación paso a paso con tratamientos naturales y efectivos",
    timelineItems: [
      {
        time: "Antes del Tratamiento",
        title: "Evaluación Inicial",
        description: "Análisis de la piel y preparación para la aplicación de TensaMax, un tratamiento de reafirmación y regeneración.",
        features: ["Consulta personalizada", "Evaluación de la salud de la piel", "Plan de tratamiento adaptado"],
        icon: "Clock",
        benefits: ["Diagnóstico detallado", "Plan exclusivo según tus necesidades", "Preparación integral para resultados óptimos"],
      },
      {
        time: "Durante el Proceso",
        title: "Aplicación de TensaMax",
        description: "Tratamiento no invasivo que utiliza biosueros enriquecidos y bioestimulantes para revitalizar y tonificar la piel.",
        features: ["Duración: 45-60 minutos", "Formulación específica de TensaMax", "Proceso cómodo y relajante"],
        icon: "Star",
        benefits: ["Sin tiempo de recuperación", "Estimulación de la producción de colágeno y elastina", "Confort durante el tratamiento"],
      },
      {
        time: "Primeras Semanas",
        title: "Evolución Progresiva",
        description: "Resultados visibles con piel más firme, hidratada y rejuvenecida.",
        features: ["Mejora en la textura y elasticidad", "Reducción de signos de envejecimiento", "Hidratación profunda y prolongada"],
        icon: "ShieldCheck",
        benefits: ["Resultados naturales y progresivos", "Piel más suave y saludable", "Seguimiento personalizado"],
      },
      {
        time: "Resultado Final",
        title: "Transformación Completa",
        description: "Resultados duraderos con una piel revitalizada, fresca y tonificada.",
        features: ["Estimulación de la regeneración celular", "Aumento de la firmeza y luminosidad", "Resultados visibles y sostenibles"],
        icon: "Award",
        benefits: ["Resultados duraderos", "Aspecto natural y saludable", "Satisfacción garantizada"],
      },
    ],
    benefitsSlider: [
      {
        items: [
          { text: "Hidratación profunda y duradera", icon: "Smile" },
          { text: "Biosueros TensaMax enriquecidos con ingredientes naturales", icon: "Cpu" },
          { text: "Mejora visible de la firmeza y luminosidad de la piel", icon: "ScanEye" },
        ],
      },
      {
        items: [
          { text: "Piel revitalizada, tonificada y rejuvenecida", icon: "History" },
          { text: "Tratamiento no invasivo y relajante", icon: "PersonStanding" },
          { text: "Resultados visibles en pocas sesiones", icon: "HandCoins" },
        ],
      },
      {
        items: [
          { text: "Sin tiempo de recuperación", icon: "SmilePlus" },
          { text: "Estimulación natural de la regeneración celular", icon: "PersonStanding" },
          { text: "Tratamientos adaptados a tus necesidades", icon: "HandCoins" },
        ],
      },
    ],
    whyChooseUsIntro:
      "Descubre por qué nuestros tratamientos con TENSAMAX son la mejor elección para revitalizar y fortalecer tu piel de manera natural y efectiva.",
    whyChooseUs: [
      { title: "Tensión y Firmeza Rejuvenecida", description: "TensaMax está diseñado para estimular la producción de colágeno y elastina, proporcionando una piel más firme y elástica de forma natural." },
      { title: "Estimulación Avanzada de Colágeno", description: "La tecnología de TensaMax potencia la regeneración de colágeno, mejorando la estructura de la piel y restaurando su juventud." },
      { title: "Resultados Inmediatos y Duraderos", description: "Este tratamiento permite una mejora visible en la firmeza y elasticidad de la piel, con resultados que se mantienen a lo largo del tiempo." },
      { title: "Tratamiento Seguro y No Invasivo", description: "TensaMax es una opción completamente segura, no invasiva y diseñada para proporcionar una experiencia confortable y eficaz." },
    ],
    pricingIntro: "Descubre nuestros exclusivos tratamientos premium",
    pricingPlans: [
      { title: "Sesión Individual", price: "$120,000", features: ["1 sesión de tratamiento con TENSAMAX"] },
      { title: "Tratamiento Completo", price: "$600,000", features: ["6 sesiones de tratamiento con TENSAMAX"] },
    ],
  },
  {
    slug: "colonterapia",
    heroEyebrow: "Renovación Holística",
    heroTitle: "Colonterapia",
    heroSubtitle: "Limpieza y Bienestar Interno",
    heroText: "Elimina toxinas acumuladas y mejora tu digestión con nuestro tratamiento de colonterapia con agua filtrada.",
    introTitle: "Colonterapia: Bienestar y Limpieza Interna.",
    introText:
      "Nuestra colonterapia realiza una limpieza suave y profunda del colon utilizando agua filtrada, ayudando a eliminar toxinas y mejorar la digestión de forma segura y no invasiva.",
    introTitleSecondary: "Tratamiento Holístico con Colonterapia",
    introTextSecondary:
      "Descubre el poder de la Colonterapia: un tratamiento que utiliza un equipo avanzado y ozónico para limpiar el intestino grueso, mejorar la digestión y aumentar tu vitalidad de forma natural.",
    timelineTitle: "Proceso de Colonterapia",
    timelineDescription: "Desintoxicación y bienestar digestivo paso a paso",
    timelineItems: [
      {
        time: "Antes del Tratamiento",
        title: "Evaluación Inicial",
        description: "Consulta inicial para evaluar la salud digestiva y definir el plan personalizado de colonterapia.",
        features: ["Consulta personalizada", "Evaluación del sistema digestivo", "Plan adaptado a tus necesidades"],
        icon: "Clock",
        benefits: ["Diagnóstico detallado", "Plan exclusivo según tus objetivos de bienestar", "Preparación integral para mejores resultados"],
      },
      {
        time: "Durante el Proceso",
        title: "Sesión de Colonterapia",
        description: "Limpieza suave del colon con agua filtrada, ayudando a eliminar toxinas acumuladas y mejorar la digestión.",
        features: ["Duración: 45-60 minutos", "Procedimiento cómodo y seguro", "Atención en un ambiente relajante"],
        icon: "Star",
        benefits: ["Eliminación efectiva de toxinas", "Mejora en la salud digestiva", "Confort durante el tratamiento"],
      },
      {
        time: "Primeras Semanas",
        title: "Evolución Progresiva",
        description: "Mejoras visibles en la digestión, reducción de hinchazón y aumento de energía.",
        features: ["Digestión más eficiente", "Reducción de molestias abdominales", "Incremento en vitalidad"],
        icon: "ShieldCheck",
        benefits: ["Resultados naturales y progresivos", "Mejora del bienestar general", "Seguimiento personalizado"],
      },
      {
        time: "Resultado Final",
        title: "Bienestar Completo",
        description: "Resultados duraderos con un sistema digestivo limpio y equilibrado, mejorando la salud general.",
        features: ["Colon desintoxicado", "Incremento de energía y vitalidad", "Bienestar integral"],
        icon: "Award",
        benefits: ["Resultados duraderos", "Equilibrio digestivo y energético", "Satisfacción garantizada"],
      },
    ],
    benefitsSlider: [
      {
        items: [
          { text: "Eliminación eficaz de toxinas", icon: "Smile" },
          { text: "Mejora en la digestión y absorción de nutrientes", icon: "Cpu" },
          { text: "Reducción de hinchazón abdominal", icon: "ScanEye" },
        ],
      },
      {
        items: [
          { text: "Mayor sensación de energía y vitalidad", icon: "History" },
          { text: "Procedimiento seguro y no invasivo", icon: "PersonStanding" },
          { text: "Relajación en un entorno confortable", icon: "HandCoins" },
        ],
      },
      {
        items: [
          { text: "Sistema digestivo equilibrado", icon: "SmilePlus" },
          { text: "Apoyo para un estilo de vida saludable", icon: "PersonStanding" },
          { text: "Tratamientos adaptados a tus necesidades", icon: "HandCoins" },
        ],
      },
    ],
    whyChooseUsIntro:
      "Descubre por qué nuestros tratamientos de colonterapia son la mejor elección para revitalizar y mejorar tu bienestar digestivo y corporal de manera natural y efectiva.",
    whyChooseUs: [
      { title: "Desintoxicación Eficiente", description: "Nuestra colonterapia ayuda a eliminar residuos acumulados, favoreciendo un sistema digestivo más limpio y saludable." },
      { title: "Mejora de la Digestión", description: "El tratamiento está diseñado para optimizar la función intestinal, promoviendo la absorción de nutrientes esenciales." },
      { title: "Energía y Bienestar", description: "Experimenta un aumento en la vitalidad gracias a un colon equilibrado y libre de toxinas." },
      { title: "Tratamiento Seguro y Relajante", description: "La colonterapia es un procedimiento no invasivo y seguro, realizado en un ambiente cómodo y profesional." },
    ],
    pricingIntro: "Descubre nuestros exclusivos tratamientos premium",
    pricingPlans: [
      { title: "Sesión Individual", price: "$200,000", features: ["1 sesión completa de colonterapia"] },
      { title: "Tratamiento Completo", price: "$1,200,000", features: ["Múltiples sesiones de colonterapia"] },
    ],
  },
  {
    slug: "drenajes",
    heroEyebrow: "Renovación Holística",
    heroTitle: "Drenajes",
    heroSubtitle: "Limpieza y Bienestar Interno",
    heroText: "Activa tu sistema linfático y elimina líquidos retenidos con nuestro tratamiento de drenaje.",
    introTitle: "Drenajes: Bienestar y Renovación Interna.",
    introText:
      "Nuestro tratamiento de drenaje linfático utiliza técnicas de masaje suave para activar la circulación linfática y eliminar toxinas y líquidos retenidos de forma segura y no invasiva.",
    introTitleSecondary: "Tratamiento Holístico con Drenajes",
    introTextSecondary:
      "Descubre el poder del drenaje linfático: un tratamiento que estimula el sistema linfático mediante movimientos rítmicos y específicos, mejorando la circulación y reduciendo la retención de líquidos.",
    timelineTitle: "Proceso de Drenaje Linfático",
    timelineDescription: "Desintoxicación y bienestar corporal paso a paso",
    timelineItems: [
      {
        time: "Antes del Tratamiento",
        title: "Evaluación Inicial",
        description: "Análisis de la condición del sistema linfático y preparación para la sesión de drenaje.",
        features: ["Consulta personalizada", "Evaluación de la salud y necesidades del cuerpo", "Plan de tratamiento adaptado"],
        icon: "Clock",
        benefits: ["Diagnóstico detallado", "Plan exclusivo según tus necesidades", "Preparación integral para resultados óptimos"],
      },
      {
        time: "Durante el Proceso",
        title: "Sesión de Drenaje Linfático",
        description: "Tratamiento no invasivo que utiliza técnicas de masaje suave para activar el sistema linfático y eliminar toxinas.",
        features: ["Duración: 45-60 minutos", "Movimientos rítmicos y específicos", "Proceso cómodo y relajante"],
        icon: "Star",
        benefits: ["Sin tiempo de recuperación", "Estimulación de la circulación linfática", "Confort durante el tratamiento"],
      },
      {
        time: "Primeras Semanas",
        title: "Evolución Progresiva",
        description: "Resultados visibles con una reducción de la hinchazón y una sensación general de ligereza y bienestar.",
        features: ["Mejora en la circulación y drenaje de líquidos", "Reducción de la retención de líquidos", "Sensación de mayor ligereza y bienestar"],
        icon: "ShieldCheck",
        benefits: ["Resultados naturales y progresivos", "Piel más suave y saludable", "Seguimiento personalizado"],
      },
      {
        time: "Resultado Final",
        title: "Transformación Completa",
        description: "Resultados duraderos con un cuerpo más equilibrado, libre de toxinas y revitalizado.",
        features: ["Estimulación de la regeneración y equilibrio corporal", "Aumento de la circulación y alivio de la pesadez", "Resultados visibles y sostenibles"],
        icon: "Award",
        benefits: ["Resultados duraderos", "Bienestar general mejorado", "Satisfacción garantizada"],
      },
    ],
    benefitsSlider: [
      {
        items: [
          { text: "Eliminación de toxinas y líquidos retenidos", icon: "Smile" },
          { text: "Mejora en la circulación y reducción de la hinchazón", icon: "Cpu" },
          { text: "Relajación y bienestar general", icon: "ScanEye" },
        ],
      },
      {
        items: [
          { text: "Aumento de la energía y vitalidad", icon: "History" },
          { text: "Tratamiento seguro y no invasivo", icon: "PersonStanding" },
          { text: "Entorno cómodo y relajante", icon: "HandCoins" },
        ],
      },
      {
        items: [
          { text: "Estimulación del sistema linfático", icon: "SmilePlus" },
          { text: "Apoyo a un estilo de vida equilibrado", icon: "PersonStanding" },
          { text: "Tratamientos personalizados según tus necesidades", icon: "HandCoins" },
        ],
      },
    ],
    whyChooseUsIntro:
      "Descubre por qué nuestros tratamientos de drenaje son la mejor elección para revitalizar y mejorar tu bienestar corporal y digestivo de manera natural y efectiva.",
    whyChooseUs: [
      { title: "Desintoxicación Natural", description: "Nuestros drenajes ayudan a eliminar líquidos y toxinas, promoviendo una limpieza profunda y natural del cuerpo." },
      { title: "Mejora de la Circulación", description: "El tratamiento favorece la circulación sanguínea, reduciendo la hinchazón y contribuyendo a una piel más saludable." },
      { title: "Mayor Energía y Vitalidad", description: "Los drenajes ayudan a restaurar la energía, dejando el cuerpo más ligero y renovado." },
      { title: "Tratamiento Seguro y Relajante", description: "El drenaje es un procedimiento no invasivo, realizado en un ambiente relajante y profesional para tu comodidad." },
    ],
    pricingIntro: "Descubre nuestros exclusivos tratamientos premium",
    pricingPlans: [
      // Nota: estos precios del hero de la página ($200,000 / $1,200,000) NO coinciden con
      // precio_por_sesion=60000 en servicesData.js; parece copiado del template de Colonterapia
      // sin actualizar. Se deja el valor tal como aparece en el código fuente.
      { title: "Sesión Individual", price: "$200,000", features: ["1 sesión completa de drenaje"] },
      { title: "Tratamiento Completo", price: "$1,200,000", features: ["Múltiples sesiones de drenaje"] },
    ],
  },
];

// ---------------------------------------------------------------------------
// NAVEGACIÓN / CATEGORÍAS (extraído de NavbarWithMegaMenu.jsx)
// ---------------------------------------------------------------------------

export interface NavMenuItem {
  title: string;
  description: string;
  icon: string; // nombre del icono lucide-react
  to: string; // ruta de la SPA
}

export const facialServicesMenu: NavMenuItem[] = [
  { title: "HIFU 7D", description: "Tratamiento no quirúrgico de ultrasonido para un lifting facial y estimulación de colágeno.", icon: "Waves", to: "/hifu-7d" },
  { title: "Plasma", description: "Inyección de plasma para regenerar tejidos y combatir el envejecimiento.", icon: "FlaskConical", to: "/plasma" },
  { title: "Dermapen", description: "Micropunciones para estimular la producción de colágeno y mejorar la textura de la piel.", icon: "Scan", to: "/dermapen" },
];

export const bodyServicesMenu: NavMenuItem[] = [
  { title: "Criolipolisis", description: "Tratamiento no quirúrgico para eliminar grasa localizada mediante enfriamiento controlado.", icon: "Snowflake", to: "/criolipolisis" },
  { title: "Max Muscle", description: "Simula abdominales y convierte grasa en músculo. Ideal para complementar el ejercicio.", icon: "Trophy", to: "/max-muscle" },
  { title: "Biosueros", description: "Bioestimulante inyectado para aumentar masa muscular y reafirmar la piel.", icon: "ThermometerSun", to: "/biosueros" },
  { title: "Tensamax", description: "Radiofrecuencia monopolar para regenerar colágeno y reafirmar la piel.", icon: "Radio", to: "/tensamax" },
];

export const healthServicesMenu: NavMenuItem[] = [
  { title: "Colonterapia", description: "Limpieza profunda del intestino grueso para mejorar la salud digestiva.", icon: "Brain", to: "/colonterapia" },
  { title: "Drenajes", description: "Tratamiento postquirúrgico para eliminar líquidos acumulados y reducir inflamación.", icon: "Droplets", to: "/drenajes" },
];

// ---------------------------------------------------------------------------
// INFORMACIÓN DEL NEGOCIO (extraído de Footer.jsx, WhatsappButton.jsx, Home.jsx)
// ---------------------------------------------------------------------------

export const businessInfo = {
  nombre: "Spa Salud y Vida",
  whatsapp: "https://wa.me/573226030044",
  horarios: {
    lunesAViernes: ["8:00 AM - 12:00 PM", "3:00 PM - 7:00 PM"],
    sabado: "8:00 AM - 12:00 PM",
    domingo: "Cerrado",
  },
  procesoReserva: [
    { step: 1, title: "Busca el servicio que deseas" },
    { step: 2, title: "Envíanos un mensaje por WhatsApp" },
    { step: 3, title: "Una asesora te guiará paso a paso" },
  ],
  serviciosHolisticosDestacados: [
    { title: "Masajes Terapéuticos", description: "Técnicas ancestrales para equilibrar cuerpo y mente" },
    { title: "Terapias Energéticas", description: "Restaura tu campo energético y vitalidad" },
    { title: "Medicina Natural", description: "Tratamientos naturales personalizados" },
  ],
  heroTaglines: [
    "Moldea tu figura con tecnología de última generación.",
    "Resultados visibles y duraderos sin cirugía.",
    "La excelencia en tratamientos corporales no invasivos.",
  ],
};
