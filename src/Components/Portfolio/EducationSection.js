import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaTimes, FaHeart, FaComment, FaShareSquare, FaBookmark } from 'react-icons/fa';
import { BiBook, BiBrain, BiMedal, BiStar, } from 'react-icons/bi';
import khwopa from '../../Assets/khwopa.png'
import ascol from '../../Assets/ascol.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const educationData = [
    {
        institution: 'Khwopa Higher Secondary College',
        degree: 'Computer Science 🎓',
        major: 'Computer Science 💻',
        GPA: '3.45 ⭐',
        startYear: 2020,
        endYear: 2022,
        courses: [
            'Algorithms 🧠',
            'Web Development 📄',
            'Front-End Development (HTML, CSS, JavaScript) 🌐',
            'Database Management (MySQL) 🔧',
            'API Design and Development 🧩',
            'Cloud Computing',
            'Version Control (Git, GitHub) 🔄'
        ]
        ,
        images: [
            khwopa
        ],
        caption: 'View comments for more details',
    },
    {
        institution: 'Amrit Science Campus',
        degree: 'Bachelor in Computer Science and Information Technology 🎓',
        major: 'Computer Science 💻',
        GPA: '3.87 ⭐',
        startYear: 2022,
        endYear: "Current",
        courses: [
            'Data Structures 📚',
            'Algorithms 🧠',
            'Web Development 📄',
            'Statistical Analysis 📊',
            'Back-End Development (Node.js, Express.js) 🔧',
            'API Design and Development 🧩',
            'Computer Architecture ☁️',
            'Numerical Methods 🔄'
        ]
        ,
        images: [
            ascol
        ],
        caption: 'View comments for more details',
    },
    // Add more education data if needed
];



const EducationSection = ({ darkMode }) => {
    const [selectedEducation, setSelectedEducation] = useState(null);
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


    return (
        <div className={`pb-4 ${darkMode ? 'bg-black text-gray-300' : 'bg-white text-black'}`}>
            <motion.div ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {educationData.map((education, index) => (
                    <motion.div
                        key={index}
                        className={`relative cursor-pointer group ${darkMode ? 'border-2 rounded-none border-gray-400' : 'border-gray-900'}`}
                        onClick={() => setSelectedEducation(education)}
                        style={{ aspectRatio: '1 / 1' }}
                        variants={itemVariants}

                    >
                        <motion.div
                            className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-black text-gray-600 border-gray-400' : 'bg-white text-black'} rounded-md`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            style={{ backgroundImage: `url(${education.images[0]})`, backgroundSize: 'cover', width: '100%' }}
                        >
                            <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-60 transition-opacity rounded-xl"
                        >
                            <h2 className="text-2xl font-bold text-gray-200 opacity-0 group-hover:opacity-100 text-center">{education.institution}</h2>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {selectedEducation && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className={`bg-${darkMode ? 'black' : 'white'} p-6 rounded-lg max-w-xl w-full relative overflow-y-auto  max-h-screen`}>
                        <button
                            className={`absolute top-2 right-2 text-${darkMode ? 'gray-300' : 'gray-600'} hover:text-${darkMode ? 'gray-100' : 'gray-900'} transition-colors`}
                            onClick={() => setSelectedEducation(null)}
                        >
                            <FaTimes size={24} />
                        </button>
                        <div className="flex items-center space-x-2 mb-4">
                            <img src={selectedEducation.images} alt="Profile" className="w-10 h-10 rounded-full object-cover" />

                            <div>
                                <h2 className="font-semibold">{selectedEducation.institution}</h2>
                                <p className="text-sm text-gray-500">{`${selectedEducation.startYear} - ${selectedEducation.endYear}`}</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <img src={selectedEducation.images} alt='Education' className="w-full h-full object-cover rounded-lg" />
                        </div>

                        <div className="relative mb-4">
                            <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700" />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                <FaHeart size={20} className={`text-${darkMode ? 'gray-400' : 'gray-600'} cursor-pointer`} />
                                <FaComment size={20} className={`text-${darkMode ? 'gray-400' : 'gray-600'} cursor-pointer`} onClick={() => setShowComments(!showComments)} />
                                <FaShareSquare size={20} className={`text-${darkMode ? 'gray-400' : 'gray-600'} cursor-pointer`} />
                            </div>
                            <FaBookmark className={`text-${darkMode ? 'gray-400' : 'gray-600'} cursor-pointer`} />
                        </div>
                        <div className="mb-4">
                            <p><strong>{selectedEducation.institution}</strong> {selectedEducation.caption}</p>
                        </div>
                        {showComments ? (
                            <>
                                <div className={`custom-scrollbar max-h-80 overflow-y-auto space-y-2 ${darkMode ? 'bg-black' : 'bg-white'}`}>
                                    <div className="p-4 space-y-2">
                                        <p className="text-sm flex items-start flex-wrap"><BiBook className="mr-2" /> <strong>Degree:</strong> <span className="break-words w-full">{selectedEducation.degree}</span></p>
                                        <p className="text-sm flex items-start flex-wrap"><BiBrain className="mr-2" /> <strong>Major:</strong> <span className="break-words w-full">{selectedEducation.major}</span></p>
                                        <p className="text-sm flex items-start flex-wrap"><BiStar className="mr-2" /> <strong>GPA:</strong> <span className="break-words w-full">{selectedEducation.GPA}</span></p>
                                        <p className="text-sm flex items-start flex-wrap"><BiMedal className="mr-2" /> <strong>Courses:</strong> <span className="break-words w-full">{selectedEducation.courses.join(', ')}</span></p>
                                    </div>
                                    <button
                                        className="mt-4 text-blue-500"
                                        onClick={() => setShowComments(false)}
                                    >
                                        Hide Comments
                                    </button>
                                </div>
                            </>
                        ) : (
                            <button
                                className="text-blue-500"
                                onClick={() => setShowComments(true)}
                            >
                                View all comments
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EducationSection;
