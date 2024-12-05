import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/userContext';
import axios from 'axios';

const UserProtextWrapper = ({children}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const {user , setUser}=useContext(UserDataContext);

    const [isloading , setIsLoading] = useState(true);

    useEffect(()=>{
        if(!token){
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(response=>{
            if(response.status === 200){
               setUser(response.data);
               setIsLoading(false)
            }
        }).catch(err=>{
            console.log(err);
            localStorage.removeItem('token');
            navigate('/login')
        })
    } , [token]);

    if(isloading){
        return (
            <div>
               Loading
            </div>
        )
    }
    console.log('tokenn' , token)
  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtextWrapper
