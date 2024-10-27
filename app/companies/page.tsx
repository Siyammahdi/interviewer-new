// import ProfileDetails from "./[id]/page";
import CompaniesLayout from "./layout";
import Profiles from "./Containers/Profiles";
import ProfileDetails from "./Containers/ProfileDetails";

const Companies = () => {
  return (
    <div>
      <CompaniesLayout>
        <div className="w-1/2">
          <Profiles />
        </div>
        <div className="fixed right-0 top-0 bg-white z-10 h-full w-1/2">
          <ProfileDetails />
        </div>
      </CompaniesLayout>
    </div>
  );
};

export default Companies;
