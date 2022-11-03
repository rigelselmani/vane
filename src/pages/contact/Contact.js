import "./contact.css"

export default function Contact(){
    return (
    <div className="container" style={{marginTop:"145px", height:"800px"}}>
       <div className="col-1"></div>
       <form className="col-6 contact-form message my-5 pt-5" style={{martinTop:""}}>
       <h2>Contact Form</h2>
           <div className="input-group mb-3">
            <input type="text" className="form-control name" placeholder="Name" aria-label="Username" />
            <input type="email" className="form-control email" placeholder="Email" aria-label="Server" />
          </div>
          <div className="mb-3">
            <textarea type="text" rows="5" className=" form-control text-area" id="exampleInputPassword1" placeholder="Message" />
          </div>
          <button type="submit" className="btn ">Submit</button>
        </form>
        <div className="col-1"></div>
        <ul className="list-group col-3 my-5 pt-5">
        <h3>Hours</h3>
          <li className="list-group-item"><span className="days-open">Mon </span> 9:00 am - 7:00 pm</li>
          <li className="list-group-item"><span className="days-open">Tue </span> 9:00 am - 7:00 pm</li>
          <li className="list-group-item"><span className="days-open">Wed </span> 9:00 am - 7:00 pm</li>
          <li className="list-group-item"><span className="days-open">Thu </span> 9:00 am - 7:00 pm</li>
          <li className="list-group-item"><span className="days-open">Fri </span> 9:00 am - 7:00 pm</li>
          <li className="list-group-item"><span className="days-open">Sat </span> 8:00 am - 8:30 pm</li>
          <li className="list-group-item"><span className="days-open">Sun </span> 8:00 am - 5:00 pm</li>
        </ul>
        <div className="col-1"></div>
    </div>    
    )
}