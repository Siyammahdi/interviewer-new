import React from 'react';

interface SubtitleProp {
    children: string;
}

const Subtitle: React.FC<SubtitleProp> = ({children}) => {
    return (
        <div>
            <p className='font-semibold my-8 text-blue-500'>{children}</p>
        </div>
    );
};

export default Subtitle;