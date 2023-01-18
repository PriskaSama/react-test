import React from "react";

export const Footer = () => {
  return (
    <footer className="container grid lg:grid-cols-5 lg:grid-rows-2">
      <div className="border border-purple-400 rounded-2xl py-1 px-5 lg:col-start-3 lg:row-span-2">
        <p className="uppercase text-red-500">
          Logo
        </p>
      </div>
      <div className="border border-purple-400 rounded-2xl py-1 px-5 lg:col-start-5">
        <p className="uppercase text-red-500">
          Bulle chat
        </p>
      </div>
      <div className="border border-purple-400 rounded-2xl py-1 px-5 lg:col-start-1 lg:row-start-1">
        <p className="uppercase text-red-500">
          Reseaux sociaux
        </p>
      </div>
      <div className="border border-purple-400 rounded-2xl py-1 px-5 lg:row-start-2 lg:col-start-2">
        <p className="uppercase text-red-500">
          RGPD1
        </p>
      </div>
      <div className="border border-purple-400 rounded-2xl py-1 px-5 lg:row-start-2 lg:col-start-4">
        <p className="uppercase text-red-500">
          RGPD2
        </p>
      </div>
    </footer>
  );
};
