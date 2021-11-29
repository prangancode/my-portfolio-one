import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Hero = () => {
    const container = useRef(null);

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./astronaout.json'),
        });
        animate.setSpeed(0.5);
    }, []);

    return (
        <section className='my-16 px-5 md:my-32 sm:flex sm:flex-col md:flex md:flex-row-reverse lg:flex lg:flex-row-reverse  flex-wrap space-y-16 md:space-y-0 patterns'>
            <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
                <div className='container' ref={container}></div>
            </div>
            <div className='max-w-md mb-auto space-y-5'>
                <h1 className='text-5xl font-bold md:text-7xl'>Hello. I’m Prangan</h1>
                <p className='tracking-wide leading-relaxed pb-4'>
                    I have a passion for developing user-friendly, accessible and responsive websites. I never stop learning and for me, each new project is another adventure.{' '}
                </p>
                <a href="mailto:prangan.sen1@gmail.com" target="_blank" rel="noreferrer">
                    <button class="bg-indigo-500 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Hire Me</span>
                    </button>
                </a>
                <a href="./Prangan Sen Resume.pdf" download>
                    <button class="bg-red-500 hover:bg-grey text-grey-darkest font-bold py-2 mx-3 px-4 rounded inline-flex items-center">
                        <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download Resume</span>
                    </button>
                </a>
            </div>

        </section>
    );
};

export default Hero;