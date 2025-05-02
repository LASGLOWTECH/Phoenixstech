import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'First name must be at least 2 characters.').required('First name is required'),
  lastName: Yup.string().min(2, 'Last name must be at least 2 characters.').required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().min(10, 'Phone number must be at least 10 digits.').max(15).required('Phone number is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters.').required('Password is required'),
  retypePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Retype your password'),
});

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      retypePassword: '',
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setRegistrationError(null);
      setRegistrationSuccess(false);

      try {
        const response = await fetch('https://your-api.com/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Registration failed');
        }

        setRegistrationSuccess(true);
        formik.resetForm();
      } catch (error) {
        setRegistrationError(error.message || 'An error occurred during registration.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen py-16 flex items-center justify-center px-4 bg-gray-900">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Register</h2>

        {registrationSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
            Account created successfully!
          </div>
        )}

        {registrationError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            {registrationError}
          </div>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {['firstName', 'lastName', 'email', 'phoneNumber', 'password', 'retypePassword'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                {field.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm ${formik.touched[field] && formik.errors[field]
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                  }`}
                value={formik.values[field]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={isSubmitting}
              />
              {formik.touched[field] && formik.errors[field] && (
                <p className="text-sm text-red-500 mt-1">{formik.errors[field]}</p>
              )}
            </div>
          ))}

          {/* Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="robot"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              disabled={isSubmitting}
            />
            <label htmlFor="robot" className="ml-2 block text-sm text-gray-900">
              I'm not a robot
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {isSubmitting ? 'Registering...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
