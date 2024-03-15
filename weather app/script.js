const accessKey = 'd0bff837f4b0860c413eba5614c7a079';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (loc) => `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${accessKey}`;

async function getWeatherByLoc(loc){
  const response = await fetch(url(loc));

  const respData = await response.json();

  addWeatherToPage(respData);
}
function addWeatherToPage(data){
  const temp = KtoC(data.main.temp);
  const weather = document.createElement('div');
  weather.classList.add('weather');

  weather.innerHTML = `<h2>${temp} degree celsius</h2> 
                       in <p>${search.value}</p>`;

  main.appendChild(weather);

}
function KtoC(tmp){
  return (tmp  - 273.15).toFixed(2);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const loc = search.value;
  if(loc){
    getWeatherByLoc(loc);
  }
})