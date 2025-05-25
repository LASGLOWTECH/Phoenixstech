import { Wrongpage } from "../components/images";


const NotFound = () => {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-semibold text-red-600">
        <img src={Wrongpage} alt="" className="w-full height full" />
        <span className="ml-6">OOPS! NOT SURE OF THIS PAGE</span>
      </div>
    ); 
  };
  
  export default NotFound;