import React from 'react';
import Heading from '../Heading/Heading';

const Header = ({roomData}) => {
    return (
        <>
            <div className='pt-12'>
                <Heading
                    title={roomData.title}
                    subtitle={roomData.location}
                ></Heading>
            </div>
            <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                <img className='object-cover w-full' src={roomData.image} alt="" />
            </div>
        </>
    );
};

export default Header;