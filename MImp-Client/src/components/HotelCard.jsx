import React from "react";

const HotelCard = ({ name, image, price }) => {
  return (
    <div className="h-[300px] w-[300px] shadow-md rounded-md flex flex-col gap-2 p-3 justify-center">
      <div className="h-[50%] w-full rounded-md">
        <img src={image} alt={name} className="h-full w-full rounded-md" />
      </div>
      <div className="h-[20%] w-fullrounded-md flex items-center justify-center">
        {name}
      </div>
      <div className="h-[20%] w-full rounded-md flex items-center justify-center">
        {price}
      </div>
    </div>
  );
};

export default HotelCard;
