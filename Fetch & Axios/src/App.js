import React, { useContext, useEffect } from 'react'
import AppNavbar from './components/AppNavbar'
import noteContext from './context/noteContext';
import AppCard from './components/AppCard';


export default function App() {
  let data = useContext(noteContext);
  console.log(data);

  useEffect(() => {
    data.getData()
  }, []);
  
  return (
    <>
    <AppNavbar/>
    <AppCard/>
    </>
  )
}
