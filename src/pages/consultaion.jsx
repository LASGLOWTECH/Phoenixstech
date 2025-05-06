import useAOS from '../hooks/useAos';
import { MdCloudUpload } from "react-icons/md";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import instance from '../config/axios.config';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Consultation = () => {
  const refreshAOS = useAOS();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const upload = async () => {
    try {
      const allowedTypes = ['application/pdf', 'image/jpeg'];
      if (!allowedTypes.includes(file.type)) {
        toast.error('Only PDF or JPEG files are allowed');
        return null;
      }

      const data = new FormData();
      data.append('file', file);

      const res = await instance.post('/upload/files', data);
      return res.data?.url || null; 
    } catch (err) {
      console.error("Upload Error:", err);
      toast.error('File upload failed');
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const uploadedFileUrl = file ? await upload() : null;
    if (file && !uploadedFileUrl) {
      setLoading(false);
      return;
    }

    try {
      const res = await instance.post('/consultation', {
        ...formData,
        resume: uploadedFileUrl || '',
      });

     


      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
      setFile(null);
      toast.success('Details Submited');
    } catch (err) {
      toast.error(
        err.response?.data?.error || 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">



      <div className="py-16 px-4 mx-auto md:px-40">
        <div className="p-3 border-b border-gray-200">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 text-lg  py-3 font-semibold">
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
            placeholder="Ex JohnDoe214@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-[#F6F5FA] focus:outline-none focus:ring-2 rounded-md"
            required
          />

          <div className="flex items-center gap-4">
            <input
              type="file"
              id="file"
              accept=".pdf,image/jpeg"
              className="hidden"
              onChange={(e) => {
                const selectedFile = e.target.files[0];
                setFile(selectedFile);

                if (selectedFile && selectedFile.type.startsWith('image/')) {
                  setPreviewUrl(URL.createObjectURL(selectedFile));
                } else {
                  setPreviewUrl(null);
                }
              }}
            />
            <label htmlFor="file" className="flex items-center cursor-pointer rounded-md bg-[#F6F5FA] justify-center p-4 gap-3">
              <MdCloudUpload className="text-Primarycolor text-[30px]" />
              <span className="text-gray-900 font-medium text-lg">
                {file ? file.name : "Upload your Resume (PDF or JPEG)"}
              </span>
            </label>
            {previewUrl ? (
              <div className="mt-2">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-md border"
                />
              </div>
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
