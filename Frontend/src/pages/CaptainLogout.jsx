import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(reponse=>{
        if(reponse.status === 200){
            localStorage.removeItem('token');
            navigate('/login')
        }
    })
  return (
    <div>
       Logout
    </div>
  )
}

export default CaptainLogout
