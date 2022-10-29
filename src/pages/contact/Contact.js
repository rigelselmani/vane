
export default function Contact(){
    return (
    <div className="container my-5" style={{height:"100%"}}>
    <div className="col-2"></div>
       <form className="col-6 contact-form mt-5">
          <div className="mb-3">
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
        <div className="col-2"></div>
    </div>    
    )
}