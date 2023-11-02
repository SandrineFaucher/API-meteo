let image = document.getElementById("image");
let temperature = document.getElementById("temperature");
let ville = document.getElementById("ville");
let ressenti = document.getElementById("ville");
let humidity = document.getElementById("humidity");


const appelMeteo = async () => {
    let request = "https://api.openweathermap.org/data/2.5/weather?lat=48.85&lon=2.32&units=metric&appid=";
  
    try {
      let response = await fetch(request);
      if (response.ok) {
        let data = await response.json();

        // Mise à jour des éléments HTML avec les données
      image.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      temperature.textContent = `${data.main.temp} °C`;
      ville.textContent = data.name;
      ressenti.textContent = `${data.main.feels_like} °C`;
      humidity.textContent = `${data.main.humidity}%`;
        console.log(data);

        
      } else {
        console.error('Erreur lors de la requête');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite', error);
    }
    image.src = 
    temperature.textContent = data.main.name;
  }
  appelMeteo()
  
  
  
  
  