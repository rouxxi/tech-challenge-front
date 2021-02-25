import React from 'react';

function SubscribeForm() {
    const [name, setName] = React.useState("")
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const onSubmit = (event) => {
     event.preventDefault();

    }
    return (
        <form>
            <label htmlFor="">Name:&nbsp;
            <input type="text" value={name} onChange={handleChange}/>
            </label>
            &nbsp;
            <input type="submit" value='Send' onClick={onSubmit} />
        </form>
    )
}

export default SubscribeForm;