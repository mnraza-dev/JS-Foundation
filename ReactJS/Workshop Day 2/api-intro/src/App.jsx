import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [userDetails, setUserDetails] = useState(null);

  const user = async () => {
    try {
      const userDetail = await axios.get('https://randomuser.me/api/');
      setUserDetails(userDetail.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleSpacebarPress = (e) => {
      if (e.key === " ") {
        user();  
      }
    };

    window.addEventListener('keydown', handleSpacebarPress);

    return () => {
      window.removeEventListener('keydown', handleSpacebarPress);
    };
  }, []); 

  useEffect(() => {
    user(); 
  }, []); 

  return (
    <div className='user_Wrapper'>
      <h1>User Details</h1>
      <div className='user'>
        {userDetails && (
          <>
            <img src={userDetails.picture.large} alt="User" width={300} style={{
              objectFit: 'contain',
              borderRadius: '12px'
            }} />
            <p>{userDetails.name.first} {userDetails.name.last}</p>
            <p>Email: {userDetails.email}</p>
            <p>Phone: {userDetails.phone}</p>
            <p>City: {userDetails.location.city}</p>
            <p>Country: {userDetails.location.country}</p>
            <p>Timezone: {userDetails.location.timezone.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
