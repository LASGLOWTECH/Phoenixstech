import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Image7 } from './images'
const Subscription = () => {





    const [formData, setFormData] = useState({
       
        email: '',
        
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const res = await axios.post('/api/contact', formData);
            setStatus('Message sent successfully!');
            setFormData({  email: ''});
        } catch (err) {
            setStatus('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (


        <div className="bg-Primarycolor md:px-20 px-6 py-10 relative   overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Image7})`
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                {/* Dark overlay */}
            </div>

            {/* Content Container */}
            <div className=" flex items-center flex-col relative z-10 text-center py-20 ">
                <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                Get the latest updates and offers from us
                </h2>
                <p className="mt-4 text-base sm:text-base text-gray-300 md:max-w-3xl py-2">
                Get the latest industry news, tips, and trends straight to your  inbox.
                </p>

                <form onSubmit={handleSubmit} className=" px-4 rounded-lg shadow-md space-y-4">


                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className=" w-[300px] md:w-[400px] p-3  bg-[#F6F5FA] focus:outline-none focus:ring-2  rounded-md"
                        required
                    />
                </form>


                <div className="mt-8">

                   
                        <button  type="submit"
                            className="bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold py-3 px-5 rounded-md transition-all duration-300"
                       
                            disabled={loading}
                            >
                             {loading ? 'Sending...' : '  Subscribe Now'} 
                        </button>
                 
                </div>
            </div>
        </div>
    )
}

export default Subscription
