export default function Map(){
    
  
    return (
        <div className="mapouter mt-5 ">
            <div className="gmap_canvas ">
                <iframe className="col-lg-9 col-md-9 "  height="300" id="gmap_canvas" title="map" src="https://maps.google.com/maps?q=Edwards%20ferry%20rd&t=&z=13&ie=UTF8&iwloc=&output=embed">
                </iframe>
            </div>
        </div>
    )
}