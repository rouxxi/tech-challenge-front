import React, {useEffect} from 'react';
import Header from '../../component/Header/Header';
import SubscribeForm from '../../component/SubscribeForm/SubscribeForm';
import CrewMembers from '../../component/CrewMembers/CrewMembers';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
    const [message, setMessage] = React.useState("")
    const [name, setName] = React.useState("")
    const [members, setMembers] = React.useState([]);
    const {REACT_APP_BACKURL} = process.env;
    
useEffect(()=> {
    axios.get(`${REACT_APP_BACKURL}crewmembers`).then((res)=>setMembers(res.data))
   }, [name]);

    return(
        <div>
            <Header />
            <div className='dashboard'>
            <SubscribeForm message={message} setMessage={setMessage} name={name} setName={setName}/>
            <CrewMembers members={members}  setMembers={setMembers} />
            </div>

        </div>
    )
}

export default Dashboard;