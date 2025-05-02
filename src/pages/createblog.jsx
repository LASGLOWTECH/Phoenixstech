

import { MdUpload } from "react-icons/md";
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import instance from '../config/axios.config';
import { useLocation, useNavigate } from "react-router-dom";
// import moment from "moment";

const  Create = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state || {}; // Full state passed from Link
    const postid = state.postid;

    const [value, setValue] = useState(state?.descr || "");
    const [title, setTitle] = useState(state?.title || "");
    const [cat, setCat] = useState(state?.cat || "");
    const [file, setFile] = useState(null);
    const [existingImage, setExistingImage] = useState(state?.image || "");

    // Function to upload the file
    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const res = await instance.post("/upload", formData);
            return res.data;  // Return uploaded image URL
        } catch (error) {
            console.error("Upload Error:", error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!cat) {
            alert("Please select a category before submitting.");
            return;
        }

        const imgUrl = file ? await upload() : existingImage;

        try {
            if (state && state.postid) {
                // PUT request to update post
                await instance.put(`/posts/${postid}`, {
                    title,
                    descr: value,
                    cat,
                    image: imgUrl
                });
                navigate("/blogs"); // Redirect after successful update
            } else {
                // POST request to create new post
                await instance.post(`/posts`, {
                    title,
                    descr: value,
                    cat,
                    image: imgUrl,
                    date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
                });
                navigate("/"); // Redirect after creation
            }
        } catch (error) {
            console.error("Submit Error:", error);
        }
    };

    return (
        <div className="write my-10 container grid grid-cols-1 md:grid-cols-3">
            <div className='col-span-2'>
                <input
                    type="text"
                    className="w-full border-none p-4 pe-12 text-sm text-Darkash bg-lime-50"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className='h-[300px] overflow-scroll border-none'>
                    <ReactQuill
                        className='text-gray-900 h-[100%]'
                        theme="snow"
                        value={value}
                        onChange={setValue}
                    />
                </div>
            </div>

            <div className='mx-3 col-span-1'>
                <div className='flex flex-col'>
                    <h3 className="md:text-2xl pb-3 text-gray-800 font-medium">Publish</h3>
                    <span className='text-gray-800'><b>Status:</b> Draft</span>
                    <span className='text-Darkash'><b>Visibility:</b> Public</span>

                    <input
                        type='file'
                        id='file'
                        className='hidden'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label htmlFor='file' className='text-Darkash py-2 flex flex-row font-medium'>
                        <MdUpload className="shadow-lg text-2xl fill-Nature" /> Upload
                    </label>

                    {existingImage && !file && (
                        <img src={existingImage} alt="Current Post" className="mt-2 w-full" />
                    )}
                </div>

                <div className='space-x-3'>
                    <button className='btn-secondary2'>Save as draft</button>
                    <button className='btn-primary' onClick={handleSubmit}>Publish</button>
                </div>

                {/* Category Selection */}
                <div className='flex flex-col space-y-3'>
                    <h3 className="md:text-2xl text-Nature font-medium pt-4">Category</h3>

                    {["tech", "design", "entertainment", "music"].map((c) => (
                        <div key={c}>
                            <input
                                type='radio'
                                checked={cat === c}
                                value={c}
                                id={c}
                                name='cat'
                                onChange={(e) => setCat(e.target.value)}
                            />
                            <label htmlFor={c} className='text-Darkash font-medium capitalize'>
                                {c}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Create ;
