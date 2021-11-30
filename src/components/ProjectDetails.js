import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { projectid } = useParams();
    const [projects, setProjects] = useState([]);
    const [singleProjectDetails, setSingleProjectDetails] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/prangancode/portfolio-one-projectDetails/main/projectDetails.JSON')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
    useEffect(() => {
        const getService = projects.find(projectDetails => projectDetails.id == projectid);
        console.log(getService);
        setSingleProjectDetails(getService);
    }, [projectid, projects]);
    return (
        <section className='sm:my-10 md:my-15 lg:my-28 px-5 lg:w-2/3 mx-auto'>
            <div className="lg:grid lg:grid-cols-2 gap-20">
                <div className="col-span-1">
                    <img className='mx-auto sm:mb-10 lg:mb-0' src={singleProjectDetails?.image_url} alt="" />
                </div>
                <div className="col-span-1">

                    <div >
                        <h1 className='font-semibold mx-auto pb-5 sm:text-2xl lg:text-3xl'>
                            {singleProjectDetails?.title}</h1>
                        <h2 className=' sm:font-semibold sm:pt-0 sm:text-md sm:text-justify sm:w-5/6 lg:text-xl sm:pb-5 lg:pb-10'> {singleProjectDetails?.description}</h2>
                        <div className='flex overflow-auto space-x-3 pb-2'>
                            {singleProjectDetails?.tools?.map((disc, index) => (
                                <span className='border border-gray-500 px-2 py-1 rounded-lg sm:text-base lg:text-xl' key={index}>
                                    {disc}
                                </span>
                            ))}
                        </div>
                        <div>
                            <h2 className=' sm:font-semibold sm:pt-5 sm:text-xl sm:text-justify sm:w-5/6 lg:text-2xl text-indigo-600 mb-5'>
                                <a href={singleProjectDetails?.link} target='_blank' rel='noreferrer'>Click Here to Preview Site</a>
                            </h2>
                            <div className="">
                                <span className=' sm:font-semibold sm:pt-5 sm:text-lg sm:text-justify sm:w-5/6 lg:text-xl text-red-400'>
                                    <a href={singleProjectDetails?.github_client} target='_blank' rel='noreferrer'>[GitHub Client Repo]</a>
                                </span>
                                {singleProjectDetails?.github_server && <span className=' sm:font-semibold sm:pt-5 sm:text-lg sm:text-justify sm:w-5/6 lg:text-xl mx-5 text-red-400'>
                                    <a href={singleProjectDetails?.github_server} target='_blank' rel='noreferrer'>[GitHub Server Repo]</a>
                                </span>}
                            </div>
                        </div>
                        <div>
                            <h2 className=' sm:font-semibold sm:pt-5 sm:text-md sm:text-justify sm:w-5/6 lg:text-xl sm:pb-0 lg:pb-0 italic'>Here are some key features :</h2>
                            <h2 className=' sm:font-semibold sm:pt-5 sm:text-lg sm:text-justify sm:w-5/6 lg:text-2xl pb-10'>  {singleProjectDetails?.description_details?.map((disc, index) => (
                                <p className='px-2 py-3 rounded-lg sm:text-base lg:text-xl ' key={index}>
                                    {disc}
                                </p>
                            ))}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;

// <a href="https://ibb.co/tzPCDrg"><img src="https://i.ibb.co/kJ6cXCj/niche-product-screenshot1.jpg" alt="niche-product-screenshot1" border="0"></a>

// <a href="https://ibb.co/tPZhqKb"><img src="https://i.ibb.co/VpHNg9v/tourism-website-cf4cd-web-app.jpg" alt="tourism-website-cf4cd-web-app" border="0"></a>

// <a href="https://ibb.co/8cY5Lgq"><img src="https://i.ibb.co/Zm28pz5/healthcare-website-screenshot1.jpg" alt="healthcare-website-screenshot1" border="0"></a>


