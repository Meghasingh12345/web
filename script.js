const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const Weather_img = document.querySelector('.Weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');


async function cheakWeather(city){
	const api_key = "faf220a1f63f61214f77b4702f90e3ce";
	const url = 'https://api.openweathermap.org/data/2.5/weather?id={city}&appid=${api_key}';

	const weather_data = await fetch('${url}').then(response => response.json());
	console.log('weather_data');
}


searchBtn.addEventListener('click', ()=>{
	cheakWeather(inputBox.value);

});
