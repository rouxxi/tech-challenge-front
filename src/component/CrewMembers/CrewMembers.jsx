import React, { useEffect } from 'react';
import axios from 'axios';
import './CrewMembers.css'

function CrewMembers() {
const [members, setMembers] = React.useState([]);
const {REACT_APP_BACKURL} = process.env;

useEffect(()=> {
 axios.get(`${REACT_APP_BACKURL}crewmembers`).then((res)=>setMembers(res.data))
}, [members])
    return (
<div> <h2 className='H4crew'>The crew</h2>
<ul> 
{members && members.map((bro)=> {
    return ( 
    <li>
        {bro.name}
    </li>
        )
})
}
</ul>

</div>
    )
}

export default CrewMembers;