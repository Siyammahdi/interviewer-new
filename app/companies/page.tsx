import React from "react";
import Profiles from "./Containers/Profiles";
import Menubar from "./Containers/MenuBar";
import ProfileDetails from "./[id]/page";

const Companies = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-1/2">
        <Menubar />
        <Profiles />
      </div>
      <div className="w-1/2">
        <ProfileDetails />
      </div>
    </div>
  );
};

export default Companies;
