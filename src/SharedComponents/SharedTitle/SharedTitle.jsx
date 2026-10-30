import React from 'react';

const SharedTitle = ({title}) => {
    return (
        <div className='flex justify-center items-center gap-x-2'>
            <div className='w-[10%]'><hr className='w-[100%] text-green-700 fond-bold text-xl border-2 ' /></div>
            <div className=''>
                <h3 className='bg-green-700 rounded-full px-4 py-1 text-white fond-bold text-xl'>{title}</h3>
            </div>
            <div className='w-[10%]'><hr className='w-[100%] text-green-700 fond-bold text-xl border-2 ' /></div>
        </div>
    );
};

export default SharedTitle;