import React from 'react';
import Login from '../Login_LogOut/Login';
import Banner from './Home/Banner';
import Garages from './Home/Garages';
;

const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <Garages></Garages>
       </div>
    );
};

export default Home;