//Api-key
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '6200b1727b6966e0b9ca680eb7f5e349';
let difKelvin = 273.15;

//Evento para el boton de busqueda
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
});

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    console.log(data);
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const nombreCiudad = data.name
    const temparatura = data.main.temp
    const descripcion = data.weather[0].description;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = nombreCiudad;

    const gradosTemperatura = document.createElement('span');
    gradosTemperatura.textContent = `La temperatura es: ${Math.floor(temparatura-difKelvin)}°C`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(gradosTemperatura);
    divDatosClima.appendChild(temperaturaInfo);

}

