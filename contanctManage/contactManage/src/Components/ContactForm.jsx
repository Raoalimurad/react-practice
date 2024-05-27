import React, { useState } from 'react'

function ContactForm({takeData}) {
    const [contact,setContact] = useState({name:"",email:""})
    const HandleContact=(e)=>{
       if(e.target.name == 'name'){
          setContact({...contact,name:e.target.value})
       }else{
        setContact({...contact,email:e.target.value})
       }
      
    }
    const handleData = ()=>{
        if(contact.name == '' || contact.email == ''){
            alert("kindly complete fill this from")
        }
     takeData(contact)
     setContact({name:"",email:""})
    }
  return (
    <div className='contact'>
        <div>

        <input type="text" placeholder='Enter your name' name='name' value={contact.name}  onChange={HandleContact}/><br/>
        <input type="email" placeholder='Enter your email' name='email' value={contact.email}  onChange={HandleContact} /><br/>
        <button onClick={handleData}>Submit</button>
        </div>
    </div>
  )
}

export default ContactForm