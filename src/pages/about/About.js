import "./about.css"

export default function About (){
    return(
         <div>
           <div className=" container alert mt-5 p-5" role="alert">
              <div className="about-text p-4 text-start">
                <h1 className="display-4 font-weight-bold" style={{fontStyle:"italic"}}><span className="text-danger">Welcome to</span> <span className="text-dark">Vanessa Nail Spa</span></h1>
                <p>If you are seeking a nail salon where helps you to rejuvenate your beauty, Vanessa Nail Spa is the ideal destination! Located conveniently at 87 Edwards Ferry Rd NE Leesburg, VA 20176, our nail salon is proud to deliver the highest quality treatments to our customers.</p>
                <p>Our goal is to make your visit to our nail salon an experience, which enhances your life and wellbeing for years to come. We guaranteed that when you leave our nail salon, you will experience a feeling of renewed vitality. Most of all, you’ll be content. Whether you came in for a treatment, or just stopped by for a quick polish change on your toes, you’ll never get the sense that you overpaid. We know you work hard, and we want you to leave feeling rewarded and relaxed.</p>
                <p>We understand that Safety and Sanitation are key to your peace of mind. Our implements are medically sterilized and disinfected after each use. Buffers and files are used only once then discarded. All pedicure procedures are done with liner protection. And above all, staff are trained to follow a proper sanitization protocol that puts client's hygiene as the number one priority.</p>
                <p>Visit us today and experience the combination of luxury and elegance. Our nail salon looks forward to seeing you!</p>
              </div>
               <img className="about-img" src="https://manipedibeautyspasanfrancisco.com/uploads/fnail07ri1nsb/product/manipedi2.png" alt=""/>
           </div>
           <div className="about-appointment mt-0 ">
               <p className="app-p fs-3">Make an Appointment?</p>
               <a className="contact-icon fs-3" href="tel:703-870-6927" rel="noopener noreferrer">703-870-6927</a>
           </div>
         </div>
    )
}