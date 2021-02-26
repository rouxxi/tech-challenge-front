import React from 'react';
import axios from 'axios';
import './subscribeForm.css'

function SubscribeForm(props) {
    const {name, setName, message, setMessage} = props;
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
        <div className='form'>
        <form>
            <label htmlFor="">Name:&nbsp;
            <input type="text" value={name} onChange={handleChange}/>
            </label>
            &nbsp;
            <input type="submit" value='Send' onClick={onSubmit} />
        </form>
        {message && <div className='msg'>{message}</div>}
        </div>
    )
}

export default SubscribeForm;