import React from 'react';
import PageHeading from './Containers/PageHeading';
import Progress from './Containers/Progress';
import Section from '../HomePage/_components/Section';
import Button from '../HomePage/_components/Button';

const Candidates = () => {
    return (
        <Section>
            <div className='h-screen py-20 flex flex-col justify-between'>
                <div className='h-full flex flex-col justify-center'>
                    <PageHeading />
                </div>
                <div className='flex justify-between mt-5'>
                    <Button classname='underline' variant='secondary'>Back</Button>
                    <Button>Next Step</Button>
                </div>
                <Progress />
            </div>
        </Section>
    );
};

export default Candidates;