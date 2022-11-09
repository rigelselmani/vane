import { projectFirestore } from "../../firebase/config";
import { useState } from "react";

import "./Home.css"

export default function Register(){

    const [subscribe,setSubscribe]=useState("");

    const handleSubmit = async (e) =>{
      e.preventDefault();

      try {
        await projectFirestore.collection("subscriptions").add({subscribe}) 
      }catch(err){
          console.log(err)
      }
      console.log(subscribe)
      setSubscribe("")
    } 
    return(
        <div className="card-body mb-4">
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <div className="  form-group mx-auto">
                <label htmlFor="exampleInputEmail1">Subscribe to recieve cupons.</label>
                <input onChange={((e)=>setSubscribe(e.target.value))} value={subscribe} type="email" className="form-control" id="exampleInputEmail1" name="subscribe"    aria-describedby="emailHelp" placeholder="Enter your email address" />
              </div>
              <button type="submit" className="btn mt-2">Subscribe</button>
            </form>
        </div>
    )
}