import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
/* import delayAos from '../components/delayAos';
 */
import logostudio from '../assets/logo-studio.png';
import figstudio from '../assets/fig-studio-min.png';
import logoserialcolor from '../assets/logo-serial-color-blanc.png';
import figserialcolor from '../assets/fig-serialcolor.png';
import logocamcha from '../assets/logo-camcha.png';
import logosuperbee from '../assets/logo-superbee.png';
import logobreak from '../assets/logo-break.png';
import logogithub from '../assets/logo-github.png';



const projectData = [
    { id: 1, title: 'Le Studio', description: 'High-end integration in Javascript, Css on the cms webflow with animations and scroll interactions involving 3D objects from blender', image: logostudio, live: 'https://www.studio-lesintrepides.com', fig: figstudio, tags: ['Javascript ', 'Css ', 'Webflow ', 'Json'] },
    { id: 2, title: 'Serial Color', description: 'Shopify ecommerce store including custom features made for an independent online art gallery', image: logoserialcolor, live: 'https://www.serialcolor.art', fig: figserialcolor, tags: ['ecommerce ', 'Shopify ', 'Javascript ', 'CSS ', 'Liquid '] },
    { id: 3, title: 'Camcha', description: "Showcase site of an outsourced works council made with Javascript, Css and external libraries such as GSAP or scrolltrigger", image: logocamcha, live: 'https://www.camcha.fr', tags: ['Javascript ', 'CSS', 'Scrolltrigger ', 'Gsap '] },
    { id: 4, title: 'Superbee', description: 'Shopify e-commerce store including custom features for a local brand selling honey products', image: logosuperbee, live: 'https://www.superbee.fr', tags: ['ecommerce ', 'Shopify ', 'Css', 'Javascript ', 'Liquid '] },
    { id: 5, title: 'Break', description: 'Shopify ecommerce store made for a brand of hot CBD drinks', image: logobreak, live: 'https://break-france.co', tags: ['ecommerce ', 'Shopify ', 'Css', 'Javascript ', 'Liquid']  },
    { id: 6, title: 'Node Mongo API', description: 'Dockerized API REST made with node.js, express and mongodb including jsonwebtoken authentication and user privileges', image: logogithub, repo: 'https://github.com/jibdrt/node-backend', tags: ['Node.js ', 'Express', 'JWT', 'MongoDB', 'Rest'] },
    { id: 7, title: 'Vue Quasar interface', description: 'Front-end interface made with Vue3 and Quasar connected with a back-end by means of fetch and axios calls', image: logogithub, repo: 'https://github.com/jibdrt/front-vue-quasar', tags: ['Vue.js ', 'Quasar ', 'Axios'] },
    { id: 8, title: 'PHP API', description: 'PHP API handling HTTP requests', image: logogithub, repo: 'https://github.com/jibdrt/api-react-php', tags: ['PHP ', 'React.js ', 'Rest'] },
];



const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeObject, setActiveObject] = useState(null);

    /*     function getClass(index) {
            return index === activeObject?.id ? 'active' : 'inactive';
        } */

    const Modal = ({ object: { title, description, image, live, repo, fig } }) => (
        <div onClick={() => setShowModal(false)} className='modal-backdrop bg-bg fixed top-0 bottom-0 left-0 right-0 flex justify-center align-center z-2'>
            <div id='projectModal' className='active w-2/3 h-2/3 m-auto p-6 rounded-lg shadow-lg bg-gray-dark relative flex'>
                <AiFillCloseCircle className='cursor-pointer absolute right-0 text-5xl' onClick={() => setShowModal(false)} />
                <div className='w-1/2 p-2 flex align-middle justify-center'>
                    <img src={fig} className='m-auto rounded-lg' />
                </div>
                <div className='w-1/2 gap-y-2 pt-5 flex flex-col justify-center'>

                    <h2 className='text-left text-5xl'>{title}</h2>
                    <p className='text-base text-left py-2'>{description}</p>
                    {/* <img src={image} /> */}
                    <div className='justify-start flex'>
                        {live && <a href={live}>
                            <button data-mdb-ripple="true"
                                data-mdb-ripple-color="light" className='px-6 py-2.5 bg-blue text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue hover:shadow-lg focus:bg-blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue active:shadow-lg transition duration-150 ease-in-out'>
                                Live site
                            </button>
                        </a>}
                        {repo && <a href={repo}>
                            <button className='px-6 py-2.5 bg-blue text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue hover:shadow-lg focus:bg-blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue active:shadow-lg transition duration-150 ease-in-out'>
                                Repository
                            </button>
                        </a>}
                    </div>
                </div>


            </div>
        </div>
    );





    return (
        <div>
            <h4 className='p-4 text-5xl xl:text-7xl font-bold text-purple pb-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                My projets
            </h4>
            <div className='relative flex flex-wrap gap-5 justify-center text-left'>
                {projectData.map(({ id, title, description, image, live, repo, fig, tags }, index) => (
                    <div class="project-card flex-col p-5 rounded-lg shadow-lg bg-gray-dark max-w-sm justify-end flex" data-aos="fade-in" data-aos-delay={index * 100}>
                        <h5 class="text-gray-900 text-3xl leading-tight font-medium mb-2 px-1">{title}</h5>
                        <p class="text-gray-700 text-sm mb-4 px-1">
                            {description}
                        </p>


                        <div className='flex flex-wrap items-end' >
                            {tags.map((tag) => (
                                <p className='text-xs m-1 bg-transparent border-2 border-solid border-purple px-4 py-2 rounded-full w-min' key={tag}>{tag}</p>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                setActiveObject({ id, title, description, image, live, repo, fig });
                                setShowModal(true);
                            }}
                            className='px-6 py-3 my-5 bg-blue text-white font-medium text-sm rounded-full w-20'>
                            See
                        </button>
                    </div>
                ))}
                {showModal ? <Modal object={activeObject} /> : null}
            </div>
        </div>
    );
};



export default Projects;

