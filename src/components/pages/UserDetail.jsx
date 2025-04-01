import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const[userData,setuserData]=useState({})
 const {id}=useParams()
 console.log(id)
 
  const fetchData = (id) => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        // setData(data.data);
        setuserData(data.data)
      });
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);
console.log(userData)
  return (
    <div>
      <h1>Users Details</h1>

      <div  className=' border-2 border-solid m-4'>
            <h1>{userData.first_name}</h1>
            <img src={userData.avatar} alt="" className='m-auto'/>
            <h3>{userData.email}</h3>
            </div> 
    </div>
  );
};

export default UserDetail;
