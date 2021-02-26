import React from 'react';
import './CrewMembers.css'

function CrewMembers(props) {
    const {members} = props;

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