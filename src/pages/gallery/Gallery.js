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
      <div className="container my-5" style={{height:"100%vh"}}>
            {error && <p styles={{marginTop:"150px"}}>{error}</p>}
            {isPending && <p styles={{marginTop:"150px"}}>Loading...</p>}
            <div className="row">
            {data && data.map((datas)=>{
              return (
                  <div key={datas.id} className="card col-lg-4 col-md-5 mx-auto" >
                       <div className="card-body">
                       <img src={datas.img} className="card-img-top" alt="collection" />
                         <h5 className="card-title">
                           <span className="col-6">{datas.title}</span>
                         </h5>
                         <p className="card-text ">
                           <span className=" col-4">{datas.description}</span><br/>
                         </p>
                       </div>
                  </div>
                  )
             })} 
        </div> 
      </div>   
    )
}