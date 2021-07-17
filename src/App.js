import React, { useEffect, useState } from "react"
import UseFetch from "./Component/UseFetch"
import Followers from "./Component/Followers"
import "./App.css"
const App=()=>{
  const {loading,data}=UseFetch();
  const [page,setPage]=useState(0);
  const [follower,setfollowers]=useState([]);
  useEffect(()=>{
    if(loading)
     return
    setfollowers(data[page]);
  },[loading,page])
  const handlePage=(index)=>{
    setPage(index)

  }
  const prevPage=()=>{
    setPage((oldPage)=>{
      let PrevPage=oldPage-1;
      if(PrevPage<0)
      {
        PrevPage=data.length-1;
      }
      return PrevPage;
    })
  }
  const nextPage=()=>{
    setPage((oldPage)=>{
      let NextPage=oldPage+1;
      if(NextPage>data.length-1)
      {
        NextPage=0;
      }
      return NextPage;
    })
  }
  return(
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading...":"Pagination"}</h1>
      </div>
      <section className="followers">
        <div className="container">
          {follower.map((items)=>{
            return <Followers key={items.id}{...items}/>
          })
          }
        </div>
        {!loading && (<div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>Prev </button>
          {data.map((item,index)=>{
            return<button className={`page-btn ${index===page ? "active-btn":null}`} key={index} onClick={()=>{handlePage(index)}}>
              {index+1}
              </button>
          })
        }
        <button className="next-btn" onClick={nextPage}>Next
          </button>
        </div>
        )}
        
      </section>
  
    </main>
  )
}
export default App