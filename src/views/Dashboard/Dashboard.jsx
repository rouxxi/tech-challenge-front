import React from 'react';
import Header from '../../component/Header/Header';
import SubscribeForm from '../../component/SubscribeForm/SubscribeForm';
import CrewMembers from '../../component/CrewMembers/CrewMembers';
import './Dashboard.css';

function Dashboard() {
    return(
        <div>
            <Header />
            <div className='dashboard'>
            <SubscribeForm />
            <CrewMembers />
            </div>

        </div>
    )
}

export default Dashboard;