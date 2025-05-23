import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../config/axios.config'
import { Image7 } from './images'
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Subscription = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

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
            await instance.post(`/subscribe`, formData);
            toast.success(t('Message sent successfully!'));
            setStatus(t('Message sent successfully!'));
            setFormData({ email: '' });
            navigate("/");
        } catch (err) {
            setStatus(t('Something went wrong. Please try again later.'));
            toast.error(t('Something went wrong. Please try again.'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-Primarycolor md:px-20 px-6 py-10 relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${Image7})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="flex items-center flex-col relative z-10 text-center py-20 ">
                <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                    {t('Get the latest updates and offers from us')}
                </h2>
                <p className="mt-4 text-base sm:text-base text-gray-300 md:max-w-3xl py-2">
                    {t('Get the latest industry news, tips, and trends straight to your inbox.')}
                </p>

                <form onSubmit={handleSubmit} className="px-4 rounded-lg shadow-md space-y-4">
                    <input
                        name="email"
                        type="email"
                        placeholder={t('Enter your email')}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-[300px] md:w-[400px] p-3 bg-[#F6F5FA] focus:outline-none focus:ring-2 rounded-md"
                        required
                    />

                    <div className="mt-8">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold py-3 px-5 rounded-md transition-all duration-300"
                            disabled={loading}
                        >
                            {loading ? t('Sending...') : t('Subscribe Now')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Subscription;
