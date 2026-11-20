import React from 'react';
import { Outlet } from 'react-router-dom';


const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className='w-64 bg-[#D1A054] min-h-screen'>
                <div className='p-6 uppercase'>
                    <h1 className='font-bold text-3xl'>BISTRO BOSS</h1>
                    <p className='tracking-[0.65em] '>RESTAURANT</p>
                </div>
                
            </div>
            <div className='w-full bg-[#DED7D7]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;