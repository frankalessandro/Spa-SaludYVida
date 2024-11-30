import React, { useEffect, useRef, useState } from 'react';
import { PersonIcon, TimerIcon, HobbyKnifeIcon, ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import '../css/SliderMain.css';
import { Link } from 'react-router-dom';

export const SliderMain = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const slides = [
        {
            imgClass: 'img6',  // imagen de Biosueros
            ReqConsulta: 'Si',
            title: 'Biosueros',
            description: 'Es un bioestiestimulante natural que se inyecta en el área a trabajar para que en complemento con las vitaminas y la aparatología médica logre aumentar la masa muscular, reafirmar la piel y reducir la flacidez de la zona, logrando así un resultado natural, notorio y lindo en los glúteos.',
            edadMinima: '15 años',
            invasion: 'Media',
            duracion: 'Indefinida',
            link: '/biosueros'
        },
        {
            imgClass: 'img1', // imagen de Colonterapia
            ReqConsulta: 'Si',
            title: 'Colonterapia',
            description: 'Proceso mecánico de limpieza del intestino grueso, utilizando un equipo avanzado y ozónico para mejorar la función digestiva y eliminar toxinas acumuladas.',
            edadMinima: '15 años',
            invasion: 'Media',
            duracion: 'Variable',
            link: '/colonterapia'
        },
        {
            imgClass: 'img2', // imagen de Criolipolisis
            ReqConsulta: 'Si',
            title: 'Criolipolisis',
            description: 'Tratamiento NO quirúrgico que usa aparatología médica avanzada y enfriamiento controlado en la zona a tratar para eliminar grasa localizada. La aplicación de una membrana anticongelante asegura mejores resultados, complementándose con masajes corporales.',
            edadMinima: '15 años',
            invasion: 'Baja',
            duracion: '1 hora',
            link: '/criolipolisis'
        },
        {
            imgClass: 'img3', // imagen de Dermapen
            ReqConsulta: 'Si',
            title: 'Dermapen',
            description: 'Técnica aprobada por INVIMA que utiliza micropunciones para favorecer la entrada de principios activos como vitaminas y ácido hialurónico, estimulando la producción de colágeno y mejorando la textura de la piel.',
            edadMinima: '15 años',
            invasion: 'Medio',
            duracion: 'Variable',
            link: '/dermapen'
        },
        {
            imgClass: 'img4', // imagen de Drenajes
            ReqConsulta: 'No',
            title: 'Drenajes',
            description: 'Tratamiento postquirúrgico que extrae líquidos acumulados en zonas intervenidas para reducir la presión y ayudar en el proceso de recuperación de la piel y los tejidos.',
            edadMinima: '15 años',
            invasion: 'Baja',
            duracion: 'Variable',
            link: '/drenajes'
        },
        {
            imgClass: 'img5', // imagen de Plasma
            ReqConsulta: 'Si',
            title: 'Plasma',
            description: 'La técnica consiste en la extracción de plasma del propio paciente, que se inyecta en la zona deseada para lograr la regeneración celular de los tejidos y combatir los signos del envejecimiento. Un componente nutritivo que llevamos en la sangre.',
            edadMinima: '15 años',
            invasion: 'Medio',
            duracion: '30 a 40 minutos',
            link: '/plasma'
        },
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');

        const moveNext = () => {
            if (slider && slider.children.length > 0 && !isSliding) {
                setIsSliding(true);
                slider.appendChild(slider.firstElementChild);
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setTimeout(() => setIsSliding(false), 500);
            }
        };

        const movePrev = () => {
            if (slider && slider.children.length > 0 && !isSliding) {
                setIsSliding(true);
                slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
                setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                setTimeout(() => setIsSliding(false), 500);
            }
        };

        nextBtn.addEventListener('click', moveNext);
        prevBtn.addEventListener('click', movePrev);

        const interval = setInterval(moveNext, 15000);

        return () => {
            clearInterval(interval);
            nextBtn.removeEventListener('click', moveNext);
            prevBtn.removeEventListener('click', movePrev);
        };
    }, [isSliding, slides.length]);

    return (
        <div className="container lg:max-w-screen-2xl max-w-[100vw]">
            <section className='content-info relative'>
                <div className="container-title text-white relative">
                    <span className='text-white'>Nuestros Tratamientos</span>
                    <div className="buttons">
                        <span className="text-textDark prev"><ChevronLeftIcon width={30} height={30} /></span>
                        <span className="next"><ChevronRightIcon width={30} height={30} /></span>
                    </div>
                </div>
                <div className={`text-textWhite content ${isSliding ? '' : 'active'}`}>
                    <span className='text-md'>{slides[currentSlide].title}</span>
                    <span className='md:text-9xl' style={{fontSize:'.8em'}}>{slides[currentSlide].ReqConsulta === 'Si' ? 'Requiere consulta' : 'No requiere consulta'}</span>
                    <div className="btn-info">
                        <div className="btn-info-child text-textWhite"><TimerIcon width={30} height={30} /><div className='child-info'><div>Tiempo:</div><div>{slides[currentSlide].duracion}</div></div></div>
                        <div className="btn-info-child text-textWhite"><HobbyKnifeIcon width={30} height={30} /><div className='child-info'><div>Invasión:</div><div>{slides[currentSlide].invasion}</div></div></div>
                        <div className="btn-info-child text-textWhite"><PersonIcon width={30} height={30} /><div className='child-info'><div>Edad Mínima:</div><div>{slides[currentSlide].edadMinima}</div></div></div>
                    </div>
                    <div className='content-descr text-[.8em]'><div>{slides[currentSlide].description}</div></div>
                    <div className='container-btn-showmore'>
                        <Link to={slides[currentSlide].link}>
                            <button className='content-btn'>Saber más</button>
                        </Link>
                    </div>
                </div>
            </section>
            <div className="slider" ref={sliderRef}>
                {slides.map((slide, index) => (
                    <div key={index} className={`slides ${slide.imgClass}`} />
                ))}
            </div>
        </div>
    );
};
