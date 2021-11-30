import React from 'react';
import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./Header.js'));
const Hero = lazy(() => import('./Hero.js'));
const Project = lazy(() => import('./Project.js'));
const Skill = lazy(() => import('./Skill.js'));
const Contact = lazy(() => import('./Contact.js'));
const About = lazy(() => import('./About.js'));

const Home = () => {

    return (
        <Suspense
            fallback={
                <div className='sk-folding-cube'>
                    <div className='sk-cube1 sk-cube'></div>
                    <div className='sk-cube2 sk-cube'></div>
                    <div className='sk-cube4 sk-cube'></div>
                    <div className='sk-cube3 sk-cube'></div>
                </div>
            }
        >
            <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
                <Header />
                <main>
                    <Hero />
                    <Project />
                    <About />
                    <Skill />
                    <Contact />
                </main>
            </div>
        </Suspense>
    );
};

export default Home;