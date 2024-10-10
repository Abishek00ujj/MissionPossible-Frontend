import React, { useState, useEffect } from "react";
import axios from "axios";

const PlacesCard = () => {
  const [placeslist, setplaceslist] = useState([]);

  useEffect(() => {
    const url = "https://67038440bd7c8c1ccd41bc90.mockapi.io/places";
    axios
      .get(url)
      .then((response) => {
        setplaceslist(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the project data!", error);
      });
  }, []);

  return (
    <div className="w-screen">
      <ul className="flex flex-wrap justify-center">
        {placeslist.map((item, index) => (
          <li key={index} className="m-[1%] flex">
            <div className="shadow-md h-[300px] w-[300px] flex flex-col rounded-2xl bg-slate-100">
              <img
                className="w-auto h-[50%] rounded-lg m-2"
                src={item.img}
                alt="project"
              />
              <div className="p-4 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">{item.placename}</h1>
                <p className="text-lg">{item.Description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlacesCard;