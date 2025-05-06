
import { FaCirclePlus } from "react-icons/fa6";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import instance from '../config/axios.config';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Create = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state || {};
  const postid = state.postid;

  const [content, setContent] = useState(state?.content || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [existingImage, setExistingImage] = useState(state?.cover || "");
  const [shares, setShares] = useState(state?.shares || 0);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await instance.post("/upload/images", formData);
      return res.data; // This should return the image URL
    } catch (error) {
      console.error("Upload Error:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cover = file ? await upload() : existingImage;

    try {
      if (postid) {
        // Update post
        await instance.put(`/posts/${postid}`, {
          title,
          content,
          shares,
          cover,
        });

       
      } else {
        // Create new post
        await instance.post(`/posts`, {
          title,
          content,
          shares,
          cover,
        });
      }
        toast.success('Blog created  successfully!');
            
      navigate("/blog"); // Redirect after success
    } catch (error) {
          if (error.response?.status === 400) {
            toast.error(error.response.data.error);
          } else {
            toast.error('Unable to create blog. Please try again.');
          }
        }
  };

  return (
    <div className="write my-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2">
     <div className="">
     
      <div>
        <input
          type="text"
          className="w-full border-none p-4 text-lg text-Darkash S bg-[#F6F5FA] focus:outline-none focus:ring-2   rounded-md"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className='h-[300px] min-w-full overflow-scroll border-none '>
          <ReactQuill
            className='text-gray-900 h-full w-full border-none p-4 text-lg text-Darkash focus:outline-none focus:ring-2   rounded-md" bg-gray-50'
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </div>
      </div>

      <div className='mx-3 col-span-1'>
        <div className='flex flex-col'>

          <input
            type='file'
            id='file'
            className='hidden'
            onChange={(e) => setFile(e.target.files[0])}
          />

          <label htmlFor='file' className='text-Darkash py-4 flex flex-row items-center font-medium cursor-pointer'>
            
            <span className="flex flex-row items-center justify-between"> < FaCirclePlus className="text-4xl fill-Primarycolor" /> 
           <p className="ml-3 hidden md:block"> Upload Cover</p>
</span>
           
           <div className=' '>
    
          <button className='mx-6 px-6 py-3 bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold rounded-md transition-all duration-300"' onClick={handleSubmit}>Publish</button>
        </div>

          </label>

          
          {existingImage && !file && (
            <img src={existingImage} alt="Current Post" className="mt-2 w-full" />
          )}

       
        </div>

        
      </div>
      </div>
    </div>
  );
};

export default Create;
