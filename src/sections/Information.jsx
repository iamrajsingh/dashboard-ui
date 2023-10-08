import React from "react";
import UsersCard from "../components/UsersCard";
import Blog from "../components/Blog";
import TimePeriod from "../components/TimePeriod";

const Information = () => {
  return (
    <div className="flex flex-row mt-3 w-full h-[400px]">
      <UsersCard btn />
      <Blog/>
      <UsersCard log />
      <div className="flex flex-col w-1/4">
        <TimePeriod/> 
      </div>
    </div>
  );
};

export default Information;
