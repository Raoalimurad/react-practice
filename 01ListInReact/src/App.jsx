import { useState } from 'react';
import './App.css';

function App() {
  // const teams = ['lahore', 'Multan', 'Peshawar'];

   
  //  const[name,setName] = useState("")
  //  const setNameUser = ()=>{
  //   setName("");
  //  }


  // USE STATE WITH OBJECTS
  // const [allName,setAllName] = useState({firstName:'RaoAli',lastName:'Murad'})
  //  const [firstName,setFirstName] = useState("")
  //  const [lastName,setLastName] = useState("")
  // const updateData = ()=>{
  //     setAllName({firstName:firstName,lastName,lastName})
  //     setFirstName("")
  //     setLastName("")}
  
  return (
    <>
    {/* list rendering */}
      {/* <h1>HELLO WORLD</h1>
      {teams.map((item,index) => (
        <h2 key={index}>{item}</h2>
      ))} */}


       {/* <h3>my name is {name}</h3>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
      <button onClick={setNameUser}>SetName</button> */}


      
{/* using usestate with objects */}
      {/* <h3>my first name is {allName.firstName} and my last name is {allName.lastName}</h3>
      <input type="text" placeholder='enter first name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} /><br/>
      <input type="text" placeholder='enter first name' value={lastName} onChange={(e)=>setLastName(e.target.value)} /><br/>
     
      <button onClick={updateData}>Update</button> */}
    </>
  );
}

export default App;
