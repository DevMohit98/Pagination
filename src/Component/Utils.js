const Paginate =(followers)=>{
  const ItemPerPage=9;
  const Pages=Math.ceil(followers.length/ItemPerPage);
  const newArray=Array.from({length:Pages},(_,index)=>{
      const start=index*ItemPerPage;
      return followers.slice(start,start+ItemPerPage);
    
  })
  console.log(newArray)
  return newArray;
}
export default Paginate;