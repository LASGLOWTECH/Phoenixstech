import React from 'react'
import Blogcard from '../components/blogcard';
import instance from '../config/axios.config';
import { Image7 } from "../components/images";

import Subscription from '../components/subscription';
// import { posts } from "../components/blogdata";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Image2, Line } from '../components/images';

const Blogs = () => {



  


  const [posts, setPosts] = useState([]);
  const fetchDta = async () => {
    try {
      console.log("Fetching data from backend...");
      const res = await instance.get("/posts");
      
      console.log("Response received:", res.data);  // Log response data
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);  // Log the error
    }
  };


  useEffect(() => {
    console.log("useEffect triggered");
    fetchDta()





  }, [])
  return (
    <div className="overflow-hidden py-16  bg-cover bg-center text-center"
      style={{
        backgroundImage: `url(${Line})`,
        backgroundSize: "cover",     // Ensures it covers the whole area
        backgroundPosition: "center", // Keeps the focal point centered
        backgroundRepeat: "no-repeat", // Prevents tiling
      }}>


      <section className="  flex items-center justify-center flex-col mb-12">
        <div className="flex mb-4 items-center justify-left flex-row ">
          <div className="rounded-full bg-gradient-to-r from-Secondarycolor to-Secondarycolor1 w-[10px] h-[10px] mr-2"></div>
          <p className="text-sm text-orange-500 ">Blogs</p>
        </div>
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-2  md:max-w-xl">
          Insights That Drive Better Customer Experiences
        </h2>
        <p className="mt-4 text-gray-700 text-center max-w-xl leading-relaxed">
          Stay updated with tips, trends and strategies shaping the future of customer support and outsourcing
        </p>
      </section>

      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src={Image2}
          alt="Support team"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex flex-col justify-center items-center  md:justify-center md:items-start text-white   px-6  md:px-20">





          <div className="bg-[#F5F7FA] text-Primarycolor text-xs font-semibold  px-2 py-1 rounded-md flex mb-4 items-center justify-left flex-row">
            <div className="rounded-full bg-gradient-to-r from-Primarycolor  to-Primarycolor1 w-[10px] h-[10px] mr-2"></div>
            <p className="text-sm text-Primarycolor ">Featured Posts</p>
          </div>
          <h3 className="text-3xl md:text-left md:text-5xl lg:text-5xl font-semibold mb-2  md:max-w-2xl" >
            5 Ways Outsourcing Can Boost Your Customer Satisfaction
          </h3>
          <p className="text-sm md:text-base lg:text-lg py-1  g md:text-left md:max-w-xl" >
            Have questions or ready to start a project? Our team is here to assist you.
          </p>

          <Link to={"/blog/2"} className="inline-block">
       
            <button
              className="bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold py-3 px-5  mt-3 rounded-md transition-all duration-300"
            >
             Read articles
            </button>
          </Link>
        </div>
      </div>

      <Blogcard />
<Subscription />
      
      {/* {blogs && blogs.map((blog) => (
                                   <div className='col-lg-4  mt-5 '  >

<Blogcard key={blog.blogid} blog={blog} />
                                        <Blogcard key={blog.blogid} blog={blog} />

                                   </div>

                              )) */}
                              

    </div>
  )
}

export default Blogs;
