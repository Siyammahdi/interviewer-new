import React from 'react';
import Banner from './Sections/Banner';
import HiredCompanies from './Sections/HiredCompanies';
import WorkWay from './Sections/WorkWay';
import Opportunity from './Sections/Opportunity';
import Intellegence from './Sections/Intellegence';
import Career from './Sections/Career';
import TopCompanies from './Sections/TopCompanies';
import GetStarted from './Sections/GetStarted';
import HiringSection from './Sections/HiringSection';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <HiredCompanies />
            <WorkWay />
            <Opportunity />
            <Intellegence />
            <Career />
            <TopCompanies />
            <HiringSection />
            <GetStarted />
        </div>
    );
};

export default HomePage;