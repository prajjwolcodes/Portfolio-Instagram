import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa';

const MAX_EMAILS = 2;
const TIME_FRAME = 30 * 60 * 1000; // 30 minutes in milliseconds

const ContactSection = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [sending, setSending] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        checkEmailLimit();
    }, []);

    const inputClass = `w-full p-3 border rounded ${darkMode ? 'bg-black text-white border-gray-300' : 'bg-white text-black border-gray-800'}`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const checkEmailLimit = () => {
        const emailTimestamps = JSON.parse(localStorage.getItem('emailTtimestamps')) || [];
        const now = Date.now();
        const filteredTimestamps = emailTimestamps.filter(timestamp => now - timestamp < TIME_FRAME);

        localStorage.setItem('emailTimestamps', JSON.stringify(filteredTimestamps));
        return filteredTimestamps.length < MAX_EMAILS;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!checkEmailLimit()) {
            setResponseMessage('You have reached the email limit. Please try again later.');
            return;
        }

        setSending(true);
        setResponseMessage('');

        try {
            const response = await axios.post(process.env.REACT_APP_EMAIL_API_URL, formData);
            setResponseMessage('Message sent successfully!');

            const emailTimestamps = JSON.parse(localStorage.getItem('emailTimestamps')) || [];
            emailTimestamps.push(Date.now());
            localStorage.setItem('emailTimestamps', JSON.stringify(emailTimestamps));
        } catch (error) {
            console.error('Error sending email:', error);
            setResponseMessage('Failed to send message.');
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            <div className={`flex ${darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full sm:w-[300px] bg-gray-300 rounded-lg flex-1 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6904435576153!2d85.36490402538037!3d27.665047577356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a08deaac20d%3A0x2c994399b80e4bda!2sBalkot%20Chowk%2C%20Anantalingeshwar%2044600!5e0!3m2!1sen!2snp!4v1711943408541!5m2!1sen!2snp"></iframe>
                </motion.div>

                <motion.div
                    className="w-[400px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >

                    {/* Added getform.io instead of using my own api */}
                    <motion.form
                        action="https://getform.io/f/lbkmyxmb"
                        method="POST"
                        className={`mb-0 px-4 py-4 sm:px-6 md:px-0 rounded-lg ${darkMode ? 'bg-black' : 'bg-white'}`}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-4">
                            <label className={`hidden sm:block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} htmlFor="name">
                                Full Name
                            </label>
                            <input
                                className={inputClass}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className={`hidden sm:block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} htmlFor="email">
                                Your Email
                            </label>
                            <input
                                className={inputClass}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email Address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className={`hidden sm:block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} htmlFor="subject">
                                Subject
                            </label>
                            <input
                                className={inputClass}
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className={`hidden sm:block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className={inputClass}
                                id="message"
                                name="message"
                                rows="4"
                                required
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <motion.button
                            className={`w-full p-2 rounded ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} font-semibold`}
                            type="submit"
                            disabled={sending}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {sending ? 'Sending...' : 'Send'}
                        </motion.button>
                    </motion.form>
                    {responseMessage && (
                        <p className="text-sm mb-4 text-center text-gray-400">{responseMessage}</p>
                    )}
                    <motion.div
                        className="flex space-x-4 pb-0 sm:space-x-6 justify-center"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a target='_blank' href="" className={darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}>
                            <FaLinkedin size="1.5em" />
                        </a>
                        <a target='_blank' href="https://github.com/prajjwolcodes" className={darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}>
                            <FaGithub size="1.5em" />
                        </a>
                        <a target='_blank' href="https://www.instagram.com/prajzwolslimsulek/" className={darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}>
                            <FaInstagram size="1.5em" />
                        </a>
                        <a target='_blank' href="https://www.facebook.com/profile.php?id=100011013391464" className={darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}>
                            <FaFacebook size="1.5em" />
                        </a>
                    </motion.div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col justify-center items-center sm:flex-row gap-8 mt-8'>
                            <a href="tel:9803600040" className="flex items-center gap-2">
                                <FaPhone size="1.5em" />
                                <span>+977-9803600040</span>
                            </a>
                            <a href="mailto:shresthaprajjwol4@gmail.com" className="flex items-center gap-2">
                                <FaEnvelope size="1.5em" />
                                <span>shresthaprajjwol4gmail.com</span>
                            </a>

                        </div>
                    </div>

                </motion.div>

            </div >
            <div className="text-center text-sm text-gray-400 py-8">
                <p>© {new Date().getFullYear()} Prajjwol Shrestha.</p>
                <div className="flex gap-1 items-center justify-center">
                    <p>Assisted by Sahil Karn </p>
                    <a target='_blank' href="https://www.instagram.com/sahilkarn_17/" className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-800 hover:text-gray-600'}>
                        <FaInstagram size="1em" />
                    </a>
                </div>

            </div>
        </>
    );
};

export default ContactSection;

