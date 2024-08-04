import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-arts")
      .then((res) => res.json())
      .then((data) => setArts(data));
  }, []);

  useEffect(() => {
    console.log(arts);
  }, [arts]);

  return (
    <div className="grid gap-8 my-10 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
      {arts.map((art) => (
        <div key={art._id} className="flex flex-col h-full border-transparent shadow-sm shadow-black rounded-lg text-center items-center overflow-hidden w-full">
          <img
            src={art.image_url}
            className="h-64 w-full object-cover rounded-t-lg "
            alt="Art"
          />
          <div className="flex flex-col justify-between flex-1 p-4">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {art.art_title}
            </h5>
            <p className="text-gray-700 text-sm mt-2">
              {art.art_description}
            </p>
            
          </div>
          <div className="mt-4 mb-4 w-full">
              <Link to={`/art/${art._id}`}>
                <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-full w-[80%] transition-all duration-300 ease-in-out">
                  Buy Now
                </button>
              </Link>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
