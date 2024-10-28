// import ProfileDetails from "./[id]/page";
import CompaniesLayout from "./layout";
import Profiles from "./Containers/Profiles";
import ProfileDetails from "./Containers/ProfileDetails";

const Companies = () => {
  return (
    <div>
      <CompaniesLayout>
        <div className="flex flex-col">
          <div className="w-1/2 " style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }} >
            <Profiles />
          </div>
          <div className="fixed right-0 top-0 bg-white z-10 h-full w-1/2">
            <ProfileDetails />
          </div>
        </div>
      </CompaniesLayout>
    </div>
  );
};

export default Companies;
