import "./contact.css"

export default function Contact(){
    return (
    <div className="container" style={{marginTop:"140px", height:"700px"}}>
    <div className="col-3 mt-5"></div>
       <form className="col-6 contact-form my-5 pt-5" style={{martinTop:""}}>
       <h2>Contact Form</h2>
           <div className="input-group mb-3">
            <input type="text" className="form-control name" placeholder="Name" aria-label="Username" />
            <input type="email" className="form-control email" placeholder="Email" aria-label="Server" />
          </div>
          <div className="mb-3">
            <textarea type="text" rows="5" className=" form-control text-area" id="exampleInputPassword1" placeholder="Message" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="col-3 mb-5"></div>
    </div>    
    )
}