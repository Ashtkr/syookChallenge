import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from './Header'
import UserPoll from './UserPoll'
import axios from "axios";

const baseURL = 'https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json';

const Home = ({isSubmitted,setIsSubmitted}) => {
  const [dishData,setDishData] = useState([]);
  // const [loading,setLoading] = useState(false);

  useEffect(() => {
    fetchAPI();
  },[])

  const fetchAPI = async() => {
    try{
      const res = await axios.get(baseURL);
      const fetchedData = await res.data;
      setDishData(fetchedData);
      return dishData;
    }catch(e){
      if(e.response && e.response.status === 400){
        console.log(e.response.data)
      }else{
        console.log('Something wrong happend')
      }
      return null;
    }
  }

  return (
    <div>
      <Header isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
      <UserPoll dishData={dishData}/>
    </div>
  )
}

export default Home