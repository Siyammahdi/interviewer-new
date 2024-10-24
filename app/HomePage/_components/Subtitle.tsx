import React from 'react';

interface SubtitleProp {
    children: string;
}

const Subtitle: React.FC<SubtitleProp> = ({children}) => {
    return (
        <div>
            <p className='text-xs md:text-sm lg:text-base font-semibold my-4 md:my-8 text-blue-500'>{children}</p>
        </div>
    );
};

export default Subtitle;