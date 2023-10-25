const currencyFirstEl = document.getElementById("Currency-first");
const worthFirstEl = document.getElementById("worth-first");

const CurrencySecondEl = document.getElementById("Currency-second");
const worthSecondEl = document.getElementById("worth-second");

const exchangRateEl = document.getElementById("exchang-rate");

updateRate()


function updateRate() {
  fetch(`https://v6.exchangerate-api.com/v6/f65bc36118ef61cdebb6e46c/latest/${currencyFirstEl.value}`)
  .then((res) => res.json())
  .then((data) => {
    const rate = data.conversion_rates[CurrencySecondEl.value];
    exchangRateEl.innerText = 
    `1 ${currencyFirstEl.value} = ${rate + " " + CurrencySecondEl.value
    }`;

    worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
  });
}

currencyFirstEl.addEventListener("change", updateRate);
CurrencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);
