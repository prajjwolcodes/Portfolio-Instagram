import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub, FaUser, FaHeart, FaComment, FaShare, FaTimes, FaBookmark, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiExpress, SiMongodb, SiFigma, SiNextdotjs, SiSpringboot, SiBootstrap, SiSocketdotio } from 'react-icons/si';


//saika nepal
import saika from '../../Assets/Saika/saika.png';
import saika1 from '../../Assets/Saika/saika1.png';
import s1 from '../../Assets/Saika/s1.png';
import s2 from '../../Assets/Saika/s2.png';
import s3 from '../../Assets/Saika/s3.png';
import s4 from '../../Assets/Saika/s4.png';
import s5 from '../../Assets/Saika/s5.png';
import s6 from '../../Assets/Saika/s6.png';

//shopat banau
import banau from '../../Assets/Banau/banau.png';
import banau1 from '../../Assets/Banau/banau1.png';
import b0 from '../../Assets/Banau/b0.png';
import b1 from '../../Assets/Banau/b1.png';
import b2 from '../../Assets/Banau/b2.png';
import b3 from '../../Assets/Banau/b3.png';
import b4 from '../../Assets/Banau/b4.png';
import b5 from '../../Assets/Banau/b5.png';
import b6 from '../../Assets/Banau/b6.png';
import b7 from '../../Assets/Banau/b7.png';
import b8 from '../../Assets/Banau/b8.png';
import b9 from '../../Assets/Banau/b9.png';
import b10 from '../../Assets/Banau/b10.png';
import b11 from '../../Assets/Banau/b11.png';

//chat app
import chatapp from '../../Assets/chatapp.png'
import chatapp1 from '../../Assets/chatapp1.png'
import c0 from '../../Assets/c0.png'

//movie app
import movieapp from '../../Assets/movieapp.png'
import movieapp1 from '../../Assets/movieapp1.png'
import m0 from '../../Assets/m0.png'
import m1 from '../../Assets/m1.png'



const ProjectSection = ({ darkMode }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showComments, setShowComments] = useState(false);
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            title: 'Shop At Banau',
            date: 'April 2024 - Present',
            location: 'Online',
            description: [
                '🛒 Shop At Banau is a platform where anyone can build their own ecommerce website with ease and for free. It features unlimited customization, analytics, order management, and staff management. This platform has generated $8,000 and served 20k+ customers.',
                'The project involved creating a user-friendly interface for easy website building and management',
                '💼 Created a user-friendly interface using React, ensuring a seamless website building and management experience. Implemented responsive design for compatibility across devices.',
                '📊 Integrated real-time analytics and custom reports to provide users with up-to-date insights into their sales and customer interactions. Utilized WebSocket and visualization libraries for live data updates and interactive charts.',
                '🔐 Implemented secure payment gateways like Stripe and PayPal, ensuring secure transactions through encryption and token-based authentication while maintaining PCI compliance.',
            ],
            link: 'https://shopatbanau.com',
            github: 'https://github.com/saikanepal/epasal_front',
            githubServer: 'Private',
            images: [banau, banau1, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11],
            techStack: [<SiReact title="React" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />]
        },
        {
            title: 'Saika Nepal',
            date: 'March 2022 - Present',
            location: 'Online',
            description: [
                '🏢 Saika Nepal has- a corporate-style landing page with an admin dashboard. It was developed to provide a professional online presence with a focus on UI/UX design principles, built using React, Express.js, and MongoDB.',
                '🎨 Designed a visually appealing and user-friendly landing page using Figma for high-fidelity mockups and React for development. Implemented responsive design with CSS-in-JS or Tailwind CSS for consistent styling.',
                '🛠 Developed an admin dashboard with React and integrated it with backend APIs for content, user, and analytics management. Used Express.js and MongoDB for backend operations.',
                '📱 Ensured responsive design across devices and browsers, utilizing media queries and responsive grid systems for cross-browser compatibility.',
            ],
            link: 'https://saikanepal.com',
            github: 'https://github.com/saikanepal/Saika_Nepal_Front_end',
            githubServer: 'Private',
            images: [saika, saika1, s1, s2, s3, s4, s5, s6],
            techStack: [<SiReact title="React" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />, <SiFigma title="Figma" />]
        },
        {
            title: 'Chat App',
            date: 'Sep 2023 - Oct 2023',
            location: 'Offline',
            description: [
                '💻 My chat app is a real-time chat application built with React, Node.js, Express, and Socket.io.',
                '🤝 Designed for seamless communication, ChatPasal enables users to engage in instant messaging with friends or groups.',
                'The app features a clean and responsive interface, supporting features like live notifications, typing indicators, and message history. Whether for personal conversations or group discussions, ChatPasal provides a reliable and dynamic platform for staying connected.',
            ],
            link: 'https://chat-app-73as.onrender.com',
            github: 'https://github.com/prajjwolcodes/Chat-App',
            images: [chatapp, chatapp1, c0],
            techStack: [<SiReact title="React.js" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />, <SiSocketdotio title="Socket.io" />]
        },
        {
            title: 'Movie Pasal',
            date: 'Oct 2023 -  Dec 2023',
            location: 'Online',
            description: [
                '💻 Movie Pasal is a sleek and user-friendly movie app designed to help users discover, explore, and keep track of their favorite films. With an intuitive interface, Movie Pasal allows users to search for movies, view detailed information.',
                '🤝 The app also provides personalized recommendations, making it easy to find new movies based on user preferences',
                '⚡  Whether you are a casual viewer or a movie enthusiast, Movie Pasal is your go-to destination for all things cinema.',
            ],
            link: 'https://prajjwol-movie-app.netlify.app/',
            github: 'https://github.com/prajjwolcodes/Movie-App',
            images: [movieapp, movieapp1, m0, m1],
            techStack: [<SiReact title="React" />, <SiBootstrap title="Bootstrap" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />]
        },
    ];



    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, duration: 0.4 }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 50, damping: 10 }
        },
    };

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        accessibility: true,
    };

    return (
        <div className={`pb-4 ${darkMode ? 'bg-black text-gray-300' : 'bg-white text-black'}`}>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-3 gap-2"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        onClick={() => setSelectedProject(project)}
                        className={`relative cursor-pointer group ${darkMode ? 'border-2 border-gray-400' : 'border-gray-900'}`}
                        style={{
                            aspectRatio: '1 / 1',
                        }}
                    >
                        <motion.div
                            className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-black text-gray-600 border-gray-400' : 'bg-white text-black'} rounded-md`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                backgroundImage: `url(${project.images[0]})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                position: 'relative',

                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-60 transition-opacity rounded-xl"
                        >
                            <h2 className="text-2xl font-bold text-gray-200 opacity-0 group-hover:opacity-100">{project.title}</h2>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-y-scroll">
                    <div className={`bg-${darkMode ? 'black' : 'white'} p-6 rounded-lg max-w-xl w-full relative max-h-screen overflow-y-auto`}>
                        <button
                            className={`absolute top-8 right-2 text-${darkMode ? 'gray-300' : 'gray-600'} hover:text-${darkMode ? 'gray-100' : 'gray-900'} transition-colors`}
                            onClick={() => setSelectedProject(null)}
                        >
                            <FaTimes size={24} />
                        </button>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className={`w-10 h-10 bg-${darkMode ? 'gray-900' : 'gray-300'} rounded-full`}>
                                <motion.div
                                    className="w-full h-full flex items-center rounded-full justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img src={selectedProject.images[0]}></img>
                                </motion.div>
                            </div>
                            <div>
                                <h2 className="text- font-semibold">{selectedProject.title}</h2>
                                <p className="text-sm text-gray-500">{selectedProject.date}</p>
                                <p className={`text-sm ${selectedProject.location === 'Online' ? 'text-green-700' : 'text-red-500'}`}>
                                    {selectedProject.location}
                                </p>
                            </div>

                        </div>
                        <Carousel {...carouselSettings}>
                            {selectedProject.images.slice(1).map((image, index) => (
                                <div key={index} className="p-4">
                                    <img src={image} alt={`Project ${index}`} className="w-full h-screen object-contain rounded-lg max-h-96" />
                                </div>
                            ))}
                        </Carousel>
                        {selectedProject.link && selectedProject.location === 'Online' && (
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mt-4 text-sm text-blue-800 dark:text-blue-800 hover:underline"
                            >
                                <FaExternalLinkAlt className="mr-1" /> Visit Website
                            </a>
                        )}
                        <div className=' flex flex-col sm:flex-row justify-between '>
                            {selectedProject.github && (
                                <div className="mt-4 flex justify-between items-center">
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={` ${darkMode ? "text-gray-200 hover:text-white" : 'text-gray-800 hover:text-black'} flex items-center`}>
                                        <FaGithub size={20} className="mr-1 text-[8px]" /> Client Side Code
                                    </a>
                                </div>
                            )}
                            {selectedProject.githubServer && (
                                <div className="mt-4 flex justify-between items-center">
                                    {selectedProject.githubServer === 'Private' ? (
                                        <span className="text-red-500 flex items-center">
                                            <FaGithub size={20} className="mr-1 text-sm" /> Private Server Repository
                                        </span>
                                    ) : (
                                        <a
                                            href={selectedProject.githubServer}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center"
                                        >
                                            <FaGithub size={20} className="mr-1" /> Server Side Code
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="relative mb-4">
                            <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700" />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                <FaHeart size={20} className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                                <FaComment size={20} className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                                <FaShare size={20} className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-sm font-semibold mb-2">Tech Stack</h3>
                                <div className="flex space-x-2">
                                    {selectedProject.techStack.map((icon, index) => (
                                        <span key={index} className="text-xl">
                                            {icon}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <p className="text-md mb-2"><span className="font-bold">{selectedProject.title}</span></p>

                        {/* Comments Section */}
                        <div className="mb-4">
                            <h3 className="text-sm font-bold mb-2">Project Details:</h3>
                            <ul className="list-disc list-inside">
                                {/* {selectedProject.description.map((desc, index) => (
                                    <li key={index} className="text-sm mb-1">{desc}</li>
                                ))} */}
                                <span className="text-sm mb-1">{selectedProject.description[0]}</span>

                            </ul>
                        </div>


                        <div className="flex justify-between mt-4">
                            <button
                                className="text-sm text-blue-800 dark:text-blue-800 hover:underline"
                                onClick={() => setShowComments(!showComments)}
                            >
                                {showComments ? 'Hide Comments' : 'Show Comments'}
                            </button>
                        </div>
                        {showComments && (
                            <div className="mt-4">
                                {/* Comments list */}
                                <div className="space-y-4">
                                    {selectedProject.description.map((comment, index) => (
                                        index > 0 &&
                                        < div key={index} className="flex items-start space-x-4" >
                                            <div className={`w-10 h-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-300'} rounded-full border-2 border-gray-500 flex items-center justify-center`}>
                                                <FaUser className={`text-${darkMode ? 'gray-300' : 'gray-800'} text-xl`} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500"> Detail {index}</p>
                                                <p className="text-sm">{comment}</p>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default ProjectSection;
