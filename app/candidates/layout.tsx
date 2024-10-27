import React, { ReactNode } from 'react';
import Progress from './_components/Progress';
import Navigation from './_components/Navigation';
import Section from '../HomePage/_components/Section';

interface CandidateLayoutProps {
    children: ReactNode;
}

const CandidateLayout: React.FC<CandidateLayoutProps> = ({ children }) => {
    return (
        <Section>
            <div className='h-screen py-20 flex flex-col justify-between'>
                <div className='h-full flex flex-col justify-center'>
                {children}
                </div>
                <div>
                    <Navigation />
                    <Progress />
                </div>
            </div>
        </Section>
    );
};

export default CandidateLayout;

//