async function fetchData(city){
    let unit = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=88cb114489918da586e2a29c8a468d4f&units=${unit}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error.message);
    }
      
      
}
async function insertData(city){
    let unit = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
    let chr;
    // console.log(unit);
    if(unit == 'metric'){
        chr = '°C';
    }else{
        chr = '°F'
    }
    if(document.getElementById("city").value){
        city = document.getElementById("city").value;
    }
    let data = await fetchData(city);
    // console.log(data);
    let myDev = document.getElementById("dataPlace");
    document.getElementById("cityTitle").innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("temp").innerText = `${data.main.temp}${chr}`;
    document.getElementById("feels").innerText = `${data.main.feels_like}${chr}`;
    document.getElementById("max").innerText = `${data.main.temp_max}${chr}`;
    document.getElementById("min").innerText = `${data.main.temp_min}${chr}`;

}
