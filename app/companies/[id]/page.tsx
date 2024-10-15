import React from "react";
import ProfileHeader from "./_components/ProfileHeader";
import Tabs from "./_components/Tabs";
import AIInterview from "./_components/AiInterview";

const ProfileDetails = () => {
  return (
    <div>
      <div className="min-h-screen border-l">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Tabs Section */}
        <Tabs />

        {/* AI Interview */}
        <AIInterview />
      </div>
    </div>
  );
};

export default ProfileDetails;
