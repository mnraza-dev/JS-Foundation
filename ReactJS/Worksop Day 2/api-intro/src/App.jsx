import React, { useEffect, useState } from 'react'

const App = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
   try {
    const userDetail = axios.get('https://randomuser.me/api/');
    
   } catch (error) {
    console.log(error);
    
   } 
  },[])
  return (
    <div>App</div>
  )
}

export default App