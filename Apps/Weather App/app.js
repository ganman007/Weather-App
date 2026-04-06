//WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "c56be259127d5e94fab8b5d85c72d71e";


weatherForm.addEventListener("submit",async event => {

    event.preventDefault();

    const city = cityinput.value;

    if(city){
        try{
            const weatherData = await getWetherData(city);
            displayWeatherInfo(weatherData);

        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please Enter a City");
    }

});

async function getWetherData(city) {
    
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const response = await fetch(apiurl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();

}

function displayWeatherInfo(data){
    const {name: city, 
        main: {temp, humidity}, 
        weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const citydisplay = document.createElement("h1");
    const tempdisplay = document.createElement("p");
    const humiditydisplay = document.createElement("p");
    const diskdisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");


    citydisplay.textContent = city;
    tempdisplay.textContent = `${((temp - 273.15)*(9/5)+32).toFixed(1)}*F`;
    humiditydisplay.textContent = `Humidity:${humidity}%`;
    diskdisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    citydisplay.classList.add("citydisplay");
    tempdisplay.classList.add("tempdisplay");
    humiditydisplay.classList.add("humiditydisplay");
    diskdisplay.classList.add("descriptiondisplay");
    weatherEmoji.classList.add("WeatherEmoji");


    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiditydisplay);
    card.appendChild(diskdisplay);
    card.appendChild(weatherEmoji);
}
function getWeatherEmoji(weatherid){

    switch(true){
        case(weatherid >= 200 && weatherid < 300):
            return "⛈️";
        case(weatherid >= 300 && weatherid < 400):
            return "🌧️";
        case(weatherid >= 500 && weatherid < 600):
            return "🌧️";
        case(weatherid >= 600 && weatherid < 700):
            return "❄️";
        case(weatherid >= 700 && weatherid < 800):
            return "🌫️";
        case(weatherid === 800):
            return "☀️";
        case(weatherid >= 801 && weatherid < 810):
            return "⛅";
        default:
            return "?";
    }

}

function displayError(message){
    const errordisplay = document.createElement("p");
    errordisplay.textContent = message;
    errordisplay.classList.add("errordisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errordisplay);
}