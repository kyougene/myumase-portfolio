import Navbar from './Navbar';
import WorkCard from './WorkCard';
import data from "../data/data.json"

const Work = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
          {data.map((work, index) => (
            <WorkCard
              key={index}
              images={work.images}
              title={work.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
