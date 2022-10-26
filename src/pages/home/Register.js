
export default function Register(){
    return(
        <div className="card-body mb-4">
            <form className="subscribe-form">
              <div className=" mx-3 form-group mx-auto">
                <label for="exampleInputEmail1">Subscribe to recieve cupons.</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="subscribe"    aria-describedby="emailHelp" placeholder="Enter your email address" />
              </div>
              <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
            </form>
        </div>
    )
}