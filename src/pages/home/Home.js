import Register from "./Register"

import "./Home.css"

export default  function Home (){
    return (  
        <div className="jumbo row mx-0 mt-5 ">
           <div className="jumbotron col-md-12 sm-mt-0 shadow-lg  pt-5 mb-5 bg-white rounded text-center text-white">
              <img src="http://images8.design-editor.com/92/9293685/3958/8781D98C-E7A0-8B28-BED4-86520B3C7B90.jpg" className="img-thumbnail d-none d-md-inline d-lg-inline card-img-top w-25" style={{height:"170px"}} alt=""/>
              <img src="https://img.grouponcdn.com/deal/4DpuND4oxQjsme5VLb9F6K/451835441-2048x1229/v1/t300x182.jpg" className="img-thumbnail d-none d-md-inline d-lg-inline card-img-top w-25" style={{height:"230px"}} alt="" />
              <img src="http://s24193.pcdn.co/wp-content/uploads/2017/08/nail-salons-near-me-ENTITY-Instagram-lipstickmixtapes-e1504122361297.png" className=" img-thumbnail d-none d-md-inline d-lg-inline card-img-top w-25" style={{height:"320px"}} alt=""/>
              <div className="title-name">
                <h1 className="display-4 font-weight-bold fs-2"><span className="text-danger">Pure</span> <span className="text-dark">Nail Tech</span></h1>
                <p className="lead display-4 fs-2">Professional Nail Art Tech</p>
                <a className="contact-icon text-white fs-2" style={{textDecoration:"none"}} href="tel:703-870-6927" rel="noopener noreferrer"><i className="fa-regular fa-phone"></i>703-870-6927</a>
                
              </div>
           </div>
           <div className=" row mb-4 ">
                <div className=" round-img col-lg-3  d-none d-md-block d-lg-block"></div>
                <div className="col-lg-2 d-none d-sm-none d-lg-block">
                  <img className=" card-img-top rounded-circle" src="https://tse2.mm.bing.net/th?id=OIP.bk83NuPnjJT96jhD_gDmJQHaLH&pid=Api&P=0&w=300&h=300" alt="" />
                </div>
                <div className="col-lg-2  d-none d-lg-block">  
                  <img  className=" card-img-top rounded-circle" src="https://tse3.mm.bing.net/th?id=OIP.W3r_SUK7ujIXc5KzlHo5eAHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                </div> 
                <div  className="col-lg-2   d-block">   
                  <img className=" card-img-top rounded-circle" src="https://stayglam.com/wp-content/uploads/2019/04/Beautiful-Embellished-Pink-Nails.jpg" alt="" />
                </div>
                <div className="col-lg-3 d-none d-lg-bock d-md-block"></div>
            </div>
            <Register />
        </div> 
     )
}
