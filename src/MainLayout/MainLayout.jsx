import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:mt-15'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;