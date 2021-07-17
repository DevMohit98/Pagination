import  { useEffect, useState } from "react"
import Paginate from "./Utils";
 const UseFetch=()=>{
    const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'
    const [loading,setloading]=useState(true);
    const [data,setdata]=useState([]);
    const getData =async()=>{
        const response =await fetch(url);
        const Data=await response.json();
        
setdata(Paginate(Data));
setloading(false);
        
    }
    useEffect(()=>{
        getData();
    },[])
    return{loading,data};
 }
 export default UseFetch;