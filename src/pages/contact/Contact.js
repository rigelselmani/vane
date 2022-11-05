import Hours from "./Hours"
import  Map  from "./Map"
import ContactForm from "./ContactForm"

import "./contact.css"

export default function Contact(){

    return (
    <div className="container my-5" >
        <div className="row my-5">
            <ContactForm />
            <div className="col-1"></div>
            <Hours />
            <Map />
        </div>
    </div>    
    )
}