import React from "react"
import "../App.css"
 const Followers =({avatar_url,html_url,login})=>{
     return(
         <article className="card">
             <img src={avatar_url} alt=""/>
             <h4>{login}</h4>
             <a href={html_url} className="btn">View Profile</a>
         </article>

     )
 }
 export default Followers;