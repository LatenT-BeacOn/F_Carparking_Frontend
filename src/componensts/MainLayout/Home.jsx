// import React from 'react';
// import Login from '../Login_LogOut/Login';
import Banner from './Home/Banner';
import Garages from './Home/Garages';
import HappyClients from './Home/HappyClients';
import WhyChoose from './Home/WhyChoose';
;

const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <Garages></Garages>
        <WhyChoose></WhyChoose>
        <HappyClients></HappyClients>


       </div>
    );
};

export default Home;