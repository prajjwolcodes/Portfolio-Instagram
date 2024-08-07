// CHANGE URL

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaEllipsisV, FaUser, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaCogs, FaShareAlt, FaPaperPlane, FaMusic, FaPlay, FaVolumeUp, FaPause } from 'react-icons/fa';
import HomeSection from './HomeSection';
import EmploymentSection from './EmploymentSection';
import EducationSection from './EducationSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import Highlights from './Highlights'; // Import the Highlights component
import prajjwol from '../../Assets/prajjwol.jpg';
import ReactPlayer from 'react-player';

const sections = [
    { title: 'Home', icon: FaHome },
    { title: 'Skills', icon: FaCogs },
    { title: 'Employment', icon: FaBriefcase },
    { title: 'Education', icon: FaGraduationCap },
    { title: 'Projects', icon: FaProjectDiagram },
    { title: 'Contact', icon: FaEnvelope },
];

const Portfolio = ({ darkMode }) => {
    const [activeSection, setActiveSection] = useState(sections[0].title);
    const [followers, setFollowers] = useState(() => {
        const storedFollowers = localStorage.getItem('followers');
        return storedFollowers !== null ? parseInt(storedFollowers, 10) : 378;
    });
    const [following, setFollowing] = useState(() => {
        const storedFollowing = localStorage.getItem('following');
        return storedFollowing === 'true';
    });
    const [shareButtonText, setShareButtonText] = useState('Share');
    const [playing, setPlaying] = useState(false); // Control music playback
    const [volume, setVolume] = useState(0.4); // Control music volume
    const [showControls, setShowControls] = useState(false); // Toggle music controls

    useEffect(() => {
        localStorage.setItem('following', following);
        localStorage.setItem('followers', followers);
    }, [following, followers]);

    const handleFollow = () => {
        setFollowing(prev => {
            const newFollowing = !prev;
            setFollowers(prev => newFollowing ? prev + 1 : prev - 1);
            return newFollowing;
        });
    };

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleShare = () => {
        navigator.clipboard.writeText('https://Prajjwol.com');  // Change this after deployement
        setShareButtonText('URL Copied!');
        setTimeout(() => {
            setShareButtonText('Share');
        }, 2000);
    };

    const loadTawkToScript = () => {
        if (window && window.Tawk_API) {
            window.Tawk_API.toggle();
        }
    };

    const handleMessage = () => {
        loadTawkToScript();
    };

    const renderSectionContent = () => {
        switch (activeSection) {
            case 'Home':
                return <HomeSection setActiveSection={setActiveSection} darkMode={darkMode} />;
            case 'Employment':
                return <EmploymentSection darkMode={darkMode} />;
            case 'Education':
                return <EducationSection darkMode={darkMode} />;
            case 'Projects':
                return <ProjectsSection darkMode={darkMode} />;
            case 'Contact':
                return <ContactSection darkMode={darkMode} />;
            case 'Skills':
                return <SkillsSection darkMode={darkMode} />;
            default:
                return null;
        }
    };
    const togglePlay = () => {
        setPlaying(prev => !prev);
        setShowControls(prev => !prev);
    };
    const increaseVolume = () => {
        setVolume(prev => Math.min(prev + 0.1, 1));
    };

    const decreaseVolume = () => {
        setVolume(prev => Math.max(prev - 0.1, 0));
    };
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`max-w-screen-lg mx-auto pt-6 px-2 font-Poppins ${darkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-900'} font-sans`}
        >
            <div className="grid grid-cols-3 md:grid-cols-3 items-start gap-8 mb-4">
                <div className="col-span-1 flex flex-col items-center">
                    <div className="relative mb-4 top-4 sm:left-8" >
                        <img
                            src={prajjwol}
                            alt="Profile"
                            className={`rounded-full w-24 h-24 md:w-3 md:h-32  lg:w-44 lg:h-44 border-4 transition-colors duration-300 ${following ? 'border-green-300' : darkMode ? 'border-gray-700' : 'border-white'}`}
                        />


                    </div>
                    <div className="fixed bottom-5 left-5">
                        <div
                            className={`p-2 rounded-full transition-opacity duration-300 ease-in-out ${showControls ? 'opacity-100 border border-gray-500' : 'opacity-80'} ${darkMode ? 'text-white' : 'text-black'}`}
                            onMouseEnter={() => setShowControls(true)}
                            onMouseLeave={() => setShowControls(false)}
                        >
                            <button
                                className={` ${showControls ? 'hidden' : 'block'}  md:p-[6px] rounded-full focus:outline-none`}
                                onClick={() => setShowControls(!showControls)}
                            >
                                <FaMusic className="text-sm md:text-xl" />
                            </button>
                            {showControls && (
                                <div className="flex flex-row justify-center items-center space-x-2 ">
                                    <button
                                        className="p-2 rounded-full bg-blue-500 text-white transition-colors duration-300 ease-in-out focus:outline-none"
                                        onClick={togglePlay}
                                    >
                                        {playing ? <FaPause className="text-[8px] sm:text-lg" /> : <FaPlay className="text-[8px] sm:text-lg" />}
                                    </button>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={volume}
                                        onChange={handleVolumeChange}
                                        className="ml-1 sm:ml-2 w-16 sm:w-20 h-[5px] bg-gray-300 rounded-lg cursor-pointer focus:outline-none appearance-none"
                                        style={{
                                            backgroundImage: 'linear-gradient(to right, #3b82f6, #3b82f6)',
                                            backgroundSize: `${volume * 100}% 100%`,
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                        <ReactPlayer
                            url={process.env.REACT_APP_YOUTUBE_URL}
                            playing={playing}
                            loop
                            volume={volume}
                            className="hidden"
                        />
                    </div>
                    <div className=' w-full'>
                        {/* <Highlights /> */}
                    </div>
                </div>

                <div className="col-span-2 text-left">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center space-x-2">
                            <h1 className={`text-xl font-Roboto md:text-2xl lg:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Prajjwol Shrestha
                            </h1>
                            <div className="relative">
                                <motion.button
                                    whileHover={{ scale: 1.1, backgroundColor: darkMode ? '#4a5568' : '#e2e8f0' }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-2 rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-200 text-gray-800'}`}
                                    onClick={handleDropdownToggle}
                                >
                                    <FaEllipsisV />
                                </motion.button>
                                {isDropdownOpen && (
                                    <div className={`mt-2 absolute left-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg z-10 w-44`}>
                                        <ul className="py-2">
                                            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <a
                                                    href={process.env.REACT_APP_PDF_DOWNLOAD_URL}
                                                    target='_blank'
                                                    rel="noopener noreferrer"
                                                    download="Prajjwol.pdf"
                                                >
                                                    View My CV
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className='flex gap-10 mt-5'>
                            <h1 className='text-lg'> <span className='font-semibold text-xl'>5 </span>posts</h1>
                            <h1 className='text-lg'><span className='font-semibold text-xl'>99 </span>followers</h1>
                            <h1 className='text-lg'><span className='font-semibold text-xl'>99 </span>following</h1>

                        </div>

                        <div className="flex items-center space-x-2 mt-5">
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: darkMode ? '#4a5568' : '#2b6cb0' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleFollow}
                                className={`px-2 md:px-8 py-[6px] md:py-2 rounded-md text-sm md:text-md transition-colors duration-300 ${following ? 'bg-gray-100 text-white' : 'bg-blue-500 text-white'}`}
                            >
                                {following ? 'Following' : 'Follow'}
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: darkMode ? '#4a5568' : '#2b6cb0' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleMessage}
                                className={`px-2 md:px-4 py-[6px] md:py-2 rounded-md text-sm md:text-md transition-colors duration-300 flex items-center ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-200 text-gray-800'}`}
                            >
                                <FaPaperPlane className="mr-2" /> Message
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: darkMode ? '#4a5568' : '#2b6cb0' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleShare}
                                className={`px-2 md:px-6 py-[6px] md:py-2  rounded-md text-sm md:text-md transition-colors duration-300 flex items-center ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-200 text-gray-800'}`}
                            >
                                <FaShareAlt onClick={handleShare} className="mr-[4px]" /> {shareButtonText}
                            </motion.button>
                        </div>
                        <p className={`mt-[8px] mb-[4px] text-sm lg:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                            Bhaktapur, NEPAL <span className="text-sm text-gray-400">(him/he)</span>
                        </p>
                        <div className={`text-sm md:text-base lg:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            <p className="  leading-relaxed">
                                Full Stack Web Developer | MERN | NEXT JS | REACT NATIVE |
                                {!isExpanded && (
                                    <span onClick={handleToggle} className='cursor-pointer '>
                                        ....
                                    </span>
                                )}


                                <span onClick={handleToggle} className={isExpanded ? 'hidden' : 'block'}>

                                    <button onClick={handleToggle} className="text-blue-500 underline ">Read more</button>
                                </span>
                                <span className={isExpanded ? 'block' : 'hidden'}>
                                    Primary expertise in React.js , Express.js 📝, and Next Js ☕.
                                    <br></br>
                                    Currently working as a full stack intern at Saika Nepal.
                                    <br></br>
                                    Built a platform called ShopAtBanau, a free e-commerce website builder that currently serves 7k+ customers.
                                    <button onClick={handleToggle} className="text-blue-500 underline ml-1">Read less</button>
                                </span>
                            </p>
                        </div>
                        <p className={`mt-2 text-sm lg:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Followed by <a target='_blanks' href="https://saikanepal.com" className="text-blue-500">Saika Nepal </a>,<a target='_blanks' href="https://shopatbanau.com" className="text-orange-500"> ShopAtBanau</a>
                        </p>

                    </motion.div>

                </div >
            </div >

            <div className='block sm:hidden'>
                <div className="mt-4 text-sm md:text-lg flex justify-between px-14 py-4 border-t sm:mr-6 items-center space-x-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'">
                    <div className="flex flex-col sm:flex-row gap-x-[4px] items-center">
                        <span>5</span>
                        <span>posts</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-x-[4px] items-center">
                        <span>6</span>
                        <span>Projects</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-x-[4px] items-center">
                        <span>6+</span>
                        <span>Jobs</span>
                    </div>
                </div>
            </div>


            <nav className={`border-t border-b py-3 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                <div className="overflow-x-auto overflow-y-hidden scrollbar-hidden">
                    <ul className="flex space-x-4 min-w-max h-full justify-center">
                        {sections.map((section, index) => (
                            <li key={index} className="relative">
                                <motion.button
                                    whileHover={{ scale: 1.1, backgroundColor: darkMode ? '#4a5568' : '#e2e8f0' }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setActiveSection(section.title)}
                                    className={`relative flex items-center space-x-2 py-2 px-4 rounded-md transition ${activeSection === section.title
                                        ? darkMode ? 'text-gray-100' : 'text-gray-900'
                                        : darkMode ? 'text-gray-400' : 'text-gray-700'}`}
                                >
                                    <section.icon className="text-xl" />
                                    <span className="hidden sm:inline">{section.title}</span>
                                    {activeSection === section.title && (
                                        <motion.div
                                            className={`absolute -inset-x-2 -top-1 border-t-8 ${darkMode ? 'border-gray-100' : 'border-gray-900'}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </motion.button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <div className="mt-4">
                {renderSectionContent()}
            </div>
            <footer className={` absolute bottom-0 mx-auto w-full py-4 text-lg border-t text-center ${darkMode ? 'text-gray-50 border-gray-100' : 'text-gray-700 border-gray-900'} sm:hidden`}>
                <p>{activeSection}</p>
            </footer>
        </motion.div >
    );
};

export default Portfolio;