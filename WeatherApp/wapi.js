window.addEventListener("load", () =>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat =  position.coords.latitude;
            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=51dad736e156096fd02f50de06220727`;
            fetch(api)
            .then((response) =>{
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
        })
       
    }
} )