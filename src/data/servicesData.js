import {
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";

import imgHifu from '../assets/img/Hifu.jpg';
import imgPlasma from '../assets/img/Plasma.jpg';
import imgDermapen from '../assets/img/Dermapen.jpg';
import imgCriolipolisis from '../assets/img/Criolipolisis.jpg';
import imgMaxMuscle from '../assets/img/Max Muscle.jpg';
import imgBiosueros from '../assets/img/Biosueros.jpg';
import imgTensamax from '../assets/img/Tensamax.jpg';
import imgColonterapia from '../assets/img/Colonterapia.jpg';
import imgDrenajes from '../assets/img/Drenajes.jpg';

export const facialServices = [
    {
        nombre: "HIFU 7D",
        descripcion_long: 'Es un tratamiento que consigue los resultados de un “lifting facial” sin ningún tipo de cirugía. Consiste en la aplicación de un ultrasonido de alta frecuencia, localizando el calor que la maquina realiza y permite tocar la primera capa de la piel, Produciendo una regeneración y estimulación de colágeno para un efecto tensor de la piel. Una técnica no invasiva, que trae múltiples ventajas. ',
        descripcion_short: "Tratamiento no quirúrgico de ultrasonido para un efecto lifting en el rostro que estimula la producción de colágeno.",
        beneficios: ["Eleva", "Redefine", "Mejora flacidez y líneas de expresión", "Hidrata y produce colágeno"],
        contraindicaciones: "No tiene contraindicaciones significativas, pero puede causar enrojecimiento e inflamación leve que desaparece en dos días.",
        cuidados: "Evitar sol directo, piscina, jacuzzi y licor durante el tratamiento.",
        duracion: "1 hora y media",
        precio_por_sesion: 1000000,
        precio_tratamiento_completo: "2.000.000 a 2.500.000",
        cover_img: imgHifu, 
        icon: SunIcon,
        edad_minima: 15,
        edad_maxima: 65,
        ReqConsulta: 'Si',
        nivel_invasion: "Bajo",
    },
    {
        nombre: "Plasma",
        descripcion_long: 'La técnica consiste en la extracción de plasma del propio paciente, que se inyecta en la zona deseada para lograr la regeneración celular de los tejidos y combatir los signos del envejecimiento. Un componente nutritivo que llevamos en la sangre.',
        descripcion_short: "Tratamiento con plasma del propio paciente para regenerar tejidos y combatir el envejecimiento.",
        beneficios: ["Estimula colágeno", "Mejora la luminosidad y tersura de la piel"],
        contraindicaciones: null,
        cuidados: "Evitar exposición solar directa, piscina y licor durante el tratamiento.",
        duracion: "30 a 40 minutos",
        precio_por_sesion: 200000,
        precio_tratamiento_completo: "2 a 4 sesiones recomendadas",
        cover_img: imgPlasma, 
        icon: GlobeAmericasIcon,
        edad_minima: 15,
        edad_maxima: 65,
        ReqConsulta: 'Si',
        nivel_invasion: "Medio",
    },
    {
        nombre: "Dermapen",
        descripcion_long: 'Es una técnica totalmente aprobada con registro de INVIMA médico, que funciona mediante micropunciones en la piel, las que favorecen la entrada de los principios activos, los que según el tipo de piel, la especialista podrá incluir vitaminas, silicio, ácido hialurónico, etc. obligando a la misma a producir el colágeno para actuar en esas punciones.',
        descripcion_short: "Técnica aprobada por INVIMA que utiliza micropunciones para introducir principios activos y estimular la producción de colágeno.",
        beneficios: ["Reduce manchas", "Cicatrices", "Líneas de expresión", "Arrugas"],
        contraindicaciones: null,
        cuidados: null,
        duracion: null,
        precio_por_sesion: 300000,
        precio_tratamiento_completo: null,
        cover_img: imgDermapen, 
        icon: TagIcon,
        edad_minima: 15,
        edad_maxima: 65,
        ReqConsulta: 'Si',
        nivel_invasion: "Medio",
    }
];

export const bodyServices = [
    {
        nombre: "Criolipolisis",
        descripcion_long: 'Es un tratamiento NO quirúrgico, que se realiza por medio de una aparatologia medica avanzada de nuestro spa, donde se trata por medio de enfriamiento controlado que realiza la máquina en la zona a tratar, previamente con una aplicación de una membrana anticongelante para un mejor resultado y con sus cuidados profesionales y posterior a ello se complementa con masajes corporales sobre la zona.',
        descripcion_short: "Tratamiento NO quirúrgico que se realiza mediante aparatología médica avanzada, usando enfriamiento controlado para eliminar grasa localizada.",
        beneficios: ["Elimina grasa localizada", "Mejora la flacidez", "Aporta colágeno", "Elimina celulitis y estrías"],
        contraindicaciones: "No tiene contraindicaciones significativas, posibles efectos leves como morados e inflamación que desaparecen en dos semanas.",
        cuidados: "Protegerse del sol y mantener una buena alimentación.",
        duracion: "1 hora",
        precio_por_sesion: 450000,
        precio_tratamiento_completo: "2.000.000 a 2.500.000",
        cover_img: imgCriolipolisis, 
        icon: Bars4Icon,
        edad_minima: 15,
        edad_maxima: 65,
        ReqConsulta: 'Si',
        nivel_invasion: "Bajo",
    },
    {
        nombre: "Max Muscle",
        descripcion_long: 'Es un tratamiento NO quirúrgico, que se realiza por medio de una aparatología medica avanzada de nuestro spa, donde se trata por medio de unas pulsaciones que realiza la maquina simulando abdominales que vuelve la grasa en músculo. Este tratamiento es un complemento para tus rutinas de ejercicio, si eres una persona activa físicamente, de lo contrario si tu interés va mas en eliminar grasa localizada y reducción de medidas se complementa con otro e nuestros servicios enfocados en ello.',
        descripcion_short: "Tratamiento no quirúrgico que simula abdominales y convierte grasa en músculo. Ideal como complemento para personas activas físicamente.",
        beneficios: ["Fortalece la piel", "Tonifica el cuerpo", "Disminuye grasa localizada", "Reduce flacidez"],
        contraindicaciones: "No recomendado si se tiene una hernia.",
        cuidados: "No requiere cuidados externos.",
        duracion: "30 minutos",
        precio_por_sesion: 200000,
        precio_tratamiento_completo: "1.000.000 a 2.000.000",
        cover_img: imgMaxMuscle, 
        icon: RectangleGroupIcon,
        edad_minima: 15,
        edad_maxima: 65,
        ReqConsulta: 'Si',
        nivel_invasion: "Bajo",
    },
    {
        nombre: "Biosueros",
        descripcion_long: 'Es un bioestiestimulante natural que se inyecta en el área a trabajar para que en complemento con las vitaminas y la aparatología medica lograr aumentar la masa muscular, reafirmar la piel y reducir la flacidez de la zona, logrando así un resultado natural, notorio y lindo en los glúteos.',
        descripcion_short: "Bioestimulante natural inyectado en la zona a tratar para aumentar masa muscular y reafirmar la piel, reduciendo la flacidez.",
        precio_por_sesion: 250000,
        precio_tratamiento_completo: "1.500.000",
        cover_img: imgBiosueros, 
        icon: TagIcon,
        edad_minima: 15,
        edad_maxima: 65,
        ReqConsulta: 'Si',
        nivel_invasion: "Medio",
    },
    {
        nombre: "Tensamax",
        descripcion_long: 'Es una tecnología avanzada de regeneración celular que se utiliza para la estimulación profunda de colágeno, se basa en la radiofrecuencia monopolar, un método que por medio de dos tipos de energía combinadas que realiza esta maquina consigue emitir un calor controlado sobre la piel proporcionando un efecto tensor de manera uniforme.',
        descripcion_short: "Tratamiento con radiofrecuencia monopolar que estimula profundamente el colágeno y regenera las células.",
        beneficios: ["Trata flacidez", "Fibrosis", "Celulitis", "Estimulación de colágeno", "Tensado y reafirmación de la piel"],
        cuidados: "Se recomienda usar una faja y aplicar crema hidratante para mejores resultados.",
        duracion: "20 minutos",
        precio_por_sesion: 120000,
        precio_tratamiento_completo: 600000,
        cover_img: imgTensamax, 
        icon: TagIcon,
        edad_minima: 15,
        edad_maxima: 65,
        ReqConsulta: 'Si',
        nivel_invasion: "Bajo",
    }
];

export const healthServices = [
    {
        nombre: "Colonterapia",
        descripcion_short: "Proceso mecánico de limpieza del intestino grueso utilizando un equipo avanzado y ozónico.",
        precio_por_sesion: 200000,
        cover_img: imgColonterapia, 
        icon: RectangleGroupIcon,
        edad_minima: 15,
        edad_maxima: 65,
        ReqConsulta: 'Si',
        nivel_invasion: "Medio",
    },
    {
        nombre: "Drenajes",
        descripcion_long: 'Es un tratamiento que se usa para poder extraer los fluidos, como la sangre, de la parte del cuerpo del paciente que ha sido intervenida. ¿Para qué sirve? Principalmente para evitar la presión que pueda ejercer la acumulación de estos líquidos sobre la zona operada.',
        descripcion_short: "Tratamiento para extraer líquidos postquirúrgicos y reducir la acumulación en zonas operadas.",
        precio_por_sesion: 60000,
        cover_img: imgDrenajes, 
        icon: UserGroupIcon,
        edad_minima: 15,
        edad_maxima: 65,
        ReqConsulta: 'No',
        nivel_invasion: "Bajo",
    }
];
