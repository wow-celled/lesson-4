// SPREAT-REST деструктуризация 

const weather = {
    name:"london",
    country: "GB",
    weather: [
        {
            temp: 287.34,
            humiditi: 67,
            main:'Clouds'
        }
    ],
    wind: {
        speed: "4.5"
    }
}


//DOM 
const h1 = document.getElementById('name')

//деструктуризация 

const {name, country, weather: we} = weather
const {temp} = we[0]

h1.innerText = Math.round(temp - 273) + ' °c' //kelvin -> celcius 

const numbers = [11, 22, 33, 44, 55, 66]
const [ num11, num22, num33, num44, num55, num66] = numbers

h1.innerHTML = num44 + num66

function useName(fName, lName){
    return [fName, lName]
}

const [ firstName, lastName] = useName('Asan', 'Asanov')
const [ firstName2, lastName2] = useName('Nusoiba', ' Abdraimova')


h1.innerHTML = firstName + lastName 
h1.innerHTML = firstName2 + lastName2 