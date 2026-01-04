import Navbar from './Navbar';
import WorkCard from './WorkCard';
import data from "../data/work.json";
import "../background.css";
import Footer from './Footer';
import { useEffect } from 'react';

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "WORKS | MYUMASE";
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-40 pb-8">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{
              fontFamily: "'Libre Baskerville', serif"
            }}>WORKS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((work, index) => (
            <WorkCard
              key={index}
              images={work.images}
              title={work.title}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Work;
