import React from 'react';
import './CrewMembers.css'

function CrewMembers(props) {
    const {members} = props;
    const liste = {
        premiere: [1,4,7,10,13,16,19,22],
        deuxieme: [2,5,8,11,14,17,20,23],
        troisieme:[3,6,9,12,15,18,21,24],

    }
    return (
<div className='liste'> <h2 className='H4crew'>The crew</h2>
    <table>
        <tr className='row'>
            <td className='cell' >{members && members.map((bro, index) => {
     if(liste.premiere.includes(index)) {
        return ( 
            <p className='name' >
                {bro.name}
            </p>
                )
    }
})
}</td>
            <td className='cell'>{members && members.map((bro, index)=> {
    if(liste.deuxieme.includes(index)) {
        return ( 
            <p className='name' >
                {bro.name}
            </p>
                )
    }
})
}</td>
            <td className='cell'>{members && members.map((bro, index)=> {
                if(liste.troisieme.includes(index)) {
                    return ( 
                        <p className='name' >
                            {bro.name}
                        </p>
                            )
                }
    
})
}</td>
        </tr>
    </table>


</div>
    )
}

export default CrewMembers;