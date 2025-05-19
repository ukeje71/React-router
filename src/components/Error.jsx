import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate =useNavigate()
  return (
    <div className="flex items-center content-center flex-col gap-10 pt-56">
      <h2 className="text-4xl text-green-700">404 | PAGE NOT FOUND </h2>
      <button onClick={()=>navigate("/")} className="bg-blue-500 p-2.5 text-white font-bold rounded-full uppercase">Back to home page</button>
    </div>
  );
};

export default Error;
