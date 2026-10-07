const currencykey = `9aa15bd9b2d970a5b3becd90`
const currencyurl = `https://v6.exchangerate-api.com/v6/${currencykey}/latest/USD`
console.log(currencyurl)
async function loadCurrency() {
  const response = await fetch(currencyurl);
  const data = await response.json();
  console.log(data);
  console.log(data.conversion_rates.EGP);
  const usd = document.querySelector("#usd-rate");
usd.textContent = data.conversion_rates.EGP;
const eur = document.querySelector("#eur-rate");
eur.textContent = data.conversion_rates.EUR;
const sar = document.querySelector("#sar-rate");
sar.textContent = data.conversion_rates.SAR;


}

loadCurrency();