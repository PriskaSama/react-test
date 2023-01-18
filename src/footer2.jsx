import React from "react";

export const Footer2 = () => {
  return (
    <footer className="container grid grid-cols-1 md:grid-cols-5">
      <div className="border border-purple-400 rounded-2xl py-1 px-5 md:order-3">
        <p className="uppercase text-red-500">Logo</p>
      </div>
      <div className="border border-purple-400 rounded-2xl py-1 px-5 md:order-5">
        <p className="uppercase text-red-500">Bulle chat</p>
      </div>
      <div className="border border-purple-400 rounded-2xl py-1 px-5 md:order-1">
        <p className="uppercase text-red-500">Reseaux sociaux</p>
      </div>
      <div className="border border-purple-400 rounded-2xl py-1 px-5 md:order-2">
        <p className="uppercase text-red-500">RGPD1</p>
      </div>
      <div className="border border-purple-400 rounded-2xl py-1 px-5 md:order-4">
        <p className="uppercase text-red-500">RGPD2</p>
      </div>
    </footer>
  );
};
