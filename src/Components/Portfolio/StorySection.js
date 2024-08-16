import { useState, useRef, useEffect } from "react";
import prajjwol from '../../Assets/prajjwol.jpg';
import { AiOutlineClose } from "react-icons/ai";
import { GrNext, GrPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import logo from '../../Assets/logo-light.png';
import football from '../../Assets/Highlights/football.jpg';
import rock from '../../Assets/Highlights/rock.jpg';
import culture from '../../Assets/Highlights/culture.jpg';
import travel from '../../Assets/Highlights/travel.jpeg';
import family from '../../Assets/Highlights/family.jpeg';

const stories = [
    { id: 1, stories: [rock, football, culture, travel, family], alt: "Extra", text: "Extra" },
];

function App() {
    const [selectedStory, setSelectedStory] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [storyIndex, setStoryIndex] = useState(0);
    const lineRef = useRef(null);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (lineRef.current) {
            lineRef.current.style.transition = 'none';
            lineRef.current.style.width = '0%';
            setTimeout(() => {
                if (lineRef.current) {
                    lineRef.current.style.transition = 'width 5s linear';
                    lineRef.current.style.width = '100%';
                }
            }, 10);

            timerRef.current = setTimeout(() => {
                handleNextStory();
            }, 5000);
        }
    };

    useEffect(() => {
        if (selectedStory) {
            startTimer();
        }

        return () => clearTimeout(timerRef.current);
    }, [storyIndex, selectedStory]);

    const handleClick = (story) => {
        setSelectedStory(story);
        setStoryIndex(0);
        setIsVisible(true);
    };

    const closeModal = () => {
        setIsVisible(false);
        clearTimeout(timerRef.current);
        setTimeout(() => setSelectedStory(null), 300); // Delay to match animation
    };

    const handleNextStory = () => {
        clearTimeout(timerRef.current);
        if (storyIndex < selectedStory.stories.length - 1) {
            setStoryIndex(storyIndex + 1);
        } else {
            closeModal();
        }
    };

    const handlePrevStory = () => {
        clearTimeout(timerRef.current);
        if (storyIndex > 0) {
            setStoryIndex(storyIndex - 1);
        }
    };

    return (
        <div className="mt-1 py-6">
            <div className="flex gap-5">
                {stories.map((story) => (
                    <div key={story.id} className="relative flex flex-col gap-2 justify-center items-center">
                        <img
                            src={logo}
                            alt={story.alt}
                            className="w-[86px] h-[86px] rounded-full border-4 border-gray-200 cursor-pointer hover:scale-110 transition-transform duration-200"
                            onClick={() => handleClick(story)}
                        />
                        <p>{story.text}</p>
                    </div>
                ))}
            </div>

            {selectedStory && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 `}
                >
                    <div className="relative bg-gray-900">
                        <div className='absolute z-50 top-1 pl-3 py-2 w-full'>
                            <div className="flex gap-3 justify-center items-center">
                                <div className="w-full h-1 bg-gray-500 rounded overflow-hidden">
                                    <div ref={lineRef} className="h-full bg-white"></div>
                                </div>

                                <button
                                    className={` text-white transform transition-transform pr-2`}
                                    onClick={closeModal}
                                >
                                    <AiOutlineClose size={20} />
                                </button>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img
                                    src={prajjwol}
                                    alt="Profile"
                                    className={`rounded-full w-10 h-10 border border-white transition-colors cursor-pointer`}
                                />
                                <h1 className='text-lg text-white font-semibold tracking-normal'>Prajjwol Shrestha</h1>
                                <span className='text-sm text-gray-100'>2 days ago</span>
                            </div>
                        </div>
                        <div className={`relative`}>
                            <motion.img
                                key={storyIndex}
                                src={selectedStory.stories[storyIndex]}
                                initial={{ opacity: 0.5, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0.5, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl h-screen rounded-lg"
                            />
                            {storyIndex > 0 && (
                                <button
                                    className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-white cursor-pointer text-4xl"
                                    onClick={handlePrevStory}
                                >
                                    <GrPrevious />
                                </button>
                            )}
                            {storyIndex < selectedStory.stories.length - 1 && (
                                <button
                                    className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-white cursor-pointer text-4xl"
                                    onClick={handleNextStory}
                                >
                                    <GrNext />
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default App;
