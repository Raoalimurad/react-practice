import React from 'react';
import { MdDelete } from "react-icons/md";

function Contactlist(props) {
    const {data,deleteContacts} = props
 
    const showData = data.map((value) =>{
       return(
        <div className='showData'>
            <div>{value.add.name} </div>
            <div>{value.add.email} </div>
            <div><span onClick={()=>deleteContacts(value.id)} className='btn'><MdDelete /></span></div>
        </div>
       )
    } )
        
    

    return (
        <div>
            <h3 className='contactHeading'>Contactlist</h3>
            <div>{showData}</div>
        </div>
    );
}

export default Contactlist;

