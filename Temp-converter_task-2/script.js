/*document.addEventListener("DOMContentLoaded", function () {
    const celsius = document.getElementById('celsius');
    const fahrenheit = document.getElementById('fahrenheit');
    const kelvin = document.getElementById('kelvin');

    function updateTemperatures(input, output1, output2, formula) {
        const inputValue = parseFloat(input.value);
        const result1 = formula(inputValue);
        let result2;

        if (output1 === fahrenheit) {
            result2 = (result1 * 9/5) + 32;
        } else if (output1 === kelvin) {
            result2 = result1 + 273.15;
        } else {
            result2 = result1;
        }

        output1.value = parseFloat(result1.toFixed(2));
        output2.value = parseFloat(result2.toFixed(2));
    }

    celsius.addEventListener("input", function () {
        updateTemperatures(celsius, fahrenheit, kelvin, (c) => c * 1.8 + 32);
    });

    fahrenheit.addEventListener("input", function () {
        updateTemperatures(fahrenheit, celsius, kelvin, (f) => (f - 32) / 1.8);
    });

    kelvin.addEventListener("input", function () {
        updateTemperatures(kelvin, celsius, fahrenheit, (k) => k - 273.15);
    });
});*/

/*let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

/* celcius to fahrenheit and kelvin*/
/*
celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp *(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

/* fahrenheit to celcius and kelvin*/
/*
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) *(5/9)
    let kTemp = (fTemp - 32) *(5/9) + 273.15

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

/* kelvin to fahrenheit and Celcius*/
/*
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15 
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})

btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
}) */

const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});

function convertToCelsius() {
  let inputValue = degree.value;

if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
  } else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
  }
}