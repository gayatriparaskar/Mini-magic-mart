import React, { useEffect, useState } from "react";
import logo from "../../components/logo.jpg"; // Adjust the path based on your folder structure
import { Link } from "react-router-dom";

const Home = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
                fetch(`https://mini-magic-mart-backend.vercel.app/api/vegetable/getVegetabls`)
                .then((res)=>res.json())
                .then((data)=>{
                    console.log(data.data)
                    setData(data.data)
                })
                .catch((error)=>{
                  console.log("Vegetable not found")
                })
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
            <div className="text-left bg-red-50 flex items-left ">
            <img src={logo} alt="Website Logo" className=" mx-5 w-20 h-20 p-1" />
            <h3 className="m-5 font-sans-serif">Welcome to Mini Magic mart</h3>
            </div>
            <h1 className='font-bold'>Users</h1>
            {
        data.map((e)=>(
           <div  key={e.id} className=' border-2 border-solid m-4'>
            <h4>{e.id}</h4>
            <h1>{e.first_name}</h1>
            <img src={e.avatar} alt="" className='m-auto'/>
            <h3>{e.email}</h3>
            <Link to={`/User/${e.id}`}>More information</Link>
            </div> 
        ))
       }
     </div>
  )
}

export default Home;
