export default function Map(){

    var myCenter=new google.maps.LatLng(latLng[0],latLng[1]);
    var marker=new google.maps.Marker({
        position:myCenter
    });
    console.log(myCenter, marker)
    return (
        <div>
        </div>
    )
}