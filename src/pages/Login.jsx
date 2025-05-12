import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import instance from '../config/axios.config';

// Validation schema
const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(5, 'Password must be at least 8 characters.').required('Password is required'),
});

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setLoginError(null);

      try {
        const response = await instance.post(
          '/auth',
          values,
         
        );

        console.log('Login successful:', response.data);
        formik.resetForm();
        navigate('/dashboard'); // change this route as needed
      } catch (error) {
        setLoginError(error.response?.data?.message || 'Login failed');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900"
    >
      <div className="w-full max-w-md bg-white shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Admin Login</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full px-4 py-2 rounded-md shadow-sm border 
                ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}
              `}
              disabled={isSubmitting}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full px-4 py-2 rounded-md shadow-sm border 
                ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'}
              `}
              disabled={isSubmitting}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
            )}
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-Primarycolor to-Primarycolor1 text-white py-3 px-4 rounded-md hover:from-Secondarycolor hover:to-Secondarycolor1 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>


  

        {/* Error Message */}
        {loginError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 text-sm">
            {loginError}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Login;
