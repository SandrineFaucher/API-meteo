
let image = document.getElementById("image");
let temperature = document.getElementById("temperature");
let ressenti = document.getElementById("ressenti");
let ville = document.getElementById("ville");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
 
// Récupération du contenu du fichier config.json
fetch('conf.json')
  .then(response => response.json())
  .then(data => {
    // Une fois le fichier chargé, je peux accéder aux données
    const apiKey = data.apiKey;
    const city = data.city;

    // TEST de la récupération de la ville 
    console.log('Ville :', city);
  
    // j'effectue mon appel météo en utilisant mes données provenant du fichier conf.json
    const appelMeteo = async () => {

      //la requete API
      let request = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {
        let response = await fetch(request);
        if (response.ok) {
          let data = await response.json();

          // Mise à jour des éléments HTML avec les données
          image.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
          temperature.textContent = `${data.main.temp} °C`;
          ressenti.textContent = `Ressenti : ${data.main.feels_like} °C`;
          ville.textContent = data.name;
          humidity.textContent = `Humidité : ${data.main.humidity}%`;
          // je multiplie par 3.6 pour convertir les m/s en km/h (1 h = 3600 secondes)
          wind.textContent = `Vitesse du vent : ${data.wind.speed * 3.6} km/h`;

          //TEST de récupération des données en console de debogage
          console.log(data);
        } else {
          console.error('Erreur lors de la requête');
        }
      } catch (error) {
        console.error('Une erreur s\'est produite', error);
      } 
    }
  
    // Chargement de la récupération des données 
    appelMeteo()

    // mise à jour toutes les heures grace à setInterval 1h = 3600000 millisecondes
    setInterval(appelMeteo, 3600000);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération du fichier config.json :', error);
  });







