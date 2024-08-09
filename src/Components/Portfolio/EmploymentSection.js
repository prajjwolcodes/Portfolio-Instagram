import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaBuilding, FaCalendarAlt, FaHeart, FaComment, FaShare, FaTimes, FaBookmark, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import TA from '../../Assets/TA.png';
import IT from '../../Assets/IT.png';
import dev from '../../Assets/dev.png';
import './employee.css'

const experiences = [
    {
        title: 'Full Stack Web Developer',
        company: 'Shop At Banau',
        date: 'March - Present',
        location: 'Remote',
        description: [
            '🛍️ Developed an e-commerce  building platform, enabling 7000+ customers to easily create and manage their online stores.',
            '👨‍💻Led a team of 6 developers, overseeing full stack web development projects using React.js, Express.js, and MongoDB.',
            '⚙️Managed all DevOps and hosting tasks on AWS by automating deployments achieving a 99.9% uptime',
        ],
        link: 'https://shopatbanau.com',
        bgImage: dev,
    },

    {
        title: 'Freelancer',
        company: 'Group of college mates',
        date: 'Oct 2023 – Jan 2024',
        location: 'Bhaktapur, Nepal',
        description: [
            '🔒 Worked with a team of talented friends to create websites for schools and gyms, showcasing strong teamwork and project management skills.',
            '🛡️ Prioritized client satisfaction by ensuring that every project met or exceeded expectations in design and functionality.',
            '🔧 Built websites for varied industries, demonstrating adaptability and a broad skill set in web development.',
        ],
        link: '',
        bgImage: IT,
    },
    {
        title: 'Intern',
        company: 'Saika Nepal',
        date: 'Apr 2024 – Current',
        location: 'Remote',
        description: [
            '📚 Saika Nepal has- a corporate-style landing page with an admin dashboard. It was developed to provide a professional online presence with a focus on UI/UX design principles, built using React, Express.js, and MongoDB.',
            '🤝 Designed a visually appealing and user-friendly landing page using Figma for high-fidelity mockups and React for development. Implemented responsive design with CSS-in-JS or Tailwind CSS for consistent styling',
            '👨‍🏫 Developed an admin dashboard with React and integrated it with backend APIs for content, user, and analytics management. Used Express.js and MongoDB for backend operations.',
        ],
        link: 'https://saikanepal.com',
        bgImage: TA,
    },

];

const ExperienceSection = ({ darkMode }) => {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [showComments, setShowComments] = useState(false);
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
    };

    return (
        <div className={`pb-4 overflow-x-scroll ${darkMode ? 'bg-black text-gray-400' : 'bg-white text-black'}`}>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-3 gap-2"
            >
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        onClick={() => setSelectedExperience(experience)}
                        className={`relative cursor-pointer group  ${darkMode ? 'border-2 border-gray-400' : 'border-gray-900'}`}
                        style={{
                            aspectRatio: '1 / 1',
                        }}
                    >
                        <motion.div
                            className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-black text-gray-600 border-gray-400' : 'bg-white text-black'} rounded-md`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                backgroundImage: `url(${experience.bgImage})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                position: 'relative'
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-60 transition-opacity rounded-xl"
                        >
                            <h2 className="text-2xl font-bold text-gray-200 opacity-0 group-hover:opacity-100">{experience.title}</h2>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {selectedExperience && (
                <div className=" custom-scrollbar2 fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className={`bg-${darkMode ? 'black' : 'white'} p-6 rounded-lg max-w-xl w-full relative max-h-screen overflow-y-auto`}>
                        <button
                            className={`absolute top-2 right-2 text-${darkMode ? 'gray-300' : 'gray-600'} hover:text-${darkMode ? 'gray-100' : 'gray-900'} transition-colors`}
                            onClick={() => setSelectedExperience(null)}
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
                                    <FaBuilding size={24} />
                                </motion.div>
                            </div>
                            <div className='flex flex-col'>
                                <h2 className="font-semibold">{selectedExperience.company}</h2>
                                <p className="   flex flex-row items-center gap-[5px] text-sm text-gray-500"><FaCalendarAlt /> {selectedExperience.date}</p>
                                <p className="flex flex-row items-center gap-[5px] text-sm text-gray-500"><FaMapMarkerAlt /> {selectedExperience.location}</p>
                            </div>
                        </div>
                        <Carousel {...carouselSettings}
                        >
                            {selectedExperience.description.map((desc, index) => (
                                <div key={index} className="p-4">
                                    <p className="text-md">{desc}</p>
                                </div>
                            ))}
                        </Carousel>
                        {selectedExperience.link && (
                            <a
                                href={selectedExperience.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mt-4 text-sm text-blue-500 hover:underline"
                            >
                                <FaExternalLinkAlt className="mr-1" /> Visit Website
                            </a>
                        )}
                        <div className="relative mb-4">
                            <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700" />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                <FaHeart size={20} className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                                <FaComment size={20} className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                                <FaShare size={20} className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                            </div>
                            <FaBookmark className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                        </div>
                        <p className="text-md mb-2"><span className="font-bold">{selectedExperience.title}</span></p>

                        {/* Comments Section */}
                        <div className="mb-4">
                            {showComments ? (
                                <>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {selectedExperience.description.length} {selectedExperience.description.length > 1 ? 'comments' : 'comment'}
                                    </p>
                                    <div className={`custom-scrollbar max-h-80 overflow-y-auto  space-y-2 ${darkMode ? 'bg-black' : 'bg-white'}`}>
                                        {selectedExperience.description.map((desc, index) => (
                                            <div key={index} className={`p-3 rounded-lg flex items-start space-x-3 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
                                                <div className={`flex-shrink-0 w-8 h-8 ${darkMode ? 'bg-black' : 'bg-gray-200'} rounded-full flex items-center justify-center text-sm font-semibold`}>
                                                    <FaBuilding />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-1">
                                                        {/* <span className="font-semibold">Description {index + 1}</span> */}
                                                        {/* <span className="text-gray-500">:</span> */}
                                                    </div>
                                                    <p className="text-md mt-1 text-gray-500">{desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className="mt-4 text-blue-500"
                                        onClick={() => setShowComments(false)}
                                    >
                                        Hide Comments
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="text-blue-500"
                                    onClick={() => setShowComments(true)}
                                >
                                    View All Comments
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceSection;
