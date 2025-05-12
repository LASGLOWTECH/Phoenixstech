import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdCloudUpload } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import instance from '../config/axios.config';
import useAOS from '../hooks/useAos';

const Consultation = () => {
  useAOS();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setPreviewUrl(null);
    }
  };

  // Upload file to server
  const uploadFile = async () => {
    if (!file) return ''; // If no file, return empty string

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];

    // Validate file type
    if (!allowedTypes.includes(file.type)) {
      toast.error('Only PDF, JPEG, and PNG files are allowed');
      return '';
    }

    try {
      const form = new FormData();
      form.append('file', file);

      const res = await instance.post('/upload/files', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Check response and return the filename or URL
      if (res.data && res.data.filename) {
        return res.data.filename;
      } else {
        throw new Error('File upload failed');
      }
    } catch (error) {
      console.error("File upload failed", error);
      toast.error("File upload failed");
      return '';
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Upload the file and get the URL or filename
    const resumeUrl = await uploadFile();

    if (!resumeUrl) {
      // If no file URL, prevent submission and show error
      toast.error("File upload failed");
      setLoading(false);
      return;
    }

    try {
      // Submit form data along with file URL
      await instance.post('/consultation', {
        ...formData,
        resume: resumeUrl,  // Include uploaded file URL
      });

      toast.success('Details Submitted');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setFile(null);
      setPreviewUrl(null);
    } catch (error) {
      toast.error(error.response?.data?.error || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="py-16 px-4 mx-auto md:px-40">
        <div className="p-3 border-b border-gray-200">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 text-lg font-semibold py-3">
            <FaArrowLeftLong className="mr-2" size={20} />
            Back
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 bg-[#F6F5FA] focus:outline-none focus:ring-2 rounded-md"
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 bg-[#F6F5FA] focus:outline-none focus:ring-2 rounded-md"
              required
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Ex info@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-[#F6F5FA] focus:outline-none focus:ring-2 rounded-md"
            required
          />

          <div className="flex items-center gap-4">
            <input
              type="file"
              id="file"
              accept=".pdf,image/jpeg,image/png"
              className="hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="file" className="flex items-center cursor-pointer rounded-md bg-[#F6F5FA] justify-center p-4 gap-3">
              <MdCloudUpload className="text-Primarycolor text-[30px]" />
              <span className="text-gray-900 font-medium text-lg">
                {file ? file.name : "Upload your Resume (PDF, JPEG, or PNG)"}
              </span>
            </label>
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="w-32 h-32 object-cover rounded-md border" />
            ) : file ? (
              <p className="mt-2 text-sm text-gray-700">Uploaded File: {file.name}</p>
            ) : null}
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Type here your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-[#F6F5FA] focus:outline-none focus:ring-2 rounded-md"
            required
          ></textarea>

          <button
            type="submit"
            className="text-white px-6 py-3 bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 rounded-md duration-300"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Consultation;
