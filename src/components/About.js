import React from 'react';

const About = () => {
    return (
        <section className='my-28  px-5 rounded-lg' id='about'>
            <header className='text-3xl font-bold py-5 '>
                <h2>About Me</h2>
            </header>
            <div className='lg:flex lg:flex-row items-center sm:flex sm:flex-col'>
                <div className='lg:p-20 sm:mb-10'>
                    <img className='rounded-2xl' src='https://i.ibb.co/8c1MLxg/prangan-img-1.jpg' alt="" />
                </div>
                <div className='lg:space-y-10 lg:w-1/3'>
                    <h2 className='font-bold  text-5xl sm:mb-10'>Web Developer</h2>
                    <p className='font-mono text-lg text-left text-yellow-300'>I am a proactive B.Tech Information Technology student of National Institute of Technology Durgapur with strong academic achievement and internship experience. Possess strong leadership and communication skills along with a considerable amount of knowledge regarding Web Development. Computer Communications, IT Support, Information Security & Applied Cryptography. My aim is to apply my technical skill-set and enhance my analytical skills for the development of myself and organization that I work with. I am now looking for a career advancement opportunity with a company that will allow me to develop my skills & potential.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
// <a href="https://ibb.co/zJqsT2V"><img src="https://i.ibb.co/8c1MLxg/prangan-img-1.jpg" alt="prangan-img-1" border="0"></a>