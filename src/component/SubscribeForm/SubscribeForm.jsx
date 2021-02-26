import React from 'react';
import axios from 'axios';

function SubscribeForm() {
    const [message, setMessage] = React.useState("")
    const [name, setName] = React.useState("")
    const {REACT_APP_BACKURL} = process.env;
    
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const onSubmit = (event) => {
     event.preventDefault();
     if(name.length>0) {
        axios.post(`${REACT_APP_BACKURL}crewmembers`, {
            name:name
        }).then((res)=>
        {
            if(res.data.msg){
                setMessage(res.data.msg)
            } else {
                setMessage('');
                setName('');
            }
        } )
     }else {
        setMessage('Enter the name of somone plz!')
     }
     
    
    }


    return (
        <div>
        <form>
            <label htmlFor="">Name:&nbsp;
            <input type="text" value={name} onChange={handleChange}/>
            </label>
            &nbsp;
            <input type="submit" value='Send' onClick={onSubmit} />
        </form>
        {message && <div>{message}</div>}
        </div>
    )
}

export default SubscribeForm;