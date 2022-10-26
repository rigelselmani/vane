export default  function Home (){
    return (  
        <div className="jumbo row">
           <div className="jumbotron col-md-12 shadow-lg p-5 mb-5 bg-white rounded text-center text-white" style={{marginTop:"90px",background: "linear-gradient(to bottom, #fff, #ed44c0) "}}>
              <img src="http://images8.design-editor.com/92/9293685/3958/8781D98C-E7A0-8B28-BED4-86520B3C7B90.jpg" className="img-thumbnail card-img-top w-25" style={{height:"190px"}} alt=""/>
              <img src="https://img.grouponcdn.com/deal/4DpuND4oxQjsme5VLb9F6K/451835441-2048x1229/v1/t300x182.jpg" className="img-thumbnail card-img-top w-25" style={{height:"250px"}} alt="" />
              <img src="http://s24193.pcdn.co/wp-content/uploads/2017/08/nail-salons-near-me-ENTITY-Instagram-lipstickmixtapes-e1504122361297.png" className=" img-thumbnail card-img-top w-25" style={{height:"340px"}} alt=""/>
              <div style={{fontStyle: "italic"}}>
                <h1 className="display-4 font-weight-bold"><span className="text-danger">Vanessa</span> <span class="text-dark">Nail Tech</span></h1>
                <p className="lead display-4 ">Professional Nail Art Tech</p>
                <a className="contact-icon text-white fs-3" style={{textDecoration:"none"}} href="tel:703-870-6927" rel="noopener noreferrer">703-870-6927</a>
                
              </div>
           </div>
           <div class="row mb-4 ml-4">
                <div class="col-md-3 "></div>
                <div class="col-md-2">
                  <img style={{height:"250px",width:"86%"}} className=" card-img-top d-none-sm rounded-circle" src="https://tse2.mm.bing.net/th?id=OIP.bk83NuPnjJT96jhD_gDmJQHaLH&pid=Api&P=0&w=300&h=300" alt="" />
                </div>
                <div class="col-md-2">  
                  <img style={{height:"250px",width:"86%"}} className=" card-img-top rounded-circle" src="https://tse3.mm.bing.net/th?id=OIP.W3r_SUK7ujIXc5KzlHo5eAHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                </div> 
                <div  class="col-md-2">   
                  <img style={{height:"250px",width:"86%"}} className=" card-img-top rounded-circle" src="https://stayglam.com/wp-content/uploads/2019/04/Beautiful-Embellished-Pink-Nails.jpg" alt="" />
                </div>
                <div className="col-md-3"></div>
            </div>
            <div class="row mb-4">
            <div class="col-md-5"></div>
            <form className="col-md-2 mt-4 ml-3" style={{color:"#ed44c0"}}>
              <div className=" mx-3form-group ">
                <label for="exampleInputEmail1">Subscribe to recieve cupons.</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="subscribe"    aria-describedby="emailHelp" placeholder="Enter your email address" />
              </div>
              <button type="submit" style={{background:"#ed44c0"}} className="btn btn-primary mt-2">Subscribe</button>
            </form>
            <div className="col-md-5"></div>
  </div>
        </div> 
     )
}
