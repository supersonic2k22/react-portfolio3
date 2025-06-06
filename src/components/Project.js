import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img className="rounded-2xl hover:scale-125 transition-all duration-500 delay-75" src={item.image} alt="" />
        </a>
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
    </div>
  );
};

export default Project;
