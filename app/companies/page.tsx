
import ProfileDetails from "./[id]/page";
import CompaniesLayout from "./CompaniesLayout";
import Profiles from "./Containers/Profiles";

const Companies = () => {
  return (
    <div>
      <CompaniesLayout>
        <Profiles />
        <div className="flex w-full">
        <div className="fixed right-0 top-0 bg-white z-10 h-full w-1/2">
          <ProfileDetails />
        </div>
      </div>
      </CompaniesLayout>
    </div>
  );
};

export default Companies;
