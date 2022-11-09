import Hours from "./Hours"
import  Map  from "./Map"
import ContactForm from "./ContactForm"

import "./contact.css"

export default function Contact(){

    return (
    <div className="container justify-content-center d-sm-flex d-md-flex my-5" >
        <div className="row my-5">
            <ContactForm />
            <div className="col-lg-1 col-md-0 col-sm-0"></div>
            <Hours />
            <Map />
        </div>
    </div>    
    )
}