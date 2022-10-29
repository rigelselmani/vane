import { projectFirestore } from "../../firebase/config"
import { useEffect, useState } from "react"

export default function Gallery(){
  const [data,setData]=useState(null)
  const [isPending, setIsPending]=useState(false)
  const [error, setError]=useState(false)

  useEffect(()=>{
     setIsPending(true)

     projectFirestore.collection("styles").get().then((snapshot)=>{
      if(snapshot.empty){
        setError("No data to load")
        setIsPending(false)
      }else{
        let results=[]
        snapshot.docs.forEach(doc=>{
          results.push({id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
     }).catch(err =>{
      setError(err.message)
      setIsPending(false)
     })

  },[])

    return(
    <div className="container">
    {error && <p styles={{marginTop:"150px"}}>{error}</p>}
    {isPending && <p styles={{marginTop:"150px"}}>Loading...</p>}
    <div className=" container row mt-5">
    {data && data.map((datas)=>{
      return (
           <div key={datas.id} className="card col-3">
             <img src={datas.img} className="card-img-top" alt="collection" />
             <div className="card-body">
               <h3>{datas.title}</h3>
               <p className="card-text">{datas.parag}</p>
             </div>
           </div>
          )
       })}
      </div>
    </div>    
    )
}