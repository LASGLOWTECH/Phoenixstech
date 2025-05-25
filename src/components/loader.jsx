// components/SiteLoader.jsx
import  { useEffect, useState } from 'react';

const SiteLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {


      setTimeout(() => {
        setLoading(true);
      }, 5000); // Adjust the delay herec
    
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
    <div className={`fixed inset-0 bg-grey-400 flex flex-col justify-center items-center transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <img src="/logo.png" alt="logo" className="h-[200px] w-[200px]" />
      <p className="text-Primarycolor text-sm font-light mt-2">PHOENIXS TECH</p>
    </div>
  );
};

export default SiteLoader;
