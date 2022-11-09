export default function Map(){
    
  
    return (
        <div className="mapouter mt-5 ">
            <div className="gmap_canvas ">
                <iframe className="col-lg-9 col-md-9 "  height="300" id="gmap_canvas" title="map" src="https://maps.google.com/maps?q=807%20Edwards%20Ferry%20Rd%20NE&t=&z=13&ie=UTF8&iwloc=&output=embed">
                </iframe>
            </div>
            <p className="fs-3 text">807 Edwards Ferry Rd NE Leesburg, VA, 20176</p>
        </div>
    )
}