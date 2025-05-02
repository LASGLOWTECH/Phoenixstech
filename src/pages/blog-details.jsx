import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import blogdata from "../assets/data/blogdata";
import Subscription from "../components/subscription";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { PiArrowCircleUpRightFill } from "react-icons/pi";
const BlogDetails = () => {
  const { id } = useParams();
  const post = blogdata.find((item) => item.id.toString() === id); // Convert to string for safety

  const [shares, setShares] = useState({});

  useEffect(() => {
    // Initialize share count for current blog post if not already set
    setShares((prevShares) => ({
      ...prevShares,
      [id]: prevShares[id] || 0,
    }));
  }, [id]);

  const handleShare = (blogid) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check this blog!",
          text: "Hey, look at this interesting blog!",
          url: window.location.href,
        })
        .then(() => {
          // Increment the share count for the blog
          setShares((prevShares) => ({
            ...prevShares,
            [blogid]: (prevShares[blogid] || 0) + 1,
          }));
          console.log("Shared successfully");
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  if (!post) {
    return <div className="text-black text-center mt-10">Blog not found</div>;
  }

  return (
    <div className="bg-gray-100 py-16">
      <div className="md:px-20 px-6 mx-auto rounded-lg overflow-hidden">
        <div className="p-3 border-b border-gray-200">
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <FaArrowLeftLong className="mr-2" size={20} />
            <Link to="/blog" className="text-lg font-semibold">Back</Link>
          </button>
        </div>

        <div className="relative">
          <img className="w-full md:h-[573px] object-cover" src={post.image} alt="blog" />
        </div>


        <h2 className="md:text-3xl text-Darkash py-5 mb-5 text-3xl  sm:text-3xl font-semibold">
          {post.title}
        </h2>
        <div className="flex justify-between flex-col items-center max-w-[800px]  pt-4 mx-5 md:mx-auto">


        </div>

        <div className="flex justify-left items-center gap-2 mb-6">
          <p className="text-grey-100 pe-6 text-[14px]">
            {post.date}
          </p>
          <div
            onClick={() => handleShare(post.id)}
            className="cursor-pointer hover:scale-105 transition"
            title="Share this post"
          >
            <IoShareSocialSharp fill="gray" size={20} />
          </div>
          <span className="text-[14px] text-gray-700">{shares[post.id]} shares</span>
        </div>

        <button className="bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold py-2 px-5 rounded-md transition-all duration-300 mt-3 flex items-center" onClick={() => handleShare(post.id)}>
          Share <IoShareSocialSharp fill="white" className=" text-lg" />
        </button>
        <p className="text-grey-100 text-base md:text-lg my-4 ">{post.description}</p>


        <Subscription />

        <div className="container mx-auto px-4 py-8"> 
          <h3 className="text-4xl font-semibold text-gray-800 mt-8 mb-4">Suggestions For You</h3>
          <div className="text-gray-700 text-base mb-8" dangerouslySetInnerHTML={{ __html: post.content }}></div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {blogdata
              .filter((item) => item.id !== post.id)
              .slice(0, 3) // Limit to 3 suggestions
              .sort(() => Math.random() - 0.5) // Randomize order
           
              .map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md" />
                  <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>


                  <Link to={`/blog/${item.id}`}>
                    <div className="flex items-center pt-6 group cursor-pointer transition-all duration-500">
                      <p className="ml-2 text-Primarycolor2 font-medium transition-all duration-500">
                        Read Article
                      </p>
                      <span className="transition-transform duration-500 ease-in-out">
                        <PiArrowCircleUpRightFill className="w-8 h-8 fill-Primarycolor" />
                      </span>
                    </div>
                  </Link>

                </div>
              ))}


          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
