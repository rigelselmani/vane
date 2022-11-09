import { useState } from "react"
import { send } from "emailjs-com"

export default function ContactForm(){

    const [sender_name,set_sender_name]=useState("");
    const [sender_email,set_sender_email]=useState("");
    const [message,set_message]=useState("");

    function sendMail(e){
      e.preventDefault()
      send(
        "service_ym16l15",
        "template_oa2q5qp",
        {sender_name, sender_email, message},
        "cg_p1GRyMNmDPq4tH"
      ).then((response)=> {
        console.log("Message sent successfully", response.status,response.text)
      })
      .catch((err) =>{
        console.log("Failed", err)
      })
      set_sender_name("")
      set_sender_email("")
      set_message("")
    }

    return (
        <form className="col-lg-7 col-md-9 col-sm-11contact-form message mt-5 pt-5" onSubmit={sendMail} style={{martinTop:""}}>
          <h2>Contact Form</h2>
           <div className="input-group mb-3">
            <input name="sender_name" type="text" value={sender_name} onChange={(e)=>{ set_sender_name(e.target.value)}}className="form-control name" id="name" placeholder="Name" aria-label="Username" />
            <input email="sender_email" type="email"  value={sender_email} onChange={(e)=>{ set_sender_email(e.target.value)}} className="form-control email" id="email" placeholder="Email" aria-label="Server" />
          </div>
          <div className="mb-3">
            <textarea type="text" value={message} name="message" rows="5" onChange={(e)=>{ set_message(e.target.value)}} className=" form-control text-area" id="message" placeholder="Message" />
          </div>
          <button type="submit" className="btn ">Submit</button>
        </form>
    )
}