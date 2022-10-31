
export default function Contact(){
    return (
    <div className="container" style={{marginTop:"140px", height:"700px"}}>
    <div className="col-4 mt-5"></div>
       <form className="col-5 contact-form my-5 pt-5" style={{martinTop:""}}>
          <div className="mb-3 mt-5">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="col-4 mb-5"></div>
    </div>    
    )
}