import Navbar from './Navbar';
import WorkCard from './WorkCard';
import data from "../data/work.json";
import "../background.css";
import Footer from './Footer';
import { useEffect, useState } from 'react';

const Work = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "WORKS | MYUMASE";
}, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-8">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{
              "fontFamily":  'Katibeh, serif' 
            }}>Works</h1>
            {loading ? (
                  <div className="flex justify-center items-center h-64">
                    <div className="loader"></div>
                  </div>
            ): (<>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">  {/* Adjusted grid settings */}
            {data.map((work, index) => (
              <WorkCard
                key={index}
                images={work.images}
                title={work.title}
              />
            ))}
            </div>
      <Footer />
            </>
        )}
      </div>
    </>
  );
};

export default Work;
