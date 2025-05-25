import { Wrongpage } from "../components/images";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col py-16 px-6 md:px-20">
        <h2 className="  text-red-600  text-center font-semibold  text-3xl md:text-5xl" >Wrong Route </h2>
          <p className="  mt-4 text-gray-700 text-center md:max-w-[400px] leading-relaxed" >Something went wrong please try again or check your connection </p>
        <img src={Wrongpage} alt="" className="w-[400PX] height-[400px] full" />
      <Link to={'/'}>
                    <button className="bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold py-3 px-5 rounded-md transition-all duration-300">
              Try Again
                    </button>
                  </Link>
      </div>
    ); 
  };
  
  export default NotFound;