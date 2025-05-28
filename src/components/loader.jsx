// components/SiteLoader.jsx
import  { useEffect, useState } from 'react';
import { PacmanLoader } from "react-spinners";
const SiteLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {



    
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
     <div className={`fixed inset-0 shadow-black shadow-lg flex justify-center items-center py-8 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <PacmanLoader color="#321C94" size={50} />
        </div>
    // <div className={`fixed inset-0 shadow-black shadow-lg bg-grey-400 flex flex-col justify-center items-center transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
    //   <img src="/logo.png" alt="logo" className="h-[200px] w-[200px]" />
    //   <p className="text-Primarycolor text-2xl font-light">PHOENIXS TECH</p>
    // </div>
  );
};

export default SiteLoader;
