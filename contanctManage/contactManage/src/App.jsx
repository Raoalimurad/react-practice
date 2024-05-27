import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ContactForm from './Components/ContactForm'
import Contactlist from './Components/Contactlist'
import uuid4 from 'uuid4'

function App() {
 const localStorageKey= "contact"
  const [data, setData] = useState(()=>{
  return JSON.parse( localStorage.getItem(localStorageKey)) ||[]
  })
 const takeData = (add)=>{
    
     setData([...data,{id:uuid4(),add}]) 
 }
 const deleteContact = (id) => {
  const updatedData = data.filter((val) => val.id !== id);
  setData(updatedData);
  
};
useEffect(()=>{
  localStorage.setItem(localStorageKey,JSON.stringify(data))
},[data])
  return (
    <>
    <Header/>
     <ContactForm takeData={takeData}/>
     <Contactlist  data={data} deleteContacts={deleteContact} />
    </>
  )
}

export default App
