const weatherkey = `240481d807e0484dae0130212262909`
const weatherurl = ` https://api.weatherapi.com/v1/current.json?key=${weatherkey}&q=Paris`
console.log(weatherurl)
async function loadwheather() {
    const response = await fetch(weatherurl)
    const data =  await response.json()
    console.log(data.current.temp_c)
    const weather = document.querySelector(`#weather`)
    weather.textContent = (data.current.temp_c)+ "°"
    console.log(data.current.condition.icon)
    const icon = document.querySelector("#weather-icon");
icon.src = "https:" + data.current.condition.icon

    
}
loadwheather()